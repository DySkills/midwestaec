const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '../content');

// Helper to append or weave contextual paragraph into specific sections
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
  // Insert after the marker line (or next non-blank line)
  lines.splice(idx + 1, 0, '', textToInsert.trim(), '');
  fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
  console.log(`[Injected Link] ${path.basename(filePath)} -> after "${marker.slice(0, 30)}..."`);
}

console.log('=== INJECTING IN-BODY CONTEXTUAL INTERNAL LINKS ===\n');

// 1. basement-waterproofing.md -> icf-basements-walls.html & sub-slab-insulation-specs.html & basement-lvp-flooring-moisture.html
insertAfterMarker(
  path.join(contentDir, 'basement-waterproofing.md'),
  'The primary failure point is the **cove joint**',
  'While traditional poured concrete foundations wick moisture through continuous capillary action, an [ICF basement foundation](icf-basements-walls.html) encases the structural concrete core in continuous expanded polystyrene (EPS) foam, eliminating cold joints and condensation planes entirely. Additionally, stopping subterranean moisture vapor from degrading finishes requires pairing Class A vapor retarders with [sub-slab rigid foam insulation specifications](sub-slab-insulation-specs.html) and verifying limits for [basement LVP flooring moisture emissions](basement-lvp-flooring-moisture.html).'
);

// 2. sub-slab-insulation-specs.md -> icf-basements-walls.html & basement-waterproofing.html & basement-lvp-flooring-moisture.html
insertAfterMarker(
  path.join(contentDir, 'sub-slab-insulation-specs.md'),
  'In a standard basement with forced-air heating',
  'To eliminate the perimeter thermal bridge where the concrete slab meets the exterior stem wall, connecting horizontal sub-slab foam directly to continuous [ICF basement wall assemblies](icf-basements-walls.html) creates an unbroken thermal boundary from footing to rafters. Furthermore, below-slab rigid foam must always coordinate with [basement waterproofing and under-slab drainage tiles](basement-waterproofing.html) to prevent trapped moisture from creating the dew-point condensation detailed in our [basement LVP flooring moisture report](basement-lvp-flooring-moisture.html).'
);

// 3. how-to-know-if-you-need-icf-basement.md -> icf-basements-walls.html & basement-waterproofing.html
insertAfterMarker(
  path.join(contentDir, 'how-to-know-if-you-need-icf-basement.md'),
  '## Diagnostic Field Triage',
  'Homeowners evaluating whether to repair existing failing masonry or invest in a structural rebuild should review our itemized contractor cost breakdown for [ICF basement wall construction](icf-basements-walls.html), as well as our forensic guide on [basement waterproofing and hydrostatic head pressure](basement-waterproofing.html).'
);

// 4. basement-lvp-flooring-moisture.md -> icf-basements-walls.html & sub-slab-insulation-specs.html
insertAfterMarker(
  path.join(contentDir, 'basement-lvp-flooring-moisture.md'),
  'Standard concrete floor slabs poured directly over damp earth',
  'Unlike conventional uninsulated slabs that remain chilled at ground temperature, homes constructed with continuous [ICF basement walls](icf-basements-walls.html) and [sub-slab rigid insulation specs](sub-slab-insulation-specs.html) maintain elevated slab surface temperatures, preventing the relative humidity spikes that cause click-lock flooring failure.'
);

// 5. sump-pump-failure-spring-thaw-backups.md -> icf-basements-walls.html & basement-waterproofing.html & false-spring-envelope-thaw.html
insertAfterMarker(
  path.join(contentDir, 'sump-pump-failure-spring-thaw-backups.md'),
  'Because deep soil remains frozen solid weeks after air temperatures warm up',
  'A sump pump operates as the final mechanical relief valve in a comprehensive [exterior basement waterproofing system](basement-waterproofing.html). In monolithic foundations like [ICF basement walls](icf-basements-walls.html), hydrostatic resistance is significantly higher than in traditional mortar block. Rapid snowmelt risks are especially acute during the freeze-thaw cycles analyzed in our [false spring envelope thaw report](false-spring-envelope-thaw.html).'
);

