const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\Dylen\\Desktop\\AEC\\Midwest';
const contentDir = path.join(rootDir, 'content');

// -----------------------------------------------------------------------------
// 1. sips-vs-traditional-framing.md
// -----------------------------------------------------------------------------
const file1 = path.join(contentDir, 'sips-vs-traditional-framing.md');
let c1 = fs.readFileSync(file1, 'utf8');

c1 = c1.replace(
  'title: "SIPs (Structural Insulated Panels) in Zone 5: Total Cost vs. Traditional Stick Framing"',
  'title: "SIPs (Structural Insulated Panels): Total Cost vs. Traditional Stick Framing in the Midwest"'
);
c1 = c1.replace('readTime: "9 min read"', 'readTime: "11 min read"');
c1 = c1.replace(
  'summary: "Compare the total installed cost, thermal bridging, and long-term durability of Structural Insulated Panels (SIPs) against 2x6 stick framing in Zone 5 climates."',
  'summary: "SIPs vs traditional stick framing cost in the Midwest: Total installed price for a 2,500 sq.ft. home, labor offsets, and preventing cold-climate roof joint rot."'
);

const sipsCostSection = `## Turnkey Cost Breakdown: 2,500 Sq. Ft. Home (SIPs vs. 2x6 Stick Framing)

Homeowners considering Structural Insulated Panels (SIPs) for a custom Midwest build often struggle to compare initial panel bids against conventional stick framing:

### 1. Comprehensive Construction Cost Comparison (2,500 Sq. Ft. Two-Story)
| Scope Item / Trade | Conventional 2x6 Stick Framing + R-20 Cavity + R-5 Polyiso | Monolithic SIPs Envelope (6.5" Walls + 10.25" Roof) |
| :--- | :--- | :--- |
| **Framing Materials Package** | $32,000 to $38,000 | **$46,000 to $56,000** (Pre-cut factory package) |
| **Framing Crew Labor & Crane** | $28,000 to $36,000 (3 to 4 weeks on site) | **$16,000 to $22,000** (3 to 5 days dry-in with crane) |
| **Separate Insulation Subcontractor** | $7,500 to $11,000 (Batts, poly, foam sealing) | **$0 (Insulation is already integrated in panels)** |
| **Total Shell Dry-In Cost** | **$67,500 to $85,000** ($27.00 to $34.00 / sq. ft.) | **$62,000 to $78,000** ($24.80 to $31.20 / sq. ft.) |
| **Whole-House Blower Door Rating** | 2.5 to 3.5 ACH50 | **0.8 to 1.5 ACH50 (Extreme airtightness)** |

### 2. The Critical SIPs Roof Joint Warning
The #1 failure point of SIPs in cold northern climates is **roof joint air leakage**:
- In winter, warm interior humidity (heated to 70°F) is pushed upward by stack pressure against the roof ceiling.
- If the contractor fails to apply continuous expanding foam and mastic tape to every tongue-and-groove panel spline joint, moisture slips into the joint seam.
- Meeting the freezing exterior OSB skin, moisture condenses and rots the structural panel from the inside out within 7 to 10 years.
- **Contractor Mandate:** Require third-party mastic sealing and tape inspection on all SIPs roof seams prior to dried-in underlayment placement.

---
`;

if (!c1.includes('Turnkey Cost Breakdown: 2,500 Sq. Ft. Home')) {
  const target1 = `## Total-Cost Breakdown: 2,500 Sq. Ft. Home in the Great Lakes and Plains`;
  c1 = c1.replace(target1, sipsCostSection + '\n' + target1);
  fs.writeFileSync(file1, c1, 'utf8');
  console.log('✓ Updated sips-vs-traditional-framing.md');
}

// -----------------------------------------------------------------------------
// 2. barndominium-post-frame.md
// -----------------------------------------------------------------------------
const file2 = path.join(contentDir, 'barndominium-post-frame.md');
let c2 = fs.readFileSync(file2, 'utf8');

c2 = c2.replace(
  'title: "Barndominium & Post-Frame Thermal Envelopes: Zone 5 Condensation Control"',
  'title: "Barndominium & Post-Frame Envelopes: Stopping Winter Roof Sweating in the Midwest"'
);
c2 = c2.replace('readTime: "8 min read"', 'readTime: "11 min read"');
c2 = c2.replace(
  'summary: "Eliminate condensation, thermal bridging, and in-ground column rot in residential barndominiums and post-frame homes across Zone 5 cold climates."',
  'summary: "Midwest barndominium construction costs: Shell vs turnkey living space, stopping winter metal roof condensation, and post-frame foundation engineering."'
);

