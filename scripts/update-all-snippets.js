const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '..', 'content');

const snippets = {
  "attic-air-sealing-baffles.md": "Attic air sealing and eave baffles stop winter ice dams permanently. Step-by-step guide to sealing top plate bypasses and installing R-60 under IECC R402.",
  "attic-frost-roof-sweating.md": "Attic frost and sweating roof sheathing: Why bypass air leaks freeze into winter hoarfrost, and how to stop false spring ceiling leaks under IRC R806.",
  "balloon-framing-retrofit-steps.md": "How to firestop balloon framing: Step-by-step retrofit guide to installing mineral wool blocks and intumescent mastic to stop chimney drafts under IRC R302.",
  "balloon-framing.md": "Balloon framing air leaks act as open chimneys in pre-1940s homes. Learn how to air-seal open stud bays and install code-approved IRC R302.11 firestops.",
  "barndominium-post-frame.md": "Barndominium insulation and condensation control: How to detail continuous outboard foam and ventilated rainscreens to prevent rotting posts under IBC 1404.",
  "basement-lvp-flooring-moisture.md": "Basement LVP flooring moisture: Why waterproof vinyl buckles over concrete slabs, and how to test MVER under ASTM F1869 with Class A vapor retarders.",
  "basement-waterproofing.md": "Basement waterproofing after heavy rain: How expansive clay funnels hydrostatic head pressure through cove joints, and the ASTM E1745 Class A barrier fix.",
  "blower-door-checklist.md": "Pass the blower door test on your remodel: A contractor checklist for hitting < 3.0 ACH50 under IECC R402.4 by air-sealing top plates and rim joists.",
  "bug-prevention.md": "Pest prevention starts at the building envelope: How air-sealing rim joists, weep screens, and sill gaskets stops insects and termites under IRC P2605.",
  "cold-climate-heat-pumps.md": "Cold-climate heat pumps at -20°F: How inverter vapor-injection and R744 transcritical cycles eliminate electric strips and cut winter heating bills in Zone 5.",
  "continuous-insulation.md": "Continuous exterior insulation on 2x6 walls: Calculate dew point planes, prevent sheathing condensation, and eliminate thermal bridging under IRC R702.",
  "crawlspace-encapsulation-steps.md": "How to encapsulate crawl space foundations under IRC R408.3: Detail 20-mil Class A liners, seal exterior vents, and commission commercial dehumidification.",
  "crawlspace-encapsulation.md": "Crawl space encapsulation vs vented dirt floors: Why 20-mil sealed liners and commercial dehumidifiers cut floor rot and mold risk under IRC Section R408.",
  "does-house-need-to-breathe.md": "Does a house need to breathe? The building science truth behind controlled mechanical ventilation (ERV/HRV) vs uncontrolled wall rot under ASHRAE 62.2.",
  "embodied-carbon-materials.md": "Low carbon insulation specifications: Compare the cradle-to-gate carbon footprint of dense-pack cellulose, wood-fiber board, and stone wool for Climate Zone 5.",
  "energy-hikes.md": "Winter utility rate hikes: How air-sealing attic bypasses and setting heat pump balance points protects homeowners against 20–40% Midwest rate surges.",
  "expansive-lawncare.md": "Expansive clay soils and foundation cracking: How seasonal moisture swings cause basement settlement, and the soaker hose watering rule to prevent cracks.",
  "false-spring-envelope-thaw.md": "False spring freeze-thaw cycles: How 50°F daytime thaws and sub-zero nights tear gutters, crack masonry, and cause hidden ceiling leaks in Climate Zone 5.",
  "historic-brick-retrofit-steps.md": "How to insulate historic brick walls safely: Step-by-step interior retrofit detailing 2-inch continuous smart vapor retarders and lime mortar repointing.",
  "ice-dams-roofs.md": "Ice dams on roofs: The thermodynamic physics of attic heat loss, and how continuous air-sealing and ice-and-water shield prevent gutter dam roof leaks.",
  "icf-basements-walls.md": "ICF basement foundations deliver continuous R-22+ insulation with zero moisture wicking. Compare poured concrete vs. insulated concrete forms cost and IRC R404 specs.",
  "insulating-brick.md": "Clay insulating brick retrofits: Why interior insulation causes historic brick spalling in sub-zero winters, and the hygrothermal blueprint to do it safely.",
  "off-grid-systems.md": "Off-grid solar and battery storage in Zone 5: How to size LiFePO4 batteries and low-temperature inverters to survive 5 straight days of sub-zero cloud cover.",
  "rammed-earth-midwest-flooring.md": "Rammed earth and earthen floors in Zone 5: Why uninsulated earth provides only R-3.6, and how to detail Stabilized Insulated Rammed Earth (SIRE) under IRC R402.",
  "rockwool-vs-fiberglass.md": "Rockwool vs. fiberglass insulation: Compare R-values (R-4.2 vs R-3.2), fire resistance, soundproofing, and sub-zero convective derating in Midwest walls.",
  "roof-insulation-over-sheathing.md": "Roof insulation over sheathing: How adding continuous rigid polyiso or stone wool above cathedral rafters stops ice dams and cuts drafts under IRC R806.5.",
  "sips-vs-traditional-framing.md": "SIPs vs. traditional stick framing in Zone 5: Compare total build costs, sub-1.0 ACH50 airtightness, crane labor savings, and HVAC downsizing under IRC R610.",
  "smart-vapor-retarders.md": "Smart vapor retarders vs. 6-mil plastic: Why polyethylene traps summer mold behind drywall, and how variable-perm membranes breathe under IRC Section R702.7.",
  "sub-slab-insulation-specs.md": "Below grade insulation for slabs: Why high-density EPS Type IX outperforms XPS under moisture saturation, and how to spray-foam rim joists under ASTM C578.",
  "summer-humidity-ac.md": "Oversized AC and basement humidity: Why short-cycling high-efficiency air conditioners leave rooms cold and clammy, and how to fix SHR under ACCA Manual S.",
  "when-to-replace-windows.md": "When to replace windows: 4 structural failure triggers that justify the 30-year payback. How to diagnose blown IGU seals and fix drafty frames for 1/4 the cost.",
  "window-alternatives.md": "Window replacement alternatives: How Low-E storm panels and weight-pocket air sealing deliver 80% of new window thermal efficiency for under $2,500."
};

let updated = 0;

for (const [filename, newSummary] of Object.entries(snippets)) {
  const filePath = path.join(contentDir, filename);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filename}`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace summary in frontmatter
  const summaryRegex = /^summary:\s*"([^"\\]*(\\.[^"\\]*)*)"/m;
  if (summaryRegex.test(content)) {
    content = content.replace(summaryRegex, `summary: "${newSummary}"`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Updated [${newSummary.length} chars]: ${filename}`);
    updated++;
  } else {
    console.log(`⚠️ Summary regex did not match in: ${filename}`);
  }
}

console.log(`\nSuccessfully optimized ${updated} of ${Object.keys(snippets).length} articles!`);
