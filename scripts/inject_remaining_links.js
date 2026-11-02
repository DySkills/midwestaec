const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '../content');

function insertAfterMarker(filePath, marker, textToInsert) {
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.includes(textToInsert.trim().slice(0, 40))) {
    console.log(`[Already Present] ${path.basename(filePath)}`);
    return;
  }
  const lines = content.split(/\r?\n/);
  const idx = lines.findIndex(l => l.includes(marker));
  if (idx === -1) {
    console.warn(`[Marker Not Found] in ${path.basename(filePath)}: "${marker.slice(0, 30)}..."`);
    return;
  }
  lines.splice(idx + 1, 0, '', textToInsert.trim(), '');
  fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
  console.log(`[Injected Link] ${path.basename(filePath)} -> after "${marker.slice(0, 30)}..."`);
}

console.log('=== INJECTING REMAINING IN-BODY CONTEXTUAL LINKS ===\n');

// 1. basement-lvp-flooring-moisture.md
insertAfterMarker(
  path.join(contentDir, 'basement-lvp-flooring-moisture.md'),
  'Concrete is a porous, capillary-active sponge.',
  'Unlike traditional poured concrete slabs that remain cold and damp, homes built with continuous [ICF basement foundation walls](icf-basements-walls.html) and [sub-slab rigid foam insulation](sub-slab-insulation-specs.html) elevate slab surface temperatures, preventing the subterranean condensation that destroys click-lock vinyl planks.'
);

// 2. sump-pump-failure-spring-thaw-backups.md
insertAfterMarker(
  path.join(contentDir, 'sump-pump-failure-spring-thaw-backups.md'),
  'Across the upper Midwest, March brings dramatic temperature swings.',
  'A sump basin operates as the mechanical heart of an integrated [basement waterproofing and perimeter drainage assembly](basement-waterproofing.html). In monolithic foundations like [ICF basement walls](icf-basements-walls.html), structural resistance against lateral soil water is substantially higher, especially during the acute freeze-thaw cycles explored in our [false spring envelope thaw report](false-spring-envelope-thaw.html).'
);

// 3. sips-vs-traditional-framing.md
insertAfterMarker(
  path.join(contentDir, 'sips-vs-traditional-framing.md'),
  'When budgeting a custom home or rural acreage build',
  'To maximize whole-envelope efficiency, builders frequently mount precision-cut structural insulated panels directly onto an [ICF basement foundation](icf-basements-walls.html), establishing an unbroken thermal shell. For conventional stick framing, achieving a comparable thermal envelope requires adding [exterior continuous insulation over sheathing](continuous-insulation.html).'
);

// 4. basement-egress-window-cutting.md
insertAfterMarker(
  path.join(contentDir, 'basement-egress-window-cutting.md'),
  'Basements represent the most cost-effective untapped square footage',
  'While saw-cutting into existing concrete demands heavy hydraulic equipment, new builds utilizing [insulated concrete forms (ICF)](icf-basements-walls.html) allow builders to pre-form window bucks with zero structural sawing. In either scenario, exterior window wells must tie directly into your [basement waterproofing perimeter drainage tile](basement-waterproofing.html) to prevent rainwater from pooling against the sill.'
);

// 5. attic-frost-roof-sweating.md
insertAfterMarker(
  path.join(contentDir, 'attic-frost-roof-sweating.md'),
  'Attic hoarfrost is not a roofing failure; it is an indoor air leakage',
  'Permanently stopping moisture accumulation on roof rafters requires the air-barrier protocols detailed in our [step-by-step attic air sealing and baffling guide](attic-air-sealing-baffles.html). Furthermore, the exact ceiling air leaks that generate winter attic frost are the primary driver of [catastrophic roof ice dams](ice-dams-roofs.html).'
);

