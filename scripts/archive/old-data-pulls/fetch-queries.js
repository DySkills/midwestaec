const { google } = require('googleapis');
const path = require('path');

const keyFile = path.join(__dirname, '..', 'gsc-credentials.json');

const auth = new google.auth.GoogleAuth({
  keyFile: keyFile,
  scopes: ['https://www.googleapis.com/auth/webmasters.readonly']
});

async function querySearchConsole() {
  try {
    const client = await auth.getClient();
    const searchconsole = google.searchconsole({ version: 'v1', auth: client });
    
    const today = new Date();
    const endDate = today.toISOString().split('T')[0];
    const startDate = new Date(today.getTime() - 28 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    console.log(`Querying GSC for sc-domain:midwestaec.com (${startDate} to ${endDate})...`);

    const res = await searchconsole.searchanalytics.query({
      siteUrl: 'sc-domain:midwestaec.com',
      requestBody: {
        startDate: startDate,
        endDate: endDate,
        dimensions: ['query'],
        rowLimit: 25
      }
    });

    console.log('--- Search Analytics Response ---');
    if (!res.data.rows || res.data.rows.length === 0) {
      console.log('No search queries indexed yet (expected for a new domain during first 48h).');
      console.log('Google Search Console property connection is ACTIVE and fully functional!');
    } else {
      console.log(`Found ${res.data.rows.length} active search queries:`);
      res.data.rows.forEach(r => {
        console.log(`Query: "${r.keys[0]}" | Clicks: ${r.clicks} | Impressions: ${r.impressions} | CTR: ${(r.ctr * 100).toFixed(1)}% | Avg Pos: ${r.position.toFixed(1)}`);
      });
    }

    // Also check sitemaps status
    const sitemapsRes = await searchconsole.sitemaps.list({
      siteUrl: 'sc-domain:midwestaec.com'
    });
    console.log('\n--- Submitted Sitemaps ---');
    if (sitemapsRes.data.sitemap) {
      sitemapsRes.data.sitemap.forEach(sm => {
        console.log(`- Path: ${sm.path} | Last Downloaded: ${sm.lastDownloaded || 'Pending'} | Errors: ${sm.errors || 0} | Pending: ${sm.isPending}`);
      });
    } else {
      console.log('No sitemaps found via API yet.');
    }

  } catch (err) {
    console.error('Query Error:', err.message);
  }
}

querySearchConsole();
