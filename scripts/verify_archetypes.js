const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\Dylen\\Desktop\\AEC\\Midwest';
const contentFiles = fs.readdirSync(path.join(rootDir, 'content')).filter(f => f.endsWith('.md'));

const archetypes = {
  'Archetype A: Forensic Failure Diagnosis': [
    'attic-frost-roof-sweating.md',
    'basement-lvp-flooring-moisture.md',
    'basement-waterproofing.md',
    'false-spring-envelope-thaw.md',
    'ice-dams-roofs.md',
    'summer-humidity-ac.md'
  ],
  'Archetype B: Capital Decision Matrix': [
    'icf-basements-walls.md',
    'cold-climate-heat-pumps.md',
    'sips-vs-traditional-framing.md',
    'when-to-replace-windows.md',
    'window-alternatives.md',
    'barndominium-post-frame.md',
    'energy-hikes.md'
  ],
  'Archetype C: Code & Compliance Teardown': [
    'basement-egress-window-cutting.md',
    'blower-door-checklist.md',
    'smart-vapor-retarders.md',
    'sub-slab-insulation-specs.md',
    'roof-insulation-over-sheathing.md',
    'continuous-insulation.md'
  ],
  'Archetype D: Head-to-Head Material Teardown': [
    'rockwool-vs-fiberglass.md',
    'embodied-carbon-materials.md',
    'rammed-earth-midwest-flooring.md',
    'insulating-brick.md',
    'balloon-framing.md',
    'bug-prevention.md'
  ],
  'Archetype E: Field Retrofit Protocol': [
    'attic-air-sealing-baffles.md',
    'balloon-framing-retrofit-steps.md',
    'crawlspace-encapsulation-steps.md',
    'crawlspace-encapsulation.md',
    'historic-brick-retrofit-steps.md',
    'how-to-know-if-you-need-icf-basement.md',
    'does-house-need-to-breathe.md',
    'off-grid-systems.md',
    'expansive-lawncare.md'
  ]
};

let allArchetypeFiles = [];
Object.entries(archetypes).forEach(([k, list]) => {
  console.log(`${k}: ${list.length} files`);
  allArchetypeFiles.push(...list);
});

console.log('Total categorized:', allArchetypeFiles.length);
console.log('Total files in content/:', contentFiles.length);

const missing = contentFiles.filter(f => !allArchetypeFiles.includes(f));
const extra = allArchetypeFiles.filter(f => !contentFiles.includes(f));

console.log('Missing from archetypes:', missing);
console.log('Extra in archetypes:', extra);
