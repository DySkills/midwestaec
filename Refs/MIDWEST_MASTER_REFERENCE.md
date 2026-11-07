# Midwest AEC: Master Reference & System Encyclopedia

> **Document Version:** 2.1 (November 2026)  
> **Target Audience:** Human Owners, Technical Editors, Antigravity Agents, and Subagents  
> **Live Production Domain:** [https://midwestaec.com](https://midwestaec.com)  
> **Canonical Root Workspace:** `C:\Users\Dylen\Desktop\AEC\Midwest`  
> **GitHub Repository:** [https://github.com/DySkills/midwestaec](https://github.com/DySkills/midwestaec) (Branch: `main`)  
> **Hosting & Edge Infrastructure:** Cloudflare Pages / GitHub Pages with Cloudflare Edge SSL  

---

## 1. Executive Summary & Brand Identity

### The Mission
**Midwest AEC** (Midwest Architecture, Engineering & Construction) is an independent building science and forensic construction publication engineered specifically for the extreme continental climatic stresses of the American Midwest.

### The Geographic & Climatic Footprint
* **IECC Climate Zones:** Zone 4A (Mixed-Humid, southern IL/IN/MO), Zone 5A (Cold, central Midwest/Great Lakes), and Zone 6A (Very Cold, Upper Midwest/Northern Plains).
* **Target States:** Illinois, Indiana, Iowa, Kansas, Michigan, Minnesota, Missouri, Nebraska, North Dakota, Ohio, South Dakota, Wisconsin.
* **Primary Metro Markets:** Chicago, Minneapolis-St. Paul, St. Louis, Kansas City, Indianapolis, Detroit, Cleveland, Columbus, Milwaukee, Des Moines, Omaha.
* **The Physics Reality:** The Midwest experiences greater annual temperature and humidity swings than almost any other populated region on earth: from -25 deg F polar vortexes with deep soil frost lines (42" to 60") to +95 deg F summer heat waves with 80% relative humidity and intense vapor drives. Buildings here fail from freeze-thaw cycles, capillary suction, thermal bridging, and severe inward moisture drives.

### Editorial Voice & Persona
* **The Author:** NAAB B.Arch graduate from a multigenerational Missouri builder family. Deep jobsite experience diagnosing historic drafty homes, wet basements, and modern high-performance envelopes.
* **Tone:** Authoritative, forensic building scientist and veteran jobsite superintendent.
* **Style:** Fact-first, trade-grounded, code-cited, and deeply practical. Zero academic jargon, zero filler, zero condescension.
* **Monetization Architecture:** High-intent Pay-Per-Lead (PPL) contractor dispatch (foundation repair, basement waterproofing, emergency HVAC, siding, structural framing) via Networx and Modernize targeting $100-$250 per qualified homeowner bid, plus technical tool/material affiliate partnerships. Strictly zero intrusive display ads or pop-up clutter.

---

## 2. Technical Architecture & Build Pipeline

Midwest AEC runs on a zero-framework, lightning-fast static site generator written in Node.js.

```
C:\Users\Dylen\Desktop\AEC\Midwest\
├── content/                    # Content repository
│   ├── published/              # 39 published production markdown files organized by category
│   │   ├── air-barriers/       # Air sealing, blower door diagnostics, vapor retarders
│   │   ├── efficient-systems/  # Continuous insulation, windows, sub-slab specs
│   │   ├── envelopes/          # Structural envelopes, egress, SIPs, earth building
│   │   ├── go-green/           # Embodied carbon, low-GWP insulation (rockwool, cellulose)
│   │   ├── hvac/               # Cold climate heat pumps, flue freezing, furnace short-cycling
│   │   ├── roofing/            # Attic air sealing, ice dams, cold roof conversions
│   │   ├── rural-development/  # Barndominiums, pest exclusion, off-grid power, civil grading
│   │   ├── urban-development/  # Historic brick masonry, balloon framing retrofits
│   │   └── water-barriers/     # Basements, waterproofing, ICF, sump pumps, crawlspaces
│   └── backlog/                # 6 staged seasonal backlog articles awaiting rollout
├── articles/                   # 39 compiled HTML articles + 39 AEO Markdown twins
├── scripts/                    # SEO telemetry, GSC fetchers, audit engines, and tuning tools
├── article-template.html       # Master production semantic HTML5 article layout
├── build.js                    # Core Static Site Generator (Node.js)
├── data.js                     # Auto-compiled client-side search and filtering index
├── docs-sync.json              # Two-way sync registry mapping slugs to Google Docs IDs
├── sitemap.xml                 # Search engine sitemap (45 live indexed URLs)
├── rss.xml                     # Full RSS feed for syndication & feed readers
├── llms.txt                    # Standardized AI / LLM crawler briefing & index
├── index.html                  # Homepage (featured hero, categories, recent guides)
├── browse.html                 # Complete searchable and filterable article library
└── gsc-credentials.json        # Google Search Console Service Account (GITIGNORED)
```

### The Core Build Engine (`build.js`)
* Compiles all `content/*.md` files into standalone, pre-rendered `articles/*.html` using `article-template.html`.
* Emits matching `.md` files in `articles/` for Answer Engine Optimization (AEO) and agent retrieval.
* Generates structured data schema blocks: Schema.org `Article`, `TechArticle`, `FAQPage`, and `HowTo` JSON-LD.
* Re-indexes and exports `data.js` for instant browser-side searching and category filtering on `browse.html`.
* Generates dynamic `sitemap.xml` with actual file modification timestamps (`<lastmod>`).
* Regenerates `rss.xml` and `llms.txt`.

### Strict Operational Rules
1. **1:1:1:1 Count Parity:** Every file in `content/published/**/*.md` (currently 39) must have an exact 1:1 compiled match in `articles/*.html`, a record in `data.js`, and an entry in `sitemap.xml`.
2. **Zero Phantom Networks:** A prior layout had placeholder links to non-existent regional sister sites (Northwest, Southwest, Southeast, Northeast, Tropical). These were completely eradicated across all 48 files. **Never re-add or inject any phantom network bars or fake regional links.**
3. **Build Before Commit:** Always run `node build.js` after modifying or adding markdown content.

---

## 3. Strict Editorial & Style Standards

All copy on Midwest AEC must satisfy these non-negotiable criteria:

### 1. The Zero Em-Dash Rule
* **Never use em-dashes in body text or headings.**
* Use hyphens (-), commas, or parentheses instead. A site-wide purge was executed across all 39 articles to ensure 0 em-dashes exist on the site.

### 2. No Formulaic Bullet Prefixes
* **Do not use** `- **The [Noun]:**` or `- **[Verb] the [Noun]:**` bullet structures.
* Integrate takeaways into natural, high-density trade sentences.

### 3. Banned AI Vocabulary
Strictly avoid academic/dramatic AI cliches:
* X *Furthermore*, *Moreover*, *Delve*, *Tapestry*, *Testament*, *Paramount*
* X *Catastrophic hydrostatic wedge*, *Psychrometric trap*, *Suffocating on latent moisture*, *Sump Pit Paradox*
* OK Use real jobsite terms: *head pressure*, *capillary rise*, *frost heave*, *backdrafting*, *weeping tile*, *Delta-MS dimple mat*, *R-value degradation*, *vapor permeance (perms)*, *thermal bridging*.

### 4. Code & Technical Standards
Every guide must cite real, enforceable residential codes with specific numerical dimensions:
* **IRC Section R405 / R406:** Foundation drainage, gravel bed sizing, damp-proofing vs full elastomeric waterproofing.
* **IRC Section R310:** Egress window net clear openings (minimum 5.7 sq ft, maximum 44" sill height).
* **IRC Section R502 / R602:** Wood floor and wall framing, joist cutting/notching, LVL sizing, bearing requirements.
* **IRC Section R806:** Roof and attic ventilation (1:150 or 1:300 rule with balanced ridge/soffit ratios).
* **NFPA 54 / ANSI Z223.1 / CSA B149.1:** Fuel Gas Code, Category IV venting, 1/4" per foot slope back to furnace, sidewall clearances.
* **ASHRAE 62.2 & 90.1 / IECC:** Mechanical ventilation, air changes per hour (ACH50), continuous insulation R-values.

### 5. In-Body Contextual Internal Linking (Reasonable Surfer Model)
* Google's Reasonable Surfer Model heavily discounts links tucked away in "Related Articles" boxes at the bottom of pages.
* High-priority internal links **must be woven directly into the editorial narrative paragraphs**.
* Currently, **104+ in-body contextual links** are active across the 39 articles.
* Special emphasis is placed on linking to the ICF hub (`icf-basements-walls.html`) to maintain Page 1 search ranking momentum for queries like `"icf basement"`.

---

## 4. Complete Published Article Inventory (39 Live Specifications)

| # | Slug | Category | Format | Primary Architectural / Building Science Focus |
|---|---|---|---|---|
| 1 | `attic-air-sealing-baffles` | Envelope | Tutorial | Rafter baffles, top plate foam sealing, soffit intake airflow |
| 2 | `attic-frost-roof-sweating` | Envelope | Report | Cold-roof condensation, stack effect exfiltration, winter attic frost |
| 3 | `balloon-framing-retrofit-steps` | Historic | Tutorial | Continuous stud cavity fireblocking, mineral wool, dense-pack cellulose |
| 4 | `balloon-framing` | Historic | Report | Convective draft chimneys in 1880-1930s homes, structural firestops |
| 5 | `barndominium-post-frame` | Materials | Feature | Thermal breaks, girt framing, condensation control in steel post-frame |
| 6 | `basement-egress-window-cutting` | Basements | Tutorial | IRC R310 code compliance, diamond track sawing, gravel well drainage |
| 7 | `basement-lvp-flooring-moisture` | Basements | Report | Concrete vapor emission rates, 6-mil poly, dimple underlayments |
| 8 | `basement-waterproofing` | Basements | Report | Interior drain tile vs exterior excavation, hydrostatic pressure relief |
| 9 | `blower-door-checklist` | Diagnostics | Tutorial | Prep checklist, depressurization testing, CFM50 and ACH50 math |
| 10 | `bug-prevention` | Envelope | Listicle | Rainscreen insect screens, weep hole baffles, pest entry sealing |
| 11 | `cold-climate-heat-pumps` | HVAC | Report | Low-ambient inverter compressors, COP curves at -15 deg F, backup heat |
| 12 | `cold-climate-septic-well-freeze-solutions` | Plumbing | Report | Frost line penetration (48"), snow cover insulation, line heating |
| 13 | `continuous-insulation` | Envelope | Feature | Thermal bridging, exterior rigid foam (polyiso/EPS), rainscreen furring |
| 14 | `crawlspace-encapsulation-steps` | Basements | Tutorial | 20-mil vapor barrier, sealed rim joists, dedicated dehumidifier staging |
| 15 | `crawlspace-encapsulation` | Basements | Report | Dirt crawlspace stack effect, radon/mold migration, closed crawlspaces |
| 16 | `does-house-need-to-breathe` | Envelope | Feature | The "house needs to breathe" myth vs controlled mechanical ventilation |
| 17 | `embodied-carbon-materials` | Materials | Report | Upfront embodied carbon: cellulose vs fiberglass vs spray foam |
| 18 | `energy-hikes` | HVAC | Feature | Grid rate spikes, heat pump COP economics vs natural gas heating |
| 19 | `expansive-lawncare` | Site/Civil | Feature | Soil compaction, surface swales, directing runoff away from foundation |
| 20 | `false-spring-envelope-thaw` | Envelope | Report | Rapid February/March freeze-thaw cycles, exterior brick mortar spalling |
| 21 | `furnace-vent-pipe-freeze-lockout` | HVAC | Report | 90%+ AFUE Category IV PVC flue icing, condensate traps, pressure switches |
| 22 | `heat-pump-aux-heat-lockout-balance-point` | HVAC | Report | Dual-fuel staging, economic balance point vs thermal balance point |
| 23 | `historic-brick-retrofit-steps` | Historic | Tutorial | Low-perm mortar compatibility, NHL 3.5 lime repointing, interior dew point |
| 24 | `how-to-know-if-you-need-icf-basement` | Basements | Feature | High water table diagnosis, clay soils, poured concrete comparison |
| 25 | `ice-dams-roofs` | Envelope | Report | Eave ice dam formation, attic heat bypasses, thermal air boundary fixes |
| 26 | `icf-basements-walls` | Basements | Report | Continuous EPS insulation, monolithic core, eliminating cold damp basements |
| 27 | `insulating-brick` | Historic | Report | WUFI hygrothermal modeling, masonry freeze-thaw spalling, vapor barriers |
| 28 | `load-bearing-wall-removal-lvl` | Structural | Report | Tributary load calculation, LVL beam sizing, temporary shoring, footings |
| 29 | `off-grid-systems` | Systems | Feature | Battery storage, solar PV arrays, winter capacity sizing in Zone 5 |
| 30 | `rammed-earth-midwest-flooring` | Materials | Feature | Thermal mass, sub-slab insulation, embodied energy in earthen floors |
| 31 | `rockwool-vs-fiberglass` | Materials | Feature | Mineral wool vs fiberglass: fire resistance, sound dampening, moisture |
| 32 | `roof-insulation-over-sheathing` | Envelope | Tutorial | Unvented conditioned attics, exterior rigid polyiso, interior condensation |
| 33 | `sips-vs-traditional-framing` | Materials | Feature | Structural Insulated Panels vs 2x6 stick framing: labor, thermal envelope |
| 34 | `smart-vapor-retarders` | Envelope | Report | Variable-permeance membranes (Intello/Membrain), inward drying dynamics |
| 35 | `sub-slab-insulation-specs` | Basements | Report | R-10 continuous sub-slab XPS/EPS, thermal breaks, radon poly integration |
| 36 | `summer-humidity-ac` | HVAC | Report | Oversized AC short-cycling, latent vs sensible loads, whole-home dehumidifiers |
| 37 | `sump-pump-failure-spring-thaw-backups` | Basements | Report | Frozen exterior discharge lines, dual-pump staging, battery backup inverters |
| 38 | `when-to-replace-windows` | Windows | Feature | Air infiltration vs glass U-factor, historic wood storm sash restoration |
| 39 | `window-alternatives` | Windows | Listicle | Interior acrylic inserts, cellular shades, low-e storm window attachments |

---

## 5. Staged Backlog Pipeline (17 Production-Ready Articles)

These 17 articles are 100% authored, fully formatted, audited for 0 em-dashes and 0 bullet prefixes, and staged in `content/backlog/` for scheduled deployment:

1. **`siding-comparison-hardie-lpsmartside-vinyl.md`** (Target: Nov 9)
   * Fiber cement vs engineered wood strand vs vinyl cladding in freeze-thaw and hail climates.
   * Networx PPL Category: Siding Installation & Replacement ($120-$180).
2. **`emergency-window-repair-seal-failure.md`** (Target: Nov 16)
   * Insulated glass unit (IGU) desiccant saturation, fogging, and thermal seal restoration.
   * Networx PPL Category: Window Replacement & Glass Restoration ($100-$160).
3. **`foundation-freeze-thaw-crack-repair.md`** (Target: Nov 19)
   * Frost heave lateral soil pressure, carbon fiber strap reinforcement, and epoxy injection.
   * Networx PPL Category: Structural Foundation Repair & Basement Waterproofing ($150-$250).
4. **`roof-heat-tape-deicing-cables.md`** (Target: Nov 30)
   * Electrical operating costs of zig-zag de-icing cables vs long-term cold-roof air sealing payback.
   * Networx PPL Category: Roofing & Attic Insulation Contractors ($140-$200).
5. **`emergency-ice-dam-steaming-vs-roof-hacking.md`** (Target: Dec 7)
   * Low-pressure commercial steaming physics vs mechanical hammer and hatchet damage to cold shingles.
   * Networx PPL Category: Emergency Roofing & Ice Dam Removal ($180-$250).
6. **`basement-wall-leak-crack-injection.md`** (Target: Dec 21)
   * Hydrophobic polyurethane expansion foam vs ASTM C881 structural epoxy for weeping foundation cracks.
   * Networx PPL Category: Concrete Foundation Repair & Basement Waterproofing ($120-$180).
7. **`historic-brick-chimney-acid-condensation.md`** (Week 10 | Target: Mar 8)
   * High-efficiency flue acid condensation, NFPA 211 stainless steel relining, and overhanging concrete crowns.
   * Networx PPL Category: Chimney Repair & Historic Masonry Pros ($120-$200).
8. **`kneewall-attic-air-sealing-insulation.md`** (Week 11 | Target: Mar 15)
   * 1.5-story Cape Cod kneewall air-sealing, floor joist cavity blocking, and R-60 cold-roof conversions.
   * Networx PPL Category: Attic Insulation & Air Sealing Pros ($120-$180).
9. **`dual-sump-pump-battery-backup-staging.md`** (Week 16 | Target: Apr 19)
   * Dual sump pump staging, primary vs secondary float switch differentials, and LiFePO4 battery inverters.
   * Networx PPL Category: Basement Waterproofing & Emergency Plumbers ($120-$180).
10. **`foundation-grading-french-drain-slope.md`** (Week 17 | Target: Apr 26)
    * IRC R401.3 5% slope corrections, parabolic swale geometries, and geotextile French drain trench details.
    * Networx PPL Category: Drainage & Landscape Civil Contractors ($100-$160).
11. **`rotted-sill-plate-replacement-jacking.md`** (Week 22 | Target: May 31)
    * Capillary moisture wicking, 20-ton temporary hydraulic jacking, and UC4A treated sill plate replacement.
    * Networx PPL Category: Structural Framing & House Leveling Contractors ($150-$250).
12. **`flat-roof-drainage-epdm-tpo.md`** (Week 24 | Target: Jun 14)
    * Residential low-slope roofs, EPDM vs TPO membranes, 48-hour ponding thresholds, and tapered crickets.
    * Networx PPL Category: Flat Roofing Contractors & Metal Roofers ($140-$200).
13. **`unvented-attic-spray-foam-roof-deck.md`** (Week 30 | Target: Jul 26)
    * Open-cell vs closed-cell spray foam on roof decks under IRC R806.5, vapor retarders, and shingle heat.
    * Networx PPL Category: Spray Foam & Attic Envelope Pros ($140-$200).
14. **`erv-vs-hrv-cold-climate-ventilation.md`** (Week 32 | Target: Aug 9)
    * Enthalpy latent moisture rejection, ASHRAE 62.2 sizing, and sub-zero winter defrost cycling.
    * Networx PPL Category: Mechanical Ventilation & HVAC Specialists ($120-$180).
15. **`standing-seam-metal-roof-cold-climates.md`** (Week 33 | Target: Aug 16)
    * 24-gauge Galvalume steel, concealed floating expansion clips, UL 2218 Class 4 hail, and high-temp underlayment.
    * Networx PPL Category: Architectural Standing Seam Metal Roofers ($150-$250).
16. **`rim-joist-air-sealing-spray-foam.md`** (Week 41 | Target: Oct 11)
    * Inward stack effect depressurization, closed-cell spray foam vs cut-and-cobble XPS, and IRC R316 fire codes.
    * Networx PPL Category: Basement Weatherization & Air-Sealing Pros ($100-$160).
17. **`furnace-short-cycling-flame-sensor.md`** (Week 51 | Target: Dec 20)
    * Flame rectification microamps DC, flame sensor silica cleaning with 0000 steel wool, and limit switch ESP drops.
    * Networx PPL Category: Emergency Furnace Repair & HVAC Dispatch ($120-$180).

---

## 6. 104-Article Annual Editorial Publishing Calendar (Bi-Weekly Production Architecture)

Midwest AEC operates on a high-velocity, 104-article annual publishing architecture (2 specifications per week over 52 weeks) engineered specifically around the extreme continental climatic stresses of Climate Zones 4A, 5A, and 6A.

### The Bi-Weekly Publishing Cadence
* **Tuesday (Track A - Specification Teardown):** Deep architectural and building science forensic analyses. Focuses on hygrothermal modeling, failure mechanics, code compliance, and structural load calculations.
* **Friday (Track B - Field Diagnostic & SOP):** Hands-on contractor dispatch and homeowner field diagnostic guides. Focuses on emergency troubleshooting trees, electrical/mechanical diagnostics, localized material costs, and immediate contractor referral hooks.

```
  104-ARTICLE ANNUAL EDITORIAL ARCHITECTURE (CLIMATE ZONES 4A, 5A & 6A)
 
  QUARTER 1 (WEEKS 01-13 | 26 ARTICLES): Polar Vortex, Deep Soil Frost Line & Combustion Failures
  QUARTER 2 (WEEKS 14-26 | 26 ARTICLES): Spring Hydrostatic Deluge, Soil Surcharge & Sump Pit Redundancy
  QUARTER 3 (WEEKS 27-39 | 26 ARTICLES): Inward Vapor Drives, Dew-Point Traps & Latent HVAC Loads
  QUARTER 4 (WEEKS 40-52 | 26 ARTICLES): Autumn Weatherization, Blower Door Air Sealing & Heating Prep
```

### Current Inventory & Production Status
* **39 Specifications Live (Published):** Compiled into \'articles/*.html\' and indexed across \'data.js\' and \'sitemap.xml\'.
* **17 Specifications Staged (Backlog):** 100% written, formatted with zero em-dashes, and ready for deployment in \'content/backlog/\'.
* **48 Specifications Queued (Roadmap):** Detailed below with target search queries, enforceable building codes, and Networx PPL categories ($100-$250/lead).

---

### The Master 104-Article Annual Specification Matrix

| # | Wk / Day | Slug | Status | Topic & Title | Documented Search Queries (Past 12 Mo) | Building Code | Networx Lead Vertical ($100-$250) |
|---|---|---|---|---|---|---|---|
| **001** | W01 Tue | `furnace-vent-pipe-freeze-lockout` | Live | Category IV Furnace Flue Freezing & Pressure Switch Lockouts | `furnace pressure switch stuck open cold`, `high efficiency furnace exhaust icing up` | NFPA 54 / ANSI Z223.1 | Emergency HVAC Repair ($140-$220) |
| **002** | W01 Fri | `emergency-ice-dam-steaming-vs-roof-hacking` | Backlog | Emergency Ice Dam Steaming vs Mechanical Shingle Hacking | `emergency ice dam steaming cost`, `remove ice dam without damaging roof` | IRC R905 / ASTM D3462 | Emergency Roofing & Steaming ($180-$250) |
| **003** | W02 Tue | `cold-climate-septic-well-freeze-solutions` | Live | Rural Well Head & Septic Line Freeze Diagnostics | `frozen well pump pressure switch`, `how to thaw frozen septic line` | IPC Ch 3 / IRC P2603.5 | Well Systems & Emergency Plumbing ($150-$220) |
| **004** | W02 Fri | `submersible-well-pump-freeze-failure` | Queued | Submersible Well Pump & Pressure Tank Freeze Failures | `well pump clicking on and off rapidly`, `well pressure tank waterlogged cold` | IPC Ch 6 / NEMA 3R | Well System Repair ($150-$220) |
| **005** | W03 Tue | `heat-pump-aux-heat-lockout-balance-point` | Live | Dual-Fuel Heat Pump Economic Balance Point Calculations | `what temperature should heat pump switch to gas`, `aux heat running constantly` | ASHRAE 90.1 / IECC R403 | Heat Pump & Hybrid HVAC ($120-$180) |
| **006** | W03 Fri | `mini-split-defrost-pan-heater-freezing` | Queued | Ductless Mini-Split Defrost Cycles & Base Pan Heaters in Sub-Zero Climates | `mini split freezing up in winter`, `base pan heater cold climate heat pump` | AHRI 210/240 / NEEP | Mini-Split HVAC Specialists ($140-$220) |
| **007** | W04 Tue | `attic-frost-roof-sweating` | Live | Attic Rain Triage: Moisture Melting on Sheathing | `water dripping from bathroom fan in winter`, `attic rain causes how to fix` | IRC R806 / BPI-1100-T | Attic Air Sealing & Insulation ($120-$180) |
| **008** | W04 Fri | `bathroom-exhaust-fan-attic-condensation` | Queued | Bathroom Fan Duct Condensation: Insulated Metal Flues vs Drooping Vinyl | `water dripping from bathroom exhaust fan`, `bathroom fan venting through soffit mold` | IRC M1505.4 / IMC 504 | Attic Ventilation & Duct Pros ($100-$150) |
| **009** | W05 Tue | `emergency-window-repair-seal-failure` | Backlog | Sub-Zero Window Drafts: IGU Seal Failure & Storm Sashes | `fog between window panes cold weather`, `broken seal on double pane window` | NFRC 100 / ASTM E283 | Window Replacement & Glass Repair ($100-$160) |
| **010** | W05 Fri | `interior-window-condensation-winter` | Queued | Interior Window Condensation: Dew Point, U-Factor, and CRF Ratings | `condensation on inside of windows winter`, `how to stop window sweating cold` | NFRC 500 / AAMA 1503 | Window & Humidity Specialists ($100-$150) |
| **011** | W06 Tue | `foundation-freeze-thaw-crack-repair` | Backlog | Hydrostatic Frost Heave & Bowed Walls: Carbon Fiber vs I-Beams | `horizontal crack in basement wall frost heave`, `carbon fiber straps vs steel beams` | ACI 506.2 / TMS 402/602 | Structural Foundation Repair ($150-$250) |
| **012** | W06 Fri | `adfreeze-heave-masonry-shear` | Queued | Frost Adfreeze Shear Stress: How Saturated Topsoil Lifts Brick Foundations | `clay soil foundation freeze thaw`, `lateral frost heave pressure basement` | CRREL Frost Guide / ACI 332 | Foundation Underpinning Pros ($150-$250) |
| **013** | W07 Tue | `roof-heat-tape-deicing-cables` | Backlog | Roof Heat Tape & De-Icing Cables: Electrical Amps & GFPE Trips | `roof heat tape electric bill cost`, `self regulating heat cable vs constant wattage` | NEC 426 / IRC R806 | Roofing & Attic Insulation Pros ($140-$200) |
| **014** | W07 Fri | `roof-valley-snow-guards-avalanche` | Queued | Metal Roof Snow Guards and Valley Ice: Preventing Gutter Avalanche Damage | `snow guards for metal roof cost`, `snow sliding off metal roof damaging gutters` | SMACNA / IRC R905 | Architectural Sheet Metal Pros ($140-$200) |
| **015** | W08 Tue | `sump-pump-failure-spring-thaw-backups` | Live | Frozen Sump Discharge Lines: Check Valves & Bubbler Relief | `frozen sump pump discharge pipe fix`, `sump pump running constantly winter` | IRC P3303 / IPC 1101 | Basement Waterproofing & Plumbers ($120-$180) |
| **016** | W08 Fri | `sump-pump-freeze-relief-iceguard` | Queued | Sump Pump Discharge Freezing: Freeze Relief Valves & Pop-Up Emitters | `iceguard sump pump discharge`, `freeze relief valve for sump line` | IPC Section 1101 / IRC P3303 | Basement Waterproofing ($120-$180) |
| **017** | W09 Tue | `historic-brick-chimney-acid-condensation` | Backlog | Historic Chimney Deterioration: Flue Acid & Spalling Crowns | `brick chimney crumbling outside`, `flue liner condensation high efficiency furnace` | NFPA 211 / IRC R1003 | Chimney & Historic Masonry Pros ($120-$200) |
| **018** | W09 Fri | `tankless-water-heater-freeze-protection` | Queued | Tankless Water Heater Freezing: Concentric Intake Venting & Flow Drops | `tankless water heater freeze damage`, `tankless water heater cold climate performance` | CSA 4.3 / ANSI Z21.10.3 | Plumbers & Water Heater Pros ($120-$180) |
| **019** | W10 Tue | `kneewall-attic-air-sealing-insulation` | Backlog | R-60 Cold Roof Conversions: Cape Cod Kneewalls & Drop Soffits | `how to insulate cape cod kneewall`, `ice dams on 1.5 story house` | 2024 IECC Table R402 | Insulation & Air Sealing Pros ($120-$180) |
| **020** | W10 Fri | `garage-ceiling-bonus-room-insulation` | Queued | Freezing Rooms Over Garages: Air-Sealing Joist Bays and R-38 Continuous Foam | `insulating garage ceiling bonus room`, `room over garage cold floor` | 2024 IECC Section R402 | Insulation & Air Sealing ($120-$180) |
| **021** | W11 Tue | `boiler-cast-iron-radiator-air-bleeding` | Queued | Hydronic Boiler Heating: Bleeding Radiators & Waterlogged Expansion Tanks | `radiator not getting hot at top`, `boiler pressure too high winter` | ASME Section IV / IMC Ch 10 | Boiler & Hydronic Heating Pros ($140-$220) |
| **022** | W11 Fri | `standby-generator-cold-weather-sizing` | Queued | Standby Generators in Winter: Cold-Weather Kits and Inverter Sizing | `standby generator sizing for heat pump`, `generator cold weather battery heater` | NFPA 70 / NFPA 37 | Electricians & Generator Pros ($150-$250) |
| **023** | W12 Tue | `load-bearing-wall-removal-lvl` | Live | Load-Bearing Wall Removal: Sizing LVL Drop Beams & Shoring | `how to tell if wall is load bearing`, `LVL beam size for 16 foot span` | IRC R502 / ASTM D5456 | Structural Engineers & Framing Pros ($150-$250) |
| **024** | W12 Fri | `basement-carrying-beam-lally-columns` | Queued | Sagging Center Beams: Sizing Steel Lally Columns and Footing Spread Pads | `sagging floor basement beam repair`, `lally column installation cost` | IRC Section R407 / ACI 318 | Structural Foundation Repair ($150-$250) |
| **025** | W13 Tue | `basement-egress-window-cutting` | Live | Basement Egress Cutting: IRC R310 Diamond Sawing & Wells | `egress window cost poured concrete wall`, `IRC R310 egress window dimensions` | IRC R310 / IRC R405 | Concrete Cutting & Egress Specialists ($140-$200) |
| **026** | W13 Fri | `egress-window-well-drainage-covers` | Queued | Egress Window Well Flooding: Gravel Drainage Beds & Polycarbonate Covers | `window well filling with water`, `egress window well drain clogged` | IRC Section R310.2.3 | Waterproofing & Window Pros ($120-$180) |
| **027** | W14 Tue | `basement-waterproofing` | Live | The Clay Bowl Effect: Why Modern Poured Foundations Leak | `clay bowl effect foundation`, `hydrostatic pressure basement wall crack` | IRC R405.1 / IRC R406.2 | Waterproofing & Drainage Contractors ($150-$250) |
| **028** | W14 Fri | `exterior-dimple-mat-delta-ms` | Queued | Exterior Foundation Waterproofing: Delta-MS Dimple Mats vs Dampproofing | `delta ms membrane installation detail`, `dimple board for foundation` | IRC R406.1 / CCMC 12778-R | Foundation Waterproofing Pros ($150-$250) |
| **029** | W15 Tue | `basement-wall-leak-crack-injection` | Backlog | Foundation Crack Injections: Polyurethane vs ASTM C881 Epoxy | `epoxy vs polyurethane foundation crack`, `repair leaking concrete basement crack` | ASTM C881 / ACI 503R | Concrete Repair & Waterproofing ($120-$180) |
| **030** | W15 Fri | `carbon-fiber-straps-bowing-walls` | Queued | Bowed Basement Walls: Carbon Fiber Straps vs Steel I-Beam Soldiers | `carbon fiber foundation repair cost`, `bowing basement wall repair` | ACI 440.2R / ICC-ES AC125 | Structural Foundation Repair ($150-$250) |
| **031** | W16 Tue | `dual-sump-pump-battery-backup-staging` | Backlog | Dual Sump Pump Staging: Primary vs Backup Float Switches | `best battery backup sump pump system`, `how to stage dual sump pumps in pit` | IRC P3303 / NFPA 70 | Waterproofing & Plumbers ($120-$180) |
| **032** | W16 Fri | `sewer-backwater-valve-installation` | Queued | Municipal Sewer Backups: Installing Normally Open Backwater Valves | `sewer backwater valve cost`, `city sewer backing up into basement` | IRC Section P3008 / CSA B181 | Licensed Master Plumbers ($140-$220) |
| **033** | W17 Tue | `foundation-grading-french-drain-slope` | Backlog | Foundation Grading & French Drains: The 5% Slope Rule | `proper grading away from foundation slope`, `french drain vs curtain drain yard` | IRC R401.3 | Drainage & Landscape Civil Pros ($100-$160) |
| **034** | W17 Fri | `catch-basin-downspout-underground-pvc` | Queued | Burying Gutter Downspouts: Smooth-Wall SDR-35 PVC vs Corrugated Black Pipe | `burying downspouts away from house cost`, `sdr 35 vs corrugated downspout` | ASTM D2729 / ASTM D3034 | Landscape Drainage Contractors ($100-$160) |
| **035** | W18 Tue | `basement-lvp-flooring-moisture` | Live | LVP Flooring Failures in Basements: Vapor Emissions & Mats | `moisture under lvp on concrete basement`, `white powder under basement vinyl plank` | ASTM F1869 / ASTM F2170 | Flooring & Moisture Mitigation Match ($100-$150) |
| **036** | W18 Fri | `concrete-moisture-testing-calcium-chloride` | Queued | Concrete Slab Moisture Testing: ASTM F1869 Calcium Chloride vs In-Situ RH | `calcium chloride vapor emissions test`, `concrete slab relative humidity test` | ASTM F1869 / ASTM F2170 | Commercial Flooring Inspectors ($120-$180) |
| **037** | W19 Tue | `siding-comparison-hardie-lpsmartside-vinyl` | Backlog | Fiber Cement vs LP SmartSide: Hail & Freeze-Thaw Durability | `hardie vs lp smartside hail damage`, `siding cost per square foot midwest` | ASTM C1186 / ASTM D3679 | Siding & Exterior Envelope Pros ($120-$180) |
| **038** | W19 Fri | `vinyl-siding-freeze-thaw-buckling` | Queued | Vinyl Siding Failure in Hail & Freeze-Thaw: Thermal Expansion Nailing | `vinyl siding buckling waves in cold`, `hail cracked vinyl siding insurance` | ASTM D3679 / IRC R703.11 | Siding Contractors ($120-$180) |
| **039** | W20 Tue | `historic-brick-retrofit-steps` | Live | Repointing Historic Brick: Lime Mortar NHL 3.5 vs Portland | `type n vs type o mortar historic brick`, `portland cement cracked historic brick` | ASTM C270 / ASTM C1324 | Historic Masonry & Tuckpointing ($140-$220) |
| **040** | W20 Fri | `tuckpointing-lime-mortar-nhl` | Queued | Tuckpointing Historic Brick: Why Type S Mortar Destroys 19th Century Masonry | `tuckpointing cost per square foot brick house`, `natural hydraulic lime mortar NHL 3.5` | ASTM C270 / BIA Tech Note 20 | Historic Masonry Pros ($140-$220) |
| **041** | W21 Tue | `icf-basements-walls` | Live | Insulated Concrete Forms (ICF) Basements: Eliminating Leaks | `icf basement vs poured concrete cost`, `icf foundation waterproof membrane` | IRC R404.1.2 / ACI 318 | ICF & Foundation Builders ($150-$250) |
| **042** | W21 Fri | `how-to-know-if-you-need-icf-basement` | Live | High Water Table Diagnosis & Expansive Clay ICF Engineering | `high water table basement building`, `clay soil foundation types` | IRC Section R404 / ACI 332 | ICF & Concrete Contractors ($150-$250) |
| **043** | W22 Tue | `rotted-sill-plate-replacement-jacking` | Backlog | Rotted Mud Sills & Rim Joists: House Jacking & Sistering | `how to replace rotted mud sill plate`, `cost to fix rotted rim joist` | IRC R317 / IRC R502.6 | Framing & House Leveling Contractors ($150-$250) |
| **044** | W22 Fri | `termite-damage-sill-plate-inspection` | Queued | Subterranean Termites vs Carpenter Ants: Structural Wood Decay Identification | `termites in sill plate foundation`, `carpenter ants in wet rim joist` | IRC Section R318 / NPMA | Pest Control & Framing Pros ($120-$180) |
| **045** | W23 Tue | `crawlspace-encapsulation-steps` | Live | Crawlspace Encapsulation Pricing: 20-Mil Poly & Wall Foam | `crawl space encapsulation cost breakdown`, `20 mil vs 10 mil vapor barrier` | IRC R408.3 | Crawlspace Encapsulation Pros ($120-$180) |
| **046** | W23 Fri | `crawlspace-radon-mitigation-sub-membrane` | Queued | Radon in Crawlspaces: Sub-Membrane Depressurization & Active Suction Lids | `radon mitigation system in dirt crawl space`, `sub membrane depressurization cost` | EPA 402-R-93-078 / ASTM E2121 | Certified Radon Contractors ($140-$220) |
| **047** | W24 Tue | `flat-roof-drainage-epdm-tpo` | Backlog | Flat Roof Drainage on Midwest Additions: EPDM vs TPO Scuppers | `tpo vs epdm flat roof cost residential`, `standing water on flat roof residential` | IRC R905.12 / IBC Ch 15 | Flat Roofing Contractors ($140-$200) |
| **048** | W24 Fri | `tapered-polyiso-roof-crickets` | Queued | Eliminating Ponding Water: Designing Tapered Polyiso Crickets & Scupper Boxes | `tapered polyiso insulation flat roof`, `roof cricket installation low slope` | NRCA Manual / IBC Chapter 15 | Commercial & Flat Roofers ($140-$200) |
| **049** | W25 Tue | `balloon-framing-retrofit-steps` | Live | Balloon Framing Retrofits: Stud Cavity Firestops & Insulation | `how to identify balloon framing in old house`, `balloon framing firestop retrofit` | IRC R302.11 / NFPA 101 | Historic Framing & Firestopping ($120-$180) |
| **050** | W25 Fri | `balloon-framing` | Live | Balloon Framing Autopsy: 1880-1930s Convective Draft Chimneys | `balloon frame fire hazard old home`, `dense pack cellulose balloon frame` | IRC R302.11 / NFPA 101 | Historic Renovation Pros ($120-$180) |
| **051** | W26 Tue | `sips-vs-traditional-framing` | Live | Structural Insulated Panels (SIPs) in Zone 5: Total Payback | `sips panels vs stick built cost breakdown`, `structural insulated panels zone 5` | IRC R610 / APA PRS 610 | High-Performance Envelope Builders ($150-$250) |
| **052** | W26 Fri | `polyjacking-vs-mudjacking-sunken-concrete` | Queued | Sunken Concrete Slabs: Polyurethane Polyjacking vs Mudjacking for Settled Walkways | `polyjacking vs mudjacking cost`, `driveway slab sinking near foundation` | ASTM D2842 / ACI 546R | Concrete Leveling Contractors ($100-$160) |
| **053** | W27 Tue | `summer-humidity-ac` | Live | AC Short Cycling & 65% Humidity: Manual J vs Dehumidifiers | `air conditioner short cycling high humidity`, `ac runs for 5 minutes then shuts off` | ACCA Manual J / ASHRAE 62.2 | HVAC & Dehumidification Pros ($120-$180) |
| **054** | W27 Fri | `whole-house-dehumidifier-installation` | Queued | Dedicated Whole-Home Dehumidifiers: Aprilaire vs Santa Fe Ducted Systems | `whole house dehumidifier installation cost`, `basement dehumidifier runs constantly` | ASHRAE Standard 62.2 / AHAM | HVAC & IAQ Contractors ($120-$180) |
| **055** | W28 Tue | `smart-vapor-retarders` | Live | Inward Summer Vapor Drives: Polyethylene Wall Cavity Rot | `plastic vapor barrier mold behind drywall`, `inward vapor drive brick wall summer` | IRC R702.7 / ASTM E96 | Insulation & Envelope Pros ($120-$180) |
| **056** | W28 Fri | `polyethylene-vapor-barrier-wall-rot` | Queued | The Class I Vapor Barrier Trap: Why Interior 6-Mil Poly Causes Wall Cavity Rot | `should I use 6 mil poly in zone 5 walls`, `mold behind plastic vapor barrier` | IRC Section R702.7 | Building Envelope Specialists ($120-$180) |
| **057** | W29 Tue | `crawlspace-encapsulation` | Live | Why Vented Crawlspaces Rot in July: Condensation Dynamics | `sweating pipes in crawl space summer`, `wet insulation in crawl space floor` | IRC R408.3 | Crawlspace & Moisture Pros ($120-$180) |
| **058** | W29 Fri | `crawlspace-mold-remediation-soda-blasting` | Queued | Crawlspace Mold Remediation: Sodium Bicarbonate Blasting vs Antimicrobial Fogging | `crawl space mold remediation cost`, `white mold on floor joists` | IICRC S520 / EPA Mold Guide | Certified Mold Remediation ($140-$220) |
| **059** | W30 Tue | `unvented-attic-spray-foam-roof-deck` | Backlog | Unvented Attics: Open-Cell vs Closed-Cell Spray Foam Decking | `spray foam roof deck rot shingles`, `open cell vs closed cell spray foam attic` | IRC R806.5 | Spray Foam Insulation Pros ($140-$200) |
| **060** | W30 Fri | `spray-foam-roof-deck-ignition-barriers` | Queued | Spray Foam Fire Codes: Thermal Barriers (1/2" Gypsum) vs DC315 Intumescent Paint | `spray foam ignition barrier requirements`, `intumescent paint spray foam attic` | IRC Section R316.4 / NFPA 286 | Fireproofing & Spray Foam Pros ($120-$180) |
| **061** | W31 Tue | `continuous-insulation` | Live | Continuous Exterior Insulation: Polyiso vs Rockwool Furring | `continuous exterior insulation zone 5`, `rockwool comfortboard vs polyiso` | 2024 IECC R402 / ASTM C578 | Siding & Exterior Insulation ($120-$180) |
| **062** | W31 Fri | `exterior-rainscreen-furring-strips` | Queued | Rainscreen Siding Details: Coroplast vs Wood Furring Strips for Cavity Drainage | `rainscreen siding installation details`, `furring strips over rigid foam` | IRC Section R703.1.1 | Siding & Envelope Installers ($120-$180) |
| **063** | W32 Tue | `erv-vs-hrv-cold-climate-ventilation` | Backlog | ERV vs HRV in Zone 5/6: Latent Humidity Transfer Realities | `erv vs hrv midwest climate zone 5`, `energy recovery ventilator cost` | ASHRAE 62.2 / IRC M1505 | Mechanical Ventilation Pros ($120-$180) |
| **064** | W32 Fri | `ashrae-62-2-ventilation-sizing-calculator` | Queued | ASHRAE 62.2 Compliance: Continuous vs Intermittent Ventilation CFM Calculations | `ashrae 62.2 mechanical ventilation calculator`, `fresh air ventilation tight house` | ASHRAE Standard 62.2 | Energy Auditors & IAQ Pros ($100-$160) |
| **065** | W33 Tue | `standing-seam-metal-roof-cold-climates` | Backlog | Standing Seam Metal Roofs: Hail Resistance & Condensation | `standing seam metal roof cost residential`, `metal roof sweating on underside` | UL 2218 / IRC R905.10 | Metal Roofing Specialists ($150-$250) |
| **066** | W33 Fri | `metal-roof-sweating-night-sky-radiation` | Queued | Underside Metal Roof Sweating: Night-Sky Radiation Cooling & High-Temp Membranes | `high temp ice and water shield for metal roof`, `metal roof sweating on underside` | ASTM D1970 / UL 2218 | Metal Roofing Contractors ($150-$250) |
| **067** | W34 Tue | `bug-prevention` | Live | Exterior Rainscreen Insect & Weep Baffles: Termite Exclusion | `pest screen for rainscreen siding`, `bugs coming through brick weep holes` | IRC R703.1.1 | Siding & Pest Exclusion Pros ($100-$150) |
| **068** | W34 Fri | `brick-veneer-weep-hole-pest-baffles` | Queued | Brick Weep Hole Baffles: Preventing Wasps, Mice and Termite Infiltration | `weep hole covers pest control`, `how to seal siding gaps bugs` | IRC Section R703.8.6 | Pest Control & Masonry Pros ($100-$150) |
| **069** | W35 Tue | `barndominium-post-frame` | Live | Barndominium Envelope Failures: Purlin Sweating & Breaks | `barndominium condensation dripping from roof`, `how to insulate a post frame building` | 2024 IECC C402 / NFBA | Post-Frame & Barndominium Builders ($150-$250) |
| **070** | W35 Fri | `pole-barn-insulation-thermal-breaks` | Queued | Post-Frame Thermal Breaks: Isolating Steel Girts from Living Space Condensation | `thermal breaks in steel pole barn framing`, `insulating pole barn house` | NFBA Standards / 2024 IECC | Barndominium Builders ($150-$250) |
| **071** | W36 Tue | `when-to-replace-windows` | Live | Window Replacement vs Historic Wood Sash Restoration | `historic wood window restoration vs vinyl`, `low-e storm windows energy savings` | NFRC 100 / ASTM E283 | Window Restoration & Replacement ($100-$160) |
| **072** | W36 Fri | `historic-wood-storm-window-restoration` | Queued | Restoring Historic Wavy Glass Sashes: Spring Bronze Weatherstripping vs Replacement | `historic wood window restoration cost`, `spring bronze weatherstripping wood sash` | NPS Preservation Brief 9 | Historic Window Restoration ($120-$180) |
| **073** | W37 Tue | `rammed-earth-midwest-flooring` | Live | Rammed Earth & Earthen Floors: Sub-Slab Thermal Mass | `rammed earth house cold climate`, `earthen floor cost radiant heat` | ASTM E2392 / IRC App S | Alternative Building Contractors ($120-$180) |
| **074** | W37 Fri | `sub-slab-hydronic-radiant-floor-heating` | Queued | Hydronic Radiant Floor Heating in Basements: PEX Layout, R-10 Breaks, and Boilers | `radiant floor heating basement slab cost`, `pex tubing spacing basement concrete` | 2024 IECC Table R402 / CSA B214 | Radiant Heating Specialists ($140-$220) |
| **075** | W38 Tue | `rockwool-vs-fiberglass` | Live | Stone Wool vs Fiberglass Batts: Sub-Zero R-Value Derating | `rockwool vs fiberglass insulation soundproofing`, `fiberglass r-value sub zero drop` | ASTM C665 / ASTM C612 | Insulation & Envelope Pros ($100-$150) |
| **076** | W38 Fri | `mineral-wool-firestopping-acoustics` | Queued | Mineral Wool Soundproofing: STC Ratings and Non-Combustible Firestopping | `fireproof insulation between floor joists`, `rockwool soundproofing interior wall` | ASTM E119 / ASTM C612 | Acoustic & Drywall Pros ($100-$150) |
| **077** | W39 Tue | `expansive-lawncare` | Live | Expansive Lawncare & Topsoil Grading: Foundation Floods | `sprinkler system leaking water basement`, `clay soil lawn grading foundation` | IRC R401.3 | Drainage & Landscape Civil Pros ($100-$150) |
| **078** | W39 Fri | `retaining-wall-drainage-geogrid` | Queued | Segmental Retaining Walls on Clay Slopes: Geogrid Reinforcement & Drainage Crickets | `retaining wall drainage pipe detail`, `retaining wall bowing repair` | NCMA Design Manual / IBC Ch 18 | Hardscape & Civil Pros ($120-$180) |
| **079** | W40 Tue | `blower-door-checklist` | Live | Blower Door Depressurization: CFM50 Math & Thermal Scans | `what is a good blower door score ach50`, `blower door test cost residential` | 2024 IECC R402.4 / ASTM E779 | Energy Auditors & BPI Pros ($120-$180) |
| **080** | W40 Fri | `infrared-thermal-imaging-draft-detection` | Queued | Thermal Camera Energy Audits: Diagnosing Convective Heat Bypasses with Smoke Pencils | `finding air leaks with smoke pencil and thermal camera`, `home infrared thermal scan` | ASTM C1060 / BPI-1200 | BPI Energy Auditors ($120-$180) |
| **081** | W41 Tue | `rim-joist-air-sealing-spray-foam` | Backlog | Basement Rim Joist Air Sealing: Closed-Cell Foam vs Board | `how to insulate rim joist basement`, `spray foam vs foam board rim joist` | IRC R302.9 / IRC R316.4 | Weatherization & Insulation Pros ($100-$160) |
| **082** | W41 Fri | `basement-sill-plate-air-sealing` | Queued | Sealing the Mud Sill Gap: Acoustical Sealant vs Expanding Polyurethane Foam | `rim joist draft cold air coming into basement`, `sealing foundation sill plate gap` | 2024 IECC Section R402.4 | Air Sealing Contractors ($100-$150) |
| **083** | W42 Tue | `insulating-brick` | Live | Insulating Solid Masonry Walls: WUFI Models & Spalling | `can you insulate historic brick from inside`, `interior insulation brick spalling` | ASTM C67 / BIA Tech Note 20 | Historic Masonry Specialists ($150-$200) |
| **084** | W42 Fri | `wufi-modeling-masonry-freeze-thaw` | Queued | WUFI Hygrothermal Analysis: Critical Saturation Limits (S_crit) in Solid Masonry | `wufi modeling interior masonry insulation`, `critical saturation masonry spalling` | RILEM TC 127-MS / BSC RR-1105 | Forensic Building Scientists ($150-$250) |
| **085** | W43 Tue | `sub-slab-insulation-specs` | Live | Sub-Slab Insulation: R-10 XPS vs EPS Under Basements | `sub slab insulation code zone 5`, `xps vs eps under concrete basement floor` | 2024 IECC R402 / ASTM C578 | Concrete Flatwork Specialists ($120-$180) |
| **086** | W43 Fri | `radon-mitigation-sub-slab-depressurization` | Queued | Active Radon Mitigation: Sizing 3-inch vs 4-inch PVC Risers and In-Line Radon Fans | `radon mitigation system cost`, `high radon in basement fix` | EPA 402-R-93-078 / ASTM E2121 | Certified Radon Contractors ($140-$220) |
| **087** | W44 Tue | `attic-air-sealing-baffles` | Live | Attic Air Sealing & Rafter Baffles: Soffit Net Free Area | `how to install rafter baffles in existing attic`, `attic air sealing top plates foam` | IRC R806.2 / IRC R806.3 | Attic Insulation & Air Sealing ($120-$180) |
| **088** | W44 Fri | `soffit-ventilation-net-free-area` | Queued | Soffit Intake Airflow: Calculating Net Free Vent Area (NFVA) & Unblocking Baffles | `soffit vent net free area calculator`, `soffit vents covered by insulation mold` | IRC Section R806.2 | Attic Ventilation Specialists ($100-$150) |
| **089** | W45 Tue | `cold-climate-heat-pumps` | Live | Cold Climate Heat Pumps: Inverter Capacity Curves at -15F | `cold climate heat pump performance -15`, `hyper heat mini split efficiency winter` | NEEP ccASHP / AHRI 210 | Heat Pump Installation Pros ($150-$220) |
| **090** | W45 Fri | `heat-pump-inverter-capacity-derating` | Queued | Cold Climate Inverter Curves: COP Derating at -15 deg F & Hyper-Heating Field Tests | `heat pump efficiency at zero degrees`, `mitsubishi hyper heat vs standard heat pump` | NEEP ccASHP Specification | Cold-Climate HVAC Contractors ($150-$220) |
| **091** | W46 Tue | `window-alternatives` | Live | Low-E Storm Windows vs Replacement: U-Factor Economics | `low-e storm windows vs replacement windows`, `cost payback replacement windows` | NFRC 100 / Energy Star 7.0 | Window & Glass Specialists ($100-$160) |
| **092** | W46 Fri | `low-e-storm-windows-energy-star-7` | Queued | Low-E Storm Windows: Energy Star Version 7.0 Payback vs Full Window Replacement | `low-e storm windows energy savings`, `interior acrylic storm window inserts` | Energy Star Version 7.0 | Window Restoration Match ($100-$160) |
| **093** | W47 Tue | `off-grid-systems` | Live | Solar PV & Battery Storage in Midwest Winters: Snow Loss | `solar panel snow production midwest winter`, `sizing battery backup heat pump` | NEC 706 / IEEE 1547 | Solar & Battery Contractors ($150-$250) |
| **094** | W47 Fri | `battery-storage-winter-capacity-derating` | Queued | Lithium Battery Storage in Cold Weather: Sub-Zero Charging Lockouts & Wraps | `how many kwh battery for power outage winter`, `solar inverter freezing temperature` | NEC Article 706 / UL 9540 | Solar & Storage Specialists ($150-$250) |
| **095** | W48 Tue | `does-house-need-to-breathe` | Live | Does a House Need to Breathe? The Myth vs Controlled ERVs | `does a house need to breathe myth`, `can a house be sealed too tight` | ASHRAE 62.2 / IRC M1505 | Energy Auditors & IAQ Pros ($100-$160) |
| **096** | W48 Fri | `make-up-air-range-hoods-irc-m1503` | Queued | Make-Up Air Dampers: IRC M1503.6 Requirements for High-CFM Range Hoods | `makeup air damper code requirements`, `range hood over 400 cfm code` | IRC Section M1503.6 | Mechanical HVAC Contractors ($120-$180) |
| **097** | W49 Tue | `embodied-carbon-materials` | Live | Embodied Carbon in Insulation: Cellulose vs Fiberglass | `low carbon insulation materials residential`, `cellulose insulation carbon footprint` | ASTM C739 / ISO 21930 | Green Building Insulation Pros ($120-$180) |
| **098** | W49 Fri | `dense-pack-cellulose-vs-fiberglass-gwp` | Queued | Dense-Pack Cellulose in Exterior Walls: Carbon Sequestration & Borate Fire Retardants | `dense pack cellulose in walls cost`, `cellulose vs fiberglass settling in walls` | ASTM C739 / CPSC 16 CFR | Insulation & Weatherization ($120-$180) |
| **099** | W50 Tue | `roof-insulation-over-sheathing` | Live | Rigid Polyiso Over Roof Sheathing: Conditioned Attics | `rigid foam on top of roof sheathing`, `unvented attic exterior insulation` | IRC R806.5 / 2024 IECC R402 | Roofing & Envelope Contractors ($140-$220) |
| **100** | W50 Fri | `nailbase-polyiso-roof-deck-retrofits` | Queued | Nailbase Polyiso Roof Panels: Fastening Long Timber Screws for Cathedral Ceilings | `nailbase polyiso panels for residential roof`, `fastening exterior insulation to rafters` | IRC R806.5 / 2024 IECC | Roofing & Timber Framing ($140-$220) |
| **101** | W51 Tue | `furnace-short-cycling-flame-sensor` | Backlog | Furnace Short-Cycling: Flame Sensors & Static Pressure | `furnace runs 3 minutes then shuts off`, `cleaning flame sensor with steel wool` | NFPA 54 / ANSI Z21.47 | Emergency Furnace Repair Pros ($120-$180) |
| **102** | W51 Fri | `furnace-high-limit-switch-esp-diagnostics` | Queued | Furnace High Limit Trips: Measuring External Static Pressure Across MERV 13 Filters | `furnace high limit switch tripping winter`, `duct static pressure too high furnace` | ACCA Manual D / NFPA 54 | HVAC Diagnostics Specialists ($120-$180) |
| **103** | W52 Tue | `false-spring-envelope-thaw` | Live | False Spring Envelope Thaw: Rapid Freeze-Thaw Diagnostics | `cracks in brick mortar after freezing winter`, `foundation concrete peeling after winter` | ASTM C67 / IRC R703 | Home Inspectors & Envelope Pros ($120-$180) |
| **104** | W52 Fri | `winter-exterior-building-inspection-checklist` | Queued | Post-Freeze Exterior Inspection Checklist: Mortar Spalling, Siding & Roof Leaks | `spring home exterior inspection checklist`, `how to check for winter roof leaks` | ASTM C67 / IRC R703 | Forensic Inspectors ($120-$180) |


---

## 7. Research Methodology, Data Provenance & Gap Analysis

Why does this 52-week publishing schedule exist, and where did the data come from? This section documents the empirical, algorithmic, and engineering research process that established these specific topics and sequences.

### Empirical Data Collection Process

#### 1. Live Google Search Console API Telemetry (`sc-domain:midwestaec.com`)
* We queried live production domain telemetry using Google Search Console API Service Account credentials (`midwest-aec-bot@gen-lang-client-0789736011.iam.gserviceaccount.com`).
* Active performance logs showed immediate organic breakout signals on high-intent topics:
  * `icf-basements-walls.html` accumulated 94 impressions, with the core query `"icf basement"` holding Position 20.0 (top of Page 2 striking distance).
  * `embodied-carbon-materials.html` surged 63.8% to 95 impressions across commercial and residential low-carbon insulation searches.
  * `insulating-brick.html` demonstrated a 9.4% CTR (3 organic clicks on 32 impressions) confirming intense homeowner demand for solid masonry hygrothermal retrofits.
  * `crawlspace-encapsulation-steps.html` advanced to Position 29.8 on 20 impressions.
* These striking-distance positions directly validated that search algorithms favor deep, code-grounded engineering copy over aggregator summaries.

#### 2. Google Trends 12-Month Breakout Query Scanner (`scripts/find-opportunities.js`)
* We executed regular trend discovery scripts isolating high-intent search surges across the 12 Midwest states (IL, IN, IA, KS, MI, MN, MO, NE, ND, OH, SD, WI).
* Key queries demonstrated seasonal breakout velocity (+300% to +500% and [Breakout] status) coinciding with regional weather events:
  * Sub-zero polar vortexes triggered instant spikes in: `"furnace pressure switch stuck open cold"`, `"aux heat on honeywell thermostat"`, `"furnace vent pipe freeze lockout"`, `"frozen well pump pressure switch"`.
  * Rapid February/March freeze-thaw cycles generated breakouts in: `"water dripping from bathroom fan in winter"` (attic rain), `"frozen sump pump discharge pipe fix"`, `"repair basement leak after snow melt"` (+450%).
  * Summer humidity spikes produced search surges in: `"air conditioner short cycling high humidity house"`, `"sweating pipes in crawl space summer"`, `"plastic vapor barrier mold behind drywall"`.

#### 3. Competitor & Aggregator Content Gap Analysis (Angi, Forbes Home, Bob Vila)
We audited top-ranking articles on national aggregator domains (Angi, Forbes Home, Bob Vila, Architectural Digest) for high-ticket home repairs and identified three critical failures:
1. **Misleading National Cost Aggregation:** Angi and Forbes Home average all nationwide repair jobs together. For example, they quote an "average foundation crack repair cost of $5,400" by averaging minor cosmetic $250 polyurethane touch-ups with massive $30,000 structural underpinning and tieback installations. Homeowners facing $15,000 to $35,000 contractor bids find this information useless and misleading.
2. **Complete Absence of Climate-Specific Building Physics:** Aggregator content is written generically for national audiences. It ignores Midwest-specific failure modes: deep frost penetration (42" to 60"), adfreeze shear stress, clay bowl backfill surcharge, Category IV PVC condensing flue icing, and inward solar vapor drive through soaked masonry.
3. **Premature Contractor Dispatch Without Diagnostic Education:** Aggregator pages function as thin lead-generation traps. Homeowners are pushed into lead forms before understanding whether their foundation crack is structural (shear failure) or shrinkage (drying shrinkage). Midwest AEC fills this gap by educating the homeowner first, building technical authority, and providing a qualified contractor dispatch link only when structural remediation is required.

#### 4. Homeowner & Contractor Sentiment Audits (Reddit, ContractorTalk, FineHomebuilding)
* We analyzed hundreds of threads across `r/HomeImprovement`, `r/DIY`, `r/HVAC`, `ContractorTalk`, and `FineHomebuilding`.
* Homeowners consistently express panic over four specific scenarios:
  1. High-efficiency furnace lockouts during sub-zero nights with error code flashing (pressure switches stuck open).
  2. Electric auxiliary heat strips engaging continuously on heat pumps, doubling utility bills.
  3. Basement walls bowing inward under saturated clay soils after winter thaws.
  4. Sump pump discharge pipes freezing solid outside, forcing pumps to run continuously until motor burnout.

---

### Engineering Physics & Mathematical Formulations

To ensure Midwest AEC remains an authoritative engineering publication, each specification incorporates empirical formulas and building science standards:

#### 1. Frost Heave & Lateral Soil Pressure Mechanics
In Climate Zones 5A and 6A, lateral soil pressure against basement walls increases dramatically during freeze-thaw events. Standard Rankine active lateral earth pressure is calculated as:
```
p_a = K_a * gamma * z
```
Where K_a = tan^2(45 deg - phi/2), gamma is soil unit weight (110-125 pcf), and z is backfill depth. At a 4-foot depth in silty clay, static lateral pressure typically equals 313 psf.

However, research from the U.S. Army Cold Regions Research and Engineering Laboratory (CRREL) proves that dynamic frost heave ice lensing creates frost segregation pressures of:
```
Delta sigma_frost = 1,200 to 2,500 psf
```
Simultaneously, freezing wet soil adheres to foundation walls, exerting adfreeze shear stresses:
```
tau_af = 50 to 250 kPa (7.25 to 36.25 psi)
```
This adfreeze shear grips the upper foundation wall and lifts it while lateral ice lensing bows the center inward. Aggregators call this a "settlement crack", whereas building science diagnoses it as freeze-thaw lateral shear, requiring carbon fiber grid straps or structural steel shoring rather than cosmetic caulking.

#### 2. Dual-Fuel Heat Pump Thermodynamic Break-Even COP Equation
Homeowners in the Midwest frequently switch their heat pump thermostats to auxiliary heat prematurely, incurring massive electric bills. The exact outdoor thermodynamic break-even Coefficient of Performance (COP_be) where heat pump heating costs equal gas furnace heating costs is determined by:
```
COP_be = [ P_elec ($/kWh) * 29.3071 * AFUE ] / P_gas ($/Therm)
```
Where:
* P_elec = Total delivered residential electric rate ($/kWh, e.g. $0.16/kWh)
* 29.3071 = Conversion constant (kWh per Therm of natural gas)
* AFUE = Annual Fuel Utilization Efficiency of the backup gas furnace (e.g. 0.95 for 95% condensing furnace)
* P_gas = Total delivered natural gas rate ($/Therm, e.g. $1.15/Therm)

Plugging in typical Midwest winter utility rates:
```
COP_be = [ 0.16 * 29.3071 * 0.95 ] / 1.15 = 4.45 / 1.15 = 3.87
```
When the heat pump inverter's COP drops below 3.87 at outdoor temperatures below 28 deg F (-2.2 deg C), natural gas becomes cheaper per delivered BTU. This mathematical balance point provides actionable, concrete value that no national aggregator provides.

#### 3. Crawlspace Moisture Ingress Rates (Advanced Energy & ORNL)
Empirical studies by the Oak Ridge National Laboratory (ORNL) and Advanced Energy demonstrated that unsealed dirt crawlspaces evaporate:
```
10 to 15 gallons of water per 1,000 sq ft of bare soil every 24 hours
```
Under the building stack effect, this moisture migrates upward through floor penetrations into living spaces. In July (outdoor dew points exceeding 65 deg F), venting an unconditioned crawlspace introduces warm humid air that condenses against cold ductwork and floor framing, dropping timber relative humidity into the mold amplification zone (>80% RH). Encapsulation with continuous 20-mil reinforced polyethylene and rim joist spray foam stops this cycle completely.

#### 4. Concrete Crack Injection Chemistry: Structural Epoxy vs Polyurethane
Foundations cracking under freeze-thaw and hydrostatic loads require specific chemical grouts based on structural dynamics:
* **ASTM C881 Structural Epoxy:** Possesses tensile strengths of 7,000 to 10,000 psi (exceeding native 3,000-4,000 psi concrete tensile strength) with zero volumetric expansion and rigid curing. It is used strictly for dry, non-moving structural cracks to restore monolithic concrete shear resistance.
* **Hydrophobic Polyurethane Foam:** Reacts rapidly with moisture, expanding 15x to 25x its liquid volume into a closed-cell elastomeric gasket. With elongation capabilities of 200% to 400%, it flexes during seasonal soil expansion and permanently seals active water leaks.
Injecting structural epoxy into an actively leaking crack results in bond failure; injecting flexible polyurethane into a shearing structural wall fails to prevent wall deflection. Midwest AEC's guides explain this distinction clearly.

#### 5. Historic Masonry WUFI Hygrothermal Limits & Critical Saturation
Applying interior continuous insulation to a historic multi-wythe common clay brick building eliminates interior heat loss that historically kept the exterior brick above freezing. Research by Building Science Corporation (BSC RR-1105 and RR-1201) and RILEM TC 127-MS establishes that when masonry degree of saturation exceeds the critical saturation coefficient:
```
S_crit = 0.75 to 0.85 (75% to 85% of total pore volume filled with water)
```
Freezing pore water expands by 9.05% by volume. Without empty void space to accommodate ice expansion, hydrostatic tensile stress inside the brick pores exceeds the tensile strength of soft historic clay (150-300 psi), resulting in irreversible exterior spalling. Midwest AEC specifies vapor-permeable, capillary-active interior insulation retrofits to keep brick below S_crit.

---

### Monetization Architecture & Pay-Per-Lead (PPL) Economics

Every published article and backlog specification connects directly to high-intent contractor referrals through Networx and Modernize:
* **Step 4 Contractor Dispatch Box:** Positioned after technical troubleshooting steps, providing a clean contextual callout pointing to `browse.html?cat=[vertical]`.
* **Lead Valuation by Vertical:**
  * Structural Foundation Repair & Bowed Wall Remediation: $150-$250 per verified lead.
  * Basement Waterproofing & Excavation: $140-$220 per verified lead.
  * Emergency HVAC Replacement & Dual-Fuel Heat Pump Conversions: $120-$200 per verified lead.
  * Emergency Ice Dam Steaming & Roof Repair: $180-$250 per verified lead.
  * Siding Replacement (Hardie / LP SmartSide): $120-$180 per verified lead.
  * Crawlspace Encapsulation & Radon Mitigation: $120-$180 per verified lead.
* **Why This Monetization Succeeds:** Aggregators offer low-converting generic leads because users skim their high-level summaries. Midwest AEC readers spend 4 to 8 minutes absorbing forensic building science diagnostics. When they click to connect with a contractor, they are pre-qualified, informed homeowners ready to commission $10,000 to $40,000 capital improvements.

---

## 8. Google Docs Two-Way Sync System

To allow manual editorial rewrites in a rich word processor without needing local desktop software, Midwest AEC integrates with Google Docs via the official `gdocs` plugin CLI using the authenticated account `zunesofficial@gmail.com`.

### The Active Document Registry (`docs-sync.json`)

```json
{
  "furnace-vent-pipe-freeze-lockout": {
    "title": "Furnace Vent Pipe Freeze Lockout",
    "doc_id": "1Mi8l65Q1i_YeMJzbI3F5_eXqwloarvNS9bMU28WU20w",
    "url": "https://docs.google.com/document/d/1Mi8l65Q1i_YeMJzbI3F5_eXqwloarvNS9bMU28WU20w/edit",
    "file": "content/furnace-vent-pipe-freeze-lockout.md"
  },
  "heat-pump-aux-heat-lockout-balance-point": {
    "title": "Heat Pump Aux Heat Lockout & Balance Point",
    "doc_id": "1W5jeKS3BDNpRoWNP3AioZFLab57rp4cANThstUwsZ0o",
    "url": "https://docs.google.com/document/d/1W5jeKS3BDNpRoWNP3AioZFLab57rp4cANThstUwsZ0o/edit",
    "file": "content/heat-pump-aux-heat-lockout-balance-point.md"
  },
  "sump-pump-failure-spring-thaw-backups": {
    "title": "Sump Pump Failure & Thaw Backups",
    "doc_id": "1o2nKNvN1kuNelLkt3wy7djL8dIoN79E42wz1UCp9Yzw",
    "url": "https://docs.google.com/document/d/1o2nKNvN1kuNelLkt3wy7djL8dIoN79E42wz1UCp9Yzw/edit",
    "file": "content/sump-pump-failure-spring-thaw-backups.md"
  },
  "cold-climate-septic-well-freeze-solutions": {
    "title": "Cold Climate Septic & Well Freeze Solutions",
    "doc_id": "1ob0UlyrSbV1vDwx-xX0wiVD7W7lbk_Gl7z6Ci2X5eLc",
    "url": "https://docs.google.com/document/d/1ob0UlyrSbV1vDwx-xX0wiVD7W7lbk_Gl7z6Ci2X5eLc/edit",
    "file": "content/cold-climate-septic-well-freeze-solutions.md"
  },
  "ice-dams-roofs": {
    "title": "Ice Dam Prevention & Remediation",
    "doc_id": "1ZrX_MeE8rYAzxtqmJ0Wcn75ksBngKiWmwDiLLSggYfw",
    "url": "https://docs.google.com/document/d/1ZrX_MeE8rYAzxtqmJ0Wcn75ksBngKiWmwDiLLSggYfw/edit",
    "file": "content/ice-dams-roofs.md"
  },
  "icf-basements-walls": {
    "title": "ICF Basements & Frost Protection",
    "doc_id": "1YVXl7jZHy4PQIMzFwbcOlmPBChcMM4nmvVe_u9HwSCY",
    "url": "https://docs.google.com/document/d/1YVXl7jZHy4PQIMzFwbcOlmPBChcMM4nmvVe_u9HwSCY/edit",
    "file": "content/icf-basements-walls.md"
  }
}
```

### Pulling User Edits Back from Google Docs:
When the user finishes editing an article in Google Docs and says *"sync [slug]"* or *"sync all"*:
1. Run:
   ```powershell
   gdocs readonly export <DOC_ID> --format md --output "content/<slug>.md"
   ```
2. Recompile:
   ```powershell
   node build.js
   ```
3. Commit locally:
   ```powershell
   git commit -am "Sync user editorial updates for <slug>"
   ```

---

## 9. Google Search Console & Automations Telemetry

### GSC Configuration
* **Property:** `sc-domain:midwestaec.com`
* **Bot Account:** `midwest-aec-bot@gen-lang-client-0789736011.iam.gserviceaccount.com` (Verified Owner)
* **Credentials:** `gsc-credentials.json` (Protected by `.gitignore`, verified 100% untracked by Git).

### Daily Dispatcher (`C:\Users\Dylen\Desktop\AEC\automations\network-dispatcher.js`)
* Configured in `network-registry.json` to dispatch telemetry briefings directly to the active Antigravity chat session.
* Current Registered Conversation ID: `63fbd059-e331-49d5-b57d-727590d12336`.
* **Important:** If switching to a new permanent chat conversation, update `target_conversation_id` in `C:\Users\Dylen\Desktop\AEC\automations\network-registry.json` so morning reports deliver to the active window.

### Search Console Telemetry Dynamics & Flatline FAQ
* **48-to-72 Hour GSC Reporting Lag:** Google Search Console operates on a delay. Fresh architectural changes, backlink propagation, or newly promoted articles take 2 to 3 days to register their first data points in API reporting.
* **Aggregated 28-Day Rolling Metrics:** GSC displays aggregated totals over a rolling 28-day window. When a cluster undergoes initial algorithmic testing (e.g. 94 impressions recorded during an indexing test), the total metric will appear flat until the next crawl and recalculation batch arrives.
* **Recrawl to Re-ranking Propagation Delay:** Googlebot sitemap ingestion (e.g. the 45-URL sitemap recrawl on Nov 4) occurs before search index recalculation. Moving from Page 2 (Position 20) to Page 1 typically requires a 7 to 14 day index evaluation window as Google recalculates internal PageRank distribution from in-body links.
* **Winter Wave Indexing Ramp:** Newly published seasonal emergency guides spend 5 to 10 days in standard indexing and crawl queues before generating their initial impression footprints.

---

## 10. Git & Deployment Workflow

* **Main Branch:** `main`
* **Local Commits:** The agent performs local git staging and commits automatically.
* **Remote Push:**
  * Windows Credential Manager can cause non-interactive background subshells to hang during `git push origin main`.
  * **Rule:** The agent creates clean local commits. The user executes `git push origin main` in their PowerShell window, or authorizes an interactive push.
* **Deployment Verification:** Cloudflare Pages auto-deploys upon push to `origin/main`. Changes are typically live within 60 seconds.

---

## 11. Handoff Instruction for New Chats

If opening a new chat window, simply paste:

```text
Please read the master reference documentation at C:\Users\Dylen\Desktop\AEC\Midwest\Refs\MIDWEST_MASTER_REFERENCE.md and continue from previous conversation ID: 63fbd059-e331-49d5-b57d-727590d12336.
The active workspace is C:\Users\Dylen\Desktop\AEC\Midwest.
```
