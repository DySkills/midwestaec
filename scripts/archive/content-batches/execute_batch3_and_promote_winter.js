const fs = require('fs');
const path = require('path');

function replaceBetweenMarkers(filePath, startMarker, endMarker, replacement) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/);
  const startIdx = lines.findIndex(l => l.trim().startsWith(startMarker));
  if (startIdx === -1) {
    console.error('Start marker not found in ' + filePath + ': ' + startMarker);
    return false;
  }
  let endIdx = -1;
  for (let i = startIdx + 1; i < lines.length; i++) {
    if (lines[i].trim().startsWith(endMarker)) {
      endIdx = i;
      break;
    }
  }
  if (endIdx === -1) {
    console.error('End marker not found in ' + filePath + ': ' + endMarker);
    return false;
  }
  
  const repLines = replacement.trim().split('\n');
  lines.splice(startIdx, endIdx - startIdx, ...repLines, '');
  fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
  console.log('Successfully replaced section in ' + filePath + ' [' + startMarker + ' -> ' + endMarker + ']');
  return true;
}

function replaceExact(filePath, target, replacement) {
  const content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes(target)) {
    console.error('Target not found in ' + filePath + ': ' + target.slice(0, 50));
    return false;
  }
  const updated = content.replace(target, replacement);
  fs.writeFileSync(filePath, updated, 'utf8');
  console.log('Successfully replaced exact match in ' + filePath + ': ' + target.slice(0, 40));
  return true;
}

console.log('=== EXECUTING BATCH 3: MATERIAL TEARDOWNS (BLUEPRINT D) ===');

// 1. rockwool-vs-fiberglass.md
replaceBetweenMarkers(
  'content/rockwool-vs-fiberglass.md',
  '## The Lumberyard Aisle at 15°F',
  '## 1. Density & Winter Convective Air Looping',
  `## Jobsite Reality vs. Shelf Pricing: Why Cheap Fiberglass Batts Fail Sub-Zero Midwest Wall Assemblies

On paper, standard R-15 fiberglass batts cost roughly $0.62 to $0.78 per square foot of cavity wall area, while dense stone mineral wool (Rockwool Comfortbatt) runs $1.15 to $1.35 per square foot—a 40% to 50% upfront material premium that totals $1,200 to $1,800 across an average 2,200 sq. ft. home.

However, laboratory environmental chamber testing and jobsite thermal imaging demonstrate that low-density spun fiberglass (0.7 to 1.0 lb/cu.ft.) experiences dramatic thermal derating during Midwest polar cold snaps. When outdoor temperatures plunge below 0°F, extreme temperature differentials between interior drywall (70°F) and exterior OSB sheathing create internal convective air currents within low-density fiberglass batts, dropping their effective thermal resistance by up to 35%. Dense mineral wool (2.0 to 2.5 lbs/cu.ft.) physically arrests convective airflow loops, maintains dimensional spring-tension against stud cavities without stapling, and remains completely unaffected by water or fire.`
);

// 2. embodied-carbon-materials.md
replaceBetweenMarkers(
  'content/embodied-carbon-materials.md',
  '## Winter Cold Along Lake St. Clair: The 26-Year Payback Reality',
  '## The Petrochemical Foam Trap: Why Closed-Cell Spray Foam Rots Wood Framing',
  `## Closed-Cell Foam vs. Dense-Pack Cellulose: Vapor Permeance, Cavity Rot & 25-Year Payback Reality

Subcontractor bids across the Great Lakes and Upper Midwest frequently push closed-cell spray polyurethane foam (ccSPF) at $2.20 to $2.80 per board foot as the premium standard for exterior wall cavities. At R-6.5 per inch, spray foam promises maximum R-value in a standard 2x6 stud bay while creating an airtight seal in a single trade pass.

However, forensic building science evaluations reveal two critical liabilities in cold-climate envelopes:
1. **The Inward Vapor Trap:** Closed-cell spray foam cures into a Class II/Class I vapor retarder (0.8 to 1.2 perms at 2 inches). When driving winter rain or spring humidity bypasses the exterior cladding and penetrates OSB sheathing, the impermeable foam layer prevents inward drying. Trapped moisture against wood framing elevates wood moisture content (MC) above 20%, initiating fungal rot and joist decay behind drywall.
2. **Embodied Carbon & GWP Payback:** Hydrofluoroolefin (HFO) and traditional HFC blowing agents carry substantial upfront global warming potential. When factored against dense-pack borate-treated cellulose ($0.95–$1.25/sq.ft.) or rigid wood fiber boards, spray foam requires 22 to 26 years of operational heating savings just to offset the greenhouse gas emissions generated during its chemical manufacture.`
);

