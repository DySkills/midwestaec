const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '..', 'content');

// 1. Continuous Exterior Insulation Tuning
function tuneContinuousInsulation() {
  const file = path.join(contentDir, 'continuous-insulation.md');
  let content = fs.readFileSync(file, 'utf8');

  // Update summary to feature "continuous exterior insulation"
  content = content.replace(
    'summary: "Wood framing studs conduct heat roughly four times faster than cavity insulation. An uninsulated stud wall rated at R-20 performs at an effective R-15, while outboard continuous insulation eliminates thermal bridges and protects structural sheathing from sub-zero rot."',
    'summary: "Wood framing studs conduct heat roughly four times faster than cavity insulation. An uninsulated stud wall rated at R-20 performs at an effective R-15, while continuous exterior insulation eliminates framing thermal bridges and protects structural sheathing from sub-zero rot in Climate Zones 4 and 5."'
  );

  // Update H2 title
  content = content.replace(
    '## Material Teardown: Choosing the Right Outboard Layer',
    '## Continuous Exterior Insulation Material Teardown: Mineral Wool, EPS, XPS & Polyiso'
  );

  // Add rainscreen & window detailing section
  const targetAnchor = '## The Re-Siding Golden Window';
  if (!content.includes('## Continuous Exterior Insulation: Rainscreens, Furring & Window Detailing')) {
    const addition = `## Continuous Exterior Insulation: Rainscreens, Furring & Window Detailing\r\n\r\nSuccessfully installing **continuous exterior insulation** on a Midwest home requires detailing the cladding attachment and window transitions to prevent water intrusion and fastener sagging:\r\n\r\n1. **Vertical Rainscreen Furring Strips:** Fastening siding directly over compressible exterior insulation can cause wavy cladding lines and fastener fatigue. Install 1x3 or 1x4 pressure-treated furring strips vertically over the continuous exterior insulation, aligned directly with the underlying 2x6 wall studs. Use corrosion-resistant structural screws sized to penetrate at least 1.25 inches into the structural framing.\r\n2. **Thermal & Capillary Window Bucks:** When adding 1.5 to 2 inches of continuous exterior insulation, windows must either be recessed ("innie") or pushed out flush with the exterior insulation plane ("outie"). Pushing windows out using 2x extension bucks wrapped with vapor-permeable flashing tape ensures the window flange integrates seamlessly into the continuous drainage plane.\r\n3. **Bug Screens and Bottom Ventilation:** Install perforated stainless steel insect screens along the bottom of the rainscreen cavity to allow air convection and gravity drainage while preventing wasps and rodents from nesting behind the exterior cladding.\r\n\r\n---\r\n\r\n## The Re-Siding Golden Window`;
    content = content.replace(targetAnchor, addition);
    console.log('Tuned continuous-insulation.md with continuous exterior insulation details.');
  }

  fs.writeFileSync(file, content, 'utf8');
}

