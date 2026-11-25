const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\Dylen\\Desktop\\AEC\\Midwest';
const contentDir = path.join(rootDir, 'content');

// -----------------------------------------------------------------------------
// 1. basement-waterproofing.md
// -----------------------------------------------------------------------------
const file1 = path.join(contentDir, 'basement-waterproofing.md');
let c1 = fs.readFileSync(file1, 'utf8');

c1 = c1.replace('readTime: "9 min read"', 'readTime: "11 min read"');
c1 = c1.replace(
  'summary: "Why water leaks where basement floor meets wall after heavy rain. Discover clay bowl physics, hydrostatic pressure, and the proven interior drain tile fix."',
  'summary: "Basement leaking where floor meets wall: Compare interior drain tile cost vs exterior excavation, hydrostatic pressure mechanics, and permanent drainage fixes."'
);

const drainTileCostSection = `## Interior Drain Tile vs. Exterior Waterproofing: Cost Breakdown & Selection Guide

When water seeps into a basement along the "cove joint"—where the concrete floor slab meets the foundation wall—homeowners are flooded with conflicting bids ranging from cheap topical sealants to massive $30,000 excavation quotes.

### 1. Installed Price Breakdown: Interior vs. Exterior Systems
- **Perimeter Interior Drain Tile System:** **$75 to $125 per linear foot** ($9,000 to $15,000 for a standard 120-linear-foot basement perimeter). This includes jackhammering an 18-inch trench through the concrete floor along the perimeter, digging down below the top of the footing, laying 4-inch perforated smooth-wall PVC pipe encased in washed gravel and non-woven filter fabric, installing dimpled wall drainage board, pouring a new concrete patch flush with the floor, and installing a sealed dual-pump sump pit with battery backup.
- **Full Exterior Excavation & Waterproofing:** **$250 to $450 per linear foot** ($30,000 to $54,000 for a 120-foot perimeter). Requires excavating down 8 feet around the entire exterior perimeter of the home, removing porches, decks, air conditioning units, and landscaping, pressure washing the exposed concrete, applying a heavy-duty spray rubber membrane and dimpled drainage board, laying new footing tiles, backfilling with crushed stone, and regrading.

### 2. When to Choose Interior vs. Exterior Drainage
| Problem / Condition | Recommended System | Engineering Rationale |
| :--- | :--- | :--- |
| **Water enters at floor-wall cove joint during heavy rains** | **Interior Drain Tile** | Hydrostatic water table rises from underneath; interior tile relieves pressure directly at the footing plane. |
| **Finished landscaping, concrete driveways, or mature trees surround home** | **Interior Drain Tile** | Exterior excavation would cause $15,000+ in landscape and hardscape destruction. |
| **Exterior cinder block wall is bowing or crumbling from frost heave** | **Exterior Excavation + Structural Wall Reinforcement** | Relieves lateral clay soil pressure directly from outside; allows carbon fiber or steel beam bracing. |
| **Severe groundwater flooding during seasonal spring thaws** | **Interior Tile + Dual Sump Crocks with Battery Backup** | Captures water below slab level and ejects it 20 feet away from the foundation before it touches living space. |

### 3. Red Flags on Waterproofing Contractor Bids
1. **Topical Epoxies or "Waterproof Paint":** Applying hydraulic cement or Drylok paint to the inside face of a weeping wall never stops hydrostatic pressure. Water will simply build up inside the concrete pores until the paint blisters and peels off within 6 to 18 months.
2. **Flexible Corrugated Pipe:** Demand rigid, smooth-interior perforated PVC pipe (ASTM D2729 or SDR 35). Flexible corrugated black tubing easily crushes under backfill pressure, has internal ridges that trap silt, and cannot be cleaned out with a mechanical drain snake.
3. **No Sump Battery Backup:** A primary sump pump without an independent DC battery backup pump is a flood waiting to happen during severe Midwest spring thunderstorm power outages.

---
`;

if (!c1.includes('Interior Drain Tile vs. Exterior Waterproofing')) {
  const target1 = `## Specification Benchmark: External vs. Internal Drainage Assemblies`;
  c1 = c1.replace(target1, drainTileCostSection + '\n' + target1);
  fs.writeFileSync(file1, c1, 'utf8');
  console.log('✓ Updated basement-waterproofing.md');
}

// -----------------------------------------------------------------------------
// 2. basement-lvp-flooring-moisture.md
// -----------------------------------------------------------------------------
const file2 = path.join(contentDir, 'basement-lvp-flooring-moisture.md');
let c2 = fs.readFileSync(file2, 'utf8');

c2 = c2.replace('readTime: "7 min read"', 'readTime: "10 min read"');
c2 = c2.replace(
  'summary: "Why waterproof LVP flooring fails in basements: The building science of sub-slab moisture vapor emission rates (MVER), relative humidity, and trapped water traps."',
  'summary: "Why waterproof LVP flooring buckles on basement concrete: Sub-slab moisture vapor emissions (MVER), mold traps under planks, and the subfloor dimple mat solution."'
);

