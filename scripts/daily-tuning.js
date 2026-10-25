const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '..', 'content');

function tuneCrawlspaceSteps() {
  const file = path.join(contentDir, 'crawlspace-encapsulation-steps.md');
  let content = fs.readFileSync(file, 'utf8');

  // 1. Update summary
  content = content.replace(
    'summary: "Vented crawlspaces in the Midwest create extreme summer humidity, mold growth, and winter floor heat loss. This step-by-step tutorial details how to execute a code-compliant crawlspace encapsulation under IRC Section R408.3: resolving bulk ground moisture, permanently sealing exterior vents, installing a taped 20-mil Class A polyolefin liner, insulating perimeter stem walls, and commissioning a low-temperature commercial dehumidifier."',
    'summary: "Vented crawl spaces in the Midwest create extreme summer humidity, mold growth, and winter floor heat loss. This step-by-step tutorial details how to do crawl space encapsulation under IRC Section R408.3: resolving bulk ground moisture, permanently sealing exterior vents, installing a taped 20-mil Class A polyolefin liner, insulating perimeter stem walls, and commissioning a commercial dehumidifier to permanently encapsulate crawl space foundations."'
  );

  // 2. Add milestone section before Verification
  const targetAnchor = '## Verification & Quality Assurance Tests';
  if (!content.includes('## How to Do Crawl Space Encapsulation')) {
    const addition = `## How to Do Crawl Space Encapsulation: Summary Protocol & Critical Trade Milestones\r\n\r\nHomeowners and contractors asking **how to encapsulate crawl space** foundations successfully in Climate Zones 4 and 5 must execute the conversion in strict building science sequence. Skipping steps—such as laying vapor barrier over unmitigated groundwater or failing to air-seal the rim joist—leads to catastrophic moisture trapping.\r\n\r\n### The 4 Non-Negotiable Milestones:\r\n1. **Bulk Water Diverted First:** Never lay plastic over active mud or seasonal ponding water. Trench French drain perimeter tile to a sealed interior sump pit with battery backup before barrier installation.\r\n2. **Monolithic Air Boundary (Vents & Joists):** Every exterior foundation vent must be plugged with 2-inch closed-cell foam and sealed with polyurethane caulk. The rim joist and sill plate must receive 2 inches of closed-cell spray foam.\r\n3. **Class A Continuous Membrane (20-Mil):** Crawl space encapsulation requires a puncture-resistant, virgin polyolefin membrane sealed with double-sided butyl tape and mechanical termination bars along stem walls.\r\n4. **Mechanical RH Control (Dehumidification):** An encapsulated crawl space is a conditioned envelope. It requires a dedicated commercial low-temperature dehumidifier maintaining 45% to 55% relative humidity year-round.\r\n\r\n---\r\n\r\n## Verification & Quality Assurance Tests`;
    content = content.replace(targetAnchor, addition);
  }

  fs.writeFileSync(file, content, 'utf8');
  console.log('Checked crawlspace-encapsulation-steps.md');
}

function tuneInsulatingBrick() {
  const file = path.join(contentDir, 'insulating-brick.md');
  let content = fs.readFileSync(file, 'utf8');

  // 1. Update summary
  content = content.replace(
    'summary: "Midwest cities contain hundreds of thousands of pre-1930s solid masonry bungalows, two-flats, and Victorians. These walls were engineered as mass storage systems that dried continuously from interior waste heat. Adding interior insulation drops the exterior brick temperature to sub-zero ambient levels. If rain-saturated clay brick freezes before drying, the 9% volumetric expansion of ice shatters the brick faces and rots embedded wood floor joists. Here is the hygrothermal blueprint to test, detail, and insulate historic brick without structural failure."',
    'summary: "Midwest cities contain hundreds of thousands of pre-1930s solid masonry bungalows, two-flats, and Victorians. These walls were built with porous clay insulating brick assemblies that dried continuously from interior waste heat. Adding interior insulation brick retrofits drops exterior masonry to sub-zero temperatures. If rain-saturated clay brick freezes before drying, 9% volumetric ice expansion shatters brick faces and rots floor joists. Here is the hygrothermal blueprint to insulate historic brick safely."'
  );

  // 2. Add Clay Insulating Brick section before Retrofit Performance Comparison
  const targetAnchor = '## Retrofit Performance Comparison';
  if (!content.includes('## Clay Insulating Brick vs. Dense Structural Brick')) {
    const addition = `## Clay Insulating Brick vs. Dense Structural Brick: Thermal & Absorption Physics\r\n\r\nWhen evaluating historic mass masonry or high-temperature industrial brickwork, understanding the distinction between modern dense brick and historic **clay insulating brick** is critical for envelope performance:\r\n\r\n- **Historic Porous Clay Brick:** Fired at lower kiln temperatures (1,600°F–1,800°F) in local Midwest brickyards, 19th-century bricks feature an open micro-capillary pore volume between 15% and 25%. While these open pores provide modest natural thermal resistance ($k \\approx 0.60 \\text{ to } 0.85 \\text{ W/m}\\cdot\\text{K}$, functioning similarly to soft insulating brick), their high water absorption (12% to 22% by weight via ASTM C67) makes them acutely susceptible to freeze-thaw spalling when interior insulation is added.\r\n- **Refractory Insulation Brick (IFB):** Engineered lightweight clay insulating brick utilized in high-temperature flues and masonry fireplaces relies on artificially induced porous alumina-silica structures to minimize heat conduction ($k \\le 0.25 \\text{ W/m}\\cdot\\text{K}$).\r\n- **The Retrofit Rule:** Applying an interior **insulation brick** retrofit strategy to exterior mass masonry requires calculating the assembly's critical saturation ($S_{crit}$). If the clay brick's water absorption exceeds the critical limit, the exterior facade must be repointed with vapor-permeable lime mortar and shielded with generous roof overhangs before any interior insulation is installed.\r\n\r\n---\r\n\r\n## Retrofit Performance Comparison`;
    content = content.replace(targetAnchor, addition);
    console.log('Added Clay Insulating Brick section to insulating-brick.md');
  }

  fs.writeFileSync(file, content, 'utf8');
}

