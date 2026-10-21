# Midwest AEC — Technical Diagram & Image Manifest

> **Image Registry & Mapping Specification**  
> *Purpose: Tracks every technical diagram, architectural cross-section, and visual asset across all 27 Midwest AEC articles. While images are temporarily pulled from the live HTML build for artwork updates, this manifest serves as the exact placement and prompt blueprint for re-insertion.*

---

## Visual Design Standards for All MIAEC Graphics

When generating or updating diagrams, strictly enforce these publication standards:
- **Canvas:** Pure solid off-white background (`#FBFBFC`). **Zero gridlines, no blueprint grid, no graph paper texture.**
- **Color Hierarchy (60-30-10):**
  - **Dominant Linework (60%):** Deep Navy (`#161F83`) for framing, studs, concrete, masonry, and structural components.
  - **Secondary Air & Moisture (30%):** Steel Blue (`#3274AE`) for cold outdoor air, groundwater, rainscreen gaps, and neutral planes.
  - **Thermal Exfiltration & Accent (10%):** Crimson Red (`#C42927`) for warm indoor air, heat loss arrows, and failure planes.
- **Typography:** Crisp sans-serif architectural labeling (*Plus Jakarta Sans* or *JetBrains Mono*). Leader lines with circular anchor dots.
- **No Text Artifacts:** Zero duplicate labels, zero AI prompt leakage (never write color names in callouts).

---

## Complete Article Image Mapping Registry

### 1. Roofing

#### Article: `ice-dams-roofs.md`
- **File:** `articles/ice-dams-roofs.html`
- **Location in Article:** Section: `## Ice Dams Form at 15°F, Not 32°F`
- **Type:** Standalone Technical Cross-Section Figure
- **Image File:** `images/ice-dam-dynamics-diagram.jpg`
- **Alt Text:** `Thermodynamics of a Midwest Roof Ice Dam vs. A Balanced Cold Roof Assembly`
- **Caption:** *Figure 1: Thermodynamics of a Midwest Roof Ice Dam vs. A Balanced Cold Roof Assembly*
- **Visual Description:** Split cross-section. 
  - *Left side (Unsealed Attic):* Warm air escaping ceiling bypasses; snow melting above 32°F on roof deck; meltwater freezing at cold overhang (< 32°F); ice dam ponding behind shingles.
  - *Right side (Balanced Cold Roof):* Airtight ceiling plane; deep R-60 cellulose; clear ventilation baffles from soffit to ridge; uniform cold roof deck matching ambient outdoor temperature.

---

### 2. Urban Development (Historic Archetypes)

#### Article: `balloon-framing.md`
- **File:** `articles/balloon-framing.html`
- **Location in Article:** Section: `## Anatomy of a Balloon-Framed House: Ribbons & Open Flues`
- **Type:** 2-Slide Interactive Carousel
- **Slide 1 Image:** `images/balloon-framing-unsealed.jpg`
  - **Slide Title:** `Unsealed Balloon Frame (The 24-Foot Chimney)`
  - **Alt Text:** `Technical Cross-Section: Historic Balloon Framing Convective Chimney Effect and Concealed Fire Spread Corridor`
  - **Caption:** *Figure 1.1: Historic Balloon Framing — Continuous 24-foot exterior 2x4 studs create an open flue from stone basement to attic, siphoning sub-zero air and posing a rapid 3-minute fire spread risk.*
  - **Visual Description:** Two-story wood-frame cross section. Continuous 24-ft studs from sill to rafters. Open stud cavities siphoning freezing basement air past 2nd-floor baseboards into vented attic. Unblocked 3-minute fire spread path.
