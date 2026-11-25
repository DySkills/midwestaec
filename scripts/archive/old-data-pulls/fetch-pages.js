const { google } = require('googleapis');
const path = require('path');

const keyFile = path.join(__dirname, '..', 'gsc-credentials.json');

const auth = new google.auth.GoogleAuth({
  keyFile: keyFile,
  scopes: ['https://www.googleapis.com/auth/webmasters.readonly']
});

async function queryPages() {
  try {
    const client = await auth.getClient();
    const searchconsole = google.searchconsole({ version: 'v1', auth: client });
    
    const today = new Date();
    const endDate = today.toISOString().split('T')[0];
    const startDate = new Date(today.getTime() - 28 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    const res = await searchconsole.searchanalytics.query({
      siteUrl: 'sc-domain:midwestaec.com',
      requestBody: {
        startDate: startDate,
        endDate: endDate,
        dimensions: ['page', 'query'],
        rowLimit: 50
      }
    });

    console.log('--- Page + Query breakdown ---');
    if (!res.data.rows) {
      console.log('No rows');
    } else {
      res.data.rows.forEach(r => {
        console.log(`Page: ${r.keys[0]} | Query: "${r.keys[1]}" | Clicks: ${r.clicks} | Impr: ${r.impressions} | Pos: ${r.position.toFixed(1)}`);
      });
    }

    const pageRes = await searchconsole.searchanalytics.query({
      siteUrl: 'sc-domain:midwestaec.com',
      requestBody: {
        startDate: startDate,
        endDate: endDate,
        dimensions: ['page'],
        rowLimit: 50
      }
    });

    console.log('\n--- Page only breakdown ---');
    if (!pageRes.data.rows) {
      console.log('No page rows');
    } else {
      pageRes.data.rows.forEach(r => {
        console.log(`Page: ${r.keys[0]} | Clicks: ${r.clicks} | Impr: ${r.impressions} | Pos: ${r.position.toFixed(1)}`);
      });
    }

  } catch (err) {
    console.error('Error:', err.message);
  }
}

queryPages();
