// submit-indexnow.js
// Tells Bing (and other IndexNow search engines) which pages are new or changed, so they
// are crawled sooner. Google does not use IndexNow.
//
// Run from the Midwest folder (after pushing your changes live):
//   node scripts/submit-indexnow.js              pages changed in the last 7 days
//   node scripts/submit-indexnow.js --days=3     pages changed in the last 3 days
//   node scripts/submit-indexnow.js --all        every page in sitemap.xml
//   node scripts/submit-indexnow.js --dry        show what would be sent, send nothing
//
// Needs INDEXNOW_KEY in .env, and the key file live on the site:
//   https://midwestaec.com/<your-key>.txt
// Open that address in a browser after you push. It should show only the key.
//
// Only submit pages that are new or changed. Re-sending unchanged pages every day is
// discouraged by IndexNow and can get you rate-limited.

const fs = require('fs');
const https = require('https');
const path = require('path');
const lib = require('./lib-data');

const HOST = 'midwestaec.com';

function parseSitemap(xml) {
  return Array.from(xml.matchAll(/<url>([\s\S]*?)<\/url>/g)).map((m) => {
    const loc = (m[1].match(/<loc>\s*(.*?)\s*<\/loc>/) || [])[1];
    const lastmod = (m[1].match(/<lastmod>\s*(.*?)\s*<\/lastmod>/) || [])[1] || '';
    return { loc, lastmod };
  }).filter((u) => u.loc);
}

function post(body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const req = https.request(
      {
        hostname: 'api.indexnow.org',
        path: '/IndexNow',
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(data) },
      },
      (res) => {
        let out = '';
        res.on('data', (c) => (out += c));
        res.on('end', () => resolve({ status: res.statusCode, body: out }));
      }
    );
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

const MEANING = {
  200: 'Accepted.',
  202: 'Accepted. The key file is still being checked, which is normal on the first send.',
  400: 'Bad request (the list was malformed).',
  403: 'Key not valid. Check that INDEXNOW_KEY matches the .txt file name and contents, and that the file is live on the site.',
  422: 'A URL did not match the host. All URLs must be on ' + HOST + '.',
  429: 'Too many requests. Wait and try again later.',
};

async function main() {
  lib.loadEnv();
  const key = process.env.INDEXNOW_KEY;
  if (!key) {
    console.error('INDEXNOW_KEY is empty. Add it to the .env file in the Midwest folder.');
    process.exit(1);
  }

  const xml = fs.readFileSync(path.join(lib.ROOT, 'sitemap.xml'), 'utf8');
  let urls = parseSitemap(xml);

  if (!lib.hasFlag('all')) {
    const days = Number(lib.getArg('days', 7)) || 7;
    const cutoff = lib.iso(lib.addDays(new Date(), -days));
    urls = urls.filter((u) => u.lastmod && u.lastmod.slice(0, 10) >= cutoff);
    console.log(`Pages changed since ${cutoff}: ${urls.length}`);
  } else {
    console.log(`All pages: ${urls.length}`);
  }

  if (!urls.length) {
    console.log('Nothing to send.');
    return;
  }
  urls.forEach((u) => console.log('  ' + u.loc + (u.lastmod ? `  (${u.lastmod.slice(0, 10)})` : '')));

  if (lib.hasFlag('dry')) {
    console.log('\nDry run: nothing was sent.');
    return;
  }

  const res = await post({
    host: HOST,
    key,
    keyLocation: `https://${HOST}/${key}.txt`,
    urlList: urls.map((u) => u.loc),
  });
  console.log(`\nIndexNow response: ${res.status}. ${MEANING[res.status] || res.body.slice(0, 200)}`);
}

if (require.main === module) main();
module.exports = { parseSitemap };
