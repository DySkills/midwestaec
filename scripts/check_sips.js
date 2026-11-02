const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\Dylen\\Desktop\\AEC\\Midwest';
const c = fs.readFileSync(path.join(rootDir, 'content', 'sips-vs-traditional-framing.md'), 'utf8');
const lines = c.split(/\r?\n/).slice(25, 55);
console.log(lines.map((l, i) => `${i+26}: ${l}`).join('\n'));
