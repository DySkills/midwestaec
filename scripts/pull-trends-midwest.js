// pull-trends-midwest.js
// The once-a-year Google Trends pull for planning. For every topic in data/seeds.txt it
// pulls 5 years of weekly search interest in each of the 12 Midwest states, combines them
// into one Midwest curve, and collects related searches to find topics we are missing.
//
// Run from the Midwest folder (or pick 7 in pull-data.bat):
//   node scripts/pull-trends-midwest.js
// Options:
//   --years=5        years of history (5 is the most Google gives weekly)
//   --fresh          ignore saved results and pull everything again
//
// Runs everything in one go, slowly: round 1 pulls your seeds, then it adds the missing
// topics it found (related searches) to seeds.txt and pulls those, up to 3 rounds.
// Expect 4 to 6 hours. Leave it running (overnight is fine). It saves each result as it goes
// (data/trends_cache/), so if it stops, run it again and it continues where it left off.
//
// Output (also saved as a dated copy in data/snapshots/<date>/):
//   data/latest/trends_midwest_weekly.csv  topic, week, Midwest score, states used, source
//   data/latest/trends_state_weekly.csv    topic, state, week, score (raw, per state)
//   data/latest/trends_related.csv         related top and rising searches per topic
//   data/latest/trends_new_topics.csv      related searches NOT in seeds.txt (missing topics)
//   data/latest/manifest_trends_midwest.json
//
// How the Midwest curve is made: each state's curve is scored 0-100 against its own peak.
// States where the topic is too thin (mostly zero weeks) are left out. The rest are averaged.
// If fewer than 3 states have usable data, the topic is marked "too-thin" (too few Midwest
// searches to plan around). Only the 12 Midwest states are requested, nothing national.

const fs = require('fs');
const path = require('path');
const lib = require('./lib-data');

const STATES = ['US-MN', 'US-WI', 'US-IA', 'US-IL', 'US-MI', 'US-IN', 'US-OH', 'US-MO', 'US-ND', 'US-SD', 'US-NE', 'US-KS'];
const MIN_STATES = 3;
const PAUSE_MS = 6000; // a polite pace: one request every 6+ seconds, never faster
const MAX_ROUNDS = 3; // round 1 = seeds, rounds 2-3 = missing topics it found
const MAX_NEW_PER_ROUND = 60;
const CACHE_DAYS = 45;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function loadSeeds() {
  const file = path.join(lib.ROOT, 'data', 'seeds.txt');
  return fs
    .readFileSync(file, 'utf8')
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'));
}

function cachePath(kind, geo, topic) {
  return path.join(lib.ROOT, 'data', 'trends_cache', kind, geo, slug(topic) + '.json');
}

function readCache(file, fresh) {
  if (fresh || !fs.existsSync(file)) return null;
  const age = (Date.now() - fs.statSync(file).mtimeMs) / 86400000;
  if (age > CACHE_DAYS) return null;
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    return null;
  }
}

function writeCache(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(data), 'utf8');
}

// Retries with growing waits. After a long run of failures it waits longer (Google is
// rate-limiting), then gives up on that one request so the run keeps going.
let failStreak = 0;
async function call(fn) {
  const waits = [0, 8000, 30000, 90000];
  let lastErr;
  for (const w of waits) {
    if (w) await sleep(w);
    try {
      const out = await fn();
      if (typeof out === 'string' && out.trim().startsWith('<')) throw new Error('Google returned a page instead of data (rate limit)');
      failStreak = 0;
      return out;
    } catch (e) {
      lastErr = e;
    }
  }
  failStreak++;
  if (failStreak >= 5) {
    console.log('  Google is limiting requests. Pausing 10 minutes, then continuing...');
    await sleep(600000);
    failStreak = 0;
  }
  throw lastErr;
}

async function getSeries(gt, topic, geo, startTime, endTime, fresh) {
  const file = cachePath('weekly', geo, topic);
  const cached = readCache(file, fresh);
  if (cached) return { points: cached, fromCache: true };
  const raw = await call(() => gt.interestOverTime({ keyword: topic, geo, startTime, endTime }));
  const timeline = JSON.parse(raw).default.timelineData || [];
  const points = timeline.map((t) => [lib.iso(new Date(Number(t.time) * 1000)), Number(t.value[0])]);
  writeCache(file, points);
  return { points, fromCache: false };
}

