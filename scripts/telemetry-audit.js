const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

const keyFile = path.join(__dirname, '..', 'gsc-credentials.json');

const auth = new google.auth.GoogleAuth({
  keyFile: keyFile,
  scopes: ['https://www.googleapis.com/auth/webmasters.readonly']
});

async function audit() {
  try {
    const client = await auth.getClient();
    const searchconsole = google.searchconsole({ version: 'v1', auth: client });

    const today = new Date();
    const endDate = today.toISOString().split('T')[0];
    const startDate = new Date(today.getTime() - 28 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    // 1. Query + Page breakdown
    const queryPageRes = await searchconsole.searchanalytics.query({
      siteUrl: 'sc-domain:midwestaec.com',
      requestBody: {
        startDate,
        endDate,
        dimensions: ['query', 'page'],
        rowLimit: 100
      }
    });

    // 2. Query only breakdown
    const queryRes = await searchconsole.searchanalytics.query({
      siteUrl: 'sc-domain:midwestaec.com',
      requestBody: {
        startDate,
        endDate,
        dimensions: ['query'],
        rowLimit: 100
      }
    });

    // 3. Page only breakdown
    const pageRes = await searchconsole.searchanalytics.query({
      siteUrl: 'sc-domain:midwestaec.com',
      requestBody: {
        startDate,
        endDate,
        dimensions: ['page'],
        rowLimit: 100
      }
    });

    // 4. Sitemaps
    const sitemapsRes = await searchconsole.sitemaps.list({
      siteUrl: 'sc-domain:midwestaec.com'
    });

    const report = {
      timestamp: new Date().toISOString(),
      dateRange: { startDate, endDate },
      totalQueries: queryRes.data.rows ? queryRes.data.rows.length : 0,
      queries: queryRes.data.rows || [],
      queryPages: queryPageRes.data.rows || [],
      pages: pageRes.data.rows || [],
      sitemaps: sitemapsRes.data.sitemap || []
    };

    console.log(JSON.stringify(report, null, 2));
  } catch (err) {
    console.error('Audit Error:', err);
  }
}

audit();
