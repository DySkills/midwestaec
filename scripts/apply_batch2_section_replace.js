const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\Dylen\\Desktop\\AEC\\Midwest';
const contentDir = path.join(rootDir, 'content');

function replaceSectionBetween(filePath, startMarker, endMarker, newContent) {
  let content = fs.readFileSync(filePath, 'utf8');
  let lines = content.split(/\r?\n/);

  const startIdx = lines.findIndex(l => l.includes(startMarker));
  if (startIdx === -1) {
    console.warn(`⚠ startMarker "${startMarker}" not found in ${path.basename(filePath)}`);
    return false;
  }

  const endIdx = lines.findIndex((l, i) => i > startIdx && l.includes(endMarker));
  if (endIdx === -1) {
    console.warn(`⚠ endMarker "${endMarker}" not found in ${path.basename(filePath)}`);
    return false;
  }

  const newLines = newContent.trim().split('\n');
  lines.splice(startIdx, endIdx - startIdx, ...newLines);
  fs.writeFileSync(filePath, lines.join('\r\n'), 'utf8');
  console.log(`✓ Successfully updated ${path.basename(filePath)} (lines ${startIdx+1} to ${endIdx+1})`);
  return true;
}

// 1. sips-vs-traditional-framing.md
replaceSectionBetween(
  path.join(contentDir, 'sips-vs-traditional-framing.md'),
  '## Prairie Winds on the Outskirts of Des Moines',
  ':::carousel',
  `## The Capital Dilemma: Structural Insulated Panels vs. 2x6 Framing Bids

When budgeting a custom home or rural acreage build across the Great Lakes and Northern Plains, the framing bid represents one of the largest single capital expenditures in the project. Builders and owners are frequently caught between conventional stick framing and high-performance Structural Insulated Panels (SIPs):

### 1. The Two Competing Construction Bids
- **Conventional 2x6 Stick Framing (R-20 Cavity):** Wood studs spaced 16 inches on center, insulated with fiberglass batts and wrapped in housewrap. While material costs are lower, wood framing members (studs, plates, headers) account for **25% of the exterior wall surface area**, acting as continuous thermal bridges that bleed heat in -15°F winter winds.
- **Monolithic SIPs Envelopes (6.5" Walls / 10.25" Roofs):** Monolithic panels featuring continuous expanded polystyrene (EPS) or graphite polystyrene (GPS) foam cores factory-laminated between two sheets of structural OSB. Delivers uninterrupted R-24 to R-40 insulation with studs eliminated every 16 inches.

### 2. The Upfront Material vs. Dry-In Labor Trade-Off
While SIPs factory packages carry an upfront material premium of **$14,000 to $20,000** over stick-framing lumber packages, they cut jobsite dry-in labor by **50% to 70%** (3 to 5 days with a crane vs. 3 to 4 weeks of stick framing). Evaluating the true financial payback requires analyzing the combined shell assembly cost, HVAC equipment downsizing, and long-term utility performance.

`
);

// 2. when-to-replace-windows.md
replaceSectionBetween(
  path.join(contentDir, 'when-to-replace-windows.md'),
  '## Technical Baseline: Fenestration Economics & Thermal Performance',
  '## The 4 Scenarios That Warrant Full Replacement',
  `## The Capital Dilemma: $25,000 Window Quotes vs. Envelope Realities

Homeowners across the Midwest are aggressively targeted by window replacement contractors promising that new double- or triple-pane windows will slash winter heating bills in half. Before committing $20,000 to $40,000 to a window replacement contract, building science economics reveals the mathematical truth:

### 1. The Physics Gap: R-3 Windows vs. R-20 Walls
- Even a brand-new, top-tier Energy Star double-pane window (U-0.27) provides an insulating value of barely **R-3.7**—compared to an R-20 exterior wall or an R-60 attic.
- Windows account for only **15% to 22%** of a typical home's total heat loss.
- Slashing your heating bills by 50% through windows alone is a thermodynamic impossibility. On an annual heating bill of $2,000, replacing all windows typically saves **$250 to $450 per year**.
- On a $25,000 window replacement contract, the simple financial payback spans **45 to 65 years**—far exceeding the 20- to 25-year service life of the insulated glass seals!

### 2. When Capital Investment Makes Sense vs. When to Pass
- **INVEST:** If original wood jambs have structural wet rot, balances are physically broken, glass is shattered, or during a full siding tear-off where full-frame flashing can be seamlessly integrated.
- **PASS (Target the Alternatives):** If frames are structurally sound and the primary complaint is drafts and high heating bills. Installing Low-E storm windows and air-sealing weight pockets delivers 80% of the thermal performance at one-tenth the capital cost.

---
`
);