async function getRelated(gt, topic, geo, startTime, endTime, fresh) {
  const file = cachePath('related', geo, topic);
  const cached = readCache(file, fresh);
  if (cached) return { rows: cached, fromCache: true };
  const raw = await call(() => gt.relatedQueries({ keyword: topic, geo, startTime, endTime }));
  const lists = JSON.parse(raw).default.rankedList || [];
  const rows = [];
  [['top', lists[0]], ['rising', lists[1]]].forEach(([kind, list]) =>
    ((list && list.rankedKeyword) || []).forEach((k) => rows.push({ kind, query: k.query, value: k.value, label: k.formattedValue }))
  );
  writeCache(file, rows);
  return { rows, fromCache: false };
}

function usable(points) {
  if (!points || points.length < 52) return false;
  const nonzero = points.filter((p) => p[1] > 0).length;
  return nonzero / points.length >= 0.5;
}

function combine(byState) {
  const good = Object.entries(byState).filter(([, pts]) => usable(pts));
  if (good.length < MIN_STATES) return null;
  const weeks = new Map();
  good.forEach(([, pts]) =>
    pts.forEach(([w, v]) => {
      const e = weeks.get(w) || [0, 0];
      e[0] += v;
      e[1] += 1;
      weeks.set(w, e);
    })
  );
  const rows = Array.from(weeks.entries())
    .sort((a, b) => (a[0] < b[0] ? -1 : 1))
    .map(([w, [s, n]]) => [w, s / n]);
  const max = Math.max(...rows.map((r) => r[1])) || 1;
  return { rows: rows.map(([w, v]) => [w, Math.round((v / max) * 100)]), states: good.map(([g]) => g.replace('US-', '')) };
}

// A related search counts as a likely missing topic if it shows up under 2+ topics,
// or is a rising/Breakout search, and is not a brand, a "near me" search, or a single word.
function pickNew(newTopics) {
  const skip = /near me|\bcost near\b|home depot|lowes|menards|amazon|reddit|youtube|walmart|costco/i;
  return newTopics
    .filter((t) => t.query.split(' ').length >= 2 && !skip.test(t.query))
    .filter((t) => t.found_under_count >= 2 || t.best_label === 'Breakout' || t.rising > 0)
    .slice(0, MAX_NEW_PER_ROUND)
    .map((t) => t.query);
}

function appendSeeds(list, round) {
  const file = path.join(lib.ROOT, 'data', 'seeds.txt');
  fs.appendFileSync(file, `\n# added automatically, round ${round} (from related searches)\n` + list.join('\n') + '\n', 'utf8');
}

// Related searches come from the one Midwest state with the most data for that topic,
// so it costs one request per topic instead of twelve.
function bestState(byState) {
  let best = 'US-IL';
  let most = -1;
  for (const [g, pts] of Object.entries(byState)) {
    const n = (pts || []).filter((p) => p[1] > 0).length;
    if (n > most) {
      most = n;
      best = g;
    }
  }
  return best;
}

async function main() {
  for (let round = 1; round <= MAX_ROUNDS; round++) {
    console.log(`\n================ Round ${round} of up to ${MAX_ROUNDS} ================`);
    const found = await runRound(round);
    if (round === MAX_ROUNDS) break;
    if (!found.length) {
      console.log('No new topics found. Finished.');
      break;
    }
    appendSeeds(found, round + 1);
    console.log(`Added ${found.length} missing topics to data\\seeds.txt. Pulling them next.`);
  }
  console.log('\nAll rounds done. Tell Claude the Trends pull finished.');
}