// 2. Rockwool vs Fiberglass: Fiberizing Section Tuning
function tuneRockwoolVsFiberglass() {
  const file = path.join(contentDir, 'rockwool-vs-fiberglass.md');
  let content = fs.readFileSync(file, 'utf8');

  const targetAnchor = '## 5. Acoustic Mass & Low-Frequency Vibration Damping';
  if (!content.includes('### The Fiberizing Section for Rock Wool: High-Speed Centrifugal Spinning Physics')) {
    const addition = `### The Fiberizing Section for Rock Wool: High-Speed Centrifugal Spinning Physics\r\n\r\nUnderstanding why stone wool resists fire and convective airflow requires examining the **fiberizing section for rock wool** during manufacturing:\r\n\r\n1. **Cupola Smelting:** Natural volcanic basalt rock, diabase, and recycled steel-furnace slag are blended with metallurgical coke and melted inside an industrial cupola furnace at temperatures exceeding 2,700°F to 2,900°F (1,500°C).\r\n2. **The Multi-Wheel Centrifugal Fiberizer:** The liquid basalt stream pours vertically into the **fiberizing section for rock wool**, consisting of a cascade of three or four rapidly spinning centrifugal rotor wheels turning at 3,000 to 7,000 RPM. As the liquid mineral stream hits the spinning wheels, centrifugal acceleration flings microscopic droplets outward, attenuating them into ultra-fine mineral fibers (3 to 5 microns in diameter).\r\n3. **Binder and Hydrophobic Injection:** Inside the spinning chamber of the fiberizing section, high-pressure air nozzles inject an atomized thermoset binder and a proprietary hydrophobic oil onto the individual mineral filaments.\r\n4. **Pendulum Mat Collection:** A cross-lapping pendulum arm layers the newly spun rock wool fibers into a multidirectional wool fleece. Passing through a curing oven at 400°F cross-links the binder, permanently locking the dense, spring-back fiber matrix that gives stone wool its 2.0 to 2.5 lb/cu.ft structural rigidity.\r\n\r\n---\r\n\r\n## 5. Acoustic Mass & Low-Frequency Vibration Damping`;
    content = content.replace(targetAnchor, addition);
    console.log('Tuned rockwool-vs-fiberglass.md with fiberizing section details.');
  }

  fs.writeFileSync(file, content, 'utf8');
}

// 3. SIPs: Framed Panel vs Stressed Skin Panel Tuning
function tuneSipsVsTraditionalFraming() {
  const file = path.join(contentDir, 'sips-vs-traditional-framing.md');
  let content = fs.readFileSync(file, 'utf8');

  const targetAnchor = '## The Whole-Wall R-Value Reality: Thermal Bridging';
  if (!content.includes('## Framed Panel vs. Stressed Skin Panel: Structural Engineering & Load Distribution')) {
    const addition = `## Framed Panel vs. Stressed Skin Panel: Structural Engineering & Load Distribution\r\n\r\nWhen comparing structural building envelopes, the engineering debate between a **framed panel vs stressed skin panel** highlights fundamentally different approaches to structural load transfer:\r\n\r\n- **Framed Panel (Conventional Stud Frame):** A framed panel relies on discrete linear members (2x4 or 2x6 wood studs spaced at 16 or 24 inches on center) to carry all vertical compressive loads and transverse wind forces. The exterior sheathing (OSB or plywood) functions merely as a diaphragm to resist lateral shear (racking). Because structural loads concentrate on individual studs, wood crushing, stud bowing, and thermal bridging at every framing bay are inherent to framed panel assemblies.\r\n- **Stressed Skin Panel (Structural Insulated Panel):** In an engineered stressed skin panel, the structural facings (outer OSB skins) are continuously laminated with rigid structural adhesive to a solid foam core, operating as an integrated composite I-beam. Under bending or compressive loads, the entire outer skin takes tensile and compressive stresses, while the continuous foam core resists shear stresses and prevents facial buckling. A stressed skin panel eliminates discrete framing studs, redistributing structural loads uniformly across thousands of square inches.\r\n- **The Performance Verdict:** In a **framed panel vs stressed skin panel** comparison across Climate Zone 5, stressed skin panels deliver twice the transverse load capacity (tested under ASTM E72), eliminate 90% of thermal bridges, and achieve superior airtightness because there are no individual stud seams to crack or leak air under wind pressure.\r\n\r\n---\r\n\r\n## The Whole-Wall R-Value Reality: Thermal Bridging`;
    content = content.replace(targetAnchor, addition);
    console.log('Tuned sips-vs-traditional-framing.md with framed panel vs stressed skin panel comparison.');
  }

  fs.writeFileSync(file, content, 'utf8');
}