// 6. sips-vs-traditional-framing.md -> icf-basements-walls.html & continuous-insulation.html
insertAfterMarker(
  path.join(contentDir, 'sips-vs-traditional-framing.md'),
  'In high-performance residential architecture across the Upper Midwest',
  'To maximize whole-envelope efficiency, builders frequently mount precision-cut structural insulated panels directly onto an [ICF basement foundation](icf-basements-walls.html), establishing an airtight thermal barrier from footing to roof peak. For conventional stick framing, achieving a comparable thermal envelope requires adding [exterior continuous insulation over sheathing](continuous-insulation.html).'
);

// 7. basement-egress-window-cutting.md -> icf-basements-walls.html & basement-waterproofing.html
insertAfterMarker(
  path.join(contentDir, 'basement-egress-window-cutting.md'),
  'Cutting an egress opening into a foundation wall',
  'While saw-cutting into existing concrete demands heavy hydraulic equipment, new builds utilizing [insulated concrete forms (ICF)](icf-basements-walls.html) allow builders to pre-form window bucks with zero structural sawing. In either scenario, exterior window wells must tie directly into your [basement waterproofing perimeter drainage tile](basement-waterproofing.html) to prevent rainwater from pooling against the sill.'
);

// 8. attic-air-sealing-baffles.md -> ice-dams-roofs.html & attic-frost-roof-sweating.html & roof-insulation-over-sheathing.html
insertAfterMarker(
  path.join(contentDir, 'attic-air-sealing-baffles.md'),
  'Eliminating ice dams and cutting winter ceiling heat loss',
  'Stopping convective ceiling bypasses is the single most effective permanent defense against [destructive winter ice dams](ice-dams-roofs.html). Unsealed attic air leaks also channel warm, humid indoor air into freezing rafters, causing [winter attic frost and roof sheathing sweating](attic-frost-roof-sweating.html). On low-slope or cathedral ceilings where rafter baffles cannot fit, builders utilize [continuous roof insulation over sheathing](roof-insulation-over-sheathing.html).'
);

// 9. attic-frost-roof-sweating.md -> attic-air-sealing-baffles.html & ice-dams-roofs.html
insertAfterMarker(
  path.join(contentDir, 'attic-frost-roof-sweating.md'),
  'The physics of attic frost accumulation',
  'Permanently stopping moisture accumulation on roof rafters requires the air-barrier protocols detailed in our [step-by-step attic air sealing and baffling guide](attic-air-sealing-baffles.html). Furthermore, the exact ceiling air leaks that generate winter attic frost are the primary driver of [catastrophic roof ice dams](ice-dams-roofs.html).'
);

// 10. ice-dams-roofs.md -> attic-air-sealing-baffles.html & attic-frost-roof-sweating.html
insertAfterMarker(
  path.join(contentDir, 'ice-dams-roofs.md'),
  'The escaping heat conducts through the plywood or OSB roof sheathing',
  'Stopping this heat escape requires executing the top-plate sealing detailed in our [attic air sealing and eave baffling tutorial](attic-air-sealing-baffles.html). These same ceiling bypasses are responsible for [winter attic frost and sweating roof sheathing](attic-frost-roof-sweating.html) during extreme sub-zero cold snaps.'
);

// 11. roof-insulation-over-sheathing.md -> ice-dams-roofs.html & attic-air-sealing-baffles.html
insertAfterMarker(
  path.join(contentDir, 'roof-insulation-over-sheathing.md'),
  'Installing continuous rigid foam boards over unvented roof decks',
  'Keeping the structural roof sheathing above the indoor dew point permanently eliminates [winter roof ice damming](ice-dams-roofs.html). For homes with accessible vented attics, compare this exterior approach against our [step-by-step attic air sealing and eave baffling retrofit](attic-air-sealing-baffles.html).'
);

