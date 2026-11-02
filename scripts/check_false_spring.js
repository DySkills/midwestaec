const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\Dylen\\Desktop\\AEC\\Midwest';
const c = fs.readFileSync(path.join(rootDir, 'content', 'false-spring-envelope-thaw.md'), 'utf8');
const lines = c.split(/\r?\n/).slice(28, 55);
console.log(lines.map((l, i) => `${i+29}: ${l}`).join('\n'));