async function runRound(round) {
  const gt = require('google-trends-api');
  const years = Math.min(5, Number(lib.getArg('years', 5)) || 5);
  const fresh = lib.hasFlag('fresh') && round === 1;
  const seeds = loadSeeds();
  const dirs = lib.outDirs();
  const today = new Date();
  const startTime = new Date(today.getTime() - years * 365 * 86400000);
  const relatedStart = new Date(today.getTime() - 365 * 86400000);

  const total = seeds.length * (STATES.length + 1);
  console.log(`Google Trends, Midwest: ${seeds.length} topics x ${STATES.length} states, ${years} years`);
  console.log(`About ${Math.round((total * 8) / 60)} minutes if nothing is saved yet. Safe to stop and re-run.\n`);

  const stateRows = [];
  const mwRows = [];
  const relatedRows = [];
  const errors = [];
  const summary = [];
  const t0 = Date.now();

  for (let i = 0; i < seeds.length; i++) {
    const topic = seeds[i];
    const byState = {};
    for (const geo of STATES) {
      try {
        const { points, fromCache } = await getSeries(gt, topic, geo, startTime, today, fresh);
        byState[geo] = points;
        points.forEach(([w, v]) => stateRows.push({ topic, geo, week: w, score: v }));
        if (!fromCache) await sleep(PAUSE_MS);
      } catch (e) {
        errors.push(`${topic} / ${geo}: ${String(e.message).slice(0, 100)}`);
      }
    }

    const mw = combine(byState);
    let source = 'midwest';
    let rows;
    let statesUsed = '';
    if (mw) {
      rows = mw.rows;
      statesUsed = mw.states.join(' ');
    } else {
      source = 'too-thin';
      rows = [];
    }
    rows.forEach(([w, v]) => mwRows.push({ topic, week: w, score: v, states_used: statesUsed, source }));

    try {
      const { rows: rel, fromCache } = await getRelated(gt, topic, bestState(byState), relatedStart, today, fresh);
      rel.forEach((r) => relatedRows.push({ topic, ...r }));
      if (!fromCache) await sleep(PAUSE_MS);
    } catch (e) {
      errors.push(`${topic} / related: ${String(e.message).slice(0, 100)}`);
    }

    summary.push({ topic, source, states: statesUsed ? statesUsed.split(' ').length : 0 });
    const mins = ((Date.now() - t0) / 60000).toFixed(0);
    console.log(`[${String(i + 1).padStart(3)}/${seeds.length}] ${topic.padEnd(38)} ${source.padEnd(12)} ${statesUsed}  (${mins} min)`);
  }

  // Related searches that are not already topics = candidates for missing topics
  const known = new Set(seeds.map((s) => s.toLowerCase()));
  const cand = new Map();
  relatedRows.forEach((r) => {
    const q = String(r.query).toLowerCase().trim();
    if (!q || known.has(q)) return;
    const c = cand.get(q) || { query: q, found_under: new Set(), rising: 0, top: 0, best_label: '' };
    c.found_under.add(r.topic);
    if (r.kind === 'rising') c.rising++;
    else c.top++;
    if (r.label && (r.label === 'Breakout' || !c.best_label)) c.best_label = r.label;
    cand.set(q, c);
  });
  const newTopics = Array.from(cand.values())
    .map((c) => ({ query: c.query, found_under_count: c.found_under.size, found_under: Array.from(c.found_under).join('; '), rising: c.rising, top: c.top, best_label: c.best_label }))
    .sort((a, b) => b.found_under_count - a.found_under_count || b.rising - a.rising);

  lib.writeAll(dirs, 'trends_midwest_weekly.csv', lib.toCsv(mwRows, ['topic', 'week', 'score', 'states_used', 'source']));
  lib.writeAll(dirs, 'trends_state_weekly.csv', lib.toCsv(stateRows, ['topic', 'geo', 'week', 'score']));
  lib.writeAll(dirs, 'trends_related.csv', lib.toCsv(relatedRows, ['topic', 'kind', 'query', 'value', 'label']));
  lib.writeAll(dirs, 'trends_new_topics.csv', lib.toCsv(newTopics, ['query', 'found_under_count', 'found_under', 'rising', 'top', 'best_label']));
  lib.writeAll(
    dirs,
    'manifest_trends_midwest.json',
    JSON.stringify({ generatedAt: new Date().toISOString(), years, states: STATES, topics: seeds.length, summary, errors }, null, 2)
  );

  const count = (s) => summary.filter((x) => x.source === s).length;
  console.log(`\nDone. Midwest curve: ${count('midwest')}   Too thin: ${count('too-thin')}`);
  console.log(`Possible missing topics found: ${newTopics.length} (data\\latest\\trends_new_topics.csv)`);
  console.log(`Saved to data\\latest and ${dirs[0]}`);
  if (errors.length) console.log(`${errors.length} requests failed. Run again to retry just those.`);
  return pickNew(newTopics);
}

main();
