const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const targetFiles = [
  'build.js',
  'index.html',
  'about.html',
  'browse.html',
  'article-template.html',
  'disclosure.html',
  'privacy.html',
  'terms.html'
];

targetFiles.forEach(fileName => {
  const filePath = path.join(__dirname, '..', fileName);
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/);

  const start = lines.findIndex(l => l.includes('Top Network Bar'));
  if (start === -1) {
    console.log(`[Skip] No Top Network Bar in ${fileName}`);
    return;
  }

  const headerIdx = lines.findIndex((l, i) => i > start && l.includes('<!-- Header'));
  if (headerIdx === -1) {
    console.error(`[Error] Header comment not found after Top Network Bar in ${fileName}`);
    return;
  }

  // Remove lines from start up to headerIdx
  lines.splice(start, headerIdx - start);
  fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
  console.log(`[Success] Removed Top Network Bar from ${fileName}`);
});

console.log('Rebuilding articles via node build.js...');
const buildOutput = execSync('node build.js', { encoding: 'utf8', cwd: path.join(__dirname, '..') });
console.log(buildOutput.split('\n').slice(-6).join('\n'));

console.log('\n--- VERIFYING NO REMAINING NETWORK LINKS ---');
const domains = ['northwestaec', 'southwestaec', 'southeastaec', 'northeastaec', 'tropicalaec'];
let foundAny = false;

function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === '.git' || entry.name === 'node_modules' || entry.name === 'latest-health-audit.json') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDir(full);
    } else if (entry.name.endsWith('.html') || entry.name.endsWith('.js') || entry.name.endsWith('.md')) {
      const text = fs.readFileSync(full, 'utf8');
      domains.forEach(d => {
        if (text.includes(d)) {
          console.error(`[ALERT] Found ${d} in ${full}`);
          foundAny = true;
        }
      });
    }
  }
}

scanDir(path.join(__dirname, '..'));

if (!foundAny) {
  console.log('Zero phantom network references remain across all HTML, JS, and Markdown files!');
}