// 12. cold-climate-heat-pumps.md -> heat-pump-aux-heat-lockout-balance-point.html & energy-hikes.html & furnace-vent-pipe-freeze-lockout.html
insertAfterMarker(
  path.join(contentDir, 'cold-climate-heat-pumps.md'),
  'Evaluating heat pump performance requires understanding',
  'To unlock maximum seasonal efficiency and protect utility bills, homeowners must configure thermostats for [proper auxiliary heat lockout and thermal balance points](heat-pump-aux-heat-lockout-balance-point.html). Protecting your home against [regional winter energy rate hikes](energy-hikes.html) also means ensuring that dual-fuel backup systems do not suffer from [furnace vent pipe freeze lockouts](furnace-vent-pipe-freeze-lockout.html).'
);

// 13. heat-pump-aux-heat-lockout-balance-point.md -> cold-climate-heat-pumps.html & furnace-vent-pipe-freeze-lockout.html
insertAfterMarker(
  path.join(contentDir, 'heat-pump-aux-heat-lockout-balance-point.md'),
  'Modern cold-climate heat pumps maintain efficient thermodynamic lift',
  'Modern inverter compressors maintain impressive heating capacity down to -15°F, as itemized in our [cold-climate heat pump performance teardown](cold-climate-heat-pumps.html). For dual-fuel installations backed up by gas, homeowners must also protect sidewall terminations against [condensing furnace vent pipe freeze lockouts](furnace-vent-pipe-freeze-lockout.html).'
);

// 14. furnace-vent-pipe-freeze-lockout.md -> heat-pump-aux-heat-lockout-balance-point.html & cold-climate-heat-pumps.html
insertAfterMarker(
  path.join(contentDir, 'furnace-vent-pipe-freeze-lockout.md'),
  'Over 60% of these mid-blizzard failures are not cracked heat exchangers',
  'When a high-efficiency gas furnace locks out during a polar cold snap, homeowners with dual-fuel equipment rely on emergency staging as explained in our [auxiliary heat balance point lockout guide](heat-pump-aux-heat-lockout-balance-point.html). Many homeowners tired of winter combustion venting failures transition to all-electric [cold-climate heat pumps](cold-climate-heat-pumps.html).'
);

// 15. crawlspace-encapsulation.md -> crawlspace-encapsulation-steps.html & sub-slab-insulation-specs.html & bug-prevention.html
insertAfterMarker(
  path.join(contentDir, 'crawlspace-encapsulation.md'),
  'When outdoor air at 88°F and 75% relative humidity',
  'Converting a vented foundation into a clean, conditioned space requires executing our [step-by-step crawlspace encapsulation protocol](crawlspace-encapsulation-steps.html). Soil moisture barriers should coordinate with [sub-slab rigid foam insulation specifications](sub-slab-insulation-specs.html), permanently denying pests the damp timber detailed in our [building envelope bug prevention guide](bug-prevention.html).'
);

// 16. crawlspace-encapsulation-steps.md -> crawlspace-encapsulation.html & bug-prevention.html
insertAfterMarker(
  path.join(contentDir, 'crawlspace-encapsulation-steps.md'),
  'Converting an unconditioned, dirt-floor crawl space',
  'Before rolling out heavy poly, review the thermodynamic physics behind [summer vented crawlspace joist rot](crawlspace-encapsulation.html). Sealing foundation perimeter penetrations also stops subterranean pests as outlined in our [pest prevention and envelope weatherization guide](bug-prevention.html).'
);

// 17. when-to-replace-windows.md -> window-alternatives.html & blower-door-checklist.html & energy-hikes.html
insertAfterMarker(
  path.join(contentDir, 'when-to-replace-windows.md'),
  'Replacing 20 single-pane windows with high-efficiency double-pane units',
  'Before signing high-cost replacement bids, compare your payback against [historic window alternatives and Low-E storm retrofits](window-alternatives.html). Verifying whether drafts leak through glass or around rough openings requires a [blower door air leakage test](blower-door-checklist.html), especially when fighting [spiking winter energy costs](energy-hikes.html).'
);

