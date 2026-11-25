// pull-seo-data.js
// Pulls Google Search Console (up to 16 months) and Bing Webmaster data into CSV files.
//
// Run from the Midwest folder:
//   node scripts/pull-seo-data.js
// Options:
//   --months=16     how far back to pull from Google (16 is the maximum)
//   --skip-gsc      skip Google
//   --skip-bing     skip Bing
//
// Output (also saved as a dated copy in data/snapshots/<date>/):
//   data/latest/gsc_daily.csv        clicks, impressions, CTR, position per day
//   data/latest/gsc_queries.csv      every search query
//   data/latest/gsc_pages.csv        every page
//   data/latest/gsc_query_page.csv   which query lands on which page
//   data/latest/gsc_date_query.csv   each query per day (shows queries expanding over time)
//   data/latest/gsc_date_page.csv    each page per day (shows page-by-page movement)
//   data/latest/gsc_sitemaps.csv     sitemap status
//   data/latest/bing_*.csv           Bing queries, pages, traffic, crawl stats
//   data/latest/manifest_search.json what was pulled and any errors
//
// Needs: gsc-credentials.json in the Midwest folder (already there) and, for Bing,
// a line  BING_API_KEY=your-key  in a file named .env in the Midwest folder.

const https = require('https');
const path = require('path');
const lib = require('./lib-data');

lib.loadEnv();

const GSC_SITE = 'sc-domain:midwestaec.com';
const BING_SITE = 'https://midwestaec.com/';

const GSC_DATASETS = [
  ['gsc_daily.csv', ['date']],
  ['gsc_queries.csv', ['query']],
  ['gsc_pages.csv', ['page']],
  ['gsc_query_page.csv', ['query', 'page']],
  ['gsc_date_query.csv', ['date', 'query']],
  ['gsc_date_page.csv', ['date', 'page']],
];

const BING_ENDPOINTS = [
  ['bing_queries.csv', 'GetQueryStats'],
  ['bing_pages.csv', 'GetPageStats'],
  ['bing_traffic.csv', 'GetRankAndTrafficStats'],
  ['bing_crawl.csv', 'GetCrawlStats'],
];

async function gscQuery(sc, start, end, dimensions) {
  const rows = [];
  const rowLimit = 25000;
  let startRow = 0;
  for (;;) {
    const res = await sc.searchanalytics.query({
      siteUrl: GSC_SITE,
      requestBody: { startDate: start, endDate: end, dimensions, rowLimit, startRow },
    });
    const batch = res.data.rows || [];
    batch.forEach((r) => {
      const out = {};
      dimensions.forEach((d, i) => (out[d] = r.keys[i]));
      out.clicks = r.clicks;
      out.impressions = r.impressions;
      out.ctr = Number(r.ctr.toFixed(4));
      out.position = Number(r.position.toFixed(2));
      rows.push(out);
    });
    if (batch.length < rowLimit) break;
    startRow += rowLimit;
  }
  return rows;
}

function headline(daily, endDate) {
  const end = new Date(endDate + 'T00:00:00Z');
  const cut = (n) => lib.iso(lib.addDays(end, -n));
  const sum = (from, to) =>
    daily
      .filter((r) => r.date >= from && r.date <= to)
      .reduce((a, r) => ({ c: a.c + r.clicks, i: a.i + r.impressions }), { c: 0, i: 0 });
  const last = sum(cut(27), endDate);
  const prev = sum(cut(55), cut(28));
  const pct = (a, b) => (b === 0 ? (a > 0 ? 'new' : '0%') : (((a - b) / b) * 100).toFixed(0) + '%');
  console.log('\nLast 28 days vs the 28 before:');
  console.log(`  Clicks:      ${last.c}  (was ${prev.c}, ${pct(last.c, prev.c)})`);
  console.log(`  Impressions: ${last.i}  (was ${prev.i}, ${pct(last.i, prev.i)})`);
}