// 3. rammed-earth-midwest-flooring.md
replaceBetweenMarkers(
  'content/rammed-earth-midwest-flooring.md',
  '## Dawn on the River Bluffs: The Seduction of Compacted Soil',
  '## The Thermal Mass Illusion: R-Value vs. Thermal Capacitance',
  `## Soil Physics vs. Midwest Frost: Thermal Mass, Freeze-Thaw Durability & Foundation Integration

Unstabilized rammed earth and traditional poured earthen floors possess undeniable aesthetic appeal and low embodied carbon. Composed of subsoil, clay binders, graded sand aggregates, and natural oils, compacted earthen assemblies deliver high volumetric heat capacity and acoustic dampening.

However, building with earth in the Upper Midwest and Northern Plains requires strict adherence to soil mechanics and thermodynamic boundaries that warm, arid regions never encounter:
1. **Thermal Mass vs. True Thermal Resistance:** Compacted soil delivers an R-value of barely **R-0.20 to R-0.25 per inch**. A standard 12-inch rammed earth wall provides only R-2.4 to R-3.0 of thermal resistance—grossly deficient compared to the IECC mandatory baseline of R-20+ to R-30 for above-grade walls. Uninsulated earth functions as an immense thermal sink, drawing heat out of the living space during sub-zero cold snaps.
2. **Capillary Spalling & Freeze-Thaw Destruction:** Without chemical stabilization (such as 6% to 9% Portland cement or hydraulic lime) and continuous sub-slab extruded polystyrene (XPS R-10 minimum), groundwater migrating through clay subgrades saturates the soil matrix. During winter freeze cycles, trapped water expands 9% by volume, destroying the clay-aggregate bond and crumbling earthen surfaces into loose silt.`
);

// 4. insulating-brick.md
replaceBetweenMarkers(
  'content/insulating-brick.md',
  '## The Cold Brick of Logan Square at 4°F',
  '## The Physics of Mass Masonry: The Waste-Heat Storage Engine',
  `## Historic Multi-Wythe Masonry Physics: Why Interior Spray Foam Causes Freeze-Thaw Spalling

Across historic Midwest urban centers—Chicago, St. Louis, Milwaukee, Detroit, and Minneapolis—hundreds of thousands of pre-1940 structures feature multi-wythe structural mass brick walls (typically 2 to 3 wythes of soft, low-fired common clay brick). When planning gut renovations, contractors frequently propose spraying 2 to 3 inches of closed-cell spray polyurethane foam directly onto the interior face of the brick to achieve an airtight R-13 to R-20 assembly.

Forensic masonry evaluations demonstrate why this approach causes catastrophic structural failure:
1. **Starving the Brick of Indoor Waste Heat:** For over a century, historic brick envelopes survived sub-zero Midwest winters because escaping indoor heat maintained the brick temperature above 32°F, continually evaporating driving rain and moisture outward.
2. **Critical Saturation & Exterior Spalling:** Adding interior insulation drops the temperature of the exterior brick wythe to ambient outdoor winter temperatures (-10°F to 10°F). When winter rain or snowmelt drives into the soft brick and the moisture saturation exceeds the critical threshold (typically 80% to 85% of pore volume), freezing water expands by 9%. This generates internal hydraulic pressure exceeding 2,000 PSI, popping off the decorative brick face in sheets (spalling) and turning mortar joints into loose sand.
3. **Joist Pocket Decay:** Wood timber floor joists embedded in exterior masonry pockets lose heat, becoming condensation cold spots where relative humidity exceeds 90%, rotting joist bearing ends within 5 to 8 years.`
);

