const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\Dylen\\Desktop\\AEC\\Midwest';
const contentDir = path.join(rootDir, 'content');

// -----------------------------------------------------------------------------
// 1. rockwool-vs-fiberglass.md
// -----------------------------------------------------------------------------
const file1 = path.join(contentDir, 'rockwool-vs-fiberglass.md');
let c1 = fs.readFileSync(file1, 'utf8');

c1 = c1.replace('readTime: "7 min read"', 'readTime: "10 min read"');
c1 = c1.replace(
  'summary: "Rockwool mineral wool vs fiberglass batts in Midwest homes: Compare real-world R-value retention, moisture resistance, soundproofing, and installation costs."',
  'summary: "Rockwool vs fiberglass insulation cost: Price premium breakdown, why mineral wool won\'t absorb water in rim joists, and where it\'s worth the extra money."'
);

const rockwoolCostSection = `## Price Premium Breakdown: Is Rockwool Worth the 60% Extra Cost?

Homeowners and remodelers across the Midwest frequently ask whether upgrading from standard pink fiberglass batts to dense mineral wool (Rockwool Comfortbatt) is worth the additional upfront expense:

### 1. Installed Material Price Comparison (Standard 2x6 Cavity)
- **Standard Fiberglass Batts (R-19 to R-21):** **$0.65 to $0.95 per sq. ft.** of cavity area.
- **Rockwool Mineral Wool Comfortbatt (R-21 to R-23):** **$1.25 to $1.65 per sq. ft.** of cavity area.
- **The Upfront Differential:** Rockwool costs roughly **60% to 75% more** in material costs. For a complete 2,000 sq. ft. home exterior wall package, the net material upgrade is approximately **$1,200 to $1,800**.

### 2. Where Rockwool Is Non-Negotiable
1. **Basement Rim Joists & Mud Sills:** Rim joists are notorious for cold-weather condensation. If moisture contacts fiberglass, the glass fibers collapse like wet cotton candy, permanently losing over 50% of their insulating value. Rockwool is made of spun basalt stone; it is hydrophobic and completely moisture-resistant. Even if water vapor enters the cavity, Rockwool will not absorb water or support fungal growth.
2. **Soundproofing Between Bedrooms, Bathrooms & Media Rooms:** Rockwool is roughly 3x denser than fiberglass (2.5 lbs/cu.ft. vs 0.8 lbs/cu.ft.). Installed in interior 2x4 partitions, it achieves a Sound Transmission Class of **STC 45 to 52**, virtually eliminating airborne voice and TV sound transmission between rooms.
3. **Fire Containment:** Mineral wool is non-combustible with a melting point above **2,150°F** (fiberglass melts at roughly 1,100°F). In multi-family assemblies or garage separation walls, it provides critical 1- to 2-hour passive fire-blocking protection.

---
`;

if (!c1.includes('Price Premium Breakdown: Is Rockwool Worth')) {
  const target1 = `## Specification Benchmark: Fiberglass vs. Rockwool`;
  c1 = c1.replace(target1, rockwoolCostSection + '\n' + target1);
  fs.writeFileSync(file1, c1, 'utf8');
  console.log('✓ Updated rockwool-vs-fiberglass.md');
}

// -----------------------------------------------------------------------------
// 2. continuous-insulation.md
// -----------------------------------------------------------------------------
const file2 = path.join(contentDir, 'continuous-insulation.md');
let c2 = fs.readFileSync(file2, 'utf8');

c2 = c2.replace('readTime: "8 min read"', 'readTime: "11 min read"');
c2 = c2.replace(
  'summary: "Why continuous exterior insulation beats cavity-only framing in freeze-thaw climates. Discover the building science of thermal bridges and condensation planes."',
  'summary: "Continuous exterior insulation cost: Why outboard rigid foam beats cavity batts in cold climates, dew point ratios, and siding fastener detailing."'
);

const ciCostSection = `## Continuous Exterior Foam Costs & Fastener Schedule Over Sheathing

Adding continuous rigid insulation to the exterior of wood wall sheathing stops the massive thermal bridge of wooden studs (which account for 25% of an exterior wall's surface area):

### 1. Installed Price Breakdown (Added During Siding Replacement)
- **1.5-Inch to 2-Inch Continuous Polyiso or GPS Foam (R-7.5 to R-10 Outboard):** **$1.85 to $3.25 per sq. ft.** added to the siding renovation contract. For an average 2,000 sq. ft. home exterior, continuous outboard insulation costs **$4,200 to $7,200**.
- **Window Jam Extensions & Flashing Package:** **$800 to $1,500** for window buck extensions and self-adhered membrane flashing to wrap the thicker wall profile.

### 2. The Building Code "Dew Point Ratio" Rule (IRC Table R702.7.1)
In northern cold climates, you cannot install arbitrary thicknesses of exterior foam without risking interior wall rot:
- If outboard foam is too thin (e.g., only 1/2" R-2.5 foam), the interior plywood sheathing remains below the winter dew point. Moisture escaping from the warm house will condense against the backside of the cold plywood.
- **The Code Ratio Rule:** To eliminate the need for a Class I interior vapor retarder, the exterior continuous foam must provide at least **R-7.5 on 2x4 walls** or **R-11.25 on 2x6 walls** (representing at least 35% to 40% of the wall's total R-value). This guarantees that the structural sheathing stays above 50°F all winter long, completely preventing condensation.

---
`;

