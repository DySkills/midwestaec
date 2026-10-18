// MIAEC Database of Building Science Guides, Specifications & Materials
// Each record is tagged by City/Metro, State, and Category for regional lookups.

var miaecData = [
  // --- ENERGY EFFICIENCY & R-VALUE ---
  {
    title: "Beating Midwest Energy Price Hikes: Highest ROI R-Value Retrofits",
    category: "Energy & R-Value",
    catSlug: "energy-efficiency",
    cities: ["St. Louis", "Chicago", "Kansas City", "Indianapolis", "Cleveland", "Cincinnati", "Detroit", "Milwaukee", "Des Moines", "Columbus"],
    states: ["MO", "IL", "IN", "OH", "IA", "MI", "WI", "KS"],
    summary: "Why utility rates are climbing across Ameren, ComEd, and Duke—and why dense-pack attic air sealing outperforms expensive window replacements on heating reduction.",
    codeTag: "IECC R-60 Attic Standard",
    type: "Retrofit Guide",
    url: "article-template.html"
  },
  {
    title: "Continuous Exterior Insulation in Cold Climates: Eliminating Stud Thermal Bridging",
    category: "Energy & R-Value",
    catSlug: "energy-efficiency",
    cities: ["Chicago", "Indianapolis", "Cleveland", "Detroit", "Milwaukee", "Des Moines", "Minneapolis"],
    states: ["IL", "IN", "OH", "IA", "MI", "WI", "MN"],
    summary: "Why 2x4 framing with R-5 continuous exterior insulation outperforms 2x6 framing with R-20 cavity batts in sub-zero freeze cycles.",
    codeTag: "ASTM C518 (Thermal R-Value)",
    type: "Spec Teardown",
    url: "article-template.html"
  },
  {
    title: "Rim Joist Insulation & Air Sealing: Fixing the #1 Thermal Leak in Midwest Basements",
    category: "Energy & R-Value",
    catSlug: "energy-efficiency",
    cities: ["St. Louis", "Chicago", "Kansas City", "Indianapolis", "Detroit", "Cleveland", "Cincinnati", "Des Moines"],
    states: ["MO", "IL", "IN", "OH", "IA", "MI", "WI", "KS"],
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
    cities: ["St. Louis", "Chicago", "Cincinnati", "Kansas City", "Cleveland", "Detroit"],
    states: ["MO", "IL", "OH", "MI", "KS"],
    summary: "Hygrothermal analysis of mass brick masonry. Why interior vapor barriers rot freeze-thaw brick, and how to detail lime-mortar assemblies safely.",
    codeTag: "Freeze-Thaw Masonry Durability",
    type: "Urban Remodel Guide",
    url: "article-template.html"
  },
  {
    title: "Balloon Framing Firestopping & Air Bypasses in Historic Midwest Homes",
    category: "Urban Remodels",
    catSlug: "urban-remodels",
    cities: ["St. Louis", "Chicago", "Cincinnati", "Kansas City", "Indianapolis", "Milwaukee"],
    states: ["MO", "IL", "IN", "OH", "WI"],
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
    cities: ["St. Louis", "Chicago", "Kansas City", "Indianapolis", "Cleveland", "Cincinnati", "Detroit", "Milwaukee", "Des Moines", "Columbus"],
    states: ["MO", "IL", "IN", "OH", "IA", "MI", "WI", "KS"],
    summary: "ASTM E1745 puncture resistance testing. Preventing hydrostatic vapor pressure from warping luxury vinyl plank (LVP) and hardwood flooring.",
    codeTag: "ASTM E1745 Class A",
    type: "Spec Guide",
    url: "article-template.html"
  },
  {
    title: "Self-Adhered Vapor-Permeable WRBs vs Mechanical Housewrap in Freeze-Thaw Climates",
    category: "Water Barriers",
    catSlug: "water-barriers",
    cities: ["Chicago", "Indianapolis", "Cleveland", "Detroit", "Des Moines", "Milwaukee", "Minneapolis"],
    states: ["IL", "IN", "OH", "IA", "MI", "WI", "MN"],
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
    cities: ["St. Louis", "Chicago", "Kansas City", "Indianapolis", "Cleveland", "Cincinnati", "Detroit", "Columbus", "Des Moines"],
    states: ["MO", "IL", "IN", "OH", "IA", "MI", "WI", "KS"],
    summary: "How to hit under 3.0 ACH50 code on a budget: Rim joists, top plate penetrations, electrical rough-ins, and HVAC duct boots.",
    codeTag: "ASTM E779 / ≤ 3.0 ACH50",
    type: "Checklist",
    url: "article-template.html"
  },
  {
    title: "Smart Vapor Retarders vs Traditional Poly: When to Spec Variable Permeance",
    category: "Air Barriers",
    catSlug: "air-barriers",
    cities: ["St. Louis", "Chicago", "Cincinnati", "Kansas City", "Indianapolis", "Columbus"],
    states: ["MO", "IL", "IN", "OH", "KS"],
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
    cities: ["St. Louis", "Chicago", "Kansas City", "Indianapolis", "Cleveland", "Cincinnati", "Detroit", "Milwaukee", "Des Moines", "Columbus", "Minneapolis"],
    states: ["MO", "IL", "IN", "OH", "IA", "MI", "WI", "KS", "MN"],
    summary: "Teardown of low-ambient flash-injection compressors down to -15°F, and why pairing with whole-home dehumidification solves the damp basement trap.",
    codeTag: "NEEP Cold-Climate Certified",
    type: "MEP Teardown",
    url: "article-template.html"
  },
  {
    title: "ERV vs HRV Airflow Balancing in Tight Midwestern Envelopes",
    category: "Heating & Cooling",
    catSlug: "heating-cooling",
    cities: ["Chicago", "Indianapolis", "Detroit", "Cleveland", "Milwaukee", "Des Moines", "Minneapolis"],
    states: ["IL", "IN", "OH", "IA", "MI", "WI", "MN"],
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
    cities: ["Chicago", "Detroit", "Cleveland", "Indianapolis", "Milwaukee", "Des Moines", "Minneapolis"],
    states: ["IL", "IN", "OH", "MI", "WI", "IA", "MN"],
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
    cities: ["Chicago", "Indianapolis", "Cleveland", "Detroit", "Des Moines", "Milwaukee", "Kansas City"],
    states: ["IL", "IN", "OH", "IA", "MI", "WI", "KS"],
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
    cities: ["St. Louis", "Chicago", "Kansas City", "Indianapolis", "Cleveland", "Cincinnati", "Detroit", "Milwaukee", "Des Moines", "Columbus", "Minneapolis"],
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
    cities: ["St. Louis", "Chicago", "Kansas City", "Indianapolis", "Cleveland", "Cincinnati", "Detroit", "Milwaukee", "Des Moines", "Columbus", "Minneapolis"],
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
    cities: ["St. Louis", "Chicago", "Kansas City", "Indianapolis", "Cleveland", "Cincinnati", "Detroit", "Milwaukee", "Des Moines", "Columbus", "Minneapolis"],
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
    cities: ["St. Louis", "Chicago", "Kansas City", "Indianapolis", "Cleveland", "Cincinnati", "Detroit", "Milwaukee", "Des Moines", "Columbus", "Minneapolis"],
    states: ["All Midwest"],
    summary: "Intelligent moisture variable vapor retarder (< 0.17 perms in winter, > 13 perms in summer) permitting inward wall drying in hot, humid Midwest summers.",
    codeTag: "ASTM E96 Variable Permeance",
    type: "Manufacturer Spec",
    url: "article-template.html"
  }
];
