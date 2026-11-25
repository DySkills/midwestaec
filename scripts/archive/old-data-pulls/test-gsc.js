const { google } = require('googleapis');
const path = require('path');

const keyFile = path.join(__dirname, '..', 'gsc-credentials.json');

const auth = new google.auth.GoogleAuth({
  keyFile: keyFile,
  scopes: ['https://www.googleapis.com/auth/webmasters.readonly']
});

async function checkGSC() {
  try {
    const client = await auth.getClient();
    const searchconsole = google.searchconsole({ version: 'v1', auth: client });
    
    console.log('Authenticating with Google Search Console API...');
    const res = await searchconsole.sites.list();
    
    if (!res.data.siteEntry || res.data.siteEntry.length === 0) {
      console.log('AUTHENTICATED SUCCESSFULLY, but no properties found yet.');
      console.log('Action needed: Ensure midwest-aec-bot@gen-lang-client-0789736011.iam.gserviceaccount.com is added under Search Console Settings > Users and permissions.');
    } else {
      console.log('SUCCESS! Verified GSC Properties:');
      res.data.siteEntry.forEach(s => {
        console.log(` - ${s.siteUrl} (${s.permissionLevel})`);
      });
    }
  } catch (err) {
    console.error('GSC Error:', err.message);
  }
}

checkGSC();
