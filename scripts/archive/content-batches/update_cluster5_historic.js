const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\Dylen\\Desktop\\AEC\\Midwest';
const contentDir = path.join(rootDir, 'content');

// -----------------------------------------------------------------------------
// 1. balloon-framing.md
// -----------------------------------------------------------------------------
const file1 = path.join(contentDir, 'balloon-framing.md');
let c1 = fs.readFileSync(file1, 'utf8');

c1 = c1.replace('readTime: "8 min read"', 'readTime: "11 min read"');
c1 = c1.replace(
  'summary: "Balloon framing air leaks in pre-1940s Midwest homes: Learn how continuous open stud bays act as fire chimneys and drive severe winter heating losses."',
  'summary: "Balloon framing in pre-1940s homes: How to identify continuous stud flues, fireblocking costs ($1,400–$2,800), and stopping stack-effect heat loss."'
);

const balloonCostSection = `## Field Identification & Fireblocking Costs: How to Inspect & Seal Open Flues

Pre-1940s homes across Chicago, Milwaukee, Minneapolis, St. Louis, and Detroit were built using balloon framing—a construction method where exterior 2x4 wall studs run continuously from the foundation sill plate all the way up to the attic roof rafters without floor platform interruptions.

### 1. How to Identify Balloon Framing in 5 Minutes
You do not need to tear down plaster to verify if your home is balloon framed:
- **The Basement Rim Inspection:** Go to your basement and look up where the floor joists meet the exterior foundation wall. If you can shine a flashlight up between the floor joists and see open, continuous cavities extending straight up into the second-floor walls, your home is balloon framed.
- **The Attic Floor Scan:** Look at the perimeter floor joists in the attic. If you see open, dark stud chutes dropping straight down into the exterior walls with drafts billowing upward, the cavities are unblocked.
- **Exterior Wall Stud Continuity:** On a two-story home, if second-floor windows align perfectly vertically with first-floor windows and exterior walls sound hollow from floor to attic, it is classic balloon construction.

### 2. Fireblocking Retrofit Cost & Scope ($1,400 to $2,800)
- **Turnkey Professional Air-Seal & Fireblock Package:** **$1,400 to $2,800** for a typical 2-story home footprint.
- **The Scope of Work:** A crew installs non-combustible mineral wool batts (Roxul Safe'n'Silent) tightly friction-fitted into the bottom and top of every exterior wall cavity, sealed with intumescent fire-rated acrylic sealant (3M CP 25WB+) and backed with 2-inch solid lumber fireblocking per IRC Section R302.11.
- **The Heating Payback:** In an unblocked balloon-framed home, the continuous stud flues act as open thermal chimneys, pulling thousands of cubic feet of cold basement air into attic crawlspaces 24 hours a day. Sealing the two ends typically yields a **20% to 35% reduction in whole-house air infiltration** on a blower door test, saving $350 to $600 annually in winter gas heating.

---
`;

if (!c1.includes('Field Identification & Fireblocking Costs')) {
  const target1 = `## Payback and Whole-House Blower Door Reduction`;
  c1 = c1.replace(target1, balloonCostSection + '\n' + target1);
  fs.writeFileSync(file1, c1, 'utf8');
  console.log('✓ Updated balloon-framing.md');
}

// -----------------------------------------------------------------------------
// 2. balloon-framing-retrofit-steps.md
// -----------------------------------------------------------------------------
const file2 = path.join(contentDir, 'balloon-framing-retrofit-steps.md');
let c2 = fs.readFileSync(file2, 'utf8');

c2 = c2.replace('readTime: "7 min read"', 'readTime: "10 min read"');

const balloonStepsCostSection = `## Balloon Framing Firestop Materials & Contractor Scope Checklist

Retrofitting fireblocking into existing balloon-framed cavities requires strict adherence to fire safety codes (IRC Section R302.11 / ASTM E136):

### 1. Approved Material Specifications
- **Fireblocking Insulation:** Mineral wool batts (Rockwool Safe'n'Silent or Thermafiber) with a minimum density of 2.5 lbs/cu.ft. Never use fiberglass batts for fireblocking—fiberglass melts at 1,100°F within minutes during a chimney fire, whereas mineral wool withstands temperatures above 2,150°F.
- **Intumescent Fire Caulk:** ASTM E814 / UL 1479 certified intumescent acrylic caulk (red/gray) that expands up to 3x when exposed to intense heat, sealing microscopic gaps against flame passage.
- **Solid Wood Blocking:** Minimum 2-inch nominal dimensional lumber (2x4 or 2x6) or structural wood-structural panels (minimum 23/32" plywood/OSB) fastened securely into studs.

### 2. High-Risk Contractor Omissions
1. **Using Standard Expanding Polyurethane Foam:** Standard yellow foam is combustible plastic that burns rapidly and emits toxic fumes during a structural fire. Only fireblock-rated expanding foam (orange) tested per ASTM E814 is permitted.
2. **Missing the Center Balloon Partitions:** Many pre-1920s homes also feature interior balloon-framed load-bearing walls running through the center hallway. These open interior flues must be fireblocked just like the exterior perimeter walls.

---
`;

if (!c2.includes('Balloon Framing Firestop Materials')) {
  const target2 = `## Verification & Quality Assurance Tests`;
  c2 = c2.replace(target2, balloonStepsCostSection + '\n' + target2);
  fs.writeFileSync(file2, c2, 'utf8');
  console.log('✓ Updated balloon-framing-retrofit-steps.md');
}

