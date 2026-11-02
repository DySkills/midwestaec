const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\Dylen\\Desktop\\AEC\\Midwest';
const files = fs.readdirSync(path.join(rootDir, 'content')).filter(f => f.endsWith('.md'));

console.log('--- Titles with Zone references ---');
files.forEach(f => {
  const c = fs.readFileSync(path.join(rootDir, 'content', f), 'utf8');
  const m = c.match(/title:\s*"([^"]+)"/);
  if (m && /zone\s*[0-9]/i.test(m[1])) {
    console.log(`${f}: "${m[1]}"`);
  }
});
