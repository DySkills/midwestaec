// pull-trends.js
// Uses Google Trends to find WHEN each topic gets searched, so articles can be published
// early enough (default: 60 days before the season starts) to be ranking on page 1 in time.
//
// Run from the Midwest folder:
//   node scripts/pull-trends.js
// Options:
//   --geo=US          US or a state, like US-MN or US-MO
//   --years=3         how many years of history to use (more years = a more reliable season)
//   --lead=60         days of indexing lead time before the season starts
//   --no-related      skip the rising/top related queries (faster)
//
// Topics come from data/seeds.txt (one per line). The file is created the first time with a
// starter list. Edit it freely. Lines starting with # are ignored.
//
// Output (also saved as a dated copy in data/snapshots/<date>/):
//   data/latest/trends_seasonality.csv   peak season, publish-by date, status per topic
//   data/latest/trends_weekly.csv        weekly interest per topic (for charts)
//   data/latest/trends_related.csv       rising and top related queries per topic
//
// Notes: Google Trends scores each topic 0-100 against its OWN peak, so topics cannot be
// compared with each other for volume. Use Keyword Planner for volume. This uses an
// unofficial Trends package and can be rate-limited; the script retries and keeps going.

const fs = require('fs');
const path = require('path');
const lib = require('./lib-data');

const DEFAULT_SEEDS = [
  'furnace not heating',
  'furnace short cycling',
  'furnace pressure switch',
  'heat pump aux heat',
  'mini split freezing up',
  'frozen pipes',
  'frozen well pump',
  'tankless water heater freezing',
  'ice dam',
  'attic condensation',
  'bathroom fan condensation',
  'metal roof condensation',
  'window condensation',
  'foam insulation attic',
  'sump pump not working',
  'sump pump frozen discharge',
  'basement leak',
  'basement water after rain',
  'foundation crack',
  'bowed basement wall',
  'egress window',
  'sewer backup',
  'crawl space mold',
  'radon mitigation',
  'rim joist insulation',
  'dehumidifier basement',
  'whole house dehumidifier',
  'erv vs hrv',
  'flat roof ponding',
  'vinyl siding buckling',
  'tuckpointing brick',
  'polyjacking concrete',
  'termite sill plate',
  'retaining wall drainage',
  'thermal imaging drafts',
  'pole barn insulation',
  'radiator bleeding',
  'standby generator sizing',
  'in floor radiant heat',
  'garage ceiling insulation',
];

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function weekOfYear(d) {
  const start = Date.UTC(d.getUTCFullYear(), 0, 1);
  const doy = Math.floor((d.getTime() - start) / 86400000);
  return Math.min(51, Math.floor(doy / 7));
}

// points: [{date: Date, value: number}], today: Date
function seasonality(points, today, leadDays) {
  if (!points.length) return null;
  const sums = Array(52).fill(0);
  const cnt = Array(52).fill(0);
  points.forEach((p) => {
    const w = weekOfYear(p.date);
    sums[w] += p.value;
    cnt[w] += 1;
  });
  const avg = sums.map((s, i) => (cnt[i] ? s / cnt[i] : 0));
  const sm = avg.map((_, i) => (avg[(i + 51) % 52] + avg[i] + avg[(i + 1) % 52]) / 3);
  const max = Math.max(...sm);
  if (max <= 0) return null;

  const peak = sm.indexOf(max);
  const thr = 0.6 * max;

  // Searched about equally all year (no real season)
  if (sm.filter((v) => v >= thr).length >= 40) {
    const flatMean = Math.round(avg.reduce((a, b) => a + b, 0) / 52);
    return {
      peak_week_of_year: peak + 1,
      peak_score: Math.round(max),
      season_start: '',
      season_end: '',
      season_weeks: 52,
      publish_by: '',
      days_until_publish_by: '',
      last_4wk_avg: flatMean,
      yoy_change_pct: '',
      status: 'YEAR-ROUND',
    };
  }

  let s = peak;
  let e = peak;
  let guard = 0;
  while (sm[(s + 51) % 52] >= thr && guard++ < 52) s = (s + 51) % 52;
  guard = 0;
  while (sm[(e + 1) % 52] >= thr && guard++ < 52) e = (e + 1) % 52;
  const len = ((e - s + 52) % 52) + 1;

  const year = today.getUTCFullYear();
  let start = null;
  let end = null;
  for (const y of [year - 1, year, year + 1]) {
    const st = new Date(Date.UTC(y, 0, 1 + s * 7));
    const en = lib.addDays(st, len * 7);
    if (en >= today) {
      start = st;
      end = en;
      break;
    }
  }
  const publishBy = lib.addDays(start, -leadDays);
  let status;
  if (today >= start && today <= end) status = 'IN SEASON';
  else if (today >= publishBy) status = 'PUBLISH NOW';
  else status = 'UPCOMING';

  // Same last-4-weeks window, this year vs a year ago
  const win = (to) =>
    points.filter((p) => p.date > lib.addDays(to, -28) && p.date <= to).map((p) => p.value);
  const mean = (a) => (a.length ? a.reduce((x, y) => x + y, 0) / a.length : null);
  const nowAvg = mean(win(today));
  const agoAvg = mean(win(lib.addDays(today, -364)));
  const yoy = nowAvg !== null && agoAvg ? Math.round(((nowAvg - agoAvg) / agoAvg) * 100) : '';

  return {
    peak_week_of_year: peak + 1,
    peak_score: Math.round(max),
    season_start: lib.iso(start),
    season_end: lib.iso(end),
    season_weeks: len,
    publish_by: lib.iso(publishBy),
    days_until_publish_by: Math.round((publishBy - today) / 86400000),
    last_4wk_avg: nowAvg === null ? '' : Math.round(nowAvg),
    yoy_change_pct: yoy,
    status,
  };
}