const lvpCostSection = `## Why 100% Waterproof LVP Fails on Concrete: Vapor Traps & The Dimple Mat Fix

Retailers market Luxury Vinyl Plank (LVP) as "100% waterproof." While the vinyl planks themselves will not swell or degrade when submerged in water, laying LVP directly over a basement concrete slab is one of the most common flooring failures across the Midwest.

### 1. The Sub-Slab Vapor Trap Mechanism
- **The Concrete Vapor Drive:** Even if a basement slab looks bone-dry on the surface, ground moisture vapor constantly moves upward through the porous concrete via capillary action and vapor pressure ($1.5 \\text{ to } 6.0 \\text{ lbs}/1,000 \\text{ sq.ft.}/24 \\text{ hrs}$).
- **The Plastic Vapor Trap:** LVP is made of solid, non-breathable polyvinyl chloride (PVC). Laying it flat against concrete creates an impermeable vapor barrier.
- **The Biological Growth Zone:** Moisture evaporating from the slab is trapped beneath the vinyl backing. In dark, unventilated spaces where alkaline concrete salts, dust, and adhesive residues mix, toxic black mold blooms within months. The planks cup at the edges, click loudly when walked on, and release pungent musty odors into the home.

### 2. The Engineered Solution: Air-Gap Dimple Mats ($0.75 to $1.20 / Sq. Ft.)
To safely install LVP over concrete, you must decouple the flooring from the slab using an engineered dimpled subfloor membrane (e.g., DELTA-FL or DMX 1-Step):
- **Continuous 5/16" Air Gap:** The high-density polyethylene (HDPE) dimpled sheet creates a continuous drainage and air-circulation space beneath the floor.
- **Vapor Equalization:** Moisture vapor evaporating from the slab diffuses freely through the air gap and safely exits around baseboard perimeter expansion gaps without condensing under the planks.
- **Thermal Break:** Decoupling the floor from cold 50°F concrete raises the finished flooring surface temperature by 5°F to 8°F, eliminating the ice-cold foot feel of basement flooring.

---
`;

if (!c2.includes('Why 100% Waterproof LVP Fails on Concrete')) {
  const target2 = `## The Action Plan: Specific Services & Implementation Steps`;
  c2 = c2.replace(target2, lvpCostSection + '\n' + target2);
  fs.writeFileSync(file2, c2, 'utf8');
  console.log('✓ Updated basement-lvp-flooring-moisture.md');
}

// -----------------------------------------------------------------------------
// 3. how-to-know-if-you-need-icf-basement.md
// -----------------------------------------------------------------------------
const file3 = path.join(contentDir, 'how-to-know-if-you-need-icf-basement.md');
let c3 = fs.readFileSync(file3, 'utf8');

c3 = c3.replace('readTime: "9 min read"', 'readTime: "11 min read"');

const foundationRepairCostSection = `## Foundation Repair Cost Benchmark: Carbon Fiber Straps vs. Steel Beams vs. ICF Replacement

When inspecting an existing Midwest basement for structural deflection, determining the appropriate engineering intervention depends on wall deflection depth and soil conditions:

### 1. Structural Repair Cost Comparison
- **Carbon Fiber Reinforcement Straps:** **$4,500 to $8,500** ($650 to $900 per strap, spaced every 4 to 5 feet). Suitable only for concrete block or poured walls with minor inward bowing (less than 2 inches). High-tensile carbon fiber bonded with structural epoxy halts inward deflection, but cannot push an already deflected wall back plumb.
- **Adjustable Steel I-Beam Bracing:** **$7,000 to $14,000** ($800 to $1,200 per vertical beam). Heavy steel beams anchored into the concrete floor slab and bolted to top floor joists. Can handle severe wall inward bowing (2 to 3.5 inches), but permanently encroaches 4 inches into basement usable living space.
- **Excavation & Helical Tieback Anchors:** **$9,000 to $18,000** ($1,200 to $1,800 per anchor). Steel screw rods driven 15 to 25 feet out into undisturbed soil past the active clay slip plane to pull bowed walls back into plumb.
- **Total Foundation Replacement with Monolithic ICF:** **$35,000 to $65,000+**. Required when concrete block mortar joints have completely sheared, structural crumbling has occurred, or a homeowner is raising the home to double ceiling height and create a permanent, bone-dry living space.

### 2. The 2-Inch Deflection Rule
If a plumb line test shows your foundation wall is bowing inward by **more than 2 inches**, the wall has exceeded its structural elasticity limit. Cosmetic crack injections or DIY carbon fiber kits will not pass home inspection during resale. You must engage a licensed structural engineer before proceeding with interior finishing.

---
`;

if (!c3.includes('Foundation Repair Cost Benchmark')) {
  const target3 = `## 6. The "Sill Plate" Flashlight Scan`;
  c3 = c3.replace(target3, foundationRepairCostSection + '\n' + target3);
  fs.writeFileSync(file3, c3, 'utf8');
  console.log('✓ Updated how-to-know-if-you-need-icf-basement.md');
}

