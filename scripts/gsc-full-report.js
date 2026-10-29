const { google } = require('googleapis');
const path = require('path');

const keyFile = path.join(__dirname, '..', 'gsc-credentials.json');

const auth = new google.auth.GoogleAuth({
  keyFile: keyFile,
  scopes: ['https://www.googleapis.com/auth/webmasters.readonly']
});

async function run() {
  try {
    const client = await auth.getClient();
    const searchconsole = google.searchconsole({ version: 'v1', auth: client });

    const today = new Date();
    const endDate = today.toISOString().split('T')[0];
    const startDate = new Date(today.getTime() - 28 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    console.log(`=== GSC PERFORMANCE REPORT (${startDate} to ${endDate}) ===\n`);

    // 1. Daily Trend
    const dateRes = await searchconsole.searchanalytics.query({
      siteUrl: 'sc-domain:midwestaec.com',
      requestBody: {
        startDate,
        endDate,
        dimensions: ['date']
      }
    });

    console.log('--- DAILY PERFORMANCE TREND ---');
    if (dateRes.data.rows) {
      dateRes.data.rows.forEach(r => {
        console.log(`Date: ${r.keys[0]} | Impressions: ${r.impressions} | Clicks: ${r.clicks} | CTR: ${(r.ctr * 100).toFixed(1)}% | Avg Pos: ${r.position.toFixed(1)}`);
      });
    } else {
      console.log('No date rows returned.');
    }

    // 2. Top Queries
    const queryRes = await searchconsole.searchanalytics.query({
      siteUrl: 'sc-domain:midwestaec.com',
      requestBody: {
        startDate,
        endDate,
        dimensions: ['query'],
        rowLimit: 50
      }
    });

    console.log(`\n--- TOP SEARCH QUERIES (${queryRes.data.rows ? queryRes.data.rows.length : 0} Total) ---`);
    if (queryRes.data.rows) {
      queryRes.data.rows.forEach(r => {
        console.log(`Pos ${r.position.toFixed(1).padStart(4)} | Imp: ${String(r.impressions).padStart(3)} | Clicks: ${r.clicks} | CTR: ${(r.ctr * 100).toFixed(1).padStart(4)}% | "${r.keys[0]}"`);
      });
    }

    // 3. Top Pages
    const pageRes = await searchconsole.searchanalytics.query({
      siteUrl: 'sc-domain:midwestaec.com',
      requestBody: {
        startDate,
        endDate,
        dimensions: ['page'],
        rowLimit: 50
      }
    });

    console.log(`\n--- TOP LANDING PAGES (${pageRes.data.rows ? pageRes.data.rows.length : 0} Total) ---`);
    if (pageRes.data.rows) {
      pageRes.data.rows.forEach(r => {
        const slug = r.keys[0].replace('https://midwestaec.com/articles/', '').replace('https://midwestaec.com/', '');
        console.log(`Pos ${r.position.toFixed(1).padStart(4)} | Imp: ${String(r.impressions).padStart(3)} | Clicks: ${r.clicks} | CTR: ${(r.ctr * 100).toFixed(1).padStart(4)}% | ${slug}`);
      });
    }

  } catch (err) {
    console.error('Error querying GSC:', err.message);
  }
}

run();