- **Slide 2 Image:** `images/balloon-framing-sealed.jpg`
  - **Slide Title:** `Firestopped & Air-Sealed Retrofit`
  - **Alt Text:** `Technical Cross-Section: Mineral Wool Firestop and Air-Sealed Balloon Frame Retrofit`
  - **Caption:** *Figure 1.2: Firestopped & Air-Sealed Retrofit — Non-combustible mineral wool blocks (ASTM E136) and intumescent sealant at the foundation sill and attic eaves permanently halt convective drafts and restore code fireblocking.*
  - **Visual Description:** Same cross section retrofitted per IRC R302.11 / ASTM E136. Non-combustible mineral wool blocks (2,150°F) and intumescent sealant at basement mud sill and attic eaves. Dense-pack cellulose filling stud bays.

#### Article: `insulating-brick.md`
- **File:** `articles/insulating-brick.html`
- **Location in Article:** Section: `## The Physics of Mass Masonry: The Waste-Heat Storage Engine`
- **Type:** Standalone Technical Cross-Section Figure
- **Image File:** `images/insulating-brick-diagram.jpg`
- **Alt Text:** `Technical Cross-Section: Uninsulated Historic Mass Brick Wall vs. Safe Interior Mineral Wool & Smart Membrane Retrofit`
- **Caption:** *Figure 1: Uninsulated Historic Mass Brick Wall vs. Safe Interior Mineral Wool & Smart Membrane Retrofit*
- **Visual Description:** Split cross section.
  - *Left side (Uninsulated Historic Equilibrium):* Two-wythe clay brick with embedded timber joist pocket. Waste heat flux (0.5 BTU/hr·ft²·°F) keeps brick face above 32°F, allowing outward vapor drying.
  - *Right side (Engineered Interior Retrofit):* Tuckpointed breathable lime mortar; 1-inch clear capillary drainage gap; offset 2x4 stud wall with R-15 hydrophobic mineral wool; intelligent smart vapor retarder membrane; joist tail borate rods and airtight perimeter seal.

---

### 3. Water Barriers & Foundations

#### Article: `basement-waterproofing.md`
- **File:** `articles/basement-waterproofing.html`
- **Location in Article:** Section: `## The Physics of the Clay Bowl and Hydrostatic Head`
- **Type:** Standalone Technical Cross-Section Figure
- **Image File:** `images/basement-waterproofing-diagram.jpg`
- **Alt Text:** `Basement Hydrostatic Head Pressure and Under-Slab Vapor Defense`
- **Caption:** *Figure 1: Basement Hydrostatic Head Pressure and Under-Slab Vapor Defense*
- **Visual Description:** Split cross section.
  - *Left side (Unprotected Clay Bowl Failure):* Excavated backfill acting as a rainwater funnel; 500 psf hydrostatic head pressure driving water through cold cove joint; torn 6-mil poly under slab allowing capillary vapor drive that warps LVP flooring.
  - *Right side (Engineered Hydrostatic & Vapor Defense):* Dimpled HDPE drainage mat; dual perforated PVC drain tile in washed stone; 4-inch stone capillary break; 2-inch XPS foam (R-10); sealed 15-mil ASTM E1745 Class A vapor barrier turned up stem wall.

---

### 4. Rural Development

#### Article: `barndominium-post-frame.md`
- **File:** `articles/barndominium-post-frame.html`
- **Location in Article:** Section: `## The Direct-Steel Thermal Bridge and Condensation Waterfall`
- **Type:** Standalone Technical Cross-Section Figure
- **Image File:** `images/barndominium-post-frame-diagram.jpg`
- **Alt Text:** `Traditional Pole Barn Wall vs. Engineered Residential Barndominium Assembly in Climate Zone 5`
- **Caption:** *Figure 1: Traditional Pole Barn Wall vs. Engineered Residential Barndominium Assembly in Climate Zone 5*
- **Visual Description:** Split cross section.
  - *Left side (Pole Barn Failure):* Corrugated steel screwed directly to horizontal wood girts without drainage gap; indoor moisture condensing against 0°F steel skin, rotting girts; in-ground column groundline decay.
  - *Right side (Residential Barndominium Assembly):* 3/4-inch ventilated rainscreen drainage gap behind siding; continuous outboard insulation; taped commercial WRB; friction-fit mineral wool with smart vapor retarder; precast concrete Perma-Column boots eliminating wood-to-earth contact.

