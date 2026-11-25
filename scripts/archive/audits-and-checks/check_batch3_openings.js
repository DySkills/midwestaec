const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\Dylen\\Desktop\\AEC\\Midwest';
const files = [
  'rockwool-vs-fiberglass.md',
  'embodied-carbon-materials.md',
  'rammed-earth-midwest-flooring.md',
  'insulating-brick.md',
  'balloon-framing.md',
  'bug-prevention.md',
  'attic-air-sealing-baffles.md',
  'balloon-framing-retrofit-steps.md',
  'crawlspace-encapsulation-steps.md',
  'crawlspace-encapsulation.md',
  'historic-brick-retrofit-steps.md',
  'how-to-know-if-you-need-icf-basement.md',
  'does-house-need-to-breathe.md',
  'off-grid-systems.md',
  'expansive-lawncare.md'
];

files.forEach(f => {
  const c = fs.readFileSync(path.join(rootDir, 'content', f), 'utf8');
  const lines = c.split(/\r?\n/);
  const h2s = lines.filter(l => l.startsWith('## '));
  console.log(`=== ${f} ===`);
  console.log(`First H2: ${h2s[0] || 'NONE'}`);
});