// 4. Cold Climate Heat Pumps: R744 Tuning
function tuneColdClimateHeatPumps() {
  const file = path.join(contentDir, 'cold-climate-heat-pumps.md');
  let content = fs.readFileSync(file, 'utf8');

  content = content.replace(
    '## Refrigerant Evolution: Transcritical R-744 (CO2) in Severe Winters',
    '## Transcritical R744 Heat Pump for Cold Winters: The Polar Vortex Solution'
  );

  const targetText = 'For severe cold winters across Minnesota, North Dakota, and Wisconsin, an R-744 heat pump for cold winters provides an ultra-low Global Warming Potential (GWP = 1.0) architecture that bypasses synthetic refrigerant phasedowns while maintaining full heating capacity through polar vortex events.';
  const replacementText = `Specifying an **r744 heat pump for cold winters** across Minnesota, North Dakota, and Wisconsin provides an ultra-low Global Warming Potential (GWP = 1.0) architecture that bypasses synthetic refrigerant phasedowns while maintaining full heating capacity through polar vortex events.\r\n\r\n### Why R744 Dominates Extreme Cold Weather:\r\n- **Zero Low-Temperature Capacity Roll-off:** Unlike fluorocarbon blends (R-410A / R-454B) whose suction pressure drops severely in sub-zero outdoor air, transcritical carbon dioxide operates at high suction pressures (400–600 PSI) even at -20°F, preserving high refrigerant mass flow.\r\n- **High-Temperature Hydronic Delivery:** An **r744 heat pump for cold winters** can produce 150°F to 170°F hydronic radiator water without auxiliary electric heat elements, making it the ideal boiler replacement for historic cast-iron radiator retrofits.\r\n- **Pure Natural Refrigerant:** R-744 is non-flammable (ASHRAE Safety Group A1) and has zero ozone depletion potential, rendering it completely future-proof against EPA PFAS and F-gas regulations.`;

  if (content.includes(targetText) && !content.includes('### Why R744 Dominates Extreme Cold Weather:')) {
    content = content.replace(targetText, replacementText);
    console.log('Tuned cold-climate-heat-pumps.md with R744 cold winter performance specifications.');
  }

  fs.writeFileSync(file, content, 'utf8');
}

// 5. ICF Basement: Surging cluster tuning
function tuneIcfBasement() {
  const file = path.join(contentDir, 'icf-basements-walls.md');
  let content = fs.readFileSync(file, 'utf8');

  const targetAnchor = '## The ICF Engineering Solution: Continuous Monolithic Sandwich';
  if (!content.includes('## Why an ICF Basement Outperforms a Standard Poured Concrete Foundation')) {
    const addition = `## Why an ICF Basement Outperforms a Standard Poured Concrete Foundation\r\n\r\nFor Midwest homeowners and builders evaluating whether to invest in an **icf basement**, the structural and hygrothermal advantages over a conventional poured basement are decisive:\r\n\r\n1. **A Bone-Dry ICF Concrete Foundation:** Because high-density EPS foam acts as a continuous exterior capillary break, an **icf concrete foundation** eliminates damp underground odors, wet baseboards, and subterranean moisture seepage.\r\n2. **Eliminated Basement Cold Zones:** In an **icf basement**, the interior surface of the wall stays within 2°F of the indoor thermostat setting, turning a sub-grade basement into prime, comfortable living space identical to above-ground rooms.\r\n3. **Zero Condensation on Insulated Concrete Foundations:** Warm summer humidity entering an **insulated concrete foundation** encounters walls that stay well above the 55°F dew point, completely preventing the summertime sweating and mildew common in poured concrete basements.\r\n4. **Storm Shelter Durability:** With continuous steel-reinforced concrete sandwiched between EPS panels, **icf basements** offer superior structural resistance against hydrostatic soil pressure, frost heave forces, and severe Midwest tornadic weather.\r\n\r\n---\r\n\r\n## The ICF Engineering Solution: Continuous Monolithic Sandwich`;
    content = content.replace(targetAnchor, addition);
    console.log('Tuned icf-basements-walls.md with ICF basement and concrete foundation cluster tuning.');
  }

  fs.writeFileSync(file, content, 'utf8');
}

