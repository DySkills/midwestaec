const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '../content/roof-insulation-over-sheathing.md');
let c = fs.readFileSync(p, 'utf8');
const target = '**IRC Section R806.5 ("Unvented Attic and Unvented Enclosed Rafter Assemblies")**:';
const add = '\n\nKeeping the structural roof deck warm permanently eliminates the thermal bypasses that trigger [destructive winter ice dams](ice-dams-roofs.html). For accessible vented attics, compare this exterior approach against our [attic air sealing and rafter eave baffling tutorial](attic-air-sealing-baffles.html).\n';

if (c.includes(target)) {
  c = c.replace(target, target + add);
  fs.writeFileSync(p, c, 'utf8');
  console.log('Injected link into roof-insulation-over-sheathing.md');
} else {
  console.error('Target not found in roof-insulation-over-sheathing.md');
}
