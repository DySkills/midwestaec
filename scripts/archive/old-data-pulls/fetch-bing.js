// fetch-bing.js - Bing Webmaster Tools Telemetry & Search Performance
const https = require('https');

const BING_API_KEY = '92fd2ddd15e846fba7a0b7c64d249a25';
const SITE_URL = 'https://midwestaec.com/';

function callBing(endpoint, params = {}) {
  return new Promise((resolve, reject) => {
    const query = new URLSearchParams({
      siteUrl: SITE_URL,
      apikey: BING_API_KEY,
      ...params
    }).toString();

    const url = `https://ssl.bing.com/webmaster/api.svc/json/${endpoint}?${query}`;

    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve(parsed.d || parsed);
        } catch (e) {
          resolve(data);
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log('========================================================');
  console.log('   BING / YAHOO / DUCKDUCKGO SEARCH PERFORMANCE REPORT   ');
  console.log('========================================================');
  console.log(`Site: ${SITE_URL}`);
  console.log(`Generated: ${new Date().toLocaleString()}\n`);

  try {
    // 1. Check Site Verification & Status
    const sites = await callBing('GetUserSites', { siteUrl: '' });
    const current = (sites || []).find(s => s.Url === SITE_URL);
    console.log(`Status: ${current && current.IsVerified ? '✓ Verified & Active on Bing Network' : 'Unverified'}`);

    // 2. Query Stats (Queries, Impressions, Clicks, Avg Position)
    const queryStats = await callBing('GetQueryStats');
    console.log('\n--- Top Search Queries (Bing, Yahoo, DuckDuckGo) ---');
    if (!queryStats || queryStats.length === 0) {
      console.log('No query data yet (Initial crawl batch in progress). Check back in 24 hours!');
    } else {
      queryStats.slice(0, 25).forEach(q => {
        console.log(`Query: "${q.Query}" | Clicks: ${q.Clicks} | Impressions: ${q.Impressions} | CTR: ${(q.Ctr * 100).toFixed(1)}% | Avg Pos: ${q.AvgImpressionPosition.toFixed(1)}`);
      });
    }

    // 3. Page Stats
    const pageStats = await callBing('GetPageStats');
    console.log('\n--- Top Performing Pages ---');
    if (!pageStats || pageStats.length === 0) {
      console.log('No page metrics recorded yet.');
    } else {
      pageStats.slice(0, 15).forEach(p => {
        console.log(`Page: ${p.Url} | Clicks: ${p.Clicks} | Impressions: ${p.Impressions}`);
      });
    }

    // 4. Crawl Stats
    const crawlStats = await callBing('GetCrawlStats');
    console.log('\n--- Crawl & Indexation Stats ---');
    if (!crawlStats || crawlStats.length === 0) {
      console.log('Initial batch submitted. Crawl stats pending first sweep.');
    } else {
      const latest = crawlStats[0];
      console.log(`Crawled Pages: ${latest.CrawledPages || 0} | In Index: ${latest.InIndex || 0} | Errors: ${latest.CrawlErrors || 0}`);
    }

    // 5. Sitemap Status
    const feeds = await callBing('GetFeeds');
    console.log('\n--- Sitemap Feeds ---');
    (feeds || []).forEach(f => {
      console.log(`Feed: ${f.Url} | Status: ${f.Status} | UrlCount: ${f.UrlCount}`);
    });

  } catch (err) {
    console.error('Error fetching Bing data:', err.message);
  }
}

run();