// 6. Embodied Carbon: Low carbon insulation cluster tuning
function tuneEmbodiedCarbon() {
  const file = path.join(contentDir, 'embodied-carbon-materials.md');
  let content = fs.readFileSync(file, 'utf8');

  // Update H2 title
  content = content.replace(
    '## The Petrochemical Foam Trap: Blowing Agent GWP',
    '## Low Carbon Insulation: The Petrochemical Foam Trap vs. Low Carbon Footprint Insulation'
  );

  const targetAnchor = '## Life-Cycle Assessment Case Study: 2,400 Sq. Ft. Zone 5 Home';
  if (!content.includes('## Low Carbon Footprint Insulation: Comparative Life-Cycle Analysis')) {
    const addition = `## Low Carbon Footprint Insulation: Comparative Life-Cycle Analysis\r\n\r\nWhen engineering a high-performance building envelope, specifying **low carbon insulation** fundamentally alters the upfront climate footprint. The table below benchmarks standard building insulations across embodied carbon per square meter at R-20:\r\n\r\n| Insulation Material Specification | Embodied Carbon ($kg\\,CO_2e/m^2$ at R-20) | Biogenic Carbon Storage | Net Carbon Status |\r\n| :--- | :--- | :--- | :--- |\r\n| **Dense-Pack Cellulose (Recycled Paper)** | **-1.2 to -1.8** | Stores $1.6\\,kg\\,CO_2e/kg$ | **Net Carbon Sink** |\r\n| **Continuous Wood Fiber Board** | **-0.8 to -1.4** | Stores $1.3\\,kg\\,CO_2e/kg$ | **Net Carbon Sink** |\r\n| **Basalt Stone Mineral Wool** | **+2.5 to +3.8** | Zero (Mineral Origin) | Low Upfront Carbon / Class A Fireproof |\r\n| **Blown Fiberglass Cavity Batts** | **+2.8 to +4.2** | Zero (Silica Sand / Glass) | Moderate Industrial Energy Input |\r\n| **Extruded Polystyrene (XPS Foam Board)** | **+14.5 to +22.0** | Zero (Petrochemical Origin) | **Severe Carbon Debt** |\r\n| **Closed-Cell Spray Polyurethane Foam** | **+18.0 to +28.0** | Zero (Petrochemical Origin) | **Severe Carbon Debt** |\r\n\r\n### The Cellulose Insulation Carbon Footprint Advantage\r\nThe negative **cellulose insulation carbon footprint** is achieved because 85% of its mass consists of post-consumer newsprint. Photosynthesis in trees absorbs carbon dioxide from the air; when that timber is turned into paper and subsequently into cellulose insulation, that atmospheric carbon is locked inside the building envelope for the multi-decade life of the structure. For architects and contractors seeking **low carbon footprint insulation**, dense-pack cellulose and wood-fiber boards offer the most cost-effective path to carbon neutrality.\r\n\r\n---\r\n\r\n## Life-Cycle Assessment Case Study: 2,400 Sq. Ft. Zone 5 Home`;
    content = content.replace(targetAnchor, addition);
    console.log('Tuned embodied-carbon-materials.md with low carbon footprint insulation benchmarks.');
  }

  fs.writeFileSync(file, content, 'utf8');
}

