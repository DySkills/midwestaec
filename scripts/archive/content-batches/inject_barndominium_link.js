const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '../content/barndominium-post-frame.md');
let c = fs.readFileSync(p, 'utf8');

const target = '- **$145 to $195/Sq. Ft. Finished Living Quarters:** Turning that shell into a home requires sub-slab continuous R-10 insulation, frost-depth perimeter thermal breaks, interior stud framing, electrical, plumbing, cold-climate heat pump mechanicals, drywall, interior finishes, and engineered condensation-control insulation.';

const replacement = '- **$145 to $195/Sq. Ft. Finished Living Quarters:** Turning that shell into a home requires [sub-slab continuous rigid insulation](sub-slab-insulation-specs.html), frost-depth perimeter thermal breaks, interior stud framing, electrical, plumbing, [cold-climate heat pump systems](cold-climate-heat-pumps.html), and [continuous exterior insulation](continuous-insulation.html) to prevent condensation. Prospective builders should also compare turnkey post-frame costs against [structural insulated panels (SIPs)](sips-vs-traditional-framing.html).';

if (c.includes(target)) {
  c = c.replace(target, replacement);
  fs.writeFileSync(p, c, 'utf8');
  console.log('Injected in-body links into barndominium-post-frame.md');
} else {
  console.error('Target not found in barndominium-post-frame.md');
}
