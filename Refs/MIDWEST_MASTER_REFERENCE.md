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
├── content/                    # 39 published production markdown files with YAML frontmatter
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
1. **1:1:1:1 Count Parity:** Every file in `content/*.md` (currently 39) must have an exact 1:1 compiled match in `articles/*.html`, a record in `data.js`, and an entry in `sitemap.xml`.
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

## 5. Staged Backlog Pipeline (6 Production-Ready Articles)

These articles are fully formatted, audited for 0 em-dashes and 0 bullet prefixes, and staged in `content/backlog/` for scheduled deployment:

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

---

## 6. 52-Week Annual Editorial Publishing Calendar & Seasonal Architecture

Midwest AEC operates on a strict, 52-week publishing roadmap engineered around the four extreme continental seasons of Climate Zones 4A, 5A, and 6A. Every single specification is directly anchored to documented homeowner search queries from the past 12 months, enforceable building codes, and high-ticket Networx/Modernize Pay-Per-Lead (PPL) contractor dispatch ($100-$250/lead).

```
  52-WEEK ANNUAL EDITORIAL ARCHITECTURE (CLIMATE ZONES 4A, 5A & 6A)
 
  WEEKS 01-13 | WINTER: Polar Vortex, Freeze Disruption & Combustion Failures
  WEEKS 14-26 | SPRING: Hydrostatic Deluge, Soil Surcharge & Foundation Settlement
  WEEKS 27-39 | SUMMER: Inward Vapor Drives, Dew-Point Traps & Latent HVAC Loads
  WEEKS 40-52 | AUTUMN: Hygrothermal Retrofits, Envelope Air-Sealing & Heating Prep
```

### The Master 52-Week Publishing Specification Matrix