// -----------------------------------------------------------------------------
// 3. insulating-brick.md
// -----------------------------------------------------------------------------
const file3 = path.join(contentDir, 'insulating-brick.md');
let c3 = fs.readFileSync(file3, 'utf8');

c3 = c3.replace('readTime: "9 min read"', 'readTime: "11 min read"');
c3 = c3.replace(
  'summary: "Why insulating historic solid brick walls causes freeze-thaw spalling in cold climates. Learn the physics of mass masonry, vapor permeability, and safe interior retrofits."',
  'summary: "Insulating historic solid brick walls: Why closed-cell foam causes exterior spalling, vapor-open wood fiber assemblies, and safe interior insulation rules."'
);

const brickSpallingSection = `## Why Insulating Old Brick Causes Spalling: The Freeze-Thaw Danger & Safe Retrofit Assemblies

Historic solid masonry buildings constructed before 1930—such as Chicago brick bungalows, Milwaukee Cream City brick duplexes, and St. Louis brick rowhouses—endure a major building science conflict when owners attempt to insulate interior walls:

### 1. The Physics of Freeze-Thaw Masonry Spalling
Historic mass brick walls were never designed to be insulated. They manage moisture through **thermal drying**:
- In winter, substantial indoor heat (escaping outward through the uninsulated brick) constantly warms the masonry, driving out rainwater and keeping the exterior surface above 35°F.
- When an inexperienced contractor sprays 3 inches of closed-cell spray foam or installs rigid foil-faced foam directly against the interior brick, interior furnace heat is completely severed from the wall.
- In midwinter, the brick temperature drops from 45°F down to **-10°F**.
- When driving winter rain or melting snow saturates the exterior brick pores, the water freezes solid. Water expands by 9% upon freezing, exerting over **20,000 PSI of internal hydraulic pressure** inside the brick matrix.
- Within 2 to 4 winters, the hard fired outer crust of the brick shears off completely—a catastrophic, irreversible structural failure known as **freeze-thaw spalling**.

### 2. The Safe Engineered Interior Assembly
To insulate historic mass masonry safely without triggering exterior spalling:
1. **Breathable Vapor-Open Materials:** Use vapor-permeable wood fiber insulation boards (e.g., Gutex Multitherm) or high-density mineral wool friction-fit inside 2x4 stud walls set 1 inch off the brick face.
2. **Variable-Permeance Smart Vapor Retarders:** Install a smart membrane (CertainTeed MemBrain or ProClima Intello Plus) on the interior warm side. In winter, the membrane stays closed (<1 perm) to block indoor humidity; in summer, it opens (>10 perms) to allow the brick to dry inward.
3. **Never Use Impermeable 6-Mil Plastic or Closed-Cell Spray Foam:** Trapping moisture inside soft historic brick will destroy the building envelope.

---
`;

if (!c3.includes('Why Insulating Old Brick Causes Spalling')) {
  const target3 = `## Building Science Baseline: Mass Wall Hygrothermal Dynamics`;
  c3 = c3.replace(target3, brickSpallingSection + '\n' + target3);
  fs.writeFileSync(file3, c3, 'utf8');
  console.log('✓ Updated insulating-brick.md');
}

// -----------------------------------------------------------------------------
// 4. historic-brick-retrofit-steps.md
// -----------------------------------------------------------------------------
const file4 = path.join(contentDir, 'historic-brick-retrofit-steps.md');
let c4 = fs.readFileSync(file4, 'utf8');

c4 = c4.replace('readTime: "8 min read"', 'readTime: "10 min read"');

const repointingCostSection = `## Historic Masonry Repointing Costs & Mortar Compatibility Rules

Before adding any interior insulation to a historic brick structure, the exterior masonry mortar envelope must be 100% weather-tight and structurally sound:

### 1. Repointing Cost Breakdown (Midwest Regional Averages)
- **Historic Lime Mortar Repointing:** **$15 to $35 per square foot** of wall surface area. Covers grinding out failing mortar joints to a depth of 3/4", removing dust, pre-wetting the brick, and hand-packing compatible breathable mortar in layers.
- **Spot Tuckpointing vs. 100% Rake & Repoint:** Spot pointing isolated cracks on a 2-story home typically costs **$2,500 to $4,500**. Full four-side architectural facade restoration ranges from **$18,000 to $42,000**.

### 2. The Fatal Mortar Mistake: Portland Cement Destruction
The single most destructive error made by general masonry contractors on historic pre-1930s homes is using modern **Portland cement mortar (Type S or Type M)**:
- Pre-1930s bricks were low-fired in wood or coal kilns; they are soft, porous, and ductile.
- Modern Portland cement dries ultra-hard (1,800 to 2,500 PSI compressive strength) and impermeable to water vapor.
- **The Golden Rule of Masonry:** The mortar must always be *softer and more vapor-permeable* than the surrounding brick.
- When modern Portland mortar is packed against soft historic brick, the mortar cannot flex during seasonal expansion. Under freeze-thaw cycles, the hard Portland mortar crushes the softer brick, permanently fracturing the wall.
- **Required Mortar Specification:** Demand high-lime, low-cement **Type O mortar** (350 PSI) or pure **Natural Hydraulic Lime (NHL 2.0 / NHL 3.5)** mortar without Portland cement additives.

---
`;

if (!c4.includes('Historic Masonry Repointing Costs')) {
  const target4 = `## Verification & Quality Assurance Tests`;
  c4 = c4.replace(target4, repointingCostSection + '\n' + target4);
  fs.writeFileSync(file4, c4, 'utf8');
  console.log('✓ Updated historic-brick-retrofit-steps.md');
}
