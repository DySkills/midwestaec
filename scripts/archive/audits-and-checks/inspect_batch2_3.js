const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\Dylen\\Desktop\\AEC\\Midwest';

const batch2Files = [
  'icf-basements-walls.md',
  'cold-climate-heat-pumps.md',
  'sips-vs-traditional-framing.md',
  'when-to-replace-windows.md',
  'window-alternatives.md',
  'barndominium-post-frame.md',
  'energy-hikes.md'
];

const batch3Files = [
  'basement-egress-window-cutting.md',
  'blower-door-checklist.md',
  'smart-vapor-retarders.md',
  'sub-slab-insulation-specs.md',
  'roof-insulation-over-sheathing.md',
  'continuous-insulation.md'
];

console.log('--- BATCH 2 FILES ---');
batch2Files.forEach(f => {
  const c = fs.readFileSync(path.join(rootDir, 'content', f), 'utf8');
  console.log(`=== ${f} ===`);
  const headings = c.match(/^#{1,3}\s+.+$/gm) || [];
  console.log(headings.slice(0, 8).join('\n'));
});

console.log('\n--- BATCH 3 FILES ---');
batch3Files.forEach(f => {
  const c = fs.readFileSync(path.join(rootDir, 'content', f), 'utf8');
  console.log(`=== ${f} ===`);
  const headings = c.match(/^#{1,3}\s+.+$/gm) || [];
  console.log(headings.slice(0, 8).join('\n'));
});
