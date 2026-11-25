const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\Dylen\\Desktop\\AEC\\Midwest';
const contentDir = path.join(rootDir, 'content');

// -----------------------------------------------------------------------------
// 1. when-to-replace-windows.md
// -----------------------------------------------------------------------------
const file1 = path.join(contentDir, 'when-to-replace-windows.md');
let c1 = fs.readFileSync(file1, 'utf8');

c1 = c1.replace('readTime: "8 min read"', 'readTime: "11 min read"');
c1 = c1.replace(
  'summary: "When does replacing windows actually make economic and building science sense? Learn why window salesmen lie, true thermal payback, and what specs to demand."',
  'summary: "When to replace windows vs repair: Midwest costs per window, vinyl inserts vs full-frame, the 35-year energy payback trap, and what specs to demand."'
);

const windowCostSection = `## Midwest Window Replacement Costs: Full Frame vs. Pocket Inserts vs. Storms

Window replacement salesmen frequently promise that new triple-pane windows will cut your winter heating bills in half. Building science thermodynamic calculations reveal this is impossible: windows account for only 15% to 25% of a home's total envelope heat loss. Understanding true installed costs and payback dynamics is essential before signing a five-figure contract:

### 1. Installed Price Breakdown per Window (Midwest Regional Index)
- **Pocket / Insert Replacement (Vinyl, Double-Pane Low-E, Argon):** **$650 to $1,100 per window installed**. Fits inside the existing wooden jamb and trim without disturbing interior casings or exterior siding. Suitable only if the existing wooden frame is square, plumb, and free of structural rot.
- **Full-Frame Tearout (Fiberglass or Clad-Wood, Double/Triple-Pane):** **$1,350 to $2,200 per window installed**. Completely removes the entire existing window down to the rough stud opening, installs new flashing tape, sill pan, insulation, and new interior trim. Mandatory if old frames have water damage, structural rot, or out-of-square racking.
- **Historic Architectural Wood Replacement:** **$2,200 to $3,500+ per opening**. Custom historical profiles required for landmark districts.
- **Exterior Low-E Storm Windows (AERC Rated):** **$180 to $350 per window installed**. Fits over existing single-pane windows, delivering U-factors comparable to standard double-pane replacements at a fraction of the cost.

### 2. The 35-Year Energy Payback Reality
Replacing 20 single-pane windows with high-efficiency double-pane units typically saves **$250 to $450 per year** in heating and cooling energy. On a $20,000 to $28,000 window replacement project, the simple financial payback spans **35 to 55 years**—exceeding the 20- to 25-year service lifespan of the window's insulated glass unit (IGU) seals!
- **When Replacement Makes Sense:** Rotted wood sills, broken balances that slam shut, shattered glass, or when remodeling exterior siding.
- **When Replacement Is a Financial Trap:** Spending $25,000 purely for "energy efficiency" when drafty attic bypasses and uninsulated basement rim joists are losing five times more heat for one-tenth the cost.

---
`;

if (!c1.includes('Midwest Window Replacement Costs')) {
  const target1 = `## The Installation Details Contractors Cut`;
  c1 = c1.replace(target1, windowCostSection + '\n' + target1);
  fs.writeFileSync(file1, c1, 'utf8');
  console.log('✓ Updated when-to-replace-windows.md');
}

// -----------------------------------------------------------------------------
// 2. window-alternatives.md
// -----------------------------------------------------------------------------
const file2 = path.join(contentDir, 'window-alternatives.md');
let c2 = fs.readFileSync(file2, 'utf8');

c2 = c2.replace('readTime: "8 min read"', 'readTime: "10 min read"');
c2 = c2.replace(
  'summary: "Discover low-cost alternatives to expensive window replacement. How Low-E storm windows, interior acrylic panels, and air sealing deliver 80% performance at 10% cost."',
  'summary: "Window replacement alternatives: How Low-E storm windows, weight pocket insulation, and air sealing deliver 80% thermal performance at 1/10th the cost."'
);

const stormCostSection = `## Low-E Storms vs. $30,000 Window Replacements: The 80/10 Financial Breakdown

Before spending tens of thousands of dollars gutting original windows in a classic bungalow or two-story home, homeowners should evaluate verified field data from the Pacific Northwest National Laboratory (PNNL) on modern Low-E storm windows:

### 1. The Cost & Performance Comparison Matrix
| Solution / Metric | Full Replacement Windows (20 Openings) | Low-E Exterior Storm Windows (20 Openings) | Interior Acrylic Inserts (Indow Style) |
| :--- | :--- | :--- | :--- |
| **Total Turnkey Project Cost** | **$18,000 to $28,000** | **$3,600 to $5,800** | **$4,200 to $6,500** |
| **Assembly U-Factor Achieved** | U-0.27 to U-0.30 | **U-0.30 to U-0.34** | U-0.30 to U-0.33 |
| **Air Leakage Reduction** | 80% to 90% | **75% to 85%** | **85% to 92%** |
| **Simple Payback Period** | **35 to 50 Years** | **5 to 8 Years** | **7 to 10 Years** |
| **Preservation of Original Wood** | 0% (Original architectural trim torn out) | **100% (Old-growth heartwood preserved)** | **100% (No exterior alteration)** |

### 2. How to Stop Drafts Behind the Trim (The Weight Pocket Secret)
In pre-1950s double-hung windows, the cold draft felt by occupants rarely comes through the glass; it leaks around the wooden trim from open sash-weight pockets:
- Behind the side casing lies a hollow 3-inch stud cavity holding heavy cast-iron counterbalance sash weights. This cavity connects directly to uninsulated exterior wall framing and basement air leaks.
- **The $15 Fix:** Pop off the interior stop moulding or access pocket cover, remove the old cast-iron weights (replace with modern spiral or spring balances), and dense-pack the hollow cavity with rockwool or low-expansion spray foam. This eliminates over 70% of window draftiness without replacing a single piece of glass.

---
`;