function tuneSubSlabInsulation() {
  const file = path.join(contentDir, 'sub-slab-insulation-specs.md');
  let content = fs.readFileSync(file, 'utf8');

  // 1. Update summary
  content = content.replace(
    'summary: "Insulating below-grade building components subjects foam to continuous dampness, soil chemistry, and compressive loads. While extruded polystyrene (XPS) delivers high initial R-values, multi-year field studies show it absorbs moisture under long-term subterranean vapor pressure, losing up to 45% of its thermal resistance. High-density EPS (Type IX) and graphite-infused GPS maintain compressive strength and drain moisture, while two inches of 2.0-lb closed-cell spray foam provides the ultimate air-impermeable seal for drafty rim joists."',
    'summary: "Specifying below grade insulation for subterranean slabs and foundations subjects foam to continuous dampness, soil chemistry, and compressive loads. While extruded polystyrene (XPS) delivers high initial R-values, multi-year field studies show it absorbs moisture under long-term subterranean vapor pressure, losing up to 45% of its thermal resistance. High-density EPS (Type IX) and graphite-infused GPS maintain compressive strength and drain moisture, making them superior below grade insulation specifications, while two inches of 2.0-lb closed-cell spray foam provides the ultimate air-impermeable seal for drafty rim joists."'
  );

  // 2. Add Below Grade Insulation section before Specification Benchmark
  const targetAnchor = '## Specification Benchmark: Sub-Slab & Rim Joist Insulation Materials';
  if (!content.includes('## Below Grade Insulation: ASTM C578 Specifications')) {
    const addition = `## Below Grade Insulation: ASTM C578 Specifications & Compressive Resistance\r\n\r\nSelecting **below grade insulation** for heavy residential slabs requires balancing thermal resistance ($R\\text{-value}$) against long-term compressive creep and subterranean moisture saturation:\r\n\r\n1. **ASTM C578 Compressive Classifications:** Sub-slab applications require a minimum compressive strength of 25.0 psi (ASTM D1621) for standard residential slabs, and 40.0 to 60.0 psi for heavy storage or hydronic radiant installations. Expanded polystyrene (Type IX EPS) meets 25.0 psi while preserving long-term compressive rebound.\r\n2. **Moisture Permeability in Below Grade Insulation:** Unlike above-grade continuous wall sheathing where drying occurs to outdoor air, below grade insulation is buried in 100% relative humidity soil. Closed-cell structures that trap moisture internally lose thermal value over decades; hydrophobic bead-matrix insulations with gravity drainage channels prevent trapped moisture degradation.\r\n3. **Termite and Pest Protection:** All below grade insulation products installed against subterranean foundation walls must incorporate non-toxic borate treatments to deter subterranean termite tunneling in high-risk zones.\r\n\r\n---\r\n\r\n## Specification Benchmark: Sub-Slab & Rim Joist Insulation Materials`;
    content = content.replace(targetAnchor, addition);
  }

  fs.writeFileSync(file, content, 'utf8');
  console.log('Checked sub-slab-insulation-specs.md');
}

function tuneWhenToReplaceWindows() {
  const file = path.join(contentDir, 'when-to-replace-windows.md');
  let content = fs.readFileSync(file, 'utf8');

  const targetText = 'Window replacement represents one of the most aggressively marketed home improvement categories in the Midwest, yet from an energy efficiency perspective, it delivers one of the lowest returns on investment.';
  const replacementText = 'When deciding **when to replace windows** in Climate Zones 4 and 5, homeowners must weigh fenestration economics against structural and health triggers. Window replacement represents one of the most aggressively marketed home improvement categories in the Midwest, yet from an energy efficiency perspective alone, it delivers one of the lowest returns on investment.';

  if (content.includes(targetText)) {
    content = content.replace(targetText, replacementText);
  }

  fs.writeFileSync(file, content, 'utf8');
  console.log('Checked when-to-replace-windows.md');
}

tuneCrawlspaceSteps();
tuneInsulatingBrick();
tuneSubSlabInsulation();
tuneWhenToReplaceWindows();
console.log('Daily content tuning routine complete.');