// 6. roof-insulation-over-sheathing.md
insertAfterMarker(
  path.join(contentDir, 'roof-insulation-over-sheathing.md'),
  'Sandwiching four inches of rigid foam between structural roof sheathing',
  'Keeping the structural roof deck warm permanently eliminates the thermal bypasses that trigger [destructive winter ice dams](ice-dams-roofs.html). For accessible vented attics, compare this exterior approach against our [attic air sealing and rafter eave baffling tutorial](attic-air-sealing-baffles.html).'
);

// 7. crawlspace-encapsulation-steps.md
insertAfterMarker(
  path.join(contentDir, 'crawlspace-encapsulation-steps.md'),
  '## Scope & Hydrology Pre-Flight: IRC R408.3 Soil Gas & Vapor Protocols',
  'Before rolling out heavy poly, review the thermodynamic physics behind [summer vented crawlspace joist rot](crawlspace-encapsulation.html). Sealing foundation perimeter penetrations also stops subterranean pests as outlined in our [pest prevention and envelope weatherization guide](bug-prevention.html).'
);

// 8. continuous-insulation.md
insertAfterMarker(
  path.join(contentDir, 'continuous-insulation.md'),
  'Under the 2021/2024 International Energy Conservation Code',
  'When selecting exterior board materials, compare stone wool against rigid foam in our [rockwool vs fiberglass insulation teardown](rockwool-vs-fiberglass.html). Exterior continuous insulation shifts the cavity dew point outward, which directly impacts the specification of [interior smart vapor retarders](smart-vapor-retarders.html).'
);

// 9. historic-brick-retrofit-steps.md
insertAfterMarker(
  path.join(contentDir, 'historic-brick-retrofit-steps.md'),
  'The objective of this retrofit is to install high-performance interior',
  'Before applying interior insulation, review the critical freeze-thaw spalling physics in our [historic brick insulation guide](insulating-brick.html). Check embedded floor joist pockets for open vertical air channels explained in our [historic balloon framing report](balloon-framing.html).'
);

// 10. does-house-need-to-breathe.md
insertAfterMarker(
  path.join(contentDir, 'does-house-need-to-breathe.md'),
  'Air moves through a building envelope strictly according to physical',
  'Verifying whole-house envelope airtightness begins with an ASTM E779 audit using our [blower door testing checklist](blower-door-checklist.html). Proper mechanical ventilation prevents the muggy indoor air problems analyzed in our [summer humidity and AC short cycling guide](summer-humidity-ac.html), while allowing builders to right-size efficient [cold-climate heat pump systems](cold-climate-heat-pumps.html).'
);

// 11. blower-door-checklist.md
insertAfterMarker(
  path.join(contentDir, 'blower-door-checklist.md'),
  'Under the International Energy Conservation Code (IECC Section R402.4)',
  'Depressurization testing directly refutes the misconception that buildings need drafts, as explained in [why houses do not need to breathe](does-house-need-to-breathe.html). When blower door diagnostics identify severe ceiling leakage, the primary fix is systematic [attic air sealing and eave baffling](attic-air-sealing-baffles.html).'
);

// 12. summer-humidity-ac.md
insertAfterMarker(
  path.join(contentDir, 'summer-humidity-ac.md'),
  'During peak Midwest summers, when outdoor dew points exceed 72°F',
  'Variable-speed inverter systems provide superior continuous dehumidification compared to single-stage units, as shown in our [cold-climate heat pump analysis](cold-climate-heat-pumps.html). In homes over crawlspaces, indoor humidity is often driven by moisture rising from damp soil, requiring complete [crawlspace encapsulation](crawlspace-encapsulation.html).'
);

// 13. energy-hikes.md
insertAfterMarker(
  path.join(contentDir, 'energy-hikes.md'),
  'When winter natural gas tariffs and electric heating rates spike',
  'Homeowners can counter escalating utility rates by replacing outdated heating equipment with high-COP [cold-climate heat pumps](cold-climate-heat-pumps.html). Before investing in high-cost windows, evaluate true energy payback curves in our [window replacement financial guide](when-to-replace-windows.html), or capture fast returns with [low-cost attic air sealing](attic-air-sealing-baffles.html).'
);

console.log('\nFinished injecting remaining links.');
