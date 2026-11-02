const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\Dylen\\Desktop\\AEC\\Midwest';
const batch1Files = [
  'attic-frost-roof-sweating.md',
  'basement-lvp-flooring-moisture.md',
  'basement-waterproofing.md',
  'false-spring-envelope-thaw.md',
  'ice-dams-roofs.md',
  'summer-humidity-ac.md'
];

batch1Files.forEach(f => {
  const c = fs.readFileSync(path.join(rootDir, 'content', f), 'utf8');
  console.log(`=== ${f} ===`);
  const headings = c.match(/^#{1,3}\s+.+$/gm) || [];
  console.log(headings.join('\n'));
});
