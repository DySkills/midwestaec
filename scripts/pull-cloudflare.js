// pull-cloudflare.js
// Reads your site's traffic from Cloudflare's GraphQL Analytics API: daily visits and page
// views, plus who is requesting each page (people, search engines, AI crawlers).
//
// Run from the Midwest folder:
//   node scripts/pull-cloudflare.js
// Options:
//   --days=90          how many days of daily totals to pull
//   --detail-days=3    how many days of per-page / per-crawler detail to pull
//
// Needs in .env:  CLOUDFLARE_API_TOKEN=...   CLOUDFLARE_ZONE_ID=...
// (The token only needs read access to analytics for the midwestaec.com zone.)
//
// Output (also saved as a dated copy in data/snapshots/<date>/):
//   data/latest/cf_daily.csv           requests, page views, unique visitors, cache hits per day
//   data/latest/cf_requests_detail.csv requests per day, page, crawler type, and status code
//   data/latest/cf_bots_summary.csv    requests per crawler type
//   data/latest/manifest_cloudflare.json
//
// Your Cloudflare plan limits how far back detail data goes. If Cloudflare refuses a
// request, the script prints Cloudflare's own message and keeps going.

const https = require('https');
const lib = require('./lib-data');

const BOT_RULES = [
  [/GPTBot|ChatGPT-User|OAI-SearchBot/i, 'OpenAI', 'ai'],
  [/PerplexityBot|Perplexity-User/i, 'Perplexity', 'ai'],
  [/ClaudeBot|Claude-User|Claude-SearchBot|anthropic-ai/i, 'Anthropic', 'ai'],
  [/Bytespider/i, 'ByteDance', 'ai'],
  [/CCBot/i, 'Common Crawl', 'ai'],
  [/Amazonbot/i, 'Amazon', 'ai'],
  [/Applebot/i, 'Apple', 'search'],
  [/Googlebot|Google-InspectionTool|GoogleOther/i, 'Google', 'search'],
  [/bingbot|BingPreview/i, 'Bing', 'search'],
  [/DuckDuckBot/i, 'DuckDuckGo', 'search'],
  [/YandexBot/i, 'Yandex', 'search'],
  [/meta-externalagent|facebookexternalhit/i, 'Meta', 'other'],
  [/bot|crawler|spider|slurp|scrape/i, 'Other bot', 'other'],
];

function classify(userAgent) {
  const ua = userAgent || '';
  for (const [re, family, kind] of BOT_RULES) {
    if (re.test(ua)) return { family, kind };
  }
  return { family: 'Browser or unlabeled', kind: 'people' };
}

function gql(token, query, variables) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ query, variables });
    const req = https.request(
      {
        hostname: 'api.cloudflare.com',
        path: '/client/v4/graphql',
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(data),
        },
      },
      (res) => {
        let out = '';
        res.on('data', (c) => (out += c));
        res.on('end', () => {
          try {
            resolve(JSON.parse(out));
          } catch (e) {
            reject(new Error('Cloudflare returned a non-JSON response (HTTP ' + res.statusCode + ')'));
          }
        });
      }
    );
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

function errText(resp) {
  return (resp.errors || []).map((e) => e.message).join('; ') || 'unknown error';
}

const DAILY_QUERY = `query($zone:String!,$since:Date!,$until:Date!){viewer{zones(filter:{zoneTag:$zone}){
  httpRequests1dGroups(limit:1000,filter:{date_geq:$since,date_leq:$until},orderBy:[date_ASC]){
    dimensions{date} sum{requests pageViews bytes cachedRequests threats} uniq{uniques}}}}}`;

const DETAIL_QUERY = `query($zone:String!,$since:Time!,$until:Time!){viewer{zones(filter:{zoneTag:$zone}){
  httpRequestsAdaptiveGroups(limit:10000,filter:{datetime_geq:$since,datetime_leq:$until},orderBy:[count_DESC]){
    count dimensions{date clientRequestPath userAgent edgeResponseStatus}}}}}`;