// 7. Sub-Slab Insulation & Vapor Barriers: ASTM E1745 Class A & ASTM E1643 Tuning (Oct 27)
function tuneSubSlabInsulationOct27() {
  const file = path.join(contentDir, 'sub-slab-insulation-specs.md');
  let content = fs.readFileSync(file, 'utf8');

  // Update summary & codeTag
  content = content.replace(
    'summary: "Below grade insulation for slabs: Why high-density EPS Type IX outperforms XPS under moisture saturation, and how to spray-foam rim joists under ASTM C578."',
    'summary: "Below grade insulation & sub-slab specs: ASTM E1745 Class A vapor retarders, ASTM E1643 installation practice, and high-density Type IX EPS vs XPS under ASTM C578."'
  );

  content = content.replace(
    'codeTag: "ASTM C578 / ASTM D1621 / IRC Section R402.1"',
    'codeTag: "ASTM C578 / ASTM E1745 Class A / ASTM E1643 / ACI 302.2R"'
  );

  const targetAnchor = '## Specification Benchmark: Sub-Slab & Rim Joist Insulation Materials';
  if (!content.includes('## ASTM E1745 Class A Vapor Retarders & ASTM E1643 Sub-Slab Installation Practice')) {
    const addition = `## ASTM E1745 Class A Vapor Retarders & ASTM E1643 Sub-Slab Installation Practice\r\n\r\nWhen engineering sub-slab assemblies, thermal insulation cannot be separated from subterranean moisture control. Standard 6-mil construction polyethylene film degrades rapidly and tears under jobsite foot traffic. For high-performance residential foundations, specifying **ASTM E1745 Class A** vapor retarders installed under **ASTM E1643** protocols is the engineering benchmark:\r\n\r\n### ASTM E1745 Performance Classifications (A, B, C)\r\nASTM E1745 benchmarks plastic water vapor retarders across three critical physical criteria:\r\n\r\n| ASTM E1745 Classification | Puncture Resistance (ASTM D1709) | Tensile Strength (ASTM D882) | Water Vapor Permeance (ASTM E96) | Jobsite Application |\r\n| :--- | :--- | :--- | :--- | :--- |\r\n| **Class A (Commercial Grade)** | **> 2,200 grams** | **> 45.0 lbf/in** | **< 0.1 Perms** | Placed directly over crushed stone, rebar chairs, pump trucks |\r\n| **Class B (Intermediate Grade)** | > 1,500 grams | > 30.0 lbf/in | < 0.1 Perms | Light residential over sand beds |\r\n| **Class C (Minimum Code Grade)** | > 475 grams | > 13.6 lbf/in | < 0.1 Perms | Strictly light foot traffic over smoothed sand |\r\n\r\n### ASTM E1643 Field Installation Protocol\r\nUnder **ASTM E1643** (*Standard Practice for Selection, Design, Installation, and Inspection of Water Vapor Retarders Used in Contact with Earth or Granular Fill Under Concrete Slabs*), execution requires four non-negotiable jobsite steps:\r\n1. **Sub-Base Compaction & Layering:** Over compacted subgrade, install a 4-inch capillary break of 3/4-inch washed crushed aggregate. Place high-density Type IX EPS rigid foam insulation over the crushed stone, then lay the 15-mil to 20-mil **ASTM E1745 Class A** vapor retarder directly on top of the foam.\r\n2. **6-Inch Minimum Seam Overlaps:** Lap all vapor retarder sheet seams a minimum of 6 inches. Seal laps continuously using manufacturer-approved heavy-duty acrylic or butyl pressure-sensitive tape. Never rely on duct tape or unbonded laps.\r\n3. **Pipe Penetration & Column Detailing:** Cut circular openings tight around plumbing drains, radon evacuation pipes, and structural column footings. Detail all penetrations using pre-molded pipe boots or elastomeric flash tape, followed by a continuous bead of polyurethane mastic sealant.\r\n4. **Concrete Pouring Direct-to-Membrane:** In modern cold-climate building science (ACI 302.1R / ACI 302.2R), concrete is poured directly in contact with the ASTM E1745 Class A vapor retarder. The outdated practice of placing a sand or cushion layer between the vapor barrier and the slab is strictly obsolete because sand blotter beds act as a hidden water sponge during construction, leading to catastrophic floor moisture emissions and LVP delamination.\r\n\r\n---\r\n\r\n## Specification Benchmark: Sub-Slab & Rim Joist Insulation Materials`;
    content = content.replace(targetAnchor, addition);
    console.log('Tuned sub-slab-insulation-specs.md with ASTM E1745 Class A and ASTM E1643 standards.');
  }

  fs.writeFileSync(file, content, 'utf8');
}