// 18. window-alternatives.md -> when-to-replace-windows.html & continuous-insulation.html
insertAfterMarker(
  path.join(contentDir, 'window-alternatives.md'),
  'Equipping 20 windows with Low-E exterior storm windows',
  'To determine whether your existing frames justify repair or replacement, review our financial analysis on [when to replace windows vs when to repair](when-to-replace-windows.html). Capital saved on windows can be reinvested in high-ROI upgrades like [exterior continuous insulation](continuous-insulation.html).'
);

// 19. rockwool-vs-fiberglass.md -> continuous-insulation.html & smart-vapor-retarders.html & embodied-carbon-materials.html
insertAfterMarker(
  path.join(contentDir, 'rockwool-vs-fiberglass.md'),
  'Stone wool\'s dense, tightly packed mineral fiber matrix mechanically halts',
  'To completely eliminate thermal bridging through studs, cavity insulation should be paired with [exterior continuous insulation over sheathing](continuous-insulation.html). In variable Midwest climates, stone wool assemblies perform best when protected with a [smart vapor retarder membrane](smart-vapor-retarders.html) rather than polyethylene, while delivering the low environmental impact explored in our [embodied carbon materials teardown](embodied-carbon-materials.html).'
);

// 20. continuous-insulation.md -> rockwool-vs-fiberglass.html & smart-vapor-retarders.html
insertAfterMarker(
  path.join(contentDir, 'continuous-insulation.md'),
  'Building codes across the Midwest increasingly require continuous exterior insulation',
  'When selecting exterior board materials, compare stone wool against rigid foam in our [rockwool vs fiberglass insulation teardown](rockwool-vs-fiberglass.html). Exterior continuous insulation shifts the cavity dew point outward, which directly impacts the specification of [interior smart vapor retarders](smart-vapor-retarders.html).'
);

// 21. smart-vapor-retarders.md -> continuous-insulation.html & rockwool-vs-fiberglass.html
insertAfterMarker(
  path.join(contentDir, 'smart-vapor-retarders.md'),
  'When inward-migrating water vapor hits an impermeable sheet of 6-mil plastic',
  'Wall cavity moisture dynamics change significantly when the building envelope incorporates [exterior continuous insulation](continuous-insulation.html). Variable membranes pair especially well with dense, hydrophobic batts as shown in our [rockwool vs fiberglass insulation teardown](rockwool-vs-fiberglass.html).'
);

// 22. embodied-carbon-materials.md -> rockwool-vs-fiberglass.html & continuous-insulation.html
insertAfterMarker(
  path.join(contentDir, 'embodied-carbon-materials.md'),
  'In contrast, vapor-open assemblies using dense-pack cellulose',
  'Dense stone mineral wool also delivers non-combustible fire protection and density stability as analyzed in our [rockwool vs fiberglass field test](rockwool-vs-fiberglass.html). Combining vapor-permeable cellulose with wood fiber creates an effective [continuous exterior insulation assembly](continuous-insulation.html).'
);

// 23. balloon-framing.md -> balloon-framing-retrofit-steps.md & insulating-brick.md & rockwool-vs-fiberglass.html
insertAfterMarker(
  path.join(contentDir, 'balloon-framing.md'),
  'Constructed extensively between 1880 and 1940 across Midwest urban centers',
  'Halting the vertical stack effect in open cavities requires the step-by-step procedures in our [balloon framing firestopping retrofit tutorial](balloon-framing-retrofit-steps.html). Many historic balloon-frame homes also feature masonry envelopes that require the moisture precautions in our [historic brick insulation guide](insulating-brick.html), using non-combustible mineral wool evaluated in our [rockwool vs fiberglass insulation teardown](rockwool-vs-fiberglass.html).'
);

