const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\Dylen\\Desktop\\AEC\\Midwest';
['ice-dams-roofs.md', 'false-spring-envelope-thaw.md', 'summer-humidity-ac.md'].forEach(f => {
  const c = fs.readFileSync(path.join(rootDir, 'content', f), 'utf8');
  const lines = c.split(/\r?\n/).slice(25, 45);
  console.log(`=== ${f} (lines 25-45) ===`);
  console.log(lines.join('\n'));
});
