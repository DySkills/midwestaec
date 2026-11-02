const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\Dylen\\Desktop\\AEC\\Midwest';
const contentDir = path.join(rootDir, 'content');

// -----------------------------------------------------------------------------
// 1. crawlspace-encapsulation.md
// -----------------------------------------------------------------------------
const file1 = path.join(contentDir, 'crawlspace-encapsulation.md');
let c1 = fs.readFileSync(file1, 'utf8');

c1 = c1.replace('readTime: "9 min read"', 'readTime: "11 min read"');
c1 = c1.replace(
  'summary: "Vented crawl spaces rot subfloors and spike heating bills in the Midwest. Learn the building science of encapsulation, moisture drive, and IRC R408.3 codes."',
  'summary: "Crawl space encapsulation cost vs vented: Stop floor rot, mold odors, and frozen pipes. Itemized Midwest costs, 20-mil liner specs, and IRC R408.3 rules."'
);

const crawlCostSection = `## Crawl Space Encapsulation Cost Breakdown: Vented vs. Closed ROI

Leaving crawl spaces open to outside air through foundation wall vents is a disastrous building practice in the Midwest. In summer, warm humid air enters the cool crawlspace, saturating floor joists and rotting fiberglass batts. In winter, freezing winds pull heat out of the floorboards above, freezing pipes and spiking heating bills.

### 1. Realistic Midwest Installed Costs (800 to 1,500 Sq. Ft. Crawl Space)
- **Turnkey Professional Encapsulation Package:** **$5,500 to $11,500** ($4.50 to $7.50 per sq. ft.). This scope includes:
  - Raking and leveling dirt floor, removing old contaminated fiberglass batts.
  - Installing a continuous 20-mil multi-layer reinforced poly vapor barrier across the dirt floor, overlapping seams 12 inches and sealing with butyl mastic tape.
  - Running liner 12 inches up foundation walls and fastening with termination bars and masonry anchors.
  - Spraying 2 inches of closed-cell spray foam (R-14) on perimeter foundation walls and rim joists.
  - Permanently sealing all exterior foundation wall vents.
  - Installing an automated low-temperature crawl space dehumidifier (e.g., Aprilaire or Santa Fe Compact70) draining to a sump pit or daylight.
- **Basic DIY Encapsulation Cost:** **$1,800 to $3,200** for professional-grade materials: 20-mil vapor barrier roll, seam tapes, masonry fasteners, foundation foam board, and dedicated crawlspace dehumidifier.

### 2. The Economic Payback
1. **Heating & Cooling Savings:** Encapsulating a crawl space conditions the subfloor within the home's thermal boundary, reducing annual winter heating and summer cooling bills by **15% to 22%** ($350 to $650 annually).
2. **Structural Rot Prevention:** Unencapsulated crawl spaces routinely suffer fungal subfloor rot requiring $10,000 to $25,000 in sistering joist and subfloor replacement.
3. **Pest & Radon Elimination:** A sealed 20-mil liner eliminates the humid damp earth habitat required by camel crickets, termites, and rodents, while reducing soil-borne radon gas infiltration into upper living areas.

---
`;

if (!c1.includes('Crawl Space Encapsulation Cost Breakdown')) {
  const target1 = `## Specification Benchmark: Vented vs. Sealed Crawlspaces`;
  c1 = c1.replace(target1, crawlCostSection + '\n' + target1);
  fs.writeFileSync(file1, c1, 'utf8');
  console.log('✓ Updated crawlspace-encapsulation.md');
}

// -----------------------------------------------------------------------------
// 2. crawlspace-encapsulation-steps.md
// -----------------------------------------------------------------------------
const file2 = path.join(contentDir, 'crawlspace-encapsulation-steps.md');
let c2 = fs.readFileSync(file2, 'utf8');

c2 = c2.replace('readTime: "8 min read"', 'readTime: "10 min read"');