if (!c2.includes('Low-E Storms vs. $30,000 Window Replacements')) {
  const target2 = `## Financial Analysis & Federal Tax Credits`;
  c2 = c2.replace(target2, stormCostSection + '\n' + target2);
  fs.writeFileSync(file2, c2, 'utf8');
  console.log('✓ Updated window-alternatives.md');
}

// -----------------------------------------------------------------------------
// 3. energy-hikes.md
// -----------------------------------------------------------------------------
const file3 = path.join(contentDir, 'energy-hikes.md');
let c3 = fs.readFileSync(file3, 'utf8');

c3 = c3.replace('readTime: "8 min read"', 'readTime: "11 min read"');

const roiHierarchySection = `## The Midwest Energy ROI Hierarchy: What Actually Lowers Winter Heating Bills

With Midwestern utility gas tariffs and winter peak electric rates rising sharply, homeowners are bombarded with contractor pitches for high-ticket renovations. Building scientists rank envelope energy retrofits by direct return on investment (ROI):

### 1. The Energy Upgrade Payback Ranking
1. **Attic Air Sealing & Top Plate Foam ($1,500 to $2,800 &rarr; 2 to 4 Year Payback):** Sealing convective attic bypasses stops the stack effect from sucking conditioned air out of the living space, cutting whole-house heating loads by 15% to 25%.
2. **Basement Rim Joist Closed-Cell Spray Foam ($1,200 to $2,200 &rarr; 3 to 5 Year Payback):** The uninsulated wood rim joist sitting on top of the concrete foundation is the #1 source of cold draft infiltration on the ground floor.
3. **Dual-Fuel Cold-Climate Heat Pump Conversion ($6,500 to $12,000 net after 25C tax credits &rarr; 5 to 7 Year Payback):** Lets an ultra-efficient inverter heat pump handle 85% of winter heating hours at a COP of 2.2 to 3.5, switching to existing gas only during sub-zero polar vortex peaks.
4. **Wall Cavity Dense-Pack Cellulose ($2,200 to $4,500 &rarr; 6 to 9 Year Payback):** Fills empty stud cavities in uninsulated pre-1960s homes via small exterior holes under siding.
5. **Full Window Replacement ($18,000 to $30,000 &rarr; 35+ Year Payback):** Delivers minimal marginal energy savings relative to its massive capital expenditure. Always address air leakage and insulation before replacing functional windows.

---
`;

if (!roiHierarchySection && !c3.includes('The Midwest Energy ROI Hierarchy')) {
  // Check
}
if (!c3.includes('The Midwest Energy ROI Hierarchy')) {
  const target3 = `## The Real Solution: Air Barriers and Mechanical Ventilation`;
  c3 = c3.replace(target3, roiHierarchySection + '\n' + target3);
  fs.writeFileSync(file3, c3, 'utf8');
  console.log('✓ Updated energy-hikes.md');
}

// -----------------------------------------------------------------------------
// 4. basement-egress-window-cutting.md
// -----------------------------------------------------------------------------
const file4 = path.join(contentDir, 'basement-egress-window-cutting.md');
let c4 = fs.readFileSync(file4, 'utf8');

c4 = c4.replace('readTime: "9 min read"', 'readTime: "11 min read"');

const egressCostSection = `## Turnkey Egress Window Cost Breakdown: Saw Cutting, Well Drainage & Codes

Adding a legal egress window to an existing concrete basement transforms dark storage into a legally permitted bedroom, immediately adding $20,000 to $35,000 in home appraisal value across the Midwest.

### 1. Installed Project Cost Breakdown (Per Egress Window)
- **Turnkey Professional Installation:** **$3,600 to $6,500** total completed cost. Covers:
  - Exterior excavation of a 5x5 ft. pit down to the foundation footing ($600 to $1,000).
  - Hydraulic track-mounted diamond diamond-blade saw cutting through 8-inch to 10-inch reinforced poured concrete ($1,000 to $1,600).
  - Concrete chunk removal and structural steel lintel installation where rough opening exceeds 48 inches ($400 to $600).
  - Pressure-treated wood rough buck anchored with 1/2" Simpson wedge anchors ($300 to $500).
  - Energy Star double-pane Low-E vinyl casement or in-swing egress window ($450 to $800).
  - Heavy-duty corrugated galvanized steel or composite egress well with permanent safety ladder ($600 to $1,200).
  - Footing drain connection with 4-inch PVC and washed drainage gravel ($400 to $600).
- **DIY Cost:** **$1,600 to $2,800** for window, well, ladder, concrete saw rental ($250/day), and gravel.

### 2. The Critical Window Well Drainage Detail
Over 80% of basement egress window leaks occur because the contractor failed to connect the window well drain to the foundation drain tile:
- The bottom of the egress well must sit at least **8 inches below the window sill**.
- A 4-inch vertical PVC standpipe surrounded by 12 inches of washed 3/4" crushed stone must tie directly into the perforated exterior footing drain tile.
- If the well drain is omitted, heavy spring downpours will fill the window well like a fish tank, eventually breaking through the window seals and flooding the basement with hundreds of gallons of water.

---
`;

if (!c4.includes('Turnkey Egress Window Cost Breakdown')) {
  const target4 = `## Frequently Asked Questions`;
  c4 = c4.replace(target4, egressCostSection + '\n' + target4);
  fs.writeFileSync(file4, c4, 'utf8');
  console.log('✓ Updated basement-egress-window-cutting.md');
}