// 24. balloon-framing-retrofit-steps.md -> balloon-framing.html & blower-door-checklist.html
insertAfterMarker(
  path.join(contentDir, 'balloon-framing-retrofit-steps.md'),
  'Halting the severe stack-effect drafts and fire hazards',
  'Before cutting firestops, examine the structural cavity flues detailed in our [historic balloon framing engineering overview](balloon-framing.html). Verifying draft elimination after air sealing requires depressurization testing via our [blower door testing checklist](blower-door-checklist.html).'
);

// 25. insulating-brick.md -> historic-brick-retrofit-steps.html & balloon-framing.html
insertAfterMarker(
  path.join(contentDir, 'insulating-brick.md'),
  'Across historic Midwest urban centers',
  'Executing a safe interior insulation retrofit requires following our [historic brick repointing and interior retrofit manual](historic-brick-retrofit-steps.html). Inspectors evaluating older masonry buildings must also identify open floor joist flues detailed in our [balloon framing field guide](balloon-framing.html).'
);

// 26. historic-brick-retrofit-steps.md -> insulating-brick.html & balloon-framing.html
insertAfterMarker(
  path.join(contentDir, 'historic-brick-retrofit-steps.md'),
  'Insulating century-old mass brick from the interior',
  'Before applying interior insulation, review the critical freeze-thaw spalling physics in our [historic brick insulation guide](insulating-brick.html). Check embedded floor joist pockets for open vertical air channels explained in our [historic balloon framing report](balloon-framing.html).'
);

// 27. does-house-need-to-breathe.md -> blower-door-checklist.html & summer-humidity-ac.html & cold-climate-heat-pumps.html
insertAfterMarker(
  path.join(contentDir, 'does-house-need-to-breathe.md'),
  'The modern building science mandate is simple: build tight, ventilate right',
  'Verifying whole-house envelope airtightness begins with an ASTM E779 audit using our [blower door testing checklist](blower-door-checklist.html). Proper mechanical ventilation prevents the muggy indoor air problems analyzed in our [summer humidity and AC short cycling guide](summer-humidity-ac.html), while allowing builders to right-size efficient [cold-climate heat pump systems](cold-climate-heat-pumps.html).'
);

// 28. blower-door-checklist.md -> does-house-need-to-breathe.html & attic-air-sealing-baffles.html
insertAfterMarker(
  path.join(contentDir, 'blower-door-checklist.md'),
  'Whole-house airtightness testing under ASTM E779',
  'Depressurization testing directly refutes the misconception that buildings need leaks, as explained in [why houses do not need to breathe](does-house-need-to-breathe.html). When blower door diagnostics identify severe ceiling leakage, the primary fix is systematic [attic air sealing and eave baffling](attic-air-sealing-baffles.html).'
);

// 29. summer-humidity-ac.md -> cold-climate-heat-pumps.html & crawlspace-encapsulation.html
insertAfterMarker(
  path.join(contentDir, 'summer-humidity-ac.md'),
  'When cooling systems are oversized, compressors satisfy the thermostat',
  'Variable-speed inverter systems provide superior continuous dehumidification compared to single-stage units, as shown in our [cold-climate heat pump analysis](cold-climate-heat-pumps.html). In homes over crawlspaces, indoor humidity is often driven by moisture rising from damp soil, requiring complete [crawlspace encapsulation](crawlspace-encapsulation.html).'
);

// 30. cold-climate-septic-well-freeze-solutions.md -> off-grid-systems.html & expansive-lawncare.html
insertAfterMarker(
  path.join(contentDir, 'cold-climate-septic-well-freeze-solutions.md'),
  'Throughout the rural and suburban fringe of the Midwest',
  'Protecting rural well pumps from extended winter power outages coordinates directly with the microgrid sizing in our [rural off-grid systems guide](off-grid-systems.html). Furthermore, directing surface water away from drainfields requires the civil grading principles in our [expansive lawncare and swale drainage guide](expansive-lawncare.html).'
);