// -----------------------------------------------------------------------------
// 4. sub-slab-insulation-specs.md
// -----------------------------------------------------------------------------
const file4 = path.join(contentDir, 'sub-slab-insulation-specs.md');
let c4 = fs.readFileSync(file4, 'utf8');

c4 = c4.replace('readTime: "9 min read"', 'readTime: "11 min read"');

const subSlabCostSection = `## Sub-Slab Foam Cost vs. Return: Why R-10 Under Slab Pays for Itself in the Midwest

Pouring a concrete basement or garage slab directly on dirt or crushed gravel without continuous sub-slab insulation is a permanent thermal mistake. In cold Midwest climates, sub-slab foam delivers critical financial and comfort dividends:

### 1. Material & Installation Cost Breakdown
- **Type IX High-Density EPS Foam (R-10, 2-Inch Thick, 25 PSI):** **$1.15 to $1.55 per sq. ft.** of slab area. For a 1,500 sq. ft. basement floor, materials cost **$1,725 to $2,325**.
- **Type IV XPS Foam (R-10, 2-Inch Thick, 25 PSI):** **$1.45 to $1.95 per sq. ft.** ($2,175 to $2,925 total). Note: Long-term field studies by Oak Ridge National Laboratory show XPS loses up to 40% of its R-value below grade over 15 years due to water vapor infiltration, whereas Type IX closed-cell EPS maintains 95%+ of its R-value permanently.
- **ASTM E1745 Class A 15-Mil True Polyolefin Vapor Retarder (Stego Wrap):** **$0.40 to $0.60 per sq. ft.** Tape all seams with manufacturer-approved acrylic seam tape.

### 2. The Payback: Energy, Radiant Heat, and Sweat Elimination
1. **Comfort & Usability:** An uninsulated slab hovers at 50°F to 54°F year-round, making bare feet chilly and causing carpets to trap mildew. An R-10 insulated slab hovers at 64°F to 67°F, matching ambient room temperatures.
2. **Hydronic Radiant Heat Efficiency:** If installing in-slab PEX hydronic radiant heating, sub-slab insulation is mandatory. Without R-10 to R-15 foam beneath the tubing, over 45% of your hydronic heat is siphoned straight down into the cold infinite heat sink of the subsoil.
3. **Summer Sweating Halted:** In July and August, warm humid air entering the basement will not condense on a slab that stays above the 55°F dew point.

---
`;

if (!c4.includes('Sub-Slab Foam Cost vs. Return')) {
  const target4 = `## Specification Benchmark: Sub-Slab & Rim Joist Insulation Materials`;
  c4 = c4.replace(target4, subSlabCostSection + '\n' + target4);
  fs.writeFileSync(file4, c4, 'utf8');
  console.log('✓ Updated sub-slab-insulation-specs.md');
}

// -----------------------------------------------------------------------------
// 5. expansive-lawncare.md
// -----------------------------------------------------------------------------
const file5 = path.join(contentDir, 'expansive-lawncare.md');
let c5 = fs.readFileSync(file5, 'utf8');

c5 = c5.replace('readTime: "8 min read"', 'readTime: "10 min read"');

const gradingCostSection = `## Foundation Grading Slope Standards: The 6-in-10 Rule & Buried Downspout Costs

Over 70% of wet basements across the Midwest are caused not by high groundwater tables, but by improper surface grading and roof runoff dumping water directly against the foundation walls.

### 1. The Building Code Slope Rule (IRC Section R401.3)
Building codes strictly mandate surface drainage slopes away from exterior walls:
- **The "6-in-10" Rule:** Ground immediately adjacent to foundation walls must slope downward at least **6 inches within the first 10 feet** (a 5% grade).
- **The Clay Settlement Dip:** On new homes, backfilled clay soil naturally settles over the first 3 to 5 years. This creates an uncompacted trough against the house that funnels roof runoff straight down the foundation face. Homeowners must annually inspect the perimeter and add compacted, dense clay soil (never porous bark mulch) to maintain positive outward pitch.

### 2. Buried Downspout Drainage Cost Breakdown
- **Buried Solid 4-Inch Smooth PVC Runs to Daylight:** **$18 to $30 per linear foot** ($1,200 to $2,500 for 3 to 4 downspouts). 
- **The Rule of 10 Feet:** Downspout extensions must discharge roof water at least **10 feet away** from the foundation wall. On a 2,000 sq. ft. roof during a 1-inch rainstorm, gutters collect over 1,200 gallons of water. Dumping that volume at the foundation corner exerts severe hydrostatic pressure against basement walls.
- **Never Use Corrugated Thin-Wall Pipe:** Corrugated black flex-pipe crushes under lawnmowers, collects decomposing leaves in its internal ribs, and easily gets pierced by tree roots. Always specify rigid Schedule 40 or thin-wall SDR 35 PVC pipe with cleanout tees.

---
`;

if (!c5.includes('Foundation Grading Slope Standards')) {
  const target5 = `## Verification & Quality Assurance Tests`;
  c5 = c5.replace(target5, gradingCostSection + '\n' + target5);
  fs.writeFileSync(file5, c5, 'utf8');
  console.log('✓ Updated expansive-lawncare.md');
}