| Wk | Date Window | Slug | Status | Topic & Title | Documented Search Queries (Past 12 Mo) | Code Citation | Networx Lead Vertical ($100-$250) |
|---|---|---|---|---|---|---|---|
| **01** | Jan 04-10 | `furnace-vent-pipe-freeze-lockout` | Live | Category IV Furnace Flue Freezing & Pressure Switch Lockouts | `furnace pressure switch stuck open cold`, `high efficiency furnace exhaust icing up` | NFPA 54 / ANSI Z223.1 | Emergency HVAC Repair ($140-$220) |
| **02** | Jan 11-17 | `emergency-ice-dam-steaming-vs-roof-hacking` | Backlog | Emergency Ice Dam Steaming vs Mechanical Shingle Hacking | `emergency ice dam steaming cost`, `remove ice dam without damaging roof` | IRC R905 / ASTM D3462 | Emergency Roofing & Ice Dam Steaming ($180-$250) |
| **03** | Jan 18-24 | `cold-climate-septic-well-freeze-solutions` | Live | Rural Well Head & Septic Line Freeze Diagnostics | `frozen well pump pressure switch`, `how to thaw frozen septic line` | IPC Ch 3 / IRC P2603.5 | Well Systems & Emergency Plumbing ($150-$220) |
| **04** | Jan 25-31 | `heat-pump-aux-heat-lockout-balance-point` | Live | Dual-Fuel Heat Pump Economic Balance Point Calculations | `what temperature should heat pump switch to gas`, `aux heat running constantly` | ASHRAE 90.1 / IECC R403 | Heat Pump & Hybrid HVAC Match ($120-$180) |
| **05** | Feb 01-07 | `attic-frost-roof-sweating` | Live | Attic Rain Triage: Moisture Melting on Sheathing | `water dripping from bathroom fan in winter`, `attic rain causes how to fix` | IRC R806 / BPI-1100-T | Attic Air Sealing & Insulation ($120-$180) |
| **06** | Feb 08-14 | `emergency-window-repair-seal-failure` | Backlog | Sub-Zero Window Drafts: IGU Seal Failure & Storm Sashes | `fog between window panes cold weather`, `broken seal on double pane window` | NFRC 100 / ASTM E283 | Window Replacement & Glass Repair ($100-$160) |
| **07** | Feb 15-21 | `foundation-freeze-thaw-crack-repair` | Backlog | Hydrostatic Frost Heave & Bowed Walls: Carbon Fiber vs I-Beams | `horizontal crack in basement wall frost heave`, `carbon fiber straps vs steel beams` | ACI 506.2 / TMS 402/602 | Structural Foundation Repair ($150-$250) |
| **08** | Feb 22-28 | `roof-heat-tape-deicing-cables` | Backlog | Roof Heat Tape & De-Icing Cables: Electrical Amps & GFPE Trips | `roof heat tape electric bill cost`, `self regulating heat cable vs constant wattage` | NEC 426 / IRC R806 | Roofing & Attic Insulation Pros ($140-$200) |
| **09** | Mar 01-07 | `sump-pump-failure-spring-thaw-backups` | Live | Frozen Sump Discharge Lines: Check Valves & Bubbler Relief | `frozen sump pump discharge pipe fix`, `sump pump running constantly winter` | IRC P3303 / IPC 1101 | Basement Waterproofing & Plumbers ($120-$180) |
| **10** | Mar 08-14 | `historic-brick-chimney-acid-condensation` | Roadmap | Historic Chimney Deterioration: Flue Acid & Spalling Crowns | `brick chimney crumbling outside`, `flue liner condensation high efficiency furnace` | NFPA 211 / IRC R1003 | Chimney & Historic Masonry Pros ($120-$200) |
| **11** | Mar 15-21 | `kneewall-attic-air-sealing-insulation` | Roadmap | R-60 Cold Roof Conversions: Cape Cod Kneewalls & Drop Soffits | `how to insulate cape cod kneewall`, `ice dams on 1.5 story house` | 2024 IECC Table R402 | Insulation & Air Sealing Pros ($120-$180) |
| **12** | Mar 22-28 | `load-bearing-wall-removal-lvl` | Live | Load-Bearing Wall Removal: Sizing LVL Drop Beams & Shoring | `how to tell if wall is load bearing`, `LVL beam size for 16 foot span` | IRC R502 / ASTM D5456 | Structural Engineers & Framing Pros ($150-$250) |
| **13** | Mar 29-Apr 04 | `basement-egress-window-cutting` | Live | Basement Egress Cutting: IRC R310 Diamond Sawing & Wells | `egress window cost poured concrete wall`, `IRC R310 egress window dimensions` | IRC R310 / IRC R405 | Concrete Cutting & Egress Specialists ($140-$200) |
| **14** | Apr 05-11 | `basement-waterproofing` | Live | The Clay Bowl Effect: Why Modern Poured Foundations Leak | `clay bowl effect foundation`, `hydrostatic pressure basement wall crack` | IRC R405.1 / IRC R406.2 | Waterproofing & Drainage Contractors ($150-$250) |
| **15** | Apr 12-18 | `basement-wall-leak-crack-injection` | Backlog | Foundation Crack Injections: Polyurethane vs ASTM C881 Epoxy | `epoxy vs polyurethane foundation crack`, `repair leaking concrete basement crack` | ASTM C881 / ACI 503R | Concrete Repair & Waterproofing ($120-$180) |
| **16** | Apr 19-25 | `dual-sump-pump-battery-backup-staging` | Roadmap | Dual Sump Pump Staging: Primary vs Backup Float Switches | `best battery backup sump pump system`, `how to stage dual sump pumps in pit` | IRC P3303 / NFPA 70 | Waterproofing & Plumbers ($120-$180) |
| **17** | Apr 26-May 02 | `foundation-grading-french-drain-slope` | Roadmap | Foundation Grading & French Drains: The 5% Slope Rule | `proper grading away from foundation slope`, `french drain vs curtain drain yard` | IRC R401.3 | Drainage & Landscape Civil Pros ($100-$160) |
| **18** | May 03-09 | `basement-lvp-flooring-moisture` | Live | LVP Flooring Failures in Basements: Vapor Emissions & Mats | `moisture under lvp on concrete basement`, `white powder under basement vinyl plank` | ASTM F1869 / ASTM F2170 | Flooring & Moisture Mitigation Match ($100-$150) |
| **19** | May 10-16 | `siding-comparison-hardie-lpsmartside-vinyl` | Backlog | Fiber Cement vs LP SmartSide: Hail & Freeze-Thaw Durability | `hardie vs lp smartside hail damage`, `siding cost per square foot midwest` | ASTM C1186 / ASTM D3679 | Siding & Exterior Envelope Pros ($120-$180) |
| **20** | May 17-23 | `historic-brick-retrofit-steps` | Live | Repointing Historic Brick: Lime Mortar NHL 3.5 vs Portland | `type n vs type o mortar historic brick`, `portland cement cracked historic brick` | ASTM C270 / ASTM C1324 | Historic Masonry & Tuckpointing ($140-$220) |
| **21** | May 24-30 | `icf-basements-walls` | Live | Insulated Concrete Forms (ICF) Basements: Eliminating Leaks | `icf basement vs poured concrete cost`, `icf foundation waterproof membrane` | IRC R404.1.2 / ACI 318 | ICF & Foundation Builders ($150-$250) |
| **22** | May 31-Jun 06 | `rotted-sill-plate-replacement-jacking` | Roadmap | Rotted Mud Sills & Rim Joists: House Jacking & Sistering | `how to replace rotted mud sill plate`, `cost to fix rotted rim joist` | IRC R317 / IRC R502.6 | Framing & House Leveling Contractors ($150-$250) |
| **23** | Jun 07-13 | `crawlspace-encapsulation-steps` | Live | Crawlspace Encapsulation Pricing: 20-Mil Poly & Wall Foam | `crawl space encapsulation cost breakdown`, `20 mil vs 10 mil vapor barrier` | IRC R408.3 | Crawlspace Encapsulation Pros ($120-$180) |
| **24** | Jun 14-20 | `flat-roof-drainage-epdm-tpo` | Roadmap | Flat Roof Drainage on Midwest Additions: EPDM vs TPO Scuppers | `tpo vs epdm flat roof cost residential`, `standing water on flat roof residential` | IRC R905.12 / IBC Ch 15 | Flat Roofing Contractors ($140-$200) |
| **25** | Jun 21-27 | `balloon-framing-retrofit-steps` | Live | Balloon Framing Retrofits: Stud Cavity Firestops & Insulation | `how to identify balloon framing in old house`, `balloon framing firestop retrofit` | IRC R302.11 / NFPA 101 | Historic Framing & Firestopping ($120-$180) |
| **26** | Jun 28-Jul 04 | `sips-vs-traditional-framing` | Live | Structural Insulated Panels (SIPs) in Zone 5: Total Payback | `sips panels vs stick built cost breakdown`, `structural insulated panels zone 5` | IRC R610 / APA PRS 610 | High-Performance Envelope Builders ($150-$250) |
| **27** | Jul 05-11 | `summer-humidity-ac` | Live | AC Short Cycling & 65% Humidity: Manual J vs Dehumidifiers | `air conditioner short cycling high humidity`, `ac runs for 5 minutes then shuts off` | ACCA Manual J / ASHRAE 62.2 | HVAC & Dehumidification Pros ($120-$180) |
| **28** | Jul 12-18 | `smart-vapor-retarders` | Live | Inward Summer Vapor Drives: Polyethylene Wall Cavity Rot | `plastic vapor barrier mold behind drywall`, `inward vapor drive brick wall summer` | IRC R702.7 / ASTM E96 | Insulation & Envelope Pros ($120-$180) |
| **29** | Jul 19-25 | `crawlspace-encapsulation` | Live | Why Vented Crawlspaces Rot in July: Condensation Dynamics | `sweating pipes in crawl space summer`, `wet insulation in crawl space floor` | IRC R408.3 | Crawlspace & Moisture Pros ($120-$180) |
| **30** | Jul 26-Aug 01 | `unvented-attic-spray-foam-roof-deck` | Roadmap | Unvented Attics: Open-Cell vs Closed-Cell Spray Foam Decking | `spray foam roof deck rot shingles`, `open cell vs closed cell spray foam attic` | IRC R806.5 | Spray Foam Insulation Pros ($140-$200) |
| **31** | Aug 02-08 | `continuous-insulation` | Live | Continuous Exterior Insulation: Polyiso vs Rockwool Furring | `continuous exterior insulation zone 5`, `rockwool comfortboard vs polyiso` | 2024 IECC R402 / ASTM C578 | Siding & Exterior Insulation ($120-$180) |
| **32** | Aug 09-15 | `erv-vs-hrv-cold-climate-ventilation` | Roadmap | ERV vs HRV in Zone 5/6: Latent Humidity Transfer Realities | `erv vs hrv midwest climate zone 5`, `energy recovery ventilator cost` | ASHRAE 62.2 / IRC M1505 | Mechanical Ventilation Pros ($120-$180) |
| **33** | Aug 16-22 | `standing-seam-metal-roof-cold-climates` | Roadmap | Standing Seam Metal Roofs: Hail Resistance & Condensation | `standing seam metal roof cost residential`, `metal roof sweating on underside` | UL 2218 / IRC R905.10 | Metal Roofing Specialists ($150-$250) |
| **34** | Aug 23-29 | `bug-prevention` | Live | Exterior Rainscreen Insect & Weep Baffles: Termite Exclusion | `pest screen for rainscreen siding`, `bugs coming through brick weep holes` | IRC R703.1.1 | Siding & Pest Exclusion Pros ($100-$150) |
| **35** | Aug 30-Sep 05 | `barndominium-post-frame` | Live | Barndominium Envelope Failures: Purlin Sweating & Breaks | `barndominium condensation dripping from roof`, `how to insulate a post frame building` | 2024 IECC C402 / NFBA | Post-Frame & Barndominium Builders ($150-$250) |
| **36** | Sep 06-12 | `when-to-replace-windows` | Live | Window Replacement vs Historic Wood Sash Restoration | `historic wood window restoration vs vinyl`, `low-e storm windows energy savings` | NFRC 100 / ASTM E283 | Window Restoration & Replacement ($100-$160) |
| **37** | Sep 13-19 | `rammed-earth-midwest-flooring` | Live | Rammed Earth & Earthen Floors: Sub-Slab Thermal Mass | `rammed earth house cold climate`, `earthen floor cost radiant heat` | ASTM E2392 / IRC App S | Alternative Building Contractors ($120-$180) |
| **38** | Sep 20-26 | `rockwool-vs-fiberglass` | Live | Stone Wool vs Fiberglass Batts: Sub-Zero R-Value Derating | `rockwool vs fiberglass insulation soundproofing`, `fiberglass r-value sub zero drop` | ASTM C665 / ASTM C612 | Insulation & Envelope Pros ($100-$150) |
| **39** | Sep 27-Oct 03 | `expansive-lawncare` | Live | Expansive Lawncare & Topsoil Grading: Foundation Floods | `sprinkler system leaking water basement`, `clay soil lawn grading foundation` | IRC R401.3 | Drainage & Landscape Civil Pros ($100-$150) |
| **40** | Oct 04-10 | `blower-door-checklist` | Live | Blower Door Depressurization: CFM50 Math & Thermal Scans | `what is a good blower door score ach50`, `blower door test cost residential` | 2024 IECC R402.4 / ASTM E779 | Energy Auditors & BPI Pros ($120-$180) |
| **41** | Oct 11-17 | `rim-joist-air-sealing-spray-foam` | Roadmap | Basement Rim Joist Air Sealing: Closed-Cell Foam vs Board | `how to insulate rim joist basement`, `spray foam vs foam board rim joist` | IRC R302.9 / IRC R316.4 | Weatherization & Insulation Pros ($100-$160) |
| **42** | Oct 18-24 | `insulating-brick` | Live | Insulating Solid Masonry Walls: WUFI Models & Spalling | `can you insulate historic brick from inside`, `interior insulation brick spalling` | ASTM C67 / BIA Tech Note 20 | Historic Masonry Specialists ($150-$200) |
| **43** | Oct 25-31 | `sub-slab-insulation-specs` | Live | Sub-Slab Insulation: R-10 XPS vs EPS Under Basements | `sub slab insulation code zone 5`, `xps vs eps under concrete basement floor` | 2024 IECC R402 / ASTM C578 | Concrete Flatwork Specialists ($120-$180) |
| **44** | Nov 01-07 | `attic-air-sealing-baffles` | Live | Attic Air Sealing & Rafter Baffles: Soffit Net Free Area | `how to install rafter baffles in existing attic`, `attic air sealing top plates foam` | IRC R806.2 / IRC R806.3 | Attic Insulation & Air Sealing ($120-$180) |
| **45** | Nov 08-14 | `cold-climate-heat-pumps` | Live | Cold Climate Heat Pumps: Inverter Capacity Curves at -15F | `cold climate heat pump performance -15`, `hyper heat mini split efficiency winter` | NEEP ccASHP / AHRI 210 | Heat Pump Installation Pros ($150-$220) |
| **46** | Nov 15-21 | `window-alternatives` | Live | Low-E Storm Windows vs Replacement: U-Factor Economics | `low-e storm windows vs replacement windows`, `cost payback replacement windows` | NFRC 100 / Energy Star 7.0 | Window & Glass Specialists ($100-$160) |
| **47** | Nov 22-28 | `off-grid-systems` | Live | Solar PV & Battery Storage in Midwest Winters: Snow Loss | `solar panel snow production midwest winter`, `sizing battery backup heat pump` | NEC 706 / IEEE 1547 | Solar & Battery Contractors ($150-$250) |
| **48** | Nov 29-Dec 05 | `does-house-need-to-breathe` | Live | Does a House Need to Breathe? The Myth vs Controlled ERVs | `does a house need to breathe myth`, `can a house be sealed too tight` | ASHRAE 62.2 / IRC M1505 | Energy Auditors & IAQ Pros ($100-$160) |
| **49** | Dec 06-12 | `embodied-carbon-materials` | Live | Embodied Carbon in Insulation: Cellulose vs Fiberglass | `low carbon insulation materials residential`, `cellulose insulation carbon footprint` | ASTM C739 / ISO 21930 | Green Building Insulation Pros ($120-$180) |
| **50** | Dec 13-19 | `roof-insulation-over-sheathing` | Live | Rigid Polyiso Over Roof Sheathing: Conditioned Attics | `rigid foam on top of roof sheathing`, `unvented attic exterior insulation` | IRC R806.5 / 2024 IECC R402 | Roofing & Envelope Contractors ($140-$220) |
| **51** | Dec 20-26 | `furnace-short-cycling-flame-sensor` | Roadmap | Furnace Short-Cycling: Flame Sensors & Static Pressure | `furnace runs 3 minutes then shuts off`, `cleaning flame sensor with steel wool` | NFPA 54 / ANSI Z21.47 | Emergency Furnace Repair Pros ($120-$180) |
| **52** | Dec 27-Jan 02 | `false-spring-envelope-thaw` | Live | False Spring Envelope Thaw: Rapid Freeze-Thaw Diagnostics | `cracks in brick mortar after freezing winter`, `foundation concrete peeling after winter` | ASTM C67 / IRC R703 | Home Inspectors & Envelope Pros ($120-$180) |

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