---

### 5. Envelope Systems

#### Article: `sips-vs-traditional-framing.md`
- **File:** `articles/sips-vs-traditional-framing.html`
- **Location in Article:** Section: `## Engineering Anatomy: EPS, GPS, and Polyurethane Cores`
- **Type:** 2-Slide Interactive Carousel
- **Slide 1 Image:** `images/sips-stick-framing.jpg`
  - **Slide Title:** `Conventional 2x6 Stick Framing`
  - **Alt Text:** `Technical Cross-Section: Conventional 2x6 Stick Framing with 25% Framing Factor Thermal Bridging`
  - **Caption:** *Figure 1.1: Conventional 2x6 Framing in Zone 5 — Wood studs (25% framing factor) act as continuous thermal bridges derating cavity insulation to whole-wall R-14.8, with air leakage at plate joints.*
  - **Visual Description:** Standard 2x6 platform framing at floor connection. 25% framing factor conducting heat directly through wood studs to cold exterior sheathing (24°F condensation plane). Air drafts at bottom plate.
- **Slide 2 Image:** `images/sips-monolithic-panel.jpg`
  - **Slide Title:** `Structural Insulated Panel (SIP)`
  - **Alt Text:** `Technical Cross-Section: 6.5-Inch Structural Insulated Panel Monolithic Envelope`
  - **Caption:** *Figure 1.2: Engineered 6.5-Inch Structural Insulated Panel — Continuous EPS rigid foam core sandwiched between 7/16-inch OSB skins delivers true whole-wall R-24 with < 3% framing factor and < 0.8 ACH50 airtightness.*
  - **Visual Description:** 6.5-inch SIP wall at floor platform connection. Solid continuous foam core between OSB skins; zero clear-wall studs; recessed bottom plate sealed with expanding mastic; rainscreen drainage gap behind cladding.

#### Article: `icf-basements-walls.md`
- **File:** `articles/icf-basements-walls.html`
- **Location in Article:** Section: `## Concrete Physics: Thermal Conduction and Capillary Suction`
- **Type:** Standalone Technical Cross-Section Figure
- **Image File:** `images/icf-basement-diagram.jpg`
- **Alt Text:** `ICF vs Poured Concrete Foundation Performance in -15°F Midwest Winter`
- **Caption:** *Figure 1: ICF vs Poured Concrete Foundation Performance in -15°F Midwest Winter*
- **Visual Description:** Split cross section.
  - *Left side (Standard Poured Concrete):* Bare 8-inch concrete wall (R-1.1); severe conductive heat loss to freezing soil (-15°F); cold inside wall surface (36°F) causing condensation and mold.
  - *Right side (Monolithic ICF Foundation):* 8-inch reinforced concrete core between dual 2.625-inch continuous EPS foam layers (R-24 total); concrete core functions as a thermal battery; exterior waterproofing membrane and dimpled HDPE drainage mat.

---

### 6. HVAC & Mechanical Systems

#### Article: `cold-climate-heat-pumps.md`
- **File:** `articles/cold-climate-heat-pumps.html`
- **Location in Article:** Section: `## Thermodynamic Realities: Vapor Flash-Injection and the Flat Capacity Curve`
- **Type:** Standalone Technical Engineering Chart
- **Image File:** `images/cold-climate-heat-pump-diagram.jpg`
- **Alt Text:** `Cold-Climate Heat Pump Capacity and COP vs Outdoor Temperature in Climate Zones 4 and 5`
- **Caption:** *Figure 1: Cold-Climate Heat Pump Capacity and COP vs Outdoor Temperature in Climate Zones 4 and 5*
- **Visual Description:** Engineering performance graph (-20°F to 50°F).
  - Heating capacity curve of cold-climate inverter with vapor flash-injection (100% capacity maintained to -5°F, 76% at -15°F) vs standard heat pump crashing at 30°F.
  - COP curves (3.8 at 47°F, 2.4 at 17°F, 1.9 at -5°F, 1.6 at -15°F).
  - Building heat load line showing thermal balance point (~22°F).