// 5. balloon-framing.md
replaceBetweenMarkers(
  'content/balloon-framing.md',
  '## Drafts in the Old City at 12°F',
  '## Anatomy of a Balloon-Framed House: Ribbons & Open Flues',
  `## Structural Flues & Convective Drafts: Why Historic Balloon Framing Leaks 40% of Whole-House Energy

Constructed extensively between 1880 and 1940 across Midwest urban centers and rail towns, balloon-framed structures utilize continuous full-height 2x4 wall studs running uninterrupted from the basement foundation sill plate directly up to the second-story attic top plate. Intermediate floor joists rest on a 1x4 or 1x6 ribbon board notched into the interior stud edge, leaving every stud bay completely open from bottom to top.

In modern building science and life-safety engineering, unmitigated balloon framing creates two severe liabilities:
1. **The Uncontrolled Two-Story Convective Chimney:** Standard platform framing provides natural horizontal fireblocking at every floor level via bottom and top wall plates. In balloon framing, unblocked stud cavities act as continuous pneumatic chimneys. Under stack-effect pressure in sub-zero weather, cold outdoor air sucked through stone foundations and basement sill plates accelerates upward through wall cavities, cooling interior plaster walls to 50°F and dumping expensive interior heat into the attic at rates exceeding 800 to 1,200 CFM50.
2. **The 3-Minute Life-Safety Fire Hazard (IRC R302.11):** In the event of a basement fire, these open vertical cavities draw combustion gases upward like a furnace flue. Toxic smoke and active flames bypass intermediate plaster walls, spreading from basement to attic in under 180 seconds before occupants can safely evacuate.`
);

// 6. bug-prevention.md
replaceBetweenMarkers(
  'content/bug-prevention.md',
  '## The Autumn Swarm at 48°F',
  '## The Mud Sill & Foundation Interface: Stopping Subterranean Termites',
  `## Chemical Spray Failure vs. Envelope Engineering: Stopping Termites, Carpenter Ants & Winter Rodents

Homeowners in rural, peri-urban, and wooded Midwest parcels routinely spend $400 to $900 annually on recurring exterior pesticide spraying to combat subterranean termites, carpenter ants, stink bugs, and field mice.

However, building science field diagnostics show that chemical perimeter treatments are inherently temporary:
1. **UV and Rain Degradation:** Surface-applied synthetic pyrethroids degrade under ultraviolet exposure and Midwest storm runoff within 21 to 30 days, completely losing efficacy along foundation walls.
2. **The Thermal Scent Bypass:** Insects and rodents do not invade homes at random; they follow air exfiltration trails escaping through unsealed mud sills, rim joist cracks, and utility wall penetrations. In autumn, warm air escaping through 1/8-inch gaps serves as an active thermal beacon for overwintering pests.
3. **Moisture-Driven Carpenter Ant Colonization:** Carpenter ants do not consume sound wood for nutrition; they hollow out nesting galleries exclusively inside timber softened by fungal decay (wood moisture content above 20%). Chemical spraying cannot stop colonization if a leaking sill plate, uninsulated rim joist, or condensation-prone wall assembly provides continuous moisture.`
);

console.log('=== EXECUTING BATCH 3: FIELD RETROFIT SOPS (BLUEPRINT E) ===');

// 7. attic-air-sealing-baffles.md
replaceExact('content/attic-air-sealing-baffles.md', '## Objective & Safety Protocols', '## Scope & Thermal Boundary Pre-Flight: R-60 Air-Barrier Protocols');
replaceExact('content/attic-air-sealing-baffles.md', '## Required Tools & Materials', '## Mechanical Fasteners & Firestop Materials Schedule');
replaceExact('content/attic-air-sealing-baffles.md', '## Sequential Step-by-Step Execution', '## Phase-by-Phase Cold Roof Execution Protocol');
replaceExact('content/attic-air-sealing-baffles.md', '## Verification & Quality Assurance Tests', '## Quality Commissioning: Depressurization & Thermal Boundary Verification');