// 8. "Why Do They Say That Then?" Breathing House Historical Lore Tuning (Oct 27)
function tuneDoesHouseNeedToBreatheOct27() {
  const file = path.join(contentDir, 'does-house-need-to-breathe.md');
  let content = fs.readFileSync(file, 'utf8');

  const targetAnchor = '## The Modern Standard: Build Tight, Ventilate Right';
  if (!content.includes('## "Why Do They Say That Then?" The Historical Origins of the Breathing House Myth')) {
    const addition = `## "Why Do They Say That Then?" The Historical Origins of the Breathing House Myth\r\n\r\nWhen homeowners learn that modern building science mandates an airtight structural envelope, the instinctive question is almost universal: ***"Why do they say that then?"***\r\n\r\nIf houses don't need to breathe, why do so many experienced contractors, old-school carpenters, and family members passionately insist that sealing an old home will "suffocate" the wood and trap moisture?\r\n\r\nThe persistence of the "breathing house" myth stems from a half-century of real-world remodeling disasters that occurred when energy efficiency was attempted without building physics:\r\n\r\n### 1. The Energy Crisis of 1973 and the "Trap-and-Rot" Wave\r\nPrior to the 1970s, older homes survived without rotting despite massive rain leaks because they had **infinite drying potential**. They leaked so much heat through uninsulated stud cavities and drafty single-pane windows that wet framing was continuously baked dry by continuous, inexpensive fossil fuel heating.\r\n\r\nDuring the 1970s energy crisis, insulation contractors began densely blowing cellulose and loose fiberglass into uninsulated exterior wall cavities. However, they did this **without air-sealing interior electrical boxes, top plates, or floor-wall junctures, and without installing controlled mechanical ventilation**.\r\n\r\n### 2. The Unintended Result: Condensation Trapping\r\nIn winter, warm, humid indoor air (from cooking, showers, and human respiration) leaked into the freshly insulated wall cavities. Because the insulation stopped heat from reaching the outer wood sheathing, the exterior sheathing plunged to sub-freezing temperatures.\r\n\r\nWhen moisture-laden indoor air hit that freezing wood, it condensed into liquid water. Wood rotted, exterior paint blistered and peeled off siding, and toxic mold bloomed inside bedroom walls.\r\n\r\n### 3. The Flawed Conclusion: "The House Can't Breathe!"\r\nRemodelers observed the damage and drew the obvious—but scientifically backwards—conclusion: *"Before we insulated, the house was dry. After we tightened it, the house rotted. Therefore, an old house needs to breathe!"*\r\n\r\nThey blamed the airtightness rather than the absence of balanced ventilation and interior air barrier detailing.\r\n\r\n### 4. The Building Science Resolution\r\nThe lesson of building forensics over the past 40 years is clear: **Airtightness does not rot houses; unmanaged interior moisture and convective exfiltration rot houses.**\r\n\r\nLeaving random holes in your walls so moisture can escape is like leaving holes in your boat to let water drain out. The proper engineering solution is **"Build Tight, Ventilate Right"**: seal the structural envelope to eliminate uncontrolled convective leaks, and install dedicated, balanced mechanical ventilation (an ERV or HRV) under ASHRAE 62.2 to continuously exchange indoor stale air with fresh, filtered outdoor air.\r\n\r\n---\r\n\r\n## The Modern Standard: Build Tight, Ventilate Right`;
    content = content.replace(targetAnchor, addition);
    console.log('Tuned does-house-need-to-breathe.md with "Why do they say that then" historical analysis.');
  }

  fs.writeFileSync(file, content, 'utf8');
}

