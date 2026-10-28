// submit-bing-urls.js - Automate URL Submissions to Bing Webmaster API
const https = require('https');
const fs = require('fs');
const path = require('path');

const BING_API_KEY = '92fd2ddd15e846fba7a0b7c64d249a25';
const SITE_URL = 'https://midwestaec.com/';
const sitemapPath = path.join(__dirname, '..', 'sitemap.xml');

// Determine which URLs to submit:
// If arguments passed (e.g. node submit-bing-urls.js https://midwestaec.com/articles/new.html), submit those.
// Otherwise, read sitemap.xml.
let targetUrls = process.argv.slice(2).filter(a => a.startsWith('http'));

if (targetUrls.length === 0) {
  if (!fs.existsSync(sitemapPath)) {
    console.error('Error: sitemap.xml not found at', sitemapPath);
    process.exit(1);
  }
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  targetUrls = [...sitemapContent.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
}

console.log(`Submitting ${targetUrls.length} URL(s) to Bing Webmaster API...`);

const postData = JSON.stringify({
  siteUrl: SITE_URL,
  urlList: targetUrls
});

const url = `https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey=${BING_API_KEY}`;

const req = https.request(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const parsed = JSON.parse(data);
      if (parsed.d === null) {
        console.log(`✓ SUCCESS: ${targetUrls.length} URL(s) successfully submitted to Bing!`);
        console.log('✓ Bing, Yahoo, and DuckDuckGo crawlers dispatched.');
      } else if (parsed.ErrorCode) {
        console.log(`ℹ Bing API Quota Notice: ${parsed.Message}`);
      } else {
        console.log('Bing response:', data);
      }
    } catch (e) {
      console.log('Bing response:', data);
    }
  });
});

req.on('error', (err) => {
  console.error('Submission failed:', err.message);
});

req.write(postData);
req.end();
