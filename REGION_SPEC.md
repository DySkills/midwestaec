# Midwest AEC — Regional Specification & Network Architecture

> **Midwest Architecture, Engineering & Construction (MidwestAEC™)**  
> *Target Region: Climate Zones 4 & 5 (IL, IN, IA, KS, MI, MN, MO, ND, NE, OH, SD, WI)*  
> *Domain: `https://midwestaec.com` | Remote: `https://github.com/DySkills/midwestaec.git`*  

---

## 1. Geographic Scope & Thermodynamic Climate Profile

- **Target States (12 States):** Illinois, Indiana, Iowa, Kansas, Michigan, Minnesota, Missouri, North Dakota, Nebraska, Ohio, South Dakota, Wisconsin.
- **IECC / ASHRAE 90.1 Climate Zones:**
  - **Zone 5A (Cold - Humid):** Dominant across Chicago, Milwaukee, Detroit, Minneapolis, Des Moines, Cleveland, Omaha. Heating Degree Days (HDD65) range from 5,400 to 7,200. Frost depth ranges from 36 inches (central IL/IN) to 60+ inches (northern MN/WI/ND).
  - **Zone 4A (Mixed - Humid):** Southern band (St. Louis, Kansas City, southern Indiana, southern Ohio). Severe winter hard freezes alternating with 90°F+ humid summers (high latent heat cooling loads).
- **Core Building Physics & Structural Challenges:**
  - **Sub-Zero Thermal Envelope Contraction:** Deep freeze cycles (-10°F to -25°F during polar vortex events) creating 150+ CFM stack-effect depressurization in multi-story balloon-frame homes.
  - **Hydrostatic Frost Heave & Clay Bowl Pressure:** High-plasticity expansive clay soils freezing against unreinforced concrete masonry unit (CMU) basement walls, causing step cracking, horizontal shear, and inward wall bowing.
  - **Eave Ice Damming:** Convective attic heat loss melting snowpack over warm rafter bays, which refreezes at unheated eaves, driving capillary water up under asphalt shingles (IRC R905 ice barrier mandate).
  - **Attic Condensation & Frost Accumulation:** Unsealed ceiling penetrations venting warm, moist interior air into cold unconditioned attics, condensing as frost on cold roof sheathing and "sweating" upon daytime thaw.
  - **Cold-Climate Heat Pump Defrost Cycles:** Winter balance point management between inverter heat pump efficiency (down to -15°F with hyper-heat vapor injection) vs 10 kW auxiliary electric resistance strip shock.

---

## 2. Dominant Regional Architectural Vernacular & Housing Archetypes

1. **Midwestern Brick Bungalow & Two-Flat (1900–1930):** Chicago, Milwaukee, St. Louis. Multi-wythe structural unreinforced brick masonry, lime-sand mortar, uninsulated perimeter cavity, crawlspace or full uninsulated basement.
2. **Balloon-Framed Two-Story Farmhouse / Urban Spec (1880–1930):** Continuous 2x4 wall studs running from sill plate to roof rafter plate, zero interior fire stops, functioning as high-velocity convective draft chimneys.
3. **Mid-Century Brick / Siding Ranch (1950–1975):** Shallow uninsulated stem-wall foundation or uninsulated slab-on-grade, vented crawlspaces with sweating fiberglass batts, low-slope gable roofs with 1.5-inch eave heel heights (zero rafter baffle clearance).
4. **Post-Frame / Barndominium Residential (2000–Present):** Embedded glulam or solid wood columns, steel diaphragm cladding, large clear-span roof trusses, requiring careful continuous vapor management and slab perimeter insulation.
5. **Modern Sub-Slab & ICF Construction (1995–Present):** Insulated Concrete Form (ICF) foundation walls, EPS/XPS sub-slab continuous insulation with Class A 15-mil vapor barriers (ASTM E1745).

---

## 3. High-Intent Contractor Verticals & PPL Lead Economics

Midwest AEC monetizes through Pay-Per-Lead (PPL) partnerships (Networx primary; Modernize & Impact.com secondary) targeting critical structural and mechanical failure points:

| Priority | Contractor Trade / Vertical | Primary Seasonal Trigger | PPL Lead Value | Primary Networx Form ID |
| :---: | :--- | :--- | :---: | :---: |
| **1** | **Basement Waterproofing & Drain Tile** | Spring thaw, clay bowl pressure, sump overflow | **$150 – $250** | `17` (Basement Waterproofing) |
| **2** | **Roofing & Ice Dam Mitigation** | Polar vortex, eave freeze-up, blown shingles | **$160 – $260** | `14` (Roofing) |
| **3** | **HVAC: Cold-Climate Heat Pumps & Furnaces** | First hard freeze, short-cycling, high gas bills | **$120 – $180** | `10` (Heating & AC) |
| **4** | **Foundation Shoring & Carbon Fiber Reinforcement** | Hydrostatic frost heave, bowed basement CMU | **$175 – $280** | `22` (Foundations) |
| **5** | **Attic Air Sealing & Insulation Dense-Packing** | Stack-effect drafts, furnace short-cycling | **$100 – $160** | `18` (Insulation) |
| **6** | **Egress Window Cutting & Concrete Sawing** | IRC R310 basement bedroom legal finishing | **$110 – $170** | `12` (Windows & Doors) |
| **7** | **Siding & Outboard Continuous Insulation (WRB)** | Freeze/thaw siding rot, wind-driven moisture | **$140 – $220** | `15` (Siding) |

---

## 4. Published Inventory

The live inventory changes often. For the current list, see Section 4 of `Refs/MIDWEST_MASTER_REFERENCE.md` or the files in `content/published/` (39 articles as of Nov 8, 2026, in 9 category folders). Staged articles are in `content/backlog/` (56 files as of Nov 8, 2026).

---

## 5. Site Rules

- **Trademark:** `MidwestAEC™` on the masthead, logo, and legal pages.
- **Standalone site:** There is no network bar and no sister properties. Never add links to Northwest, Southwest, Southeast, Northeast, or Tropical sites.
- **Monitoring:** Search Console (`sc-domain:midwestaec.com`) is checked by hand using exports or the scripts in `scripts/`. The scheduled dispatcher and its chat thread are retired.
- **Rules and workflow:** see `AGENT_BRIEFING.md`.
