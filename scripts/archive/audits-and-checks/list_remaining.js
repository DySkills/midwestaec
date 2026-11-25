const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\Dylen\\Desktop\\AEC\\Midwest';
const files = fs.readdirSync(path.join(rootDir, 'content')).filter(f => f.endsWith('.md'));

const alreadyDone = ['icf-basements-walls.md', 'cold-climate-heat-pumps.md'];
const remaining = files.filter(f => !alreadyDone.includes(f));

console.log(`Remaining articles to process: ${remaining.length}`);

const summary = remaining.map(f => {
  const c = fs.readFileSync(path.join(rootDir, 'content', f), 'utf8');
  const title = (c.match(/title:\s*"([^"]+)"/) || [])[1] || '';
  const cat = (c.match(/category:\s*"([^"]+)"/) || [])[1] || '';
  const format = (c.match(/format:\s*"([^"]+)"/) || [])[1] || '';
  return { file: f, title, cat, format };
});

console.log(JSON.stringify(summary, null, 2));
