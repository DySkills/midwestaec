const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\Dylen\\Desktop\\AEC\\Midwest';
const contentDir = path.join(rootDir, 'content');

const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));

const inventory = files.map(f => {
  const c = fs.readFileSync(path.join(contentDir, f), 'utf8');
  const titleMatch = c.match(/title:\s*"([^"]+)"/);
  const formatMatch = c.match(/format:\s*"([^"]+)"/);
  const catMatch = c.match(/category:\s*"([^"]+)"/);
  const codeTagMatch = c.match(/codeTag:\s*"([^"]+)"/);
  const h2s = (c.match(/^##\s+.+$/gm) || []).map(h => h.replace(/^##\s+/, '').trim());
  return {
    file: f,
    slug: f.replace('.md', ''),
    title: titleMatch ? titleMatch[1] : '',
    format: formatMatch ? formatMatch[1] : '',
    category: catMatch ? catMatch[1] : '',
    codeTag: codeTagMatch ? codeTagMatch[1] : '',
    h2Count: h2s.length,
    h2s: h2s
  };
});

console.log(JSON.stringify(inventory, null, 2));
