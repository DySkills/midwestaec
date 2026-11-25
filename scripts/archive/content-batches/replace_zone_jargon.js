const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\Dylen\\Desktop\\AEC\\Midwest';

// 1. UPDATE content/icf-basements-walls.md
const icfPath = path.join(rootDir, 'content', 'icf-basements-walls.md');
let icf = fs.readFileSync(icfPath, 'utf8');

icf = icf.replace(
  'In Climate Zones 5, 6, and 7, basements represent more than one-third',
  'Across the Great Lakes, the Upper Midwest, and the Northern Plains, basements represent more than one-third'
);

icf = icf.replace(
  '## Sub-Grade Thermal Dynamics: Why Standard Poured Basements Hemorrhage Heat in Zones 5–7',
  '## Sub-Grade Thermal Dynamics: Why Standard Poured Basements Hemorrhage Heat in the Northern Plains & Great Lakes'
);

icf = icf.replace(
  'In the Midwest (Climate Zones 5 through 7), foundation walls must reach 8 to 9 feet',
  'Across the Great Lakes, the Upper Midwest, and the Northern Plains, foundation walls must reach 8 to 9 feet'
);

icf = icf.replace(
  'In Climate Zones 5 through 7, building energy codes (2021/2024 IECC Section R402) mandate that finished basement walls achieve a minimum of **R-15 continuous insulation or R-19 cavity insulation**.',
  'Across northern Midwest and Great Lakes states, building energy codes (2021/2024 IECC Section R402) mandate that finished basement walls achieve a minimum of **R-15 continuous insulation or R-19 cavity insulation**.'
);

icf = icf.replace(
  'In Upper Midwest winters, an ICF basement retains heat via its concrete thermal flywheel ($c_p = 0.88 \\text{ kJ/kg}\\cdot\\text{K}$).',
  'In harsh Great Lakes and prairie winters, an ICF basement retains heat via its concrete thermal flywheel ($c_p = 0.88 \\text{ kJ/kg}\\cdot\\text{K}$).'
);

icf = icf.replace(
  'The table below contrasts standard uninsulated basement foundations against full-height ICF assemblies in Climate Zone 5 & 6:',
  'The table below contrasts standard uninsulated basement foundations against full-height ICF assemblies across the Great Lakes and Northern Plains:'
);

fs.writeFileSync(icfPath, icf, 'utf8');
console.log('✓ Replaced zone jargon in icf-basements-walls.md');

// 2. UPDATE content/cold-climate-heat-pumps.md
const hpPath = path.join(rootDir, 'content', 'cold-climate-heat-pumps.md');
let hp = fs.readFileSync(hpPath, 'utf8');

hp = hp.replace(
  'summary: "Cold-climate heat pumps at -20°F: How vapor-injection works, why ice on outdoor coils in winter is normal (defrost diagnostics), and real-world Zone 5 COP curves."',
  'summary: "Cold-climate heat pumps at -20°F: How vapor-injection works, why ice on outdoor coils in winter is normal (defrost diagnostics), and real-world Great Lakes and Plains COP curves."'
);

hp = hp.replace(
  '## Engineering Evaluation: Heat Pump Operational Boundaries in Zone 5',
  '## Engineering Evaluation: Heat Pump Operational Boundaries Across the Great Lakes & Plains'
);

hp = hp.replace(
  'The fundamental thermodynamic challenge of winter heating in the Midwest (Climate Zones 4, 5, and 6) is the divergence between building heating load and equipment output:',
  'The fundamental thermodynamic challenge of winter heating across the Great Lakes, the Corn Belt, and the Northern Plains is the divergence between building heating load and equipment output:'
);

hp = hp.replace(
  '![Cold-Climate Heat Pump Capacity and COP vs Outdoor Temperature in Climate Zones 4 and 5](images/cold-climate-heat-pump-diagram.jpg)',
  '![Cold-Climate Heat Pump Capacity and COP vs Outdoor Temperature in Midwest and Great Lakes Winters](images/cold-climate-heat-pump-diagram.jpg)'
);

hp = hp.replace(
  'In Climate Zones 5 and 6, local mechanical codes and manufacturer installation manuals require heat pumps to be mounted on elevated stands',
  'Across Great Lakes and Upper Midwest snow belts, local mechanical codes and manufacturer installation manuals require heat pumps to be mounted on elevated stands'
);

hp = hp.replace(
  'requiring careful sizing evaluation in Climate Zone 5.',
  'requiring careful sizing evaluation across cold Great Lakes and Plains climates.'
);

hp = hp.replace(
  'verified Climate Zone 5 mechanical contractors.',
  'verified Great Lakes and Midwest mechanical contractors.'
);

fs.writeFileSync(hpPath, hp, 'utf8');
console.log('✓ Replaced zone jargon in cold-climate-heat-pumps.md');