const crawlStepsCostSection = `## Crawl Space Encapsulation Materials Shopping List & Contractor Bid Scrutiny

Executing a durable crawl space encapsulation requires professional-grade materials that resist hydrostatic water pressure, puncture, and soil off-gassing:

### 1. Essential Materials Specification Schedule
- **Vapor Barrier:** Never use standard 6-mil clear construction poly (it tears easily and degrades within 3 to 5 years). Demand **minimum 12-mil to 20-mil multi-layer virgin polyolefin reinforced with polyester cord grid** (e.g., Stego Wrap 20-mil or CleanSpace).
- **Seam Tape & Mastic:** High-tack butyl rubber tape (minimum 4-inch width) for overlapping seams and sealing around interior piers. Standard duct tape or silver foil tape fails within 60 days in subterranean humidity.
- **Mechanical Fasteners:** Heavy-duty aluminum termination bars fastened into concrete masonry with 1/4" concrete drive anchors spaced every 12 inches on center.
- **Dedicated Dehumidifier:** Residential portable dehumidifiers cannot operate below 65°F without freezing up. Install an Energy Star certified low-temperature crawl space unit (AHRI 920 rated, minimum 70 pints/day at 60°F).

### 2. Red Flags on Contractor Quotes
1. **Leaving Dirt Walls Unsealed:** Contractors who only lay plastic on the floor while leaving dirt ledges or masonry walls bare leave an open highway for humidity and water intrusion.
2. **No Dedicated Condensate Drainage:** Dehumidifier lines must drain either to an active sump basin or gravity-drain to the home exterior. Draining condensate directly back onto the vapor barrier creates an indoor swimming pool.
3. **Covering Combustion Air Openings:** If your furnace or water heater is located in the crawl space, ensure proper makeup combustion air is hard-piped from outside before sealing all foundation vents (per NFPA 54 / IRC Section G2407).

---
`;

if (!c2.includes('Crawl Space Encapsulation Materials Shopping List')) {
  const target2 = `## Verification & Quality Assurance Tests`;
  c2 = c2.replace(target2, crawlStepsCostSection + '\n' + target2);
  fs.writeFileSync(file2, c2, 'utf8');
  console.log('✓ Updated crawlspace-encapsulation-steps.md');
}

// -----------------------------------------------------------------------------
// 3. false-spring-envelope-thaw.md
// -----------------------------------------------------------------------------
const file3 = path.join(contentDir, 'false-spring-envelope-thaw.md');
let c3 = fs.readFileSync(file3, 'utf8');

c3 = c3.replace('readTime: "8 min read"', 'readTime: "11 min read"');
c3 = c3.replace(
  'summary: "Why Midwest homes suffer ceiling leaks and sweaty basements during midwinter warm-ups. Discover the physics of the false spring thaw and how to protect your envelope."',
  'summary: "Ceiling leaking during a winter warm-up: Why false-spring thaws melt attic hoarfrost into light fixtures, emergency triage steps, and permanent air-sealing fixes."'
);

const falseSpringSection = `## Emergency False-Spring Ceiling Leak Response: 5-Step Triage Checklist

In February and March, Midwest weather frequently experiences dramatic 40-degree temperature spikes within 24 hours. When warm sunshine hits a roof with sub-zero hoarfrost in the attic, meltwater pours into living rooms. Follow this emergency triage checklist:

### 1. Step 1: Drain Drywall Pockets Immediately
Water pooling above ceiling sheetrock will expand until the drywall softens, collapses under weight, and tears down adjacent plaster. Locate the lowest point of the sagging drywall, place a plastic tote underneath, and pierce the center with a nail or screwdriver to release accumulated water.

### 2. Step 2: Kill Power to Weeping Light Fixtures
If water is dripping through recessed can lights, ceiling fans, or smoke detectors, trip the corresponding circuit breaker at the electrical panel immediately. Wet electrical wiring poses immediate short-circuit and shock hazards.

### 3. Step 3: Verify the Water Source (Roof Shingle vs. Attic Frost)
Before calling an emergency roofer:
- Check the weather: If it hasn't rained and snow is gently melting in the sunshine, the water is almost certainly **melting attic frost**, not a shingle defect.
- Inspect the attic: Shine a flashlight on the underside of the roof sheathing. If the plywood is wet and dripping across broad areas with black water marks around roofing nails, the source is interior humidity that froze during sub-zero weather and is now thawing.

### 4. Step 4: Deploy Drying Equipment
Place high-velocity fans in the attic aimed across wet sheathing to accelerate evaporation. Pull back wet fiberglass insulation from drywall ceilings to prevent mold formation. Wet cellulose or fiberglass insulation loses all insulating value until completely dried.

### 5. Step 5: Seal the Moisture Conduits
Once dried, identify and seal the interior ceiling penetrations fueling the moisture flux: seal around furnace B-vents, attic access doors, electrical junctions, and ensure all bathroom exhaust ducts vent completely outside through an insulated roof cap with an operable backdraft damper.

---
`;

if (!c3.includes('Emergency False-Spring Ceiling Leak Response')) {
  const target3 = `## Specification Benchmark: Cold-Climate Thaw Resilience`;
  c3 = c3.replace(target3, falseSpringSection + '\n' + target3);
  fs.writeFileSync(file3, c3, 'utf8');
  console.log('✓ Updated false-spring-envelope-thaw.md');
}