async function withRetry(fn) {
  const waits = [0, 5000, 15000];
  let lastErr;
  for (const w of waits) {
    if (w) await sleep(w);
    try {
      return await fn();
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr;
}

function loadSeeds() {
  const file = path.join(lib.ROOT, 'data', 'seeds.txt');
  if (!fs.existsSync(file)) {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, '# One topic per line. Lines starting with # are ignored.\n' + DEFAULT_SEEDS.join('\n') + '\n', 'utf8');
    console.log('Created data\\seeds.txt with a starter list. Edit it any time.');
  }
  return fs
    .readFileSync(file, 'utf8')
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'));
}

async function main() {
  const googleTrends = require('google-trends-api');
  const geo = lib.getArg('geo', 'US');
  const years = Number(lib.getArg('years', 3)) || 3;
  const lead = Number(lib.getArg('lead', 60)) || 60;
  const wantRelated = !lib.hasFlag('no-related');
  const seeds = loadSeeds();
  const dirs = lib.outDirs();
  const today = new Date();
  const startTime = new Date(today.getTime() - years * 365 * 86400000);
  const relatedStart = new Date(today.getTime() - 365 * 86400000);

  const seasonRows = [];
  const weeklyRows = [];
  const relatedRows = [];
  const errors = [];

  console.log(`Google Trends: ${seeds.length} topics, geo=${geo}, ${years} years, ${lead}-day lead time\n`);

  for (const seed of seeds) {
    try {
      const raw = await withRetry(() => googleTrends.interestOverTime({ keyword: seed, geo, startTime, endTime: today }));
      const timeline = JSON.parse(raw).default.timelineData || [];
      const points = timeline.map((t) => ({ date: new Date(Number(t.time) * 1000), value: Number(t.value[0]) }));
      points.forEach((p) => weeklyRows.push({ topic: seed, geo, week: lib.iso(p.date), score: p.value }));
      const s = seasonality(points, today, lead);
      if (s) seasonRows.push({ topic: seed, geo, ...s });
      else errors.push(`${seed}: not enough search interest to measure`);
    } catch (e) {
      errors.push(`${seed}: ${e.message.slice(0, 120)}`);
      console.error(`  ${seed}: FAILED`);
    }
    await sleep(2000);

    if (wantRelated) {
      try {
        const raw = await withRetry(() => googleTrends.relatedQueries({ keyword: seed, geo, startTime: relatedStart, endTime: today }));
        const lists = JSON.parse(raw).default.rankedList || [];
        [['top', lists[0]], ['rising', lists[1]]].forEach(([kind, list]) => {
          ((list && list.rankedKeyword) || []).forEach((k) =>
            relatedRows.push({ topic: seed, geo, kind, query: k.query, value: k.value, label: k.formattedValue })
          );
        });
      } catch (e) {
        errors.push(`${seed} (related): ${e.message.slice(0, 120)}`);
      }
      await sleep(2000);
    }
  }

  const order = { 'PUBLISH NOW': 0, 'IN SEASON': 1, UPCOMING: 2, 'YEAR-ROUND': 3 };
  seasonRows.sort((a, b) => order[a.status] - order[b.status] || a.days_until_publish_by - b.days_until_publish_by);

  lib.writeAll(dirs, 'trends_seasonality.csv', lib.toCsv(seasonRows));
  lib.writeAll(dirs, 'trends_weekly.csv', lib.toCsv(weeklyRows, ['topic', 'geo', 'week', 'score']));
  if (wantRelated) lib.writeAll(dirs, 'trends_related.csv', lib.toCsv(relatedRows, ['topic', 'geo', 'kind', 'query', 'value', 'label']));
  lib.writeAll(
    dirs,
    'manifest_trends.json',
    JSON.stringify({ generatedAt: new Date().toISOString(), geo, years, lead, topics: seeds.length, seasonRows: seasonRows.length, errors }, null, 2)
  );

  console.log('\nTopic                               Status        Season starts   Publish by');
  seasonRows.forEach((r) =>
    console.log(`${r.topic.padEnd(35)} ${r.status.padEnd(13)} ${r.season_start}      ${r.publish_by}`)
  );
  console.log(`\nSaved to data\\latest and ${dirs[0]}`);
  if (errors.length) console.log('Skipped or failed:\n  - ' + errors.join('\n  - '));
}

if (require.main === module) main();
module.exports = { seasonality, weekOfYear };
