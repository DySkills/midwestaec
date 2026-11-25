const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\Dylen\\Desktop\\AEC\\Midwest';
const contentDir = path.join(rootDir, 'content');

const normalizeBreaks = str => str.replace(/\r\n/g, '\n').trim();

// -----------------------------------------------------------------------------
// 1. ice-dams-roofs.md
// -----------------------------------------------------------------------------
const file1 = path.join(contentDir, 'ice-dams-roofs.md');
let c1 = fs.readFileSync(file1, 'utf8');

c1 = c1.replace('readTime: "8 min read"', 'readTime: "11 min read"');
c1 = c1.replace(
  'summary: "Midwest ice dams are caused by attic air leakage, not poor insulation. Learn the thermal physics, stack effect drivers, and why heat cables fail to solve the root problem."',
  'summary: "Midwest ice dams: Why roof heat cables fail, how much professional steam removal costs, and the engineered attic air-sealing fix to prevent roof leaks."'
);

const iceDamEmergency = `## Ice Dam Emergency Triage: Steaming Costs, Heat Tape Traps & Active Leak Response

When an ice dam backs up melted water beneath asphalt shingles in midwinter, water begins dripping behind exterior siding, soaking attic insulation, and bulging ceiling drywall. Homeowners in panic often turn to dangerous or counterproductive remedies that destroy their roofs.

### 1. The Professional Steam Removal Solution ($400 to $650 / Hour)
If water is actively leaking into your living room, the only safe emergency fix is **low-pressure ice dam steaming**:
- **Why Steam Works:** True ice dam steamers operate at high temperatures (290°F to 320°F) and low pressures (100 to 250 PSI). The thermal energy of the steam cuts through thick ice blocks like a hot knife through butter without mechanical blasting.
- **The Power Washer Scam:** Unscrupulous contractors frequently show up with high-pressure cold-water pressure washers (1,500 to 3,500 PSI) equipped with a hot-water burner. High-pressure water blasts the mineral protective granules straight off your shingles, permanently ruining the roof and voiding the manufacturer's warranty. Always verify the contractor uses a dedicated zero-pressure steam wand.
- **Average Cost:** In the Midwest, ice dam steaming costs between **$400 and $650 per hour**, with a two-hour minimum ($800 to $1,300 total). While expensive, it immediately stops water infiltration while preserving shingle integrity.

### 2. The Roof Heat Cable Trap: Why "Heat Tape" Fails
Many homeowners install zig-zag electric de-icing cables along their eaves. Building scientists consider heat cables a hazardous and ineffective band-aid:
- **High Operating Cost:** A typical 120-foot heat tape run draws 5 to 8 watts per linear foot (600 to 960 watts continuous). Running continuously during a cold January adds **$70 to $130 per month** to electric bills.
- **The "Dam Behind the Cable" Effect:** Heat tape only melts narrow 2-inch tunnels through the ice. Meltwater trickling down from warmer upper roof zones encounters the thick unheated ice behind the cable, creating a second, higher ice dam further up the roof slope where there is no ice-and-water shield membrane.
- **Fire & Shingle Hazard:** Cables degrade under solar UV exposure. In fall, dried leaves and pine needles trapped in the zig-zags create documented fire hazards.

### 3. Emergency Leak Triage: What to Do Right Now
1. **Relieve Drywall Bulges:** If interior ceiling drywall is sagging with trapped water, do not let it collapse under weight. Place a 5-gallon bucket underneath and puncture the center of the wet bulge with a screwdriver to drain the water cleanly.
2. **Never Climb an Icy Ladder:** Chipping ice with axes, hammers, or shovels punctures shingles and tears off gutters. Every year across the Midwest, dozens of homeowners suffer severe trauma falling from icy eave ladders.
3. **Use a Roof Rake from the Ground:** If you can safely reach from ground level, pull down the fresh uncompacted snow 3 to 4 feet up from the gutters to remove the thermal blanket feeding the melt cycle.

---
`;

if (!c1.includes('Ice Dam Emergency Triage')) {
  const target1 = `## Specification Benchmark: Cold Roof vs. Compromised Roof`;
  c1 = c1.replace(target1, iceDamEmergency + '\n' + target1);
  fs.writeFileSync(file1, c1, 'utf8');
  console.log('✓ Updated ice-dams-roofs.md');
}

// -----------------------------------------------------------------------------
// 2. attic-frost-roof-sweating.md
// -----------------------------------------------------------------------------
const file2 = path.join(contentDir, 'attic-frost-roof-sweating.md');
let c2 = fs.readFileSync(file2, 'utf8');

