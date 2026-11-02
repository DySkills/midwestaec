const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\Dylen\\Desktop\\AEC\\Midwest';
const f = path.join(rootDir, 'content', 'false-spring-envelope-thaw.md');
let lines = fs.readFileSync(f, 'utf8').split(/\r?\n/);

const newLines = `## Immediate Symptom Triage: The 24-Hour False-Spring Melt Disaster

In late winter, weather across the Great Lakes and Northern Plains frequently swings from 5°F to 45°F within 36 hours. Under bright sunshine, this rapid temperature spike triggers immediate building envelope distress:

### 1. Active Failure Symptoms
- **The "Raining Attic" Phenomenon:** Water drips from ceiling recessed can lights, bathroom exhaust grilles, and smoke detectors on sunny 40°F days when there has been zero rain.
- **The Sweating Basement Slab:** Finished basement floors become slick with condensation, and click-lock flooring squishes underfoot as humid warm air contacts deep-soil chilled concrete.
- **Ice Dam Wall Flooding:** Sun-melted snowpack flows into frozen eave dams, backing liquid water up past the roof perimeter membrane into exterior wall cavities.

### 2. Immediate Diagnostic Triage: Roof Defect vs. Melting Hoarfrost
Before hiring an emergency roofer to tear off shingles, confirm the water source:
- If water drips during a sunny thaw without rain, shine a flashlight onto the underside of your attic roof sheathing.
- If the plywood is black, damp, and dripping water across broad areas with rust rings around every roofing nail, your roof is not leaking from outside. You are witnessing the catastrophic thaw of **indoor winter hoarfrost**.`.split('\n');

// Find start of section 30
const startIndex = lines.findIndex(l => l.includes('## Mid-February, and the First False Spring Is Around the Corner...'));
const endIndex = lines.findIndex((l, i) => i > startIndex && l.includes('## 1. The Raining Attic: How Winter Hoarfrost Melts in an Afternoon'));

console.log(`Replacing lines from ${startIndex} to ${endIndex}`);
lines.splice(startIndex, endIndex - startIndex - 1, ...newLines);

fs.writeFileSync(f, lines.join('\r\n'), 'utf8');
console.log('✓ Successfully updated false-spring-envelope-thaw.md by line splice');