if (!c2.includes('Continuous Exterior Foam Costs')) {
  const target2 = `## The Fastener Problem: Hanging Siding Over Thick Foam`;
  c2 = c2.replace(target2, ciCostSection + '\n' + target2);
  fs.writeFileSync(file2, c2, 'utf8');
  console.log('✓ Updated continuous-insulation.md');
}

// -----------------------------------------------------------------------------
// 3. smart-vapor-retarders.md
// -----------------------------------------------------------------------------
const file3 = path.join(contentDir, 'smart-vapor-retarders.md');
let c3 = fs.readFileSync(file3, 'utf8');

c3 = c3.replace('readTime: "8 min read"', 'readTime: "11 min read"');
c3 = c3.replace(
  'summary: "Compare smart vapor retarders vs standard 6-mil poly in cold climates. Learn how variable-permeance membranes prevent summer condensation and mold rot."',
  'summary: "Smart vapor retarders vs 6-mil plastic sheet: Why plastic causes summer wall mold behind drywall, material costs, and dynamic variable-perm membranes."'
);

const smartRetarderSection = `## Material Costs & The Summer Mold Rot Trap: 6-Mil Poly vs. Smart Retarders

For decades, building contractors stapled standard 6-mil clear polyethylene sheeting across interior studs before hanging drywall. In modern air-conditioned homes, building scientists now recognize that 6-mil poly is a leading cause of concealed structural mold:

### 1. The Summer Condensation Sandwich
- **Winter Operation:** In January, 6-mil poly performs well: it blocks warm indoor humidity from entering the cold exterior wall cavity.
- **Summer Failure:** In July and August, outdoor conditions reach 88°F with high humidity (dew point 74°F). Outdoor heat and vapor drive moisture inward through exterior siding and sheathing.
- **The Cold Drywall Trap:** Indoor central air conditioning chills the interior drywall to 68°F.
- When inward-driven water vapor encounters the back of the impermeable 6-mil plastic sheet, it hits a surface colder than its dew point.
- Liquid condensation pools inside the dark wall cavity against the wooden bottom plates and paper drywall facing. Because 6-mil plastic is completely vapor-impermeable (<0.06 perms), the moisture cannot dry inward. Toxic black mold blooms undetected within 24 to 36 months.

### 2. The Smart Membrane Fix ($0.35 to $0.55 / Sq. Ft.)
Smart variable-permeance membranes (e.g., CertainTeed MemBrain or ProClima Intello Plus) solve this through dynamic pore physics:
- **Winter (<1.0 Perm):** When surrounding relative humidity is low, the polymer pores close, functioning as a Class II vapor retarder to block interior moisture from entering cold walls.
- **Summer (>10 Perms):** When high relative humidity develops inside the wall cavity, the molecular pores open, allowing inward drying into the air-conditioned living space.
- **Material Cost:** Smart membranes cost **$0.35 to $0.55 per sq. ft.** (an extra $350 to $650 for an entire home), delivering permanent peace of mind against seasonal mold rot.

---
`;

if (!c3.includes('Material Costs & The Summer Mold Rot Trap')) {
  const target3 = `## Specification Benchmark: Polyethylene vs. Smart Membranes vs. Kraft Paper`;
  c3 = c3.replace(target3, smartRetarderSection + '\n' + target3);
  fs.writeFileSync(file3, c3, 'utf8');
  console.log('✓ Updated smart-vapor-retarders.md');
}

// -----------------------------------------------------------------------------
// 4. blower-door-checklist.md
// -----------------------------------------------------------------------------
const file4 = path.join(contentDir, 'blower-door-checklist.md');
let c4 = fs.readFileSync(file4, 'utf8');

c4 = c4.replace('readTime: "7 min read"', 'readTime: "10 min read"');
c4 = c4.replace(
  'summary: "Pass the blower door test (<3.0 ACH50) on your Midwest remodel: The 10-point contractor air sealing checklist for rim joists, top plates, and chases."',
  'summary: "How to pass a blower door test under 3.0 ACH50: Midwest testing costs ($350–$600), the top 5 hidden air leaks that fail inspections, and pre-test checklists."'
);