// 31. off-grid-systems.md -> cold-climate-septic-well-freeze-solutions.html & cold-climate-heat-pumps.html
insertAfterMarker(
  path.join(contentDir, 'off-grid-systems.md'),
  'Engineering an off-grid residential homestead in the Upper Midwest',
  'Sub-zero off-grid homesteading requires freeze-proofing private water laterals as detailed in our [cold-climate septic and well freeze solutions](cold-climate-septic-well-freeze-solutions.html). Many rural systems also integrate ultra-efficient [cold-climate heat pumps](cold-climate-heat-pumps.html) for primary heating.'
);

// 32. expansive-lawncare.md -> basement-waterproofing.html & cold-climate-septic-well-freeze-solutions.html
insertAfterMarker(
  path.join(contentDir, 'expansive-lawncare.md'),
  'Transitioning from a typical suburban quarter-acre lot',
  'Grading acreage swales to shed runoff prevents catastrophic foundation saturation analyzed in our [basement waterproofing guide](basement-waterproofing.html). Civil swale routing must also safeguard private utilities as outlined in our [cold-climate septic and well freeze solutions](cold-climate-septic-well-freeze-solutions.html).'
);

// 33. energy-hikes.md -> cold-climate-heat-pumps.html & when-to-replace-windows.html & attic-air-sealing-baffles.html
insertAfterMarker(
  path.join(contentDir, 'energy-hikes.md'),
  'Rising electric and natural gas utility tariffs across the Midwest',
  'Homeowners can counter escalating utility rates by replacing outdated heating equipment with high-COP [cold-climate heat pumps](cold-climate-heat-pumps.html). Before investing in high-cost windows, evaluate true energy payback curves in our [window replacement financial guide](when-to-replace-windows.html), or capture fast returns with [low-cost attic air sealing](attic-air-sealing-baffles.html).'
);

// 34. rammed-earth-midwest-flooring.md -> sub-slab-insulation-specs.html & embodied-carbon-materials.html
insertAfterMarker(
  path.join(contentDir, 'rammed-earth-midwest-flooring.md'),
  'Unstabilized rammed earth and traditional poured earthen floors',
  'Earthen slabs in cold climates must be thermally decoupled from ground frost by installing [sub-slab rigid foam insulation](sub-slab-insulation-specs.html). Compare natural soil acoustics and capacitance against other sustainable assemblies in our [embodied carbon materials teardown](embodied-carbon-materials.html).'
);

// 35. bug-prevention.md -> crawlspace-encapsulation.html & sub-slab-insulation-specs.html
insertAfterMarker(
  path.join(contentDir, 'bug-prevention.md'),
  'Homeowners in rural, peri-urban, and wooded Midwest parcels',
  'Closing off insect entry routes requires eliminating crawlspace moisture through [crawlspace encapsulation](crawlspace-encapsulation.html). When insulating foundations, protect below-grade foam from insect tunneling using borate-treated products specified in our [sub-slab insulation guide](sub-slab-insulation-specs.html).'
);

// 36. icf-basements-walls.md -> basement-waterproofing.html & sub-slab-insulation-specs.html & how-to-know-if-you-need-icf-basement.html
insertAfterMarker(
  path.join(contentDir, 'icf-basements-walls.md'),
  'Insulated Concrete Forms (ICF), often called an "ice block foundation"',
  'Even with continuous EPS insulation, managing hydrostatic pressure in heavy clay requires proper [basement waterproofing and perimeter drainage](basement-waterproofing.html). To achieve an unbroken thermal envelope, connect wall forms to [sub-slab rigid foam insulation](sub-slab-insulation-specs.html), or diagnose existing wall failure symptoms with our guide on [how to know if you need an ICF basement](how-to-know-if-you-need-icf-basement.html).'
);

console.log('\nFinished injecting in-body contextual links.');
