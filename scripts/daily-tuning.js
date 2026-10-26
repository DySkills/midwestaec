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

// Execute tuning routines
tuneContinuousInsulation();
tuneRockwoolVsFiberglass();
tuneSipsVsTraditionalFraming();
tuneColdClimateHeatPumps();
tuneIcfBasement();
tuneEmbodiedCarbon();

console.log('Oct 26 search telemetry content tuning complete.');
