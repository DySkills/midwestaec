const { google } = require('googleapis');
const path = require('path');

const keyFile = path.join(__dirname, '..', 'gsc-credentials.json');

const auth = new google.auth.GoogleAuth({
  keyFile: keyFile,
  scopes: ['https://www.googleapis.com/auth/webmasters.readonly']
});

async function inspectSample() {
  try {
    const client = await auth.getClient();
    const searchconsole = google.searchconsole({ version: 'v1', auth: client });
    
    // Test inspect on recently deployed or representative URLs
    const testUrls = [
      'https://midwestaec.com/articles/rammed-earth-midwest-flooring.html',
      'https://midwestaec.com/articles/icf-basements-walls.html',
      'https://midwestaec.com/browse.html'
    ];

    for (const url of testUrls) {
      try {
        const res = await searchconsole.urlInspection.index.inspect({
          requestBody: {
            inspectionUrl: url,
            siteUrl: 'sc-domain:midwestaec.com'
          }
        });
        const result = res.data.inspectionResult;
        console.log(`\nURL: ${url}`);
        console.log(`Index Status: ${result.indexStatusResult?.coverageState || 'Unknown'}`);
        console.log(`Verdict: ${result.indexStatusResult?.verdict || 'Unknown'}`);
        console.log(`RobotsTxt: ${result.indexStatusResult?.robotsTxtState || 'Unknown'}`);
        console.log(`IndexingState: ${result.indexStatusResult?.indexingState || 'Unknown'}`);
        console.log(`UserCanonical: ${result.indexStatusResult?.userCanonical || 'None'}`);
        console.log(`GoogleCanonical: ${result.indexStatusResult?.googleCanonical || 'None'}`);
      } catch (err) {
        console.log(`Could not inspect ${url}: ${err.message}`);
      }
    }
  } catch (err) {
    console.error('Inspection error:', err.message);
  }
}

inspectSample();
