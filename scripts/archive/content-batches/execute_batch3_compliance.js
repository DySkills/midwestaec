const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\Dylen\\Desktop\\AEC\\Midwest';
const contentDir = path.join(rootDir, 'content');

console.log('=== EXECUTING BATCH 3: BLUEPRINT C (INSPECTOR\'S FIELD GUIDE - 6 ARTICLES) ===');

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

// -----------------------------------------------------------------------------
// 1. basement-egress-window-cutting.md
// -----------------------------------------------------------------------------
const f1 = path.join(contentDir, 'basement-egress-window-cutting.md');
let c1 = fs.readFileSync(f1, 'utf8').replace(/\r\n/g, '\n');
c1 = c1.replace(
  '## IRC Section R310 Regulatory Baseline',
  `## The Regulatory Baseline: IRC Section R310 Egress Geometry & Net Clear Openings

When converting a basement into legal living space or adding a below-grade bedroom across the Midwest, municipal building codes mandate strict compliance with **IRC Section R310 ("Emergency Escape and Rescue Openings")**:

### 1. The 4 Non-Negotiable Egress Dimensions
- **Minimum Net Clear Opening Area:** Must achieve at least **5.7 square feet** of open, unobstructed passage (5.0 sq. ft. for at-grade openings).
- **Minimum Net Clear Opening Height:** Must be at least **24 inches** clear opening.
- **Minimum Net Clear Opening Width:** Must be at least **20 inches** clear opening.
- **Maximum Sill Height:** The bottom of the clear opening must sit **no higher than 44 inches above the finished floor**. (If your finished floor has 2-inch subfloor foam or carpet, measurement is taken from the top of the finished surface).

### 2. Window Well Size & Safety Ladder Rules (IRC Section R310.2.3)
- The window well must provide a horizontal projection of at least **36 inches** and a minimum floor area of **9 square feet**.
- If the window well depth exceeds **44 inches**, a permanent ladder or steps must be fixed inside the well, with rungs spaced no further than 18 inches apart and projecting at least 3 inches from the well wall.

---
`
);
fs.writeFileSync(f1, c1.replace(/\n/g, '\r\n'), 'utf8');
console.log('✓ Updated basement-egress-window-cutting.md');

// -----------------------------------------------------------------------------
// 2. blower-door-checklist.md
// -----------------------------------------------------------------------------
replaceSectionBetween(
  path.join(contentDir, 'blower-door-checklist.md'),
  '## Lake Michigan Frost in Milwaukee at 19°F',
  '## 1. The Physics and Math of the Blower Door Test',
  `## The Compliance Baseline: IECC Section R402.4 & The 3.0 ACH50 Infiltration Threshold

Under the International Energy Conservation Code (IECC Section R402.4), municipal building inspectors across the Great Lakes and Northern Plains mandate a certified third-party **blower door test** prior to issuing a Certificate of Occupancy:

### 1. The 3.0 ACH50 Pass/Fail Line
- **The Legal Limit:** In cold northern climates, whole-house air leakage must not exceed **3.0 Air Changes per Hour at 50 Pascals pressure (3.0 ACH50)**.
- **The Financial Consequence of Failure:** If a newly framed home or substantial remodel tests at 3.2 or 4.0 ACH50, building departments will **red-tag the project**. You cannot close on your construction loan, and contractors must spend thousands of dollars hunting and sealing concealed leaks behind finished drywall.

### 2. Why Code Minimum Still Fails
While 3.0 ACH50 satisfies minimum legal code, building scientists recommend targeting **1.5 to 2.0 ACH50** on modern builds:
- A home at 2.9 ACH50 still leaks hundreds of CFM of cold air through basement rim joists and attic bypasses during sub-zero polar vortexes.
- Achieving <2.0 ACH50 paired with an Energy Recovery Ventilator (ERV) guarantees lower heating bills, zero winter window condensation, and draft-free living comfort.

---
`
);

// -----------------------------------------------------------------------------
// 3. smart-vapor-retarders.md
// -----------------------------------------------------------------------------
const f3 = path.join(contentDir, 'smart-vapor-retarders.md');
let c3 = fs.readFileSync(f3, 'utf8').replace(/\r\n/g, '\n');
c3 = c3.replace(
  '## Hygrothermal Engineering: The Bidirectional Moisture Dilemma',
  `## The Code Baseline: IRC Section R702.7 Vapor Retarder Classes in Cold Climates

Building energy codes across northern cold climates have overhauled the rules governing interior wall vapor barriers. Under **2021/2024 IRC Section R702.7**, municipal building codes establish three distinct legal vapor retarder classes:

### 1. Legal Vapor Retarder Classifications
- **Class I (< 0.1 Perm):** Impermeable sheet plastic (6-mil polyethylene), foil facings, and rubber membranes. **Code Alert:** In modern homes with central air conditioning, installing an interior Class I vapor barrier is a documented mold hazard because it blocks inward summer drying.
- **Class II (0.1 to 1.0 Perm):** Variable-permeance smart membranes (CertainTeed MemBrain / ProClima Intello Plus), kraft paper facing on batts, and asphalt-coated paper. Permitted in all cold-climate wall assemblies.
- **Class III (1.0 to 10.0 Perms):** Standard latex paint on 1/2" interior drywall. Permitted on interior walls *only* if continuous exterior insulation of sufficient R-value is installed outboard of the sheathing.

---
`
);
fs.writeFileSync(f3, c3.replace(/\n/g, '\r\n'), 'utf8');
console.log('✓ Updated smart-vapor-retarders.md');