async function pullGsc(dirs, months, manifest) {
  const { google } = require('googleapis');
  const auth = new google.auth.GoogleAuth({
    keyFile: path.join(lib.ROOT, 'gsc-credentials.json'),
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  });
  const client = await auth.getClient();
  const sc = google.searchconsole({ version: 'v1', auth: client });

  const endDate = lib.iso(lib.addDays(new Date(), -2)); // newest finalized day
  const s = new Date();
  s.setUTCMonth(s.getUTCMonth() - months);
  const startDate = lib.iso(s);
  manifest.gscRange = { startDate, endDate };
  console.log(`Google Search Console: ${startDate} to ${endDate}`);

  let daily = [];
  for (const [file, dims] of GSC_DATASETS) {
    try {
      const rows = await gscQuery(sc, startDate, endDate, dims);
      lib.writeAll(dirs, file, lib.toCsv(rows, [...dims, 'clicks', 'impressions', 'ctr', 'position']));
      manifest.files[file] = rows.length;
      if (file === 'gsc_daily.csv') daily = rows;
      console.log(`  ${file}: ${rows.length} rows`);
    } catch (e) {
      manifest.errors.push(`${file}: ${e.message}`);
      console.error(`  ${file}: FAILED - ${e.message}`);
    }
  }

  try {
    const res = await sc.sitemaps.list({ siteUrl: GSC_SITE });
    const rows = (res.data.sitemap || []).map((m) => ({
      path: m.path,
      lastSubmitted: m.lastSubmitted,
      lastDownloaded: m.lastDownloaded,
      errors: m.errors,
      warnings: m.warnings,
      submitted: (m.contents || []).reduce((a, c) => a + Number(c.submitted || 0), 0),
      indexed: (m.contents || []).reduce((a, c) => a + Number(c.indexed || 0), 0),
    }));
    lib.writeAll(dirs, 'gsc_sitemaps.csv', lib.toCsv(rows, ['path', 'lastSubmitted', 'lastDownloaded', 'errors', 'warnings', 'submitted', 'indexed']));
    manifest.files['gsc_sitemaps.csv'] = rows.length;
  } catch (e) {
    manifest.errors.push(`gsc_sitemaps.csv: ${e.message}`);
  }

  if (daily.length) headline(daily, endDate);
}

function bingGet(endpoint) {
  return new Promise((resolve, reject) => {
    const q = new URLSearchParams({ siteUrl: BING_SITE, apikey: process.env.BING_API_KEY }).toString();
    const url = `https://ssl.bing.com/webmaster/api.svc/json/${endpoint}?${q}`;
    https
      .get(url, (res) => {
        let data = '';
        res.on('data', (c) => (data += c));
        res.on('end', () => {
          try {
            const parsed = JSON.parse(data);
            if (parsed.d !== undefined) return resolve(parsed.d);
            reject(new Error(parsed.Message || 'unexpected Bing response'));
          } catch (e) {
            reject(new Error('Bing returned a non-JSON response (check the API key)'));
          }
        });
      })
      .on('error', reject);
  });
}

// Bing sends dates like /Date(1698796800000)/ - turn them into 2023-11-01.
function fixDates(rows) {
  return rows.map((r) => {
    const out = {};
    for (const [k, v] of Object.entries(r)) {
      const m = typeof v === 'string' && v.match(/^\/Date\((-?\d+)/);
      out[k] = m ? lib.iso(new Date(Number(m[1]))) : v;
    }
    return out;
  });
}

async function pullBing(dirs, manifest) {
  if (!process.env.BING_API_KEY) {
    manifest.errors.push('Bing skipped: no BING_API_KEY in .env');
    console.log('Bing: skipped (add BING_API_KEY=... to the .env file in the Midwest folder)');
    return;
  }
  console.log('Bing Webmaster Tools');
  for (const [file, endpoint] of BING_ENDPOINTS) {
    try {
      const rows = fixDates(await bingGet(endpoint));
      lib.writeAll(dirs, file, lib.toCsv(rows));
      manifest.files[file] = rows.length;
      console.log(`  ${file}: ${rows.length} rows`);
    } catch (e) {
      manifest.errors.push(`${file}: ${e.message}`);
      console.error(`  ${file}: FAILED - ${e.message}`);
    }
  }
}

async function main() {
  const dirs = lib.outDirs();
  const manifest = { generatedAt: new Date().toISOString(), files: {}, errors: [] };
  const months = Math.min(16, Number(lib.getArg('months', 16)) || 16);

  if (!lib.hasFlag('skip-gsc')) {
    try {
      await pullGsc(dirs, months, manifest);
    } catch (e) {
      manifest.errors.push('Google: ' + e.message);
      console.error('Google Search Console failed: ' + e.message);
    }
  }
  if (!lib.hasFlag('skip-bing')) {
    await pullBing(dirs, manifest);
  }

  lib.writeAll(dirs, 'manifest_search.json', JSON.stringify(manifest, null, 2));
  console.log(`\nSaved to data\\latest and ${dirs[0]}`);
  if (manifest.errors.length) console.log('Problems:\n  - ' + manifest.errors.join('\n  - '));
}

main();