const barndoCostSection = `## Midwest Barndominium Construction Costs: Shell vs. Turnkey Living Space

Post-frame residential construction ("barndominiums") has surged in popularity across rural Illinois, Indiana, Iowa, Ohio, Wisconsin, and Missouri. However, marketing claims promising a finished custom home for "$60 per square foot" are dangerously misleading:

### 1. Realistic Price Benchmarks (2,400 Sq. Ft. Living Area + 1,200 Sq. Ft. Shop)
- **Bare Structural Shell Only:** **$45 to $75 per sq. ft.** ($160,000 to $270,000 total). Covers concrete perimeter piers or thickened slab, laminated wood posts, roof trusses, 29-gauge steel siding and metal roof, basic windows, and garage doors. (This leaves an unfinished, uninsulated barn with a dirt or flat concrete slab).
- **Turnkey Finished Living Space:** **$140 to $195 per sq. ft.** ($336,000 to $468,000 for the living quarters). Covers full interior framing, sub-slab continuous R-10 insulation, electrical rough-in, plumbing, septic, HVAC cold-climate heat pump, drywall, kitchen/bath finishes, and code-compliant continuous envelope insulation.

### 2. The "Sweating Metal Roof" Disaster in Sub-Zero Weather
When agricultural pole barns are converted into heated living spaces, occupants generate 25 to 40 pounds of water vapor daily (cooking, breathing, showers):
- If the steel roof is insulated merely with thin foil bubble wrap or cheap fiberglass blankets pressed against the metal, indoor humidity touches the freezing exterior steel sheeting (often -10°F).
- Water condensates rapidly, creating an indoor rainstorm that saturates drywall and shorts out electrical fixtures.
- **The Engineered Fix:** Install a minimum of **2 inches of continuous polyiso or closed-cell spray foam** directly against the steel sheathing to move the condensing dew point completely outside the structural frame, or build a flat ceiling joist plane to create an unconditioned, ventilated cold attic above the living space.

---
`;

if (!c2.includes('Midwest Barndominium Construction Costs')) {
  const target2 = `## Specification Comparison: Agricultural Barn vs. Residential Barndominium`;
  c2 = c2.replace(target2, barndoCostSection + '\n' + target2);
  fs.writeFileSync(file2, c2, 'utf8');
  console.log('✓ Updated barndominium-post-frame.md');
}

// -----------------------------------------------------------------------------
// 3. off-grid-systems.md
// -----------------------------------------------------------------------------
const file3 = path.join(contentDir, 'off-grid-systems.md');
let c3 = fs.readFileSync(file3, 'utf8');

c3 = c3.replace(
  'title: "Rural Off-Grid Systems in Zone 5: Propane, Battery Backup & Freeze-Proof Wells"',
  'title: "Rural Off-Grid Systems in Cold Climates: Propane, Battery Backup & Freeze-Proof Wells"'
);
c3 = c3.replace('readTime: "9 min read"', 'readTime: "11 min read"');
c3 = c3.replace(
  'summary: "Engineering off-grid rural homesteads in cold climates: Solar derating in winter, lithium battery cold-temperature cutoffs, and freeze-proof well systems."',
  'summary: "Off-grid solar and battery backup costs in the Midwest: Surviving the 75% winter solar generation drop, propane generator sizing, and freeze-proof wells."'
);

const offGridCostSection = `## Midwest Off-Grid System Costs: The 75% Winter Solar Drop & Generator Fuel Budget

Designing an off-grid residential homestead in the Upper Midwest requires engineering for the most brutal solar environment in the continental United States: persistent December and January cloud cover combined with -20°F temperatures.

### 1. Turnkey Off-Grid Mechanical Package Cost ($38,000 to $68,000)
- **Ground-Mount Solar Array (12 kW to 16 kW DC):** **$18,000 to $26,000**. Ground-mounted arrays are mandatory in the snow belt so snow can be cleared easily with a soft broom; roof arrays are inaccessible and useless under 18 inches of snow.
- **Heated LiFePO4 Battery Bank (30 kWh to 45 kWh Storage):** **$14,000 to $22,000**. Lithium iron phosphate batteries permanently lose charging capacity if charged below 32°F. Batteries must be housed in an insulated, conditioned utility room with integral thermal heating pads.
- **Backup Auto-Start Propane Generator (14 kW to 20 kW):** **$6,000 to $11,000** (featuring a low-RPM liquid-cooled engine for commercial 24/7 duty cycles).
- **500- to 1,000-Gallon Propane Tank Installation:** **$2,500 to $4,500**.

### 2. The 75% Winter Solar Deficit Reality
In June, a 12 kW array in Iowa or Wisconsin generates 55 to 65 kWh daily. In December and January, overcast lake-effect skies and short daylight hours reduce production to **less than 12 to 15 kWh daily**—a 75%+ deficit.
- Homeowners cannot rely on solar alone for winter heating.
- A typical rural off-grid home burns **150 to 350 gallons of propane per month** between December and February running the backup generator to recharge batteries and supply baseline loads. Budget **$400 to $900/month** in winter generator fuel.

---
`;