// 9. Crawl Space Encapsulation Steps: "How to Do Crawl Space Encapsulation" Tuning (Oct 27)
function tuneCrawlspaceEncapsulationStepsOct27() {
  const file = path.join(contentDir, 'crawlspace-encapsulation-steps.md');
  let content = fs.readFileSync(file, 'utf8');

  // Update title & summary to capture both single and two-word crawl space queries
  content = content.replace(
    'title: "How to Encapsulate a Crawlspace: The Step-by-Step Conversion Guide"',
    'title: "How to Encapsulate a Crawl Space: The Step-by-Step Conversion Guide"'
  );

  content = content.replace(
    'summary: "How to encapsulate crawl space foundations under IRC R408.3: Detail 20-mil Class A liners, seal exterior vents, and commission commercial dehumidification."',
    'summary: "How to do crawl space encapsulation under IRC R408.3: Step-by-step contractor manual for 20-mil Class A liners, exterior vent sealing, and commercial dehumidification."'
  );

  // Add quick answer box for featured snippets
  const targetAnchor = '## Objective & Safety Protocols';
  if (!content.includes('> ### Quick Protocol: How to Do Crawl Space Encapsulation Step-by-Step')) {
    const addition = `> ### Quick Protocol: How to Do Crawl Space Encapsulation Step-by-Step\r\n>\r\n> 1. **Divert Bulk Groundwater:** Excavate an interior perimeter French drain connected to a sealed sump pit with dual battery backup.\r\n> 2. **Seal All Exterior Vents & Rim Joists:** Friction-fit 2" XPS foam plugs into vent blockouts, seal with polyurethane caulk, and apply 2" closed-cell spray foam (R-13) across the rim joist.\r\n> 3. **Lay 20-Mil ASTM E1745 Class A Vapor Barrier:** Roll puncture-proof virgin polyolefin across the earth, lap seams 12 inches with butyl mastic, and anchor 12" up stem walls using aluminum termination bars.\r\n> 4. **Insulate Foundation Stem Walls:** Fasten 2" foil-faced polyiso or XPS board to concrete walls, maintaining a 3-inch bare termite inspection strip below the mud sill.\r\n> 5. **Install Commercial Dehumidification:** Hard-pipe a dedicated low-temperature dehumidifier to drain, regulating subterranean relative humidity at 45%–50% RH.\r\n\r\n---\r\n\r\n## Objective & Safety Protocols`;
    content = content.replace(targetAnchor, addition);
    console.log('Tuned crawlspace-encapsulation-steps.md with Quick Protocol snippet box.');
  }

  fs.writeFileSync(file, content, 'utf8');
}

// 10. ICF Basements: Insulated Concrete Form Foundations & Basement Cluster Tuning (Oct 27)
function tuneIcfBasementOct27() {
  const file = path.join(contentDir, 'icf-basements-walls.md');
  let content = fs.readFileSync(file, 'utf8');

  const targetAnchor = '4. **Storm Shelter Durability:** With continuous steel-reinforced concrete sandwiched between EPS panels, **icf basements** offer superior structural resistance against hydrostatic soil pressure, frost heave forces, and severe Midwest tornadic weather.';
  const addition = `4. **Storm Shelter Durability:** With continuous steel-reinforced concrete sandwiched between EPS panels, **icf basements** offer superior structural resistance against hydrostatic soil pressure, frost heave forces, and severe Midwest tornadic weather.\r\n5. **Insulated Concrete Form Basement Performance:** Investing in an **insulated concrete form basement** guarantees continuous R-22+ assembly performance without interior cavity rot risks.\r\n6. **Engineered Insulated Concrete Form Foundations:** When engineering **insulated concrete form foundations**, the concrete core hydrates within an insulated thermal jacket, eliminating curing microcracks and boosting compressive load resistance by up to 50% compared to standard poured walls.`;

  if (content.includes(targetAnchor) && !content.includes('5. **Insulated Concrete Form Basement Performance:**')) {
    content = content.replace(targetAnchor, addition);
    console.log('Tuned icf-basements-walls.md with insulated concrete form basement and foundation variations.');
  }

  fs.writeFileSync(file, content, 'utf8');
}

// Execute tuning routines
tuneContinuousInsulation();
tuneRockwoolVsFiberglass();
tuneSipsVsTraditionalFraming();
tuneColdClimateHeatPumps();
tuneIcfBasement();
tuneEmbodiedCarbon();
tuneSubSlabInsulationOct27();
tuneDoesHouseNeedToBreatheOct27();
tuneCrawlspaceEncapsulationStepsOct27();
tuneIcfBasementOct27();

console.log('Oct 27 search telemetry content tuning complete.');