async function main() {
  lib.loadEnv();
  const token = process.env.CLOUDFLARE_API_TOKEN;
  const zone = process.env.CLOUDFLARE_ZONE_ID;
  if (!token || !zone) {
    console.error('Add CLOUDFLARE_API_TOKEN and CLOUDFLARE_ZONE_ID to the .env file in the Midwest folder.');
    process.exit(1);
  }

  const days = Number(lib.getArg('days', 90)) || 90;
  const detailDays = Number(lib.getArg('detail-days', 3)) || 3;
  const dirs = lib.outDirs();
  const manifest = { generatedAt: new Date().toISOString(), files: {}, errors: [] };
  const today = new Date();

  // ---- Daily totals ----
  try {
    const resp = await gql(token, DAILY_QUERY, {
      zone,
      since: lib.iso(lib.addDays(today, -days)),
      until: lib.iso(today),
    });
    if (resp.errors) throw new Error(errText(resp));
    const groups = (((resp.data || {}).viewer || {}).zones || [{}])[0].httpRequests1dGroups || [];
    const rows = groups.map((g) => ({
      date: g.dimensions.date,
      requests: g.sum.requests,
      page_views: g.sum.pageViews,
      unique_visitors: g.uniq.uniques,
      cached_requests: g.sum.cachedRequests,
      threats: g.sum.threats,
      bytes: g.sum.bytes,
    }));
    lib.writeAll(dirs, 'cf_daily.csv', lib.toCsv(rows, ['date', 'requests', 'page_views', 'unique_visitors', 'cached_requests', 'threats', 'bytes']));
    manifest.files['cf_daily.csv'] = rows.length;
    console.log(`Daily totals: ${rows.length} days`);
    if (rows.length >= 2) {
      const sum = (a, k) => a.reduce((t, r) => t + (r[k] || 0), 0);
      const last = rows.slice(-7);
      const prev = rows.slice(-14, -7);
      console.log(`  Last 7 days: ${sum(last, 'page_views')} page views, ${sum(last, 'requests')} requests` + (prev.length ? ` (previous 7: ${sum(prev, 'page_views')} page views)` : ''));
    }
  } catch (e) {
    manifest.errors.push('cf_daily.csv: ' + e.message);
    console.error('Daily totals failed: ' + e.message);
  }

  // ---- Per page and crawler detail (tries the requested window, then 1 day) ----
  let detail = null;
  for (const d of [detailDays, 1]) {
    try {
      const resp = await gql(token, DETAIL_QUERY, {
        zone,
        since: lib.addDays(today, -d).toISOString(),
        until: today.toISOString(),
      });
      if (resp.errors) throw new Error(errText(resp));
      detail = { days: d, groups: (((resp.data || {}).viewer || {}).zones || [{}])[0].httpRequestsAdaptiveGroups || [] };
      break;
    } catch (e) {
      manifest.errors.push(`detail (${d} day${d > 1 ? 's' : ''}): ${e.message}`);
      console.error(`Detail for ${d} day(s) failed: ${e.message}`);
      if (d === 1) break;
    }
  }

  if (detail) {
    const agg = new Map();
    const bots = new Map();
    for (const g of detail.groups) {
      const dim = g.dimensions;
      const c = classify(dim.userAgent);
      const key = [dim.date, dim.clientRequestPath, c.family, c.kind, dim.edgeResponseStatus].join('|');
      agg.set(key, (agg.get(key) || 0) + g.count);
      const bk = c.family + '|' + c.kind;
      bots.set(bk, (bots.get(bk) || 0) + g.count);
    }
    const rows = Array.from(agg.entries()).map(([k, requests]) => {
      const [date, path, crawler, kind, status] = k.split('|');
      return { date, path, crawler, kind, status, requests };
    });
    rows.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : b.requests - a.requests));
    const botRows = Array.from(bots.entries())
      .map(([k, requests]) => {
        const [crawler, kind] = k.split('|');
        return { crawler, kind, requests };
      })
      .sort((a, b) => b.requests - a.requests);
    lib.writeAll(dirs, 'cf_requests_detail.csv', lib.toCsv(rows, ['date', 'path', 'crawler', 'kind', 'status', 'requests']));
    lib.writeAll(dirs, 'cf_bots_summary.csv', lib.toCsv(botRows, ['crawler', 'kind', 'requests']));
    manifest.files['cf_requests_detail.csv'] = rows.length;
    manifest.files['cf_bots_summary.csv'] = botRows.length;
    manifest.detailDays = detail.days;
    console.log(`\nWho requested your pages (last ${detail.days} day${detail.days > 1 ? 's' : ''}):`);
    botRows.slice(0, 12).forEach((r) => console.log(`  ${r.crawler.padEnd(24)} ${String(r.requests).padStart(7)}   ${r.kind}`));
  }

  lib.writeAll(dirs, 'manifest_cloudflare.json', JSON.stringify(manifest, null, 2));
  console.log(`\nSaved to data\\latest and ${dirs[0]}`);
  if (manifest.errors.length) console.log('Problems:\n  - ' + manifest.errors.join('\n  - '));
}

if (require.main === module) main();
module.exports = { classify };
