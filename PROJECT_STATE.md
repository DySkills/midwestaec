# Midwest AEC: Master Project State & Continuity Guide

**Live Domain:** [`https://midwestaec.com`](https://midwestaec.com)  
**GitHub Repository:** [`https://github.com/DySkills/midwestaec`](https://github.com/DySkills/midwestaec) (Branch: `main`)  
**DNS & Edge Proxy:** Cloudflare (Edge SSL active)  
**Last Updated:** November 2, 2026

---

## 1. Project & Author Overview
* **Publication:** **Midwest AEC** (Midwest Architecture, Engineering & Construction).
* **Mission:** Independent building science publication focusing on residential envelope performance, cold-climate HVAC, moisture remediation, and capital construction across Climate Zones 4A, 5A, and 6A.
* **Founder Background:** NAAB B.Arch, multigenerational Missouri construction family heritage, lived experience in old, drafty, and modern homes. Narrative-meets-physics editorial philosophy.
* **Legal Status:** Sole proprietorship / independent digital publisher. Zero corporate "LLC" or physical address claims. Full legal compliance deployed at `privacy.html`, `terms.html`, and `disclosure.html` (FTC 16 CFR Part 255).
* **Network Structure:** Strictly standalone. Zero phantom networks or placeholder regional domains.

---

## 2. Article Inventory & Content Architecture
* **Total Published Articles:** **39 live specifications** across all building science disciplines.
* **Compiler Engine:** [`build.js`](build.js) compiles `content/*.md` into `articles/*.html` and native `.md` AEO twins, auto-generates Schema.org JSON-LD (`Article`, `TechArticle`, `FAQPage`, `HowTo`), regenerates [`data.js`](data.js), [`rss.xml`](rss.xml), [`llms.txt`](llms.txt), and [`sitemap.xml`](sitemap.xml) (45 URLs with dynamic `<lastmod>`).
* **Recent Production Deployments (Nov 2, 2026):**
  * [`load-bearing-wall-removal-lvl.md`](content/load-bearing-wall-removal-lvl.md) &rarr; [`articles/load-bearing-wall-removal-lvl.html`](articles/load-bearing-wall-removal-lvl.html) (Sizing LVL beams, temporary shoring, and continuous point load footing transfer).
  * [`furnace-vent-pipe-freeze-lockout.md`](content/furnace-vent-pipe-freeze-lockout.md) &rarr; [`articles/furnace-vent-pipe-freeze-lockout.html`](articles/furnace-vent-pipe-freeze-lockout.html) (Emergency winter Category IV condensing flue icing and pressure switch diagnostics).
  * [`heat-pump-aux-heat-lockout-balance-point.md`](content/heat-pump-aux-heat-lockout-balance-point.md) &rarr; [`articles/heat-pump-aux-heat-lockout-balance-point.html`](articles/heat-pump-aux-heat-lockout-balance-point.html) (Dual-fuel COP curves and economic balance point staging).
  * [`sump-pump-failure-spring-thaw-backups.md`](content/sump-pump-failure-spring-thaw-backups.md) &rarr; [`articles/sump-pump-failure-spring-thaw-backups.html`](articles/sump-pump-failure-spring-thaw-backups.html) (Exterior discharge pipe freezing and rapid thaw hydrostatic head mitigation).
  * [`cold-climate-septic-well-freeze-solutions.md`](content/cold-climate-septic-well-freeze-solutions.md) &rarr; [`articles/cold-climate-septic-well-freeze-solutions.html`](articles/cold-climate-septic-well-freeze-solutions.html) (Rural deep frost line penetration, uninsulated transport piping, and pressure switch protection).
* **Staged Backlog Inventory (4 Specifications Remaining):**
  1. [`siding-comparison-hardie-lpsmartside-vinyl.md`](content/backlog/siding-comparison-hardie-lpsmartside-vinyl.md) — Staged for **Monday, Nov 9**
  2. [`emergency-window-repair-seal-failure.md`](content/backlog/emergency-window-repair-seal-failure.md) — Staged for **Monday, Nov 16**
  3. [`foundation-freeze-thaw-crack-repair.md`](content/backlog/foundation-freeze-thaw-crack-repair.md) — Staged for **Thursday, Nov 19 (Frost Heave & Wall Bowing)**
  4. [`roof-heat-tape-deicing-cables.md`](content/backlog/roof-heat-tape-deicing-cables.md) — Staged for **Monday, Nov 30 (Deep Freeze & Ice Dam Electrical Analysis Spoke)**
* **Recent Major Overhauls (Nov 2, 2026):**
  * **Batch 3 Library Destructuring:** All 38 articles converted to bespoke Blueprints (Material Teardowns, Retrofit SOPs, Forensic Diagnostics).
  * **Zero Em-Dash Rule Enforced:** 129 em-dashes eliminated across the entire site.
  * **AI Diction Cleaned:** 45 formulaic bullet prefixes and dramatic jargon replaced with direct jobsite diagnostics.
  * **Phantom Network Purge:** Removed placeholder top bar across 48 templates and pages.
  * **In-Body Contextual Internal Linking:** 104 contextual links injected under Google's Reasonable Surfer Model.
  * **Google Docs Two-Way Sync:** Top 6 winter emergency specifications exported to Google Docs for direct user rewriting (`docs-sync.json`).

---

## 3. The 60-Day Lead-Time Strategic Editorial Calendar
Search volume for seasonal emergencies requires 4 to 8 weeks of prior Googlebot indexing and ranking seasoning. Content deployed in November positions Midwest AEC to capture peak search volume during January polar vortexes and March spring thaws:

1. **Week 1 (Oct 26–30):** Foundation & Basement Expansion (Rammed Earth [Live Oct 26] + Legal Egress Windows [Live Oct 29] + ICF Diagnostic [Live Oct 30]).
2. **Week 2 (Nov 2–6):** Structural Walls & Winter Heat Pumps (LVL Beam Sizing [Nov 2] + Auxiliary Heat Lockouts [Nov 5]).
3. **Week 3 (Nov 9–13):** Cladding & Polar Vortex HVAC (Hardie vs LP SmartSide [Nov 9] + Frozen Furnace PVC Vents [Nov 12]).
4. **Week 4 (Nov 16–20):** Envelope Glazing & Frost Heave (Insulated Glass Unit Seal Failure [Nov 16] + Carbon Fiber Bowed Wall Shoring [Nov 19]).
5. **Week 5 (Nov 23–27):** Deep Frost Infrastructure & Spring Flood Prep (Bare-Ground Septic/Well Freezes [Nov 23] + Sump Pump Freeze-Relief & Inverters [Nov 26]).
6. **Week 6 (Nov 30–Dec 4):** Polar Freeze & Ice Dam Mitigation (Roof Heat Tape & De-Icing Cables Amps vs. Cold Roof Payback [Nov 30]).

---

## 4. Google Search Console & Automations
* **Property:** `sc-domain:midwestaec.com`
* **Bot Service Account:** `midwest-aec-bot@gen-lang-client-0789736011.iam.gserviceaccount.com` (Verified user in GSC).
* **API Scripts:**
  * [`scripts/fetch-queries.js`](scripts/fetch-queries.js): Pulls search impressions, clicks, CTR, and sitemap status.
  * [`scripts/fetch-pages.js`](scripts/fetch-pages.js): Pulls page-level impressions and position analytics.
  * [`scripts/gsc-full-report.js`](scripts/gsc-full-report.js): Full performance breakdown by date, query, and page.
  * [`scripts/telemetry-audit.js`](scripts/telemetry-audit.js): Comprehensive 28-day telemetry breakdown (queries, pages, queryPages, sitemaps).
  * [`scripts/daily-tuning.js`](scripts/daily-tuning.js): Programmatic micro-tuning engine mapping telemetry keywords to content files.
  * [`scripts/seasonal-radar.js`](scripts/seasonal-radar.js): Audits content against upcoming 21-day weather/seasonal search waves.
* **Antigravity Automations Configured:**
  1. `gsc-search-radar`: Daily at 7:00 AM Central (GSC query fetch & micro-tuning).
  2. `monday-backlog-deployer`: Mondays at 8:00 AM Central (Deploys staged backlog articles).
  3. `weekly-site-health`: Sundays at 11:00 PM Central (Crawls URLs for 200 OK).
  4. `seasonal-editorial-radar`: Daily at 8:00 AM Central (Looks ahead 21 days for coverage gaps).
* **Latest Site Health Audit (Oct 31, 2026, 6:21 PM Central):**
  * **Sitemap Reachability:** **40/40 URLs (100%) returned HTTP 200 OK** on `https://midwestaec.com` (Average edge latency: 135ms via Cloudflare edge CDN).
  * **Inventory Integrity:** Strict 1:1:1:1 count parity verified across 34 `content/*.md`, 34 `articles/*.html`, 34 `data.js` database records, and 40 `sitemap.xml` URLs.
  * **Link Integrity:** 745 internal hyperlinks checked with **0 broken links**.
  * **External Standards Reachability:** 9/14 verified active and responding (BPI, NFRC, FCICA, DSIRE, ACCA, ICC, Networx, Modernize, Schluter).
  * **Structured Data:** Validated with Schema.org JSON-LD (`Article`, `TechArticle`, `FAQPage`, `HowTo`).
* **Latest Telemetry Snapshot (Oct 31 / Nov 1, 2026):**
  * **37 active queries indexed (+27.6% growth over Oct 27)**.
  * **Total Clicks: 4 organic clicks maintained**:
    * `midwestaec.com/` (1 click, pos 2.0)
    * `balloon-framing.html` (1 click, 7 impr, 14.3% CTR, pos 5.9)
    * `insulating-brick.html` (1 click, 21 impr, 4.8% CTR, pos 32.6)
    * `historic-brick-retrofit-steps.html` (1 click, 8 impr, 12.5% CTR, pos 43.3)
  * **Surging Impression Clusters:**
    * `icf-basements-walls.html`: **94 impressions** across ICF queries:
      * "icf basements" (41 impr, pos 43.0)
      * "icf basement" (20 impr, pos 20.0 — **top of Page 2, striking distance of Page 1!**)
      * "insulated concrete forms foundation" (9 impr, pos 49.8)
      * "insulated concrete foundation" (4 impr, pos 54.0)
      * "ice block foundation" (3 impr, pos 62.7)
      * "icf concrete foundation" (2 impr, pos 68.0)
      * "insulated concrete form foundations" (2 impr, pos 45.0)
      * "insulated concrete forms basement walls" (1 impr, pos 35.0)
      * "insulated concrete forms basement" (1 impr, pos 40.0)
      * "insulated concrete walls" (1 impr, pos 41.0)
      * "icf foundation walls" (1 impr, pos 43.0)
      * "insulated concrete form basement" (1 impr, pos 43.0)
      * "insulated concrete form walls" (1 impr, pos 48.0)
      * "insulated concrete forms wisconsin" (1 impr, pos 79.0)
    * `embodied-carbon-materials.html`: **58 impressions** across:
      * "low carbon insulation" (32 impr, pos 86.7)
      * "low carbon footprint insulation" (14 impr, pos 95.9)
      * "biobased resin for insulation" (3 impr, pos 64.0)
      * "cellulose insulation carbon footprint" (2 impr, pos 80.0)
      * "recyclable insulation materials for building envelopes" (1 impr, pos 49.0)
    * `insulating-brick.html`: **21 impressions** + **1 click** ("insulation brick" 6 impr, pos 50.3; "insulating brick factory" 5 impr, pos 48.8; "clay insulating brick" 2 impr, pos 90.5).
  * **High-Intent Striking Distance Queries (Pages 1 & 2):**
    * `embodied-carbon-materials.html`: **"carbon sequestering insulation replacement maple grove mn"** (pos 11.0, 1 impr) and **"carbon sequestering insulation plymouth mn"** (pos 14.0, 1 impr).
    * `crawlspace-encapsulation.html`: **"enclosed crawlspace"** (pos 17.0, 1 impr).
    * `does-house-need-to-breathe.html`: **"why do they say that then"** (pos 20.0, 1 impr).
    * `cold-climate-heat-pumps.html`: **"r744 heat pump for cold winters"** (pos 27.0, 2 impr).
    * `crawlspace-encapsulation-steps.html`: **"how to do crawl space encapsulation"** (pos 34.0, 1 impr).
  * **Page 1 Organic Anchors:**
    * `energy-hikes.html` (pos 1.0)
    * `attic-frost-roof-sweating.html` (pos 3.0)
    * `balloon-framing-retrofit-steps.html` (pos 4.0, 2 impr)
    * `smart-vapor-retarders.html` (pos 4.4, 7 impr)
    * `bug-prevention.html` (pos 4.8, 4 impr)
    * `balloon-framing.html` (pos 5.9, 7 impr, 1 click, 14.3% CTR)
    * `crawlspace-encapsulation.html` (pos 6.0, 3 impr)
    * `off-grid-systems.html` (pos 6.0, 1 impr)
    * `basement-waterproofing.html` (pos 6.8, 6 impr)
    * `window-alternatives.html` (pos 7.0, 1 impr)
    * `about.html` (pos 9.0, 1 impr)
    * `when-to-replace-windows.html` (pos 11.0, striking distance)
    * `icf-basements-walls.html` (pos 20.0, striking distance)
    * `energy-hikes.html` (pos 1.0)
    * `attic-frost-roof-sweating.html` (pos 3.0)
    * `smart-vapor-retarders.html` (pos 3.6, 5 impr)
    * `balloon-framing-retrofit-steps.html` (pos 4.0)
    * `bug-prevention.html` (pos 4.75, 4 impr)
    * `basement-waterproofing.html` (pos 5.33, 3 impr)
    * `balloon-framing.html` (pos 5.86, 7 impr, 1 click, 14.3% CTR)
    * `crawlspace-encapsulation.html` (pos 6.0, 3 impr)
    * `window-alternatives.html` (pos 7.0)
    * `about.html` (pos 9.0)
    * `when-to-replace-windows.html` (pos 11.0, striking distance)
    * `does-house-need-to-breathe.html` (pos 20.0, striking distance)
    * `icf-basements-walls.html` (pos 20.29, striking distance)
* **Historical Telemetry Snapshot (Oct 26, 2026):**
  * **24 active queries indexed (+14.3% DoD, +71.4% 48h)**.
  * **Total Clicks: 3 organic clicks (+50% DoD growth)**:
    * `midwestaec.com/` (1 click, pos 2.0)
    * `balloon-framing.html` (1 click, 7 impr, 14.3% CTR, pos 5.86)
    * **MILESTONE**: `insulating-brick.html` recorded its **first organic click**! (18 impr, 1 click, 5.56% CTR, pos 34.56).
  * **Surging Impression Clusters:**
    * `icf-basements-walls.html`: **57 impressions (+46.2% surge DoD)** across 11 query variations:
      * "icf basements" (25 impr, pos 41.2)
      * "icf basement" (11 impr, pos 17.2 — **Page 2 striking distance of Page 1!**)
      * "insulated concrete forms foundation" (6 impr, pos 48.7)
      * "icf concrete foundation" (2 impr, pos 68.0)
      * "insulated concrete foundation" (2 impr, pos 63.0)
      * "icf foundation walls" (1 impr, pos 43.0)
      * "insulated concrete form walls" (1 impr, pos 48.0)
      * "insulated concrete forms basement" (1 impr, pos 40.0)
      * "insulated concrete forms basement walls" (1 impr, pos 35.0)
      * "insulated concrete walls" (1 impr, pos 41.0)
      * "ice block foundation" (1 impr, pos 67.0)
      * *Tuning Action*: Added high-visibility section `## Why an ICF Basement Outperforms a Standard Poured Concrete Foundation` detailing bone-dry ICF concrete foundations, eliminated cold zones, zero condensation, and storm shelter durability.
    * `embodied-carbon-materials.html`: **25 impressions (+56.3% surge DoD)** across:
      * "low carbon insulation" (15 impr, pos 85.8)
      * "low carbon footprint insulation" (8 impr, pos 95.9)
      * "cellulose insulation carbon footprint" (1 impr, pos 67.0)
      * *Tuning Action*: Added dedicated section `## Low Carbon Footprint Insulation: Comparative Life-Cycle Analysis` with benchmark table ($kg\,CO_2e/m^2$ at R-20) and highlighted the net-negative cellulose insulation carbon footprint (-1.2 kg $CO_2e/m^2$).
    * `insulating-brick.html`: **18 impressions (+50% DoD)** + **1 click** ("insulation brick" pos 50.2, "clay insulating brick" pos 90.5).
  * **Brand New High-Intent Query Breakouts (Indexed Oct 26):**
    * `continuous-insulation.html`: "continuous exterior insulation" entered at pos 96.0 (1 impr). Tuned with dedicated section on rainscreen furring, bug screens, and thermal window extension bucks.
    * `rockwool-vs-fiberglass.html`: "fiberizing section for rock wool" entered at pos 90.0 (1 impr). Tuned with engineering breakdown of cupola smelting, 3,000–7,000 RPM multi-wheel centrifugal fiberizers, binder atomization, and pendulum fleece layering.
    * `sips-vs-traditional-framing.html`: "framed panel vs stressed skin panel" entered at pos 78.0 (1 impr). Tuned with structural engineering contrast of discrete stud load concentration vs composite I-beam stress skin load distribution.
    * `cold-climate-heat-pumps.html`: "r744 heat pump for cold winters" entered at pos 27.0 (2 impr, striking distance!). Tuned with transcritical carbon dioxide refrigeration cycle, high suction pressure preservation at -20°F, and 150°F+ hydronic output.
  * **Page 1 Organic Anchors:**
    * `energy-hikes.html` (pos 1.0)
    * `attic-frost-roof-sweating.html` (pos 3.0)
    * `smart-vapor-retarders.html` (pos 3.6, 5 impr)
    * `balloon-framing-retrofit-steps.html` (pos 4.0)
    * `bug-prevention.html` (pos 4.75, 4 impr)
    * `basement-waterproofing.html` (pos 5.33, 3 impr)
    * `balloon-framing.html` (pos 5.86, 7 impr, 1 click, 14.3% CTR)
    * `crawlspace-encapsulation.html` (pos 6.0, 3 impr)
    * `window-alternatives.html` (pos 7.0)
    * `when-to-replace-windows.html` (pos 11.0, striking distance)

---

## 5. Affiliate & Contractor PPL Status
* **Networx:** Application in progress. In dialogue with affiliate rep. Non-exclusive agreement.
* **Modernize:** Application submitted, pending review.
* **Lead Value Targets:** Emergency HVAC ($120–$180), Foundation Repair ($150–$250), Waterproofing ($80–$140), Siding & Structural ($100–$160).

---

## 6. How to Resume Work from Any Device (Cloud / Remote)
1. **Via GitHub Codespaces (Browser-based, zero install):**
   * Go to `https://github.com/DySkills/midwestaec`.
   * Press the `.` key on your keyboard (or click **Code &rarr; Codespaces &rarr; Create codespace on main**).
   * A full VS Code environment will load directly in your web browser with terminal, Node.js, and git.
2. **Via Another Computer:**
   * Clone the repo: `git clone https://github.com/DySkills/midwestaec.git`
   * Run `npm install`
   * Run `node build.js` to build the site.