// 8. balloon-framing-retrofit-steps.md
replaceExact('content/balloon-framing-retrofit-steps.md', '## Objective & Safety Protocols', '## Scope & Structural Safety Pre-Flight: Fireblocking IRC R302.11 Protocols');
replaceExact('content/balloon-framing-retrofit-steps.md', '## Required Tools & Materials', '## Mineral Wool Firestop & Intumescent Materials Schedule');
replaceExact('content/balloon-framing-retrofit-steps.md', '## Sequential Step-by-Step Execution', '## Phase-by-Phase Chimney-Break Execution Protocol');
replaceExact('content/balloon-framing-retrofit-steps.md', '## Verification & Quality Assurance Tests', '## Quality Commissioning: Blower Door Stack-Effect Verification');

// 9. crawlspace-encapsulation-steps.md
replaceExact('content/crawlspace-encapsulation-steps.md', '## Objective & Safety Protocols', '## Scope & Hydrology Pre-Flight: IRC R408.3 Soil Gas & Vapor Protocols');
replaceExact('content/crawlspace-encapsulation-steps.md', '## Required Tools & Materials', '## 20-Mil Class I Vapor Barrier & Perimeter Fastening Schedule');
replaceExact('content/crawlspace-encapsulation-steps.md', '## Sequential Step-by-Step Execution', '## Phase-by-Phase Encapsulation & Radon Isolation Protocol');
replaceExact('content/crawlspace-encapsulation-steps.md', '## Verification & Quality Assurance Tests', '## Quality Commissioning: Hygrometer Calibration & Sub-Slab Depressurization Check');

// 10. crawlspace-encapsulation.md
replaceBetweenMarkers(
  'content/crawlspace-encapsulation.md',
  '## Ohio Summer Heat in Columbus at 88°F',
  '## The Psychrometric Trap of Summer Crawlspace Venting',
  `## The Sub-Floor Psychrometric Trap: Why Vented Crawlspaces Rot Joists Across the Midwest

For decades, municipal residential building codes mandated open foundation vents under the flawed assumption that outdoor cross-ventilation would dry out crawlspaces. Across the Midwest—from the humid summer river valleys of the Ohio and Missouri Rivers to the lake-effect belts—this practice has produced catastrophic moisture failures in hundreds of thousands of residential subfloors.

When outdoor air at 88°F and 75% relative humidity (dew point: 79°F) enters foundation vents and contacts earth-cooled floor joists and subfloors sitting at 62°F to 65°F, psychrometric physics forces immediate bulk condensation. Fiberglass batt insulation installed between floor joists absorbs this moisture like a sponge, pulling away from subfloors, fostering toxic mold colonies, and driving subfloor moisture content above 25%—the critical rot threshold for structural wood framing.`
);

// 11. historic-brick-retrofit-steps.md
replaceExact('content/historic-brick-retrofit-steps.md', '## Objective & Safety Protocols', '## Scope & Masonry Preservation Pre-Flight: ASTM C270 Type N/O Mortar Protocols');
replaceExact('content/historic-brick-retrofit-steps.md', '## Required Tools & Materials', '## Vapor-Permeable Lime Mortar & Rainscreen Materials Schedule');
replaceExact('content/historic-brick-retrofit-steps.md', '## Sequential Step-by-Step Execution', '## Phase-by-Phase Repointing & Vapor-Open Interior Retrofit Protocol');
replaceExact('content/historic-brick-retrofit-steps.md', '## Verification & Quality Assurance Tests', '## Quality Commissioning: RILEM Tube Water Absorption & Freeze-Thaw Verification');

// 12. how-to-know-if-you-need-icf-basement.md
replaceExact('content/how-to-know-if-you-need-icf-basement.md', '## 1. The "Cold-Wall" Palm Test (Thermal Sink Deficit)', '## Diagnostic Field Triage: 6 Structural & Moisture Indicators for an ICF Basement Retrofit');

// 13. does-house-need-to-breathe.md
replaceExact('content/does-house-need-to-breathe.md', '## Technical Baseline: Fluid Dynamics of Building Air Leakage', '## Fluid Dynamics of the Building Envelope: Why Uncontrolled Infiltration Destroys Framing');

