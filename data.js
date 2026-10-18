// MIAEC Database of Building Science Guides & Specifications
// Pure technical teardowns and regional guides. Manufacturer listings open for brand submission.

var miaecData = [
  // --- ENERGY EFFICIENCY & R-VALUE ---
  {
    title: "Beating Midwest Energy Price Hikes: Highest ROI R-Value Retrofits",
    category: "Energy & R-Value",
    catSlug: "energy-efficiency",
    cities: ["Chicago", "Cincinnati", "Cleveland", "Columbus", "Des Moines", "Detroit", "Fargo", "Indianapolis", "Kansas City", "Milwaukee", "Minneapolis", "Omaha", "Rapid City", "Sioux Falls", "St. Louis"],
    states: ["IA", "IL", "IN", "KS", "MI", "MN", "MO", "ND", "NE", "OH", "SD", "WI"],
    summary: "Why utility rates are climbing across Ameren, ComEd, and Duke—and why dense-pack attic air sealing outperforms expensive window replacements on heating reduction.",
    codeTag: "IECC R-60 Attic Standard",
    type: "Retrofit Guide",
    url: "article-template.html"
  },
  {
    title: "Continuous Exterior Insulation in Cold Climates: Eliminating Stud Thermal Bridging",
    category: "Energy & R-Value",
    catSlug: "energy-efficiency",
    cities: ["Chicago", "Des Moines", "Detroit", "Fargo", "Indianapolis", "Milwaukee", "Minneapolis", "Omaha", "Rapid City", "Sioux Falls"],
    states: ["IA", "IL", "IN", "MI", "MN", "ND", "NE", "OH", "SD", "WI"],
    summary: "Why 2x4 framing with R-5 continuous exterior insulation outperforms 2x6 framing with R-20 cavity batts in sub-zero freeze cycles.",
    codeTag: "ASTM C518 (Thermal R-Value)",
    type: "Spec Teardown",
    url: "article-template.html"
  },
  {
    title: "Rim Joist Insulation & Air Sealing: Fixing the #1 Thermal Leak in Midwest Basements",
    category: "Energy & R-Value",
    catSlug: "energy-efficiency",
    cities: ["Chicago", "Cincinnati", "Cleveland", "Columbus", "Des Moines", "Detroit", "Fargo", "Indianapolis", "Kansas City", "Milwaukee", "Minneapolis", "Omaha", "Sioux Falls", "St. Louis"],
    states: ["IA", "IL", "IN", "KS", "MI", "MN", "MO", "ND", "NE", "OH", "SD", "WI"],
    summary: "Stopping winter draft infiltration where the wood sill meets foundation concrete using 2-inch closed-cell spray foam or dense rockwool.",
    codeTag: "Air Sealing & R-15 Standard",
    type: "Field Guide",
    url: "article-template.html"
  },

  // --- URBAN REMODELS ---
  {
    title: "Remodeling 100-Year-Old Brick in Midwest Cities: How to Insulate Without Spalling",
    category: "Urban Remodels",
    catSlug: "urban-remodels",
    cities: ["Chicago", "Cincinnati", "Cleveland", "Detroit", "Kansas City", "Milwaukee", "Omaha", "St. Louis"],
    states: ["IL", "KS", "MI", "MO", "NE", "OH", "WI"],
    summary: "Hygrothermal analysis of mass brick masonry. Why interior vapor barriers rot freeze-thaw brick, and how to detail lime-mortar assemblies safely.",
    codeTag: "Freeze-Thaw Masonry Durability",
    type: "Urban Remodel Guide",
    url: "article-template.html"
  },
  {
    title: "Balloon Framing Firestopping & Air Bypasses in Historic Midwest Homes",
    category: "Urban Remodels",
    catSlug: "urban-remodels",
    cities: ["Chicago", "Cincinnati", "Cleveland", "Detroit", "Indianapolis", "Kansas City", "Milwaukee", "Omaha", "St. Louis"],
    states: ["IL", "IN", "KS", "MI", "MO", "NE", "OH", "WI"],
    summary: "How open wall studs in 1890-1930s homes act as continuous chimneys pulling basement humidity into the attic, and how to block them on a budget.",
    codeTag: "IRC Section R302.11 Fireblocking",
    type: "Remodel Checklist",
    url: "article-template.html"
  },

  // --- WATER BARRIERS ---
  {
    title: "Below-Slab Vapor Retarders: Why 6-Mil Poly Fails Under Midwest Basements",
    category: "Water Barriers",
    catSlug: "water-barriers",
    cities: ["Chicago", "Cincinnati", "Cleveland", "Columbus", "Des Moines", "Detroit", "Fargo", "Indianapolis", "Kansas City", "Milwaukee", "Minneapolis", "Omaha", "Rapid City", "Sioux Falls", "St. Louis"],
    states: ["IA", "IL", "IN", "KS", "MI", "MN", "MO", "ND", "NE", "OH", "SD", "WI"],
    summary: "ASTM E1745 puncture resistance testing. Preventing hydrostatic vapor pressure from warping luxury vinyl plank (LVP) and hardwood flooring.",
    codeTag: "ASTM E1745 Class A",
    type: "Spec Guide",
    url: "article-template.html"
  },
  {
    title: "Self-Adhered Vapor-Permeable WRBs vs Mechanical Housewrap in Freeze-Thaw Climates",
    category: "Water Barriers",
    catSlug: "water-barriers",
    cities: ["Chicago", "Des Moines", "Detroit", "Fargo", "Indianapolis", "Milwaukee", "Minneapolis", "Omaha", "Rapid City", "Sioux Falls"],
    states: ["IA", "IL", "IN", "MI", "MN", "ND", "NE", "OH", "SD", "WI"],
    summary: "Why stapled housewraps tear and leak air during Midwest windstorms, and why peel-and-stick membranes eliminate water intrusion around fasteners.",
    codeTag: "ASTM E2178 & AATCC 127",
    type: "Material Teardown",
    url: "article-template.html"
  },

  // --- AIR BARRIERS ---
  {
    title: "Passing the Blower Door Test: 5-Point Air Sealing Checklist for Flippers & Builders",
    category: "Air Barriers",
    catSlug: "air-barriers",
    cities: ["Chicago", "Cincinnati", "Cleveland", "Columbus", "Des Moines", "Detroit", "Fargo", "Indianapolis", "Kansas City", "Milwaukee", "Minneapolis", "Omaha", "Rapid City", "Sioux Falls", "St. Louis"],
    states: ["IA", "IL", "IN", "KS", "MI", "MN", "MO", "ND", "NE", "OH", "SD", "WI"],
    summary: "How to hit under 3.0 ACH50 code on a budget: Rim joists, top plate penetrations, electrical rough-ins, and HVAC duct boots.",
    codeTag: "ASTM E779 / ≤ 3.0 ACH50",
    type: "Checklist",
    url: "article-template.html"
  },
  {
    title: "Smart Vapor Retarders vs Traditional Poly: When to Spec Variable Permeance",
    category: "Air Barriers",
    catSlug: "air-barriers",
    cities: ["Chicago", "Cincinnati", "Columbus", "Indianapolis", "Kansas City", "Omaha", "St. Louis"],
    states: ["IL", "IN", "KS", "MO", "NE", "OH"],
    summary: "Why impermeable interior poly rots walls during humid Midwest summers, and how variable membranes open in summer to let walls dry inward.",
    codeTag: "ASTM E96 (Water Vapor)",
    type: "Engineering Spec",
    url: "article-template.html"
  },

  // --- HEATING & COOLING (MEP) ---
  {
    title: "Inverter Variable-Speed Heat Pumps vs Midwest Cold (-15°F) & Summer Humidity",
    category: "Heating & Cooling",
    catSlug: "heating-cooling",
    cities: ["Chicago", "Cincinnati", "Cleveland", "Columbus", "Des Moines", "Detroit", "Fargo", "Indianapolis", "Kansas City", "Milwaukee", "Minneapolis", "Omaha", "Rapid City", "Sioux Falls", "St. Louis"],
    states: ["IA", "IL", "IN", "KS", "MI", "MN", "MO", "ND", "NE", "OH", "SD", "WI"],
    summary: "Teardown of low-ambient flash-injection compressors down to -15°F, and why pairing with whole-home dehumidification solves the damp basement trap.",
    codeTag: "NEEP Cold-Climate Certified",
    type: "MEP Teardown",
    url: "article-template.html"
  },
  {
    title: "ERV vs HRV Airflow Balancing in Tight Midwestern Envelopes",
    category: "Heating & Cooling",
    catSlug: "heating-cooling",
    cities: ["Chicago", "Des Moines", "Detroit", "Fargo", "Indianapolis", "Milwaukee", "Minneapolis", "Omaha", "Rapid City", "Sioux Falls"],
    states: ["IA", "IL", "IN", "MI", "MN", "ND", "NE", "OH", "SD", "WI"],
    summary: "Why Energy Recovery Ventilators (ERVs) transfer humidity back outside during Midwest summers while retaining latent heat in freezing winter air.",
    codeTag: "ASHRAE 62.2 Ventilation",
    type: "System Spec",
    url: "article-template.html"
  },

  // --- ROOFING ASSEMBLIES ---
  {
    title: "Why Midwest Roofs Get Ice Dams: Cold Roofs vs Unvented Conditioned Attics",
    category: "Roofing",
    catSlug: "roofing",
    cities: ["Chicago", "Des Moines", "Detroit", "Fargo", "Indianapolis", "Milwaukee", "Minneapolis", "Omaha", "Rapid City", "Sioux Falls"],
    states: ["IA", "IL", "IN", "MI", "MN", "ND", "NE", "OH", "SD", "WI"],
    summary: "Thermal bypasses warming the roof deck, soffit-to-ridge net free ventilation ratios, and exterior rigid foam roof over-sheathing to stop ice damming.",
    codeTag: "IRC Section R806 (Roof Venting)",
    type: "Building Science",
    url: "article-template.html"
  },

  // --- PREFAB ENVELOPES ---
  {
    title: "SIPs vs ICF in Climate Zone 5: Total Cost, Air Leakage & Thermal Mass",
    category: "Prefab Envelopes",
    catSlug: "prefab",
    cities: ["Chicago", "Des Moines", "Detroit", "Fargo", "Indianapolis", "Milwaukee", "Minneapolis", "Omaha", "Rapid City", "Sioux Falls"],
    states: ["IA", "IL", "IN", "MI", "MN", "ND", "NE", "OH", "SD", "WI"],
    summary: "Comparison of Structural Insulated Panels vs Insulated Concrete Forms in sub-zero freeze cycles, erection speed, and termite/pest protection.",
    codeTag: "ASTM E2178 (Air Permeance)",
    type: "Comparative Spec",
    url: "article-template.html"
  }
];
