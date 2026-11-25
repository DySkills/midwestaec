const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '../content');
const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));

let totalReplacements = 0;

// Targeted replacements for academic / dramatic AI diction
const dictionReplacements = [
  {
    target: "The furnace is suffocating on its own latent moisture, and the internal safety circuit is protecting the occupants from fatal carbon monoxide poisoning.",
    replacement: "The furnace is choked by frozen exhaust condensate, and the internal safety switch locks out the burner to prevent carbon monoxide backup into the home."
  },
  {
    target: "The 500 PSF Hydrostatic Wedge: Water pooling against an 8-foot foundation exerts 62.4 lbs/cu.ft of hydrostatic pressure, driving groundwater inward through the cove joint—the cold seam between the footing and the floor slab.",
    replacement: "500 PSF Hydrostatic Head Pressure: Water pooling against an 8-foot foundation exerts 62.4 lbs/cu.ft of liquid pressure, forcing groundwater inward through the cove joint where the floor slab meets the footing."
  },
  {
    target: "3. **The Sump Pit Paradox:** The primary sump pit sits dry while water pools 20 feet away on the far side of the basement. The sub-slab water table has crested, but localized hydrostatic pressure cannot reach the sump basin because the footing drainage path is crushed, silt-clogged, or non-existent.",
    replacement: "3. **Dry Sump Pit While the Floor Floods:** Water pools 20 feet away on the far side of the basement while the sump basin sits completely dry. Localized groundwater cannot reach the sump pit because the exterior footing tile is crushed, silt-clogged, or missing entirely."
  },
  {
    target: "## The Sub-Floor Psychrometric Trap: Why Vented Crawlspaces Rot Joists Across the Midwest",
    replacement: "## Sub-Floor Condensation Mechanics: Why Vented Crawlspaces Rot Joists Across the Midwest"
  },
  {
    target: "## The Psychrometric Trap of Summer Crawlspace Venting",
    replacement: "## Summer Crawlspace Condensation: How Humid Outdoor Air Rots Cool Subfloors"
  },
  {
    target: "- **The Waste-Heat Paradox:** Historic mass masonry survived a century of Midwest winters because uninsulated walls leaked 20% to 30% of household heat outward through the brick, preventing pore water from freezing during saturated wet-cold cycles.",
    replacement: "- **The Waste-Heat Thermal Balance:** Historic mass masonry survived past winters because uninsulated walls leaked 20% to 30% of indoor heat outward through the brick, keeping pore water from freezing during saturated wet-cold cycles."
  },
  {
    target: "The Midwest Rammed Earth Paradox: Thermal Mass, Freeze-Thaw Spalling & The Sub-Slab Flooring Matrix",
    replacement: "Rammed Earth in the Midwest: Thermal Mass, Freeze-Thaw Spalling & Sub-Slab Flooring Specs"
  },
  {
    target: "## The Cold Basement Paradox: Why Finished Basements Sweat",
    replacement: "## Summer Basement Condensation: Why Finished Basements Sweat Under Air Conditioning"
  },
  {
    target: "Smart variable-permeance membranes solve this bidirectional paradox through responsive polymer physics that seal tight in winter and open wide in summer.",
    replacement: "Smart variable-permeance membranes adapt to seasonal vapor drive, sealing tight against winter exfiltration and opening to allow inward drying during humid summers."
  },
  {
    target: "Trapped water rots wood bottom plates and fosters *Stachybotrys* mold",
    replacement: "Trapped water rots wood bottom plates and causes *Stachybotrys* mold growth"
  },
  {
    target: "In autumn, warm air escaping through 1/8-inch gaps serves as an active thermal beacon for overwintering pests.",
    replacement: "In autumn, warm air escaping through 1/8-inch framing gaps attracts overwintering insects directly into wall cavities."
  },
  {
    target: "In reality, carpenter ants consume sugar, insect honeydew, and protein; they use wood strictly as a structural nesting cavity.",
    replacement: "Carpenter ants actually feed on sugar, insect honeydew, and protein; they excavate wood strictly for nesting galleries."
  },
  {
    target: "In reality, steep-slope residential roofing is engineered strictly as a **water-shedding assembly**.",
    replacement: "Steep-slope residential roofing is engineered strictly as a **water-shedding assembly**, not a sealed waterproof membrane."
  },
  {
    target: "In reality, building science field studies by Oak Ridge National Laboratory (ORNL) show that framing accounts for **22% to 27% of the total wall surface area** once you calculate bottom plates, double top plates, corner stud clusters, king studs, jack studs, cripples, and solid solid wood headers.",
    replacement: "Field testing by Oak Ridge National Laboratory (ORNL) shows that framing actually accounts for **22% to 27% of total wall surface area** once you calculate bottom plates, double top plates, corner stud clusters, king studs, jack studs, cripples, and solid wood headers."
  },
  {
    target: "In reality, the draft is entering around the perimeter of the window buck.",
    replacement: "In most cases, cold drafts leak through unsealed gaps between the window frame and the rough opening."
  },
  {
    target: "In reality, closed-cell spray foam creates a non-breathable vapor barrier.",
    replacement: "On the jobsite, closed-cell spray foam creates an impermeable vapor barrier."
  }
];