---

### 7. Efficient Systems & Retrofits

#### Article: `continuous-insulation.md`
- **File:** `articles/continuous-insulation.html`
- **Location in Article:** Section: `## Material Teardown: Choosing the Right Outboard Layer`
- **Type:** Standalone Technical Cross-Section Figure
- **Image File:** `images/continuous-insulation-diagram.jpg`
- **Alt Text:** `Technical Cross-Section: Wall Thermal Bridging vs. Continuous Exterior Insulation in Winter`
- **Caption:** *Figure 1: Wall Thermal Bridging vs. Continuous Exterior Insulation in Winter*
- **Visual Description:** Split cross section.
  - *Left side (Cavity-Only Wall):* 2x6 stud conducting indoor warmth to cold OSB sheathing (24°F condensation plane).
  - *Right side (Continuous Outboard Insulation):* Continuous R-5 rigid insulation outboard of sheathing, keeping OSB warm at 50°F above dew point; vertical furring strip rainscreen drainage gap.

#### Article: `energy-hikes.md`
- **File:** `articles/energy-hikes.html`
- **Location in Article:** Section: `## The Stack Effect`
- **Type:** 2-Slide Interactive Carousel
- **Slide 1 Image:** `images/stack-effect-diagram.jpg`
  - **Slide Title:** `Two-Story Home Stack Effect`
  - **Alt Text:** `Technical Cross-Section: Stack-Effect Air Dynamics and Neutral Pressure Plane in a Two-Story Midwest Home`
  - **Caption:** *Figure 1.1: Stack Effect in a Two-Story Midwest Home — Thermal buoyancy drives warm air out through unsealed attic top plates and can lights, creating negative pressure that draws sub-zero drafts through basement mud sills.*
  - **Visual Description:** Two-story cross section in winter. Red convective arrows rising through top plate penetrations into cold attic; dashed neutral pressure plane; blue infiltration arrows entering basement mud sills.
- **Slide 2 Image:** `images/stack-effect-ranch.jpg`
  - **Slide Title:** `Single-Story Ranch Stack Effect`
  - **Alt Text:** `Technical Cross-Section: Stack-Effect Air Dynamics in a Single-Story Midwest Ranch Home`
  - **Caption:** *Figure 1.2: Stack Effect in a Midwest Ranch — Lower total vertical height reduces buoyant stack pressure compared to two-stories, but attic bypasses over mechanical chases still drive 30% of furnace heat loss.*
  - **Visual Description:** Single-story ranch cross section showing lower vertical column pressure with concentrated bypasses over hallway furnace chases and can lights.

---

### 8. Go Green

#### Article: `rockwool-vs-fiberglass.md`
- **File:** `articles/rockwool-vs-fiberglass.html`
- **Location in Article:** Section: `## 1. Density & Winter Convective Air Looping`
- **Type:** Standalone Technical Cross-Section Figure
- **Image File:** `images/rockwool-vs-fiberglass-diagram.jpg`
- **Alt Text:** `Low-Density Fiberglass Batt vs. High-Density Stone Mineral Wool in a Midwest Wall Cavity at -10°F`
- **Caption:** *Figure 1: Low-Density Fiberglass Batt vs. High-Density Stone Mineral Wool in a Midwest Wall Cavity at -10°F*
- **Visual Description:** Split cross section.
  - *Left side (Fiberglass Batt, 0.7 lb/cu.ft):* Slumping at top plate creating void gap; internal convective airflow loop circulating warm air against cold exterior OSB (30% R-value derating).
  - *Right side (High-Density Stone Wool, 2.2 lb/cu.ft):* Tight friction-fit with zero sagging; dense mineral matrix arresting convective air looping; water beading on hydrophobic surface.