c2 = c2.replace('readTime: "7 min read"', 'readTime: "10 min read"');
c2 = c2.replace(
  'summary: "Diagnose winter attic hoarfrost, sweating roof decks, and false spring ceiling leaks. Learn the physics of indoor air exfiltration and cold-climate attic remediation."',
  'summary: "Winter attic frost & sweating roof sheathing: Why false-spring thaws cause ceiling leaks, bath fan venting mistakes, and emergency attic drying protocols."'
);

const atticFrostSection = `## Attic Frost Emergency Diagnostics: The "False Spring" Ceiling Drip & Fan Venting Errors

When sub-zero Arctic air grips the Upper Midwest, moisture exfiltrating from the warm living space into the unconditioned attic condenses directly onto freezing roof sheathing, forming thick layers of white hoarfrost. Homeowners rarely look into their attics in January, leaving this hidden ice cave undiscovered until the weather abruptly warms.

### 1. The "False Spring" Ceiling Rain Disaster
The crisis occurs during a "false spring" thaw—when outdoor temperatures jump from 5°F to 40°F in 36 hours under bright sunshine:
- Solar radiation strikes the dark roof shingles, heating the plywood or OSB deck to 50°F+ even while outdoor air remains brisk.
- Inches of accumulated hoarfrost melt simultaneously across hundreds of square feet of roof deck.
- Meltwater saturates fiberglass or cellulose attic insulation, destroying its thermal resistance, and pours through ceiling penetrations: recessed can lights, smoke detectors, bathroom exhaust grilles, and drywall tape seams.
- Homeowners call roofers assuming their shingles blew off, but the water originated 100% from inside their own home.

### 2. The #1 Mistake: Bathroom Fans Terminating at the Soffit
Over 60% of frosted Midwest attics share the same mechanical flaw: a bathroom exhaust fan vented into the soffit overhang.
- **The Stack Effect Loop:** Unconditioned attics draw cold outdoor air inward through the soffit vents via thermal buoyancy. 
- When an installer runs flexible ductwork to the soffit grille, the humid shower air (100% RH at 95°F) exhausted outward is immediately vacuumed right back into the attic through adjacent soffit perforations.
- Within weeks, the roof sheathing directly above the soffit is encased in solid ice.
- **The Required Fix:** Reroute exhaust ductwork using rigid, smooth-walled galvanized metal pipe wrapped in minimum R-6 insulation. Terminate through an approved roof jack or gable wall cap equipped with a gravity backdraft damper.

### 3. Emergency Attic Remediation: What to Do Today
1. **Immediate Dehumidification & Air Circulation:** If sheathing is soaked, place an axial air mover and a low-temperature commercial dehumidifier in the attic space to dry the plywood before fungal spores bloom into wood-decay mold.
2. **Do Not Spray Bleach:** Bleach is 90% water and corrodes metal truss plates and roof fasteners. Use an EPA-registered fungicidal encapsulant (such as Fiberlock or Benefect) only after structural drying.
3. **Seal the Big Chases First:** Before adding more attic insulation, crawl the perimeter with expanding foam and polyiso boards to seal the open plumbing stacks, electrical wire drops, and furnace flue chases where warm, humid house air is surging into the roof space.

---
`;

if (!c2.includes('Attic Frost Emergency Diagnostics')) {
  const target2 = `## The Action Plan: Specific Services & Implementation Steps`;
  c2 = c2.replace(target2, atticFrostSection + '\n' + target2);
  fs.writeFileSync(file2, c2, 'utf8');
  console.log('✓ Updated attic-frost-roof-sweating.md');
}

// -----------------------------------------------------------------------------
// 3. attic-air-sealing-baffles.md
// -----------------------------------------------------------------------------
const file3 = path.join(contentDir, 'attic-air-sealing-baffles.md');
let c3 = fs.readFileSync(file3, 'utf8');

c3 = c3.replace('readTime: "8 min read"', 'readTime: "10 min read"');