// 3. window-alternatives.md
replaceSectionBetween(
  path.join(contentDir, 'window-alternatives.md'),
  '## Winter Gusts in Portage Park at 14°F',
  '## The 80/10 Rule of Window Physics',
  `## The 80/10 Capital Equation: High-Performance Storms vs. Replacement Quotes

Homeowners living in classic bungalows, Victorians, and mid-century homes across Chicago, Milwaukee, Minneapolis, and Des Moines face an aggressive sales pitch: spend $25,000 to $35,000 replacing original windows, or endure freezing drafts and soaring winter gas bills.

### 1. The 80/10 Rule of Window Physics
Extensive field testing by the Pacific Northwest National Laboratory (PNNL) proves that homeowners do not need to spend five figures to achieve thermal comfort:
- **80% Performance at 10% Cost:** Adding an engineered, AERC-rated Low-E storm window over an existing single-pane window drops the overall assembly U-factor from U-1.10 down to **U-0.30 to U-0.34**—virtually identical to brand-new $1,000 double-pane vinyl replacement windows.
- **The Capital Differential:** Equipping 20 windows with Low-E exterior storm windows costs **$3,600 to $5,800 installed**—compared to **$22,000 to $32,000** for full-frame window replacements.
- **Preservation of Old-Growth Lumber:** Original pre-1950s wood window frames were milled from dense, rot-resistant old-growth heartwood that will last another 100 years if maintained. Replacing them with hollow vinyl units discards irreplaceable architectural timber for plastic frames that warp and fail within 20 years.

---
`
);

// 4. barndominium-post-frame.md
replaceSectionBetween(
  path.join(contentDir, 'barndominium-post-frame.md'),
  '## Dawn on a Rural Acreage',
  '## The Residential Moisture Multiplier: Barns vs. Living Spaces',
  `## The Capital Dilemma: The $60/Sq. Ft. Shell Myth vs. Turnkey Midwest Living Costs

Post-frame construction ("barndominiums") is marketed across rural Midwest acreages as a revolutionary way to build a custom home for "$60 to $80 per square foot." While that price accurately covers an agricultural storage shell, turning a steel pole barn into a safe, code-compliant, and durable residential home requires a much different capital budget:

### 1. The Bare Shell vs. Turnkey Reality
- **The $55 to $75/Sq. Ft. Structural Shell:** Covers laminated structural posts, clear-span steel roof trusses, 29-gauge metal siding and roofing, basic vinyl windows, and concrete pier footings. (This leaves an unconditioned, dirt-floor agricultural barn).
- **The $145 to $195/Sq. Ft. Finished Living Quarters:** Turning that shell into a home requires sub-slab continuous R-10 insulation, frost-depth perimeter thermal breaks, interior stud framing, electrical, plumbing, cold-climate heat pump mechanicals, drywall, interior finishes, and engineered condensation-control insulation.
- **The Real Cost:** A 2,400 sq. ft. finished barndominium costs **$340,000 to $460,000 turnkey**—delivering roughly 15% to 25% savings over conventional stick-built custom homes, rather than the fictional 60% discounts promised online.

### 2. The #1 Structural Risk: Building an Agricultural Envelope for Residential Moisture
Agricultural barns house tractors and hay; they generate zero interior moisture. Residential homes house families who generate **25 to 40 pounds of water vapor daily** through cooking, bathing, and respiration. If a post-frame builder applies agricultural construction details to a residential barndominium, interior humidity contacts sub-zero exterior metal sheeting, causing catastrophic ceiling rain and structural framing rot.

---
`
);

// 5. energy-hikes.md
replaceSectionBetween(
  path.join(contentDir, 'energy-hikes.md'),
  '## Sub-Freezing Nights',
  '## Increasing Costs Are More than Mechanical',
  `## The Capital Allocation Hierarchy: Why $20,000 on Windows Fails the Payback Test

When winter natural gas tariffs and electric heating rates spike across the Midwest, homeowners look for ways to cut utility costs. Window replacement companies aggressively pitch $20,000 to $30,000 contracts, claiming new windows will slash energy bills in half. Building science thermodynamics proves this is one of the worst capital investments a homeowner can make:

### 1. The Capital Payback Reality Check
- **The $25,000 Window Investment:** Delivers an annual heating energy savings of roughly **$250 to $450 per year**. The simple payback period spans **40 to 60 years**—exceeding the 20-year lifespan of insulated glass seals.
- **The $2,500 Air-Sealing & Attic Insulation Alternative:** Sealing attic bypasses and basement rim joists with expanding foam and blowing R-60 cellulose cuts winter heating bills by **$350 to $650 per year**. The simple payback period is **2 to 4 years**!
- **The Capital Allocation Rule:** Before spending $25,000 on windows, invest $3,000 to $5,000 in comprehensive envelope air-sealing and mechanical duct sealing. You achieve double the energy savings at one-fifth the capital expenditure.

---
`
);