// 14. off-grid-systems.md
replaceBetweenMarkers(
  'content/off-grid-systems.md',
  '## Midnight Blackout at -18°F',
  '## Propane Thermodynamics: Sizing for -20°F Vaporization Rates',
  `## Sub-Zero Off-Grid Thermodynamics: Sizing Mechanicals for -20°F Polar Cold Snaps

Engineering an off-grid residential homestead in the Upper Midwest and Northern Plains requires accounting for extreme sub-zero failure modes that standard residential equipment specifications ignore. When Arctic vortexes drop temperatures below -15°F and grid power is absent, three mechanical systems fail in predictable sequence unless specifically engineered for extreme cold:
1. **Propane Vaporization Collapse:** Liquid propane requires heat absorption from ambient air through the steel tank walls to boil into vapor. At -20°F, vaporization rates plummet. A 250-gallon or half-empty 500-gallon tank cannot generate sufficient vapor pressure to supply a 100,000 BTU/hr furnace and generator simultaneously, starving burners and shutting down heating systems.
2. **LiFePO4 Lithium Battery Thermal Lockout:** Lithium Iron Phosphate (LiFePO4) chemistries suffer irreversible electrode degradation (lithium plating) if charged at cell temperatures below 32°F (0°C). Standard battery management systems (BMS) trigger emergency charging lockouts, preventing backup generators or solar arrays from replenishing power banks located in unconditioned spaces.
3. **Deep-Frost Well Infrastructure Freezing:** Snow-cleared driveways drive ground frost down to 60+ inches, freezing shallow water laterals and uninsulated pitless adapters.`
);
replaceExact('content/off-grid-systems.md', '## Specification Benchmark: Rural Zone 5 Utility Infrastructure', '## Specification Benchmark: Rural Midwest Off-Grid Utility Infrastructure');

// 15. expansive-lawncare.md
replaceBetweenMarkers(
  'content/expansive-lawncare.md',
  '## The Muddy Torrent at 58°F',
  '## Clay Hydrology & The Sub-Surface Mower Hardpan',
  `## Acreage Hydrology & Foundation Protection: Managing Heavy Midwest Clay Runoff

Transitioning from a typical suburban quarter-acre lot to a 3- to 10-acre parcel across the Corn Belt and Missouri River basin introduces civil drainage dynamics that standard residential landscaping practices cannot support.

When property owners attempt to maintain expansive acres of manicured Kentucky bluegrass using heavy commercial zero-turn mowers (1,000 to 1,400 lbs), two hydrological failures occur:
1. **The Sub-Surface Mower Hardpan:** Repeated passes over damp spring clay soils compact topsoil at a 2- to 3-inch depth, transforming natural soil into an impermeable hardpan that slashes rain infiltration by over 80%.
2. **Shallow Turf Root Systems:** Bluegrass and turf fescues develop root depths of barely 2 to 4 inches. In contrast to deep-rooted native prairie buffers, turf cannot sponge heavy spring cloudbursts, generating thousands of gallons of surface runoff that overwhelm perimeter swales and flood basement foundation walls.`
);

console.log('=== PROMOTING 4 WINTER SURGE EMERGENCY ARTICLES FROM BACKLOG ===');
const backlogArticles = [
  'furnace-vent-pipe-freeze-lockout.md',
  'heat-pump-aux-heat-lockout-balance-point.md',
  'sump-pump-failure-spring-thaw-backups.md',
  'cold-climate-septic-well-freeze-solutions.md'
];

backlogArticles.forEach(fileName => {
  const src = path.join('content/backlog', fileName);
  const dest = path.join('content', fileName);
  let text = fs.readFileSync(src, 'utf8');
  
  // Clean abstract Zone references in promoted articles
  text = text.replace(/Climate Zones 4 and 5/g, 'the Great Lakes, Upper Midwest, and Northern Plains');
  text = text.replace(/Climate Zones 4 & 5/g, 'the Great Lakes, Upper Midwest, and Northern Plains');
  text = text.replace(/Zone 5/g, 'the Upper Midwest and Great Lakes');
  
  fs.writeFileSync(dest, text, 'utf8');
  console.log('Promoted and cleaned: ' + fileName + ' -> content/');
});

console.log('ALL BATCH 3 REFACTORS & PROMOTIONS COMPLETED.');