if (!c3.includes('Midwest Off-Grid System Costs')) {
  const target3 = `## Specification Benchmark: Cold-Climate Off-Grid Power & Water Infrastructure`;
  c3 = c3.replace(target3, offGridCostSection + '\n' + target3);
  fs.writeFileSync(file3, c3, 'utf8');
  console.log('✓ Updated off-grid-systems.md');
}

// -----------------------------------------------------------------------------
// 4. embodied-carbon-materials.md
// -----------------------------------------------------------------------------
const file4 = path.join(contentDir, 'embodied-carbon-materials.md');
let c4 = fs.readFileSync(file4, 'utf8');

c4 = c4.replace('readTime: "8 min read"', 'readTime: "11 min read"');

const carbonCostSection = `## Installed Cost & Durability: Closed-Cell Spray Foam vs. Dense-Pack Cellulose

Builders and homeowners evaluating high-performance wall cavities must weigh the high cost and structural inflexibility of petroleum spray foam against dense-packed natural cellulose:

### 1. Installed Price Comparison (Standard 2x6 Wall Cavity)
- **Closed-Cell Polyurethane Spray Foam (3 Inches &rarr; R-20):** **$2.20 to $3.10 per sq. ft.** of wall area. For a typical 2,200 sq. ft. home exterior wall perimeter, spray foam costs **$5,500 to $7,800**.
- **Dense-Pack Borate-Treated Cellulose (5.5 Inches &rarr; R-20):** **$0.95 to $1.45 per sq. ft.** of wall area ($2,400 to $3,600 total).
- **The Cost Savings:** Dense-pack cellulose saves **$3,000 to $4,500 upfront**, allowing funds to be invested in high-performance continuous exterior insulation or an ERV.

### 2. The 25-Year Moisture Durability Reality
- **Spray Foam Traps Water:** Closed-cell foam adheres tenaciously to wooden studs and sheathing. If an exterior roof flashing or window leak develops, liquid water becomes trapped between the foam and the wood. Because closed-cell foam is an impermeable vapor barrier, the wood cannot dry. Rotted framing remains completely invisible to occupants until structural deflection occurs.
- **Cellulose Buffers Humidity:** Dense-pack cellulose is hygroscopic. It can safely absorb, store, and redistribute small amounts of incidental water vapor without losing thermal resistance or promoting fungal decay, allowing walls to dry naturally.

---
`;

if (!c4.includes('Installed Cost & Durability')) {
  const target4 = `## Specification Benchmark: Embodied Carbon & Hygrothermal Performance`;
  c4 = c4.replace(target4, carbonCostSection + '\n' + target4);
  fs.writeFileSync(file4, c4, 'utf8');
  console.log('✓ Updated embodied-carbon-materials.md');
}

// -----------------------------------------------------------------------------
// 5. rammed-earth-midwest-flooring.md
// -----------------------------------------------------------------------------
const file5 = path.join(contentDir, 'rammed-earth-midwest-flooring.md');
let c5 = fs.readFileSync(file5, 'utf8');

c5 = c5.replace('readTime: "8 min read"', 'readTime: "10 min read"');

const earthCostSection = `## Rammed Earth & Earthen Floor Costs in Freeze-Thaw Climates

Earthen flooring (clay, sand, straw, and natural binder) provides an exceptionally tactile, low-embodied-carbon interior finish that pairs seamlessly with hydronic radiant floor tubing:

### 1. Installed Price Benchmark
- **Professional Pour & Hand-Trowel Earthen Floor (1.5" Over Sub-Slab Insulation):** **$14.00 to $22.00 per sq. ft.** Covers multi-lift pour, hard-troweling, drying monitoring, and four coats of penetrating polymerized linseed oil and carnauba wax sealers.
- **Standard Stained Concrete Slab Alternative:** **$8.00 to $14.00 per sq. ft.**

### 2. Freeze-Thaw & Moisture Durability Rules
1. **Never Pour Directly Over Damp Ground:** An earthen floor must be separated from subterranean ground dampness by a certified ASTM E1745 Class A vapor retarder and minimum 2 inches of continuous Type IX EPS rigid foam.
2. **Indoor Humidity Control:** Unsealed earthen floors absorb ambient moisture. In humid Midwest summers, homes with earthen floors must maintain indoor relative humidity below 55% using central dehumidification to prevent surface mold and softening.

---
`;

if (!c5.includes('Rammed Earth & Earthen Floor Costs')) {
  const target5 = `## Sub-Slab Flooring Matrix: Rammed Earth vs Conventional Finishes`;
  c5 = c5.replace(target5, earthCostSection + '\n' + target5);
  fs.writeFileSync(file5, c5, 'utf8');
  console.log('✓ Updated rammed-earth-midwest-flooring.md');
}
