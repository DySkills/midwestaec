// MIAEC Database of Building Science Guides, Specifications & Materials
// Adding new guides or manufacturers is as simple as adding an object to this list!

var miaecData = [
  // --- ENERGY EFFICIENCY & R-VALUE ---
  {
    title: "Beating Midwest Energy Price Hikes: Highest ROI R-Value Retrofits",
    category: "Energy & R-Value",
    catSlug: "energy-efficiency",
    zone: "Zones 4 & 5",
    states: ["MO", "IL", "IN", "OH", "IA", "MI", "WI", "KS"],
    summary: "Why utility rates are spiking across Ameren, ComEd, and Duke—and why dense-pack attic air sealing beats $15,000 window replacements every time.",
    codeTag: "IECC R-60 Attic Standard",
    type: "Article",
    url: "article-template.html"
  },
  {
    title: "Continuous Exterior Insulation in Zone 5: Eliminating Stud Thermal Bridging",
    category: "Energy & R-Value",
    catSlug: "energy-efficiency",
    zone: "Zone 5",
    states: ["IL", "IN", "OH", "IA", "MI", "WI"],
    summary: "Why 2x4 framing with R-5 exterior insulation outperforms 2x6 framing with R-20 cavity batts in sub-zero freeze cycles.",
    codeTag: "ASTM C518 (Thermal R-Value)",
    type: "Spec Teardown",
    url: "article-template.html"
  },

  // --- WATER BARRIERS ---
  {
    title: "Remodeling 100-Year-Old Brick in Midwest Cities: How to Insulate Without Spalling",
    category: "Water Barriers",
    catSlug: "water-barriers",
    zone: "Zones 4 & 5",
    states: ["MO", "IL", "IN", "OH"],
    summary: "Hygrothermal analysis of mass brick masonry in St. Louis, Chicago, and Cincinnati. Why interior vapor barriers rot freeze-thaw brick.",
    codeTag: "Vapor Permeance & Freeze-Thaw",
    type: "Urban Remodel Guide",
    url: "article-template.html"
  },
  {
    title: "Below-Slab Vapor Retarders: Why 6-Mil Poly Fails Under Midwest Basements",
    category: "Water Barriers",
    catSlug: "water-barriers",
    zone: "Zones 4 & 5",
    states: ["All Midwest"],
    summary: "ASTM E1745 puncture resistance testing. Preventing hydrostatic vapor pressure from warping luxury vinyl plank (LVP) flooring.",
    codeTag: "ASTM E1745 Class A",
    type: "Spec Guide",
    url: "article-template.html"
  },

  // --- AIR BARRIERS ---
  {
    title: "Passing the Blower Door Test: 5-Point Air Sealing Checklist for Flippers & Builders",
    category: "Air Barriers",
    catSlug: "air-barriers",
    zone: "Zones 4 & 5",
    states: ["All Midwest"],
    summary: "How to hit under 3.0 ACH50 code on a budget: Rim joists, top plate penetrations, electrical rough-ins, and duct boots.",
    codeTag: "ASTM E779 / ≤ 3.0 ACH50",
    type: "Checklist",
    url: "article-template.html"
  },
  {
    title: "Smart Vapor Retarders vs Traditional Poly: When to Spec Variable Permeance",
    category: "Air Barriers",
    catSlug: "air-barriers",
    zone: "Zones 4 & 5",
    states: ["MO", "IL", "IN", "OH"],
    summary: "Why impermeable interior poly rots walls during humid Midwest summers, and how variable membranes open and close with humidity.",
    codeTag: "ASTM E96 (Water Vapor)",
    type: "Engineering Spec",
    url: "article-template.html"
  },

  // --- HEATING & COOLING (MEP) ---
  {
    title: "Inverter Variable-Speed Heat Pumps vs Midwest Cold (-15°F) & Summer Humidity",
    category: "Heating & Cooling",
    catSlug: "heating-cooling",
    zone: "Zones 4 & 5",
    states: ["All Midwest"],
    summary: "Teardown of low-ambient flash-injection compressors down to -15°F, and why pairing with whole-home dehumidification solves the damp basement trap.",
    codeTag: "NEEP Cold-Climate Certified",
    type: "MEP Teardown",
    url: "article-template.html"
  },
  {
    title: "ERV vs HRV Airflow Balancing in Tight Midwestern Envelopes",
    category: "Heating & Cooling",
    catSlug: "heating-cooling",
    zone: "Zones 4 & 5",
    states: ["IL", "IN", "OH", "IA", "MI", "WI"],
    summary: "Why Energy Recovery Ventilators (ERVs) transfer humidity back outside in summer while retaining latent heat during freezing January nights.",
    codeTag: "ASHRAE 62.2 Ventilation",
    type: "System Spec",
    url: "article-template.html"
  },

  // --- ROOFING ASSEMBLIES ---
  {
    title: "Why Midwest Roofs Get Ice Dams: Cold Roofs vs Unvented Conditioned Attics",
    category: "Roofing",
    catSlug: "roofing",
    zone: "Zones 4 & 5",
    states: ["IL", "IN", "OH", "MI", "WI", "IA"],
    summary: "Thermal bypasses warming the roof deck, soffit-to-ridge net free ventilation ratios, and exterior rigid foam roof over-sheathing.",
    codeTag: "IRC Section R806 (Roof Venting)",
    type: "Building Science",
    url: "article-template.html"
  },

  // --- PREFAB ENVELOPES ---
  {
    title: "SIPs vs ICF in Climate Zone 5: Total Cost, Air Leakage & Thermal Mass",
    category: "Prefab Envelopes",
    catSlug: "prefab",
    zone: "Zone 5",
    states: ["IL", "IN", "OH", "IA", "MI", "WI"],
    summary: "Comparison of Structural Insulated Panels vs Insulated Concrete Forms in sub-zero freeze cycles, erection speed, and termite/pest protection.",
    codeTag: "ASTM E2178 (Air Permeance)",
    type: "Comparative Spec",
    url: "article-template.html"
  },

  // --- MANUFACTURERS DIRECTORY ---
  {
    title: "Rockwool: Comfortbatt & Comfortboard 80 Mineral Wool",
    category: "Manufacturers",
    catSlug: "manufacturers",
    zone: "All Zones",
    states: ["All Midwest"],
    summary: "Stone wool continuous exterior and cavity insulation. Non-combustible, moisture-resistant, and vapor-permeable for zero-rot wall assemblies.",
    codeTag: "ASTM C612 / Non-Combustible",
    type: "Manufacturer Spec",
    url: "article-template.html"
  },
  {
    title: "Stego Industries: Stego Wrap 15-Mil & 20-Mil Class A Vapor Barrier",
    category: "Manufacturers",
    catSlug: "manufacturers",
    zone: "All Zones",
    states: ["All Midwest"],
    summary: "Prime virgin polyolefin resin barrier engineered to prevent water vapor diffusion and soil gas migration under concrete slabs for structure life.",
    codeTag: "ASTM E1745 Class A",
    type: "Manufacturer Spec",
    url: "article-template.html"
  },
  {
    title: "Mitsubishi Electric: H2i Hyper-Heating Inverter Heat Pumps",
    category: "Manufacturers",
    catSlug: "manufacturers",
    zone: "Zones 4 & 5",
    states: ["All Midwest"],
    summary: "Cold-climate variable refrigerant flow systems maintaining 100% rated heating capacity down to -5°F and operational to -13°F without auxiliary strip heat.",
    codeTag: "AHRI Cold-Climate Standard",
    type: "Manufacturer Spec",
    url: "article-template.html"
  },
  {
    title: "Pro Clima: Intello Plus Smart Variable-Permeance Membrane",
    category: "Manufacturers",
    catSlug: "manufacturers",
    zone: "Zones 4 & 5",
    states: ["All Midwest"],
    summary: "Intelligent moisture variable vapor retarder (< 0.17 perms in winter, > 13 perms in summer) permitting inward wall drying in hot, humid Midwest summers.",
    codeTag: "ASTM E96 Variable Permeance",
    type: "Manufacturer Spec",
    url: "article-template.html"
  }
];