files.forEach(f => {
  const filePath = path.join(contentDir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // 1. Diction replacements
  dictionReplacements.forEach(dr => {
    if (content.includes(dr.target)) {
      content = content.replace(dr.target, dr.replacement);
      totalReplacements++;
      console.log(`[Diction] Replaced in ${f}: "${dr.target.slice(0, 35)}..."`);
    }
  });

  // 2. Remove / replace "Furthermore,"
  content = content.replace(/\bFurthermore,\s+/g, 'Additionally, ');
  content = content.replace(/\bMoreover,\s+/g, 'In addition, ');

  // 3. Process em-dashes (—)
  // Avoid replacing markdown table separators like | — |
  // Look for — in normal text
  const lines = content.split('\n');
  const newLines = lines.map(line => {
    // If it's a table row with | — |, preserve it
    if (line.trim().startsWith('|') && line.includes('| — |')) {
      return line;
    }
    if (!line.includes('—')) return line;

    let updated = line;
    // Pattern 1: word—word (e.g., "stack-effect—the upward buoyant pressure—heated" -> "stack-effect (the upward buoyant pressure), heated")
    // Pattern 2: word — word in captions or headers
    // Let's do context-aware replacements
    updated = updated.replace(/—the cold seam between the footing and the floor slab—/g, ' (the cold seam between the footing and the floor slab), ');
    updated = updated.replace(/—where exterior wall studs run uninterrupted from the stone foundation sill all the way to the roof rafters\./g, ', where exterior wall studs run uninterrupted from the foundation sill to the roof rafters.');
    updated = updated.replace(/—where /g, ', where ');
    updated = updated.replace(/—when /g, ', when ');
    updated = updated.replace(/—which /g, ', which ');
    updated = updated.replace(/—often called "corn sweat"—/g, ' ("corn sweat"), ');
    updated = updated.replace(/—the exact biological breeding ground for dust mites and mildew\./g, ', creating prime conditions for dust mites and mildew.');
    updated = updated.replace(/—it is the \*\*exterior discharge pipe\*\*\./g, ', but the **exterior discharge pipe**.');
    updated = updated.replace(/—delivering roughly 15% to 25% savings/g, ', delivering roughly 15% to 25% savings');
    updated = updated.replace(/—unheated machinery sheds, livestock run-ins, and grain storage\./g, ': unheated machinery sheds, livestock run-ins, and grain storage.');
    updated = updated.replace(/—it is trapped inside the wall cavity forever\./g, '. It remains trapped inside the wall cavity.');
    updated = updated.replace(/—far below the mandatory/g, ', well below the mandatory');
    updated = updated.replace(/—exceeding the 20- to 25-year/g, ', exceeding the 20- to 25-year');
    updated = updated.replace(/—virtually identical to/g, ', virtually identical to');
    updated = updated.replace(/—compared to/g, ', compared to');
    updated = updated.replace(/—you do not have a glass problem—/g, ', you do not have a glass problem; ');
    updated = updated.replace(/—they leak around the unsealed/g, '. They leak around the unsealed');
    updated = updated.replace(/—expanding and contracting at more than double the rate of glass\./g, ', expanding and contracting at more than double the rate of glass.');
    updated = updated.replace(/—the upward buoyant pressure exerted by warm, low-density indoor air—/g, ' (the upward buoyant pressure exerted by warm, low-density indoor air), ');
    updated = updated.replace(/—the two accessible terminal ends—/g, ' at two accessible points: ');
    updated = updated.replace(/—the basement mud sill and the attic eaves—/g, ' (the basement mud sill and attic eaves), ');
    updated = updated.replace(/—the basement mud sill and the attic eaves/g, ' (the basement mud sill and attic eaves)');
    updated = updated.replace(/—fiberglass melts at 1,100°F/g, '. Fiberglass melts at 1,100°F');
    updated = updated.replace(/—more than four times the leakage/g, ', more than four times the leakage');
    updated = updated.replace(/—a construction method where/g, ', a construction method where');
    updated = updated.replace(/—outward winter vapor drive at 0°F shifting to inward summer vapor drive at 95°F and 85% relative humidity\./g, ': outward winter vapor drive at 0°F shifts to inward summer vapor drive at 95°F and 85% relative humidity.');
    updated = updated.replace(/—trapping gallons of moisture/g, ', trapping moisture');
    updated = updated.replace(/—conducted by the/g, ' (conducted by the');
    updated = updated.replace(/after 15 years in service—revealed/g, 'after 15 years in service) revealed');
    updated = updated.replace(/—a 40% to 50% upfront material premium that totals/g, ', a 40% to 50% upfront material premium totaling');
    updated = updated.replace(/—more than three times the density of glass fibers\./g, ', more than three times the density of glass fibers.');
    updated = updated.replace(/—Chicago, St\. Louis, Milwaukee, Detroit, and Minneapolis—/g, ' (Chicago, St. Louis, Milwaukee, Detroit, and Minneapolis), ');
    updated = updated.replace(/—typically 2 to 3 wythes of soft, low-fired common clay brick—/g, ' (typically 2 to 3 wythes of soft, low-fired common clay brick), ');
    updated = updated.replace(/—cuts annual mowing time/g, ', cutting annual mowing time');
    updated = updated.replace(/—from the humid summer river valleys of the Ohio and Missouri Rivers to the lake-effect belts—/g, ' (from the humid river valleys of the Ohio and Missouri Rivers to the lake-effect belts), ');

    // Generic fallback for any remaining em-dash with spaces around it: " — " -> ", " or ": "
    updated = updated.replace(/\s+—\s+/g, ', ');
    // Generic fallback for word—word if still present: replace with ", "
    updated = updated.replace(/(\w)—(\w)/g, '$1, $2');

    return updated;
  });

  content = newLines.join('\n');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`[Updated] ${f}`);
  }
});

console.log('Finished humanizing pass.');
