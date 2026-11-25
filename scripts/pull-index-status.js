// pull-index-status.js
// Asks Google, for every URL in sitemap.xml, whether the page is indexed, when it was
// last crawled, and which canonical Google chose. Uses the same gsc-credentials.json.
//
// Run from the Midwest folder:   node scripts/pull-index-status.js
// Output: data/latest/gsc_index_status.csv (plus a dated copy in data/snapshots/<date>/)
//
// Google allows about 2,000 of these checks per day per site, far more than the site needs.

const fs = require('fs');
const path = require('path');
const lib = require('./lib-data');

const GSC_SITE = 'sc-domain:midwestaec.com';

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  const { google } = require('googleapis');
  const auth = new google.auth.GoogleAuth({
    keyFile: path.join(lib.ROOT, 'gsc-credentials.json'),
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  });
  const client = await auth.getClient();
  const sc = google.searchconsole({ version: 'v1', auth: client });

  const xml = fs.readFileSync(path.join(lib.ROOT, 'sitemap.xml'), 'utf8');
  const urls = Array.from(xml.matchAll(/<loc>\s*(.*?)\s*<\/loc>/g)).map((m) => m[1]);
  console.log(`Checking ${urls.length} URLs from sitemap.xml\n`);

  const rows = [];
  for (const url of urls) {
    try {
      const res = await sc.urlInspection.index.inspect({
        requestBody: { inspectionUrl: url, siteUrl: GSC_SITE },
      });
      const r = (res.data.inspectionResult || {}).indexStatusResult || {};
      rows.push({
        url,
        verdict: r.verdict || '',
        coverage_state: r.coverageState || '',
        indexing_state: r.indexingState || '',
        page_fetch_state: r.pageFetchState || '',
        robots_txt_state: r.robotsTxtState || '',
        last_crawl_time: r.lastCrawlTime || '',
        crawled_as: r.crawledAs || '',
        google_canonical: r.googleCanonical || '',
        user_canonical: r.userCanonical || '',
      });
    } catch (e) {
      rows.push({ url, verdict: 'ERROR', coverage_state: e.message.slice(0, 160) });
      console.error(`  ${url}: ${e.message.slice(0, 100)}`);
    }
    await sleep(400);
  }

  const dirs = lib.outDirs();
  lib.writeAll(dirs, 'gsc_index_status.csv', lib.toCsv(rows));

  const indexed = rows.filter((r) => r.verdict === 'PASS').length;
  const errors = rows.filter((r) => r.verdict === 'ERROR').length;
  console.log(`Indexed by Google: ${indexed} of ${rows.length}` + (errors ? `  (${errors} could not be checked)` : ''));
  rows
    .filter((r) => r.verdict !== 'PASS')
    .forEach((r) => console.log(`  NOT INDEXED: ${r.url} - ${r.coverage_state}`));
  console.log(`\nSaved to data\\latest and ${dirs[0]}`);
}

main();