const baffleCostSection = `## Attic Air Sealing Cost Breakdown & Contractor Bid Checklist

Homeowners evaluating whether to hire a weatherization contractor or tackle attic air sealing as a DIY weekend project need realistic regional price benchmarks.

### 1. Typical Midwest Installed Costs (1,200 to 1,800 Sq. Ft. Attic)
- **Turnkey Professional Air-Sealing & Baffle Package:** **$1,600 to $2,800** ($1.30 to $1.75 per sq. ft.). This scope covers clearing insulation back from exterior top plates, sealing all top plate drywall junctions, wire drops, and plumbing chases with two-part expanding foam, installing rigid cardboard or PVC rafter baffles with wind-wash blockers, and building an insulated, weatherstripped attic hatch box.
- **Full Air-Seal + R-60 Blown Cellulose Package:** **$3,200 to $4,800** ($2.20 to $2.90 per sq. ft.). Covers air sealing plus blowing 16 to 18 inches of stabilized borate-treated cellulose over existing settled insulation.
- **DIY Material Cost:** **$450 to $750** for professional-grade DIY kit: one 200 board-foot two-part spray foam kit (Touch 'n Foam / Froth-Pak), 30 rigid PVC rafter baffles, acoustic caulk, foil tape, and sheet metal for chimney clearances.

### 2. High-Risk Contractor Shortcuts to Watch For
1. **Blowing Cellulose Without Baffles:** Cheap contractors will blow insulation directly against the roof sheathing at the eaves, completely choking off soffit ventilation. Within one winter, the roof sheathing will rot from trapped condensation.
2. **Missing Chimney Fireblocking:** Code (IRC Section R1003.18) strictly prohibits spraying expanding foam directly against a masonry or metal B-vent chimney flue. The gap must be sealed with 26-gauge galvanized sheet metal and fire-rated non-combustible silicone.
3. **Leaving Can Lights Unsealed:** Standard non-IC rated recessed incandescent can lights act as roaring thermal chimneys. Ensure they are replaced with IC-rated airtight LED wafer fixtures or enclosed in sealed fire-rated covers (Tenmat boxes) prior to insulation.

---
`;

if (!c3.includes('Attic Air Sealing Cost Breakdown')) {
  const target3 = `## Verification & Quality Assurance Tests`;
  c3 = c3.replace(target3, baffleCostSection + '\n' + target3);
  fs.writeFileSync(file3, c3, 'utf8');
  console.log('✓ Updated attic-air-sealing-baffles.md');
}

// -----------------------------------------------------------------------------
// 4. roof-insulation-over-sheathing.md
// -----------------------------------------------------------------------------
const file4 = path.join(contentDir, 'roof-insulation-over-sheathing.md');
let c4 = fs.readFileSync(file4, 'utf8');

c4 = c4.replace('readTime: "8 min read"', 'readTime: "11 min read"');

const overSheathingCostSection = `## Over-Sheathing Cost vs. Interior Spray Foam: The Cathedral Ceiling Payback

When renovating a mid-century home or a 1.5-story bungalow with unvented cathedral ceilings, homeowners face a critical structural decision: tear down interior drywall to spray foam from the inside, or install rigid continuous insulation above the roof deck during their next shingle replacement.

### 1. Installed Cost Comparison: Above-Deck Foam vs. Interior Spray Foam
- **Above-Deck Rigid Polyiso / EPS (R-20 to R-30 Over Sheathing):** **$4.50 to $7.50 per sq. ft.** added to standard roof replacement. When coordinated with a scheduled shingle tear-off, labor efficiency is maximized: crews lay 4 inches of staggered polyiso foam boards over the bare deck, install 2x4 nailers with engineered HeadLOK fasteners, screw a secondary 5/8" plywood nailer deck, and shingle over the assembly.
- **Interior Closed-Cell Spray Foam Retrofit:** **$3.50 to $5.50 per sq. ft.** for foam *plus* **$4.00 to $7.00 per sq. ft.** for interior drywall demolition, disposal, electrical box extensions, new sheetrock hanging, taping, painting, and trim. The total interior job routinely exceeds **$8.00 to $12.50 per sq. ft.** while displacing occupants for weeks.

### 2. Why Over-Sheathing Delivers Superior Longevity
1. **Preserves Finished Interior Spaces:** On historic timber frames or finished tongue-and-groove ceilings, interior foam is impossible without destroying architectural character. Above-deck insulation keeps all messy work outside.
2. **Eliminates the "Thermal Bridge" of Rafters:** Standard rafter cavities only achieve R-15 to R-21, with wood 2x8 rafters conducting heat every 16 inches. Over-sheathing covers 100% of the roof in continuous, uninterrupted thermal foam, preventing interior "ghosting" dust stripes along rafters.
3. **Moisture Safety:** By placing the structural roof sheathing *inside* the heated thermal boundary, the wood deck stays warm (above 60°F year-round), completely eliminating interior condensation and rot risks.

---
`;

if (!c4.includes('Over-Sheathing Cost vs. Interior Spray Foam')) {
  const target4 = `## Specification Benchmark: Above-Deck Roof Retrofit`;
  c4 = c4.replace(target4, overSheathingCostSection + '\n' + target4);
  fs.writeFileSync(file4, c4, 'utf8');
  console.log('✓ Updated roof-insulation-over-sheathing.md');
}