// -----------------------------------------------------------------------------
// 4. sub-slab-insulation-specs.md
// -----------------------------------------------------------------------------
replaceSectionBetween(
  path.join(contentDir, 'sub-slab-insulation-specs.md'),
  '## The Frozen Subsoil of Minneapolis at -14°F',
  '## Sub-Slab Thermodynamics: Conduction to the Infinite Heat Sink',
  `## The Regulatory & Geotechnical Baseline: ASTM C578 & IRC Section R402 Sub-Slab Mandates

Pouring a concrete basement slab in the Upper Midwest requires compliance with both structural load standards (ASTM C578) and energy code continuous insulation mandates (IRC Section R402.2.10):

### 1. The Code Mandate for Below-Slab Insulation
- **Prescriptive Code Requirement:** In northern freeze-thaw climates, energy codes mandate a minimum of **R-10 continuous insulation** beneath heated slabs and perimeter footing frost breaks.
- **Compressive Load Compliance (ASTM C578):** Foam board beneath concrete slabs must withstand the dead load of 4 inches of concrete (roughly 50 lbs/sq.ft.) plus live furniture and storage loads. Building codes require minimum **25 PSI compressive resistance (ASTM C578 Type IX EPS or Type IV XPS)** to prevent slab cracking and differential settlement.

---
`
);

// -----------------------------------------------------------------------------
// 5. roof-insulation-over-sheathing.md
// -----------------------------------------------------------------------------
replaceSectionBetween(
  path.join(contentDir, 'roof-insulation-over-sheathing.md'),
  '## The Cold Vault at 4°F',
  '## The Cathedral Ceiling Dilemma: Why Cavity-Only Framing Fails',
  `## The Code Baseline: IRC Section R806.5 Unvented Cathedral Roof R-Value Ratios

When converting an unvented cathedral ceiling or installing rigid continuous foam above structural roof decking, contractors must strictly adhere to **IRC Section R806.5 ("Unvented Attic and Unvented Enclosed Rafter Assemblies")**:

### 1. The Critical Outboard Dew-Point Ratio
Building codes prohibit arbitrary foam thicknesses above a cathedral roof. If the outboard rigid foam is too thin:
- Indoor water vapor migrating through rafter cavities contacts cold interior roof sheathing and condenses, rotting the deck within 3 to 5 years.
- **The Mandated R-Value Split:** In northern cold climates, the continuous insulation *above* the roof deck must account for at least **R-15 to R-20 of the total assembly R-value** (e.g., minimum 3 to 4 inches of continuous polyiso over the deck). This guarantees that the structural roof decking remains above 45°F throughout the winter, completely eliminating the internal condensing plane.

---
`
);

// -----------------------------------------------------------------------------
// 6. continuous-insulation.md
// -----------------------------------------------------------------------------
replaceSectionBetween(
  path.join(contentDir, 'continuous-insulation.md'),
  '## The Prairie Cold Front at 14°F',
  '## The Framing Factor: Why R-20 Cavity Batts Don\'t Equal an R-20 Wall',
  `## The Compliance Baseline: IECC Table R402.1.3 Continuous Exterior Insulation Mandates

Under the 2021/2024 International Energy Conservation Code (IECC Section R402.1), energy codes across the Great Lakes and Northern Plains require exterior wood-framed walls to incorporate continuous exterior insulation:

### 1. Code Compliance Paths for Cold-Climate Walls
- **Path 1 (Prescriptive Continuous Foam):** **R-20 cavity insulation + R-5 continuous exterior insulation**, or **R-13 cavity + R-10 continuous insulation**.
- **Path 2 (U-Factor Equivalent):** Total assembly U-factor of **U-0.045 or lower** (delivering whole-wall R-22+ true performance).
- **Why Cavity-Only Walls Are Legally Fading:** Traditional 2x6 walls with R-20 fiberglass batts alone have an effective whole-wall rating of barely **R-15.6** due to framing thermal bridging. Municipalities are increasingly rejecting cavity-only framing plans in favor of continuous outboard thermal breaks.

---
`
);