const blowerDoorCostSection = `## Blower Door Test Cost Benchmark & The 5 Leaks That Cause Test Failures

Under the 2021/2024 International Energy Conservation Code (IECC Section R402.4), new homes and substantial additions in northern cold climates must achieve an airtightness rating of **less than 3.0 Air Changes per Hour at 50 Pascals pressure (3.0 ACH50)**. Failing the test means municipal building inspectors will refuse to issue a Certificate of Occupancy.

### 1. Blower Door Testing Costs (Midwest Market Rate)
- **Standard Pre-Drywall or Final Compliance Test:** **$350 to $600**. A certified RESNET or BPI technician mounts an Minneapolis Blower Door frame and fan in an exterior doorway, depressurizes the building to -50 Pa, and calculates whole-house CFM50 air leakage.
- **Test + Infrared Thermal Imaging Diagnostic Package:** **$600 to $950**. Technicians depressurize the house and walk every room with a FLIR camera to pinpoint exact cold air drafts behind baseboards, ceilings, and outlets.

### 2. The 5 Hidden Leaks That Blow Past 3.0 ACH50
1. **Unsealed Basement Rim Joist & Mud Sill:** The joint where the wooden sill plate sits on the rough concrete foundation is often left unsealed. Sealing the perimeter with closed-cell spray foam typically eliminates **200 to 400 CFM50 of leakage**.
2. **Attic Access Hatches & Drop-Down Stairs:** Unlatched plywood covers sitting on wooden trim leak air like an open window. Must have compression weatherstripping, latches, and R-40 insulated covers.
3. **Plumbing Stacks & Duct Chases:** The large holes cut through top plates and subfloors for bathtubs, furnace flues, and drain pipes must be capped with rigid sheet metal or foam board and air-sealed with expanding foam.
4. **Recessed Can Lights:** Standard can lights have open vents in their housings. Replace with sealed airtight IC-rated fixtures or install Tenmat fire-rated draft covers above the fixtures.
5. **Cantilevered Floor Overhangs:** Floor joists that project outward over foundation walls (such as bay windows or second-floor bump-outs) are often missing bottom air barriers, pulling freezing outdoor wind directly into floor cavities.

---
`;

if (!c4.includes('Blower Door Test Cost Benchmark')) {
  const target4 = `## 7. The Attic Access & Drop-Down Stair Hatch`;
  c4 = c4.replace(target4, blowerDoorCostSection + '\n' + target4);
  fs.writeFileSync(file4, c4, 'utf8');
  console.log('✓ Updated blower-door-checklist.md');
}

// -----------------------------------------------------------------------------
// 5. bug-prevention.md
// -----------------------------------------------------------------------------
const file5 = path.join(contentDir, 'bug-prevention.md');
let c5 = fs.readFileSync(file5, 'utf8');

c5 = c5.replace('readTime: "7 min read"', 'readTime: "10 min read"');
c5 = c5.replace(
  'summary: "Physical pest exclusion at the building envelope: Termite shields, rodent-proof rim joists, stainless steel mesh weep covers, and borate-treated insulation."',
  'summary: "Pest proofing the building envelope: Termite shields, why mice tunnel through spray foam, stainless steel weep hole mesh, and permanent physical barriers."'
);

const bugBarrierCostSection = `## Physical Envelope Pest Barriers vs. Chemical Extermination Costs

Homeowners across the Midwest spend $600 to $1,500 annually on recurring exterminator pesticide sprays that only treat bugs after they enter the home. Building science focuses on **permanent physical envelope exclusion**:

### 1. Installed Physical Barrier Cost Breakdown
- **Full Perimeter Stainless Steel Weep Hole Covers & Mesh:** **$350 to $750**. Installs corrosion-proof 316 stainless steel mesh strips (1/4" grid) behind brick weep holes and exterior siding transitions, blocking mice and insects while preserving wall drainage.
- **Continuous Galvanized Termite Shields Over Foundation Sills:** **$1.50 to $2.80 per linear foot** installed during framing. Forces subterranean termites to build visible external mud tubes rather than entering unseen through sill plates.
- **Door Sweep & Garage Threshold Seals:** **$150 to $300** for heavy-duty commercial extruded aluminum sweeps with neoprene gaskets.

### 2. The Dangerous Myth: "Spray Foam Stops Rodents"
Pest control companies frequently market expanding foam as a rodent blocker:
- Mice and rats have sharp incisors that easily chew through polyurethane spray foam within **less than 60 seconds**.
- Once inside, rodents chew tunnels through foam insulation, using the warm cellular material for nesting.
- **The Steel Mesh Rule:** Expanding foam must *never* be used alone on exterior holes. Every penetration (around AC copper lines, gas pipes, and hose bibbs) must be tightly packed with **stainless steel wire wool (e.g., copper Stuf-fit or Xcluder mesh)** before sealing with hydraulic cement or high-density silicone. Rodents cannot chew through stainless steel fibers without severe oral lacerations.

---
`;

if (!c5.includes('Physical Envelope Pest Barriers')) {
  const target5 = `## Verification & Quality Assurance Tests`;
  c5 = c5.replace(target5, bugBarrierCostSection + '\n' + target5);
  fs.writeFileSync(file5, c5, 'utf8');
  console.log('✓ Updated bug-prevention.md');
}
