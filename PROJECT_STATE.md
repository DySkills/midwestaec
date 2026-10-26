# Midwest AEC: Master Project State & Continuity Guide

**Live Domain:** [`https://midwestaec.com`](https://midwestaec.com)  
**GitHub Repository:** [`https://github.com/DySkills/midwestaec`](https://github.com/DySkills/midwestaec) (Branch: `main`)  
**DNS & Edge Proxy:** Cloudflare (Edge SSL active)  
**Last Updated:** October 26, 2026

---

## 1. Project & Author Overview
* **Publication:** **Midwest AEC** (Midwest Architecture, Engineering & Construction).
* **Mission:** Independent building science publication focusing on residential envelope performance, cold-climate HVAC, moisture remediation, and capital construction across Climate Zones 4 and 5.
* **Founder Background:** NAAB B.Arch, multigenerational Missouri construction family heritage, lived experience in old, drafty, and modern homes. Narrative-meets-physics editorial philosophy.
* **Legal Status:** Sole proprietorship / independent digital publisher. Zero corporate "LLC" or physical address claims. Full legal compliance deployed at `privacy.html`, `terms.html`, and `disclosure.html` (FTC 16 CFR Part 255).

---

## 2. Article Inventory & Content Architecture
* **Total Published Articles:** **32 live specifications** (17 Reports, 9 Features, 4 Tutorials, 2 Listicles).
* **Compiler Engine:** [`build.js`](build.js) compiles `content/*.md` into `articles/*.html`, auto-generates Schema.org JSON-LD (`Article`, `FAQPage`, `HowTo`), regenerates [`data.js`](data.js), and generates [`sitemap.xml`](sitemap.xml) (38 indexed URLs).
* **Deployed Today (Monday, Oct 26):**
  * [`rammed-earth-midwest-flooring.md`](content/rammed-earth-midwest-flooring.md) &rarr; [`rammed-earth-midwest-flooring.html`](articles/rammed-earth-midwest-flooring.html) deployed live for **Flooring Day & Thermal Mass Week**.
* **Staged Backlog Inventory (9 Heavy-Hitter Specifications Remaining):**
  1. [`basement-egress-window-cutting.md`](content/backlog/basement-egress-window-cutting.md) — Staged for **Thursday, Oct 29**
  2. [`load-bearing-wall-removal-lvl.md`](content/backlog/load-bearing-wall-removal-lvl.md) — Staged for **Monday, Nov 2**
  3. [`heat-pump-aux-heat-lockout-balance-point.md`](content/backlog/heat-pump-aux-heat-lockout-balance-point.md) — Staged for **Thursday, Nov 5 (Early Winter Wave Spoke)**
  4. [`siding-comparison-hardie-lpsmartside-vinyl.md`](content/backlog/siding-comparison-hardie-lpsmartside-vinyl.md) — Staged for **Monday, Nov 9**
  5. [`furnace-vent-pipe-freeze-lockout.md`](content/backlog/furnace-vent-pipe-freeze-lockout.md) — Staged for **Thursday, Nov 12 (January Polar Wave Emergency HVAC)**
  6. [`emergency-window-repair-seal-failure.md`](content/backlog/emergency-window-repair-seal-failure.md) — Staged for **Monday, Nov 16**
  7. [`foundation-freeze-thaw-crack-repair.md`](content/backlog/foundation-freeze-thaw-crack-repair.md) — Staged for **Thursday, Nov 19 (Frost Heave & Wall Bowing)**
  8. [`cold-climate-septic-well-freeze-solutions.md`](content/backlog/cold-climate-septic-well-freeze-solutions.md) — Staged for **Monday, Nov 23 (Rural/Peri-Urban Deep Frost)**
  9. [`sump-pump-failure-spring-thaw-backups.md`](content/backlog/sump-pump-failure-spring-thaw-backups.md) — Staged for **Thursday, Nov 26 (March Hydrostatic Shock & Sump Backups)**

---

## 3. The 60-Day Lead-Time Strategic Editorial Calendar
Search volume for seasonal emergencies requires 4 to 8 weeks of prior Googlebot indexing and ranking seasoning. Content deployed in November positions Midwest AEC to capture peak search volume during January polar vortexes and March spring thaws:

1. **Week 1 (Oct 26–30):** Foundation & Basement Expansion (Rammed Earth Sub-Slab Matrix [Live] + Legal Egress Windows [Oct 29]).
2. **Week 2 (Nov 2–6):** Structural Walls & Winter Heat Pumps (LVL Beam Sizing + Auxiliary Heat Lockouts).
3. **Week 3 (Nov 9–13):** Cladding & Polar Vortex HVAC (Hardie vs LP SmartSide + Frozen Furnace PVC Vents).
4. **Week 4 (Nov 16–20):** Envelope Glazing & Frost Heave (Insulated Glass Unit Seal Failure + Carbon Fiber Bowed Wall Shoring).
5. **Week 5 (Nov 23–27):** Deep Frost Infrastructure & Spring Flood Prep (Bare-Ground Septic/Well Freezes + Sump Pump Freeze-Relief & Inverters).

---

## 4. Google Search Console & Automations
* **Property:** `sc-domain:midwestaec.com`
* **Bot Service Account:** `midwest-aec-bot@gen-lang-client-0789736011.iam.gserviceaccount.com` (Verified user in GSC).
* **API Scripts:**
  * [`scripts/fetch-queries.js`](scripts/fetch-queries.js): Pulls search impressions, clicks, CTR, and sitemap status.
  * [`scripts/fetch-pages.js`](scripts/fetch-pages.js): Pulls page-level impressions and position analytics.
  * [`scripts/telemetry-audit.js`](scripts/telemetry-audit.js): Comprehensive full 28-day telemetry breakdown (queries, pages, queryPages, sitemaps).
  * [`scripts/daily-tuning.js`](scripts/daily-tuning.js): Programmatic micro-tuning engine mapping telemetry keywords to content files.
  * [`scripts/seasonal-radar.js`](scripts/seasonal-radar.js): Audits content against upcoming 21-day weather/seasonal search waves.
* **Antigravity Automations Configured:**
  1. `gsc-search-radar`: Daily at 7:00 AM Central (GSC query fetch & micro-tuning).
  2. `monday-backlog-deployer`: Mondays at 8:00 AM Central (Deploys staged backlog articles).
  3. `weekly-site-health`: Sundays at 11:00 PM Central (Crawls URLs for 200 OK).
  4. `seasonal-editorial-radar`: Daily at 8:00 AM Central (Looks ahead 21 days for coverage gaps).
* **Sunday Site Health Audit (Oct 25, 2026, 11:05 PM Central):**
  * **Sitemap Reachability:** **37/37 URLs (100%) returned HTTP 200 OK** on `https://midwestaec.com` (Average edge latency: 57ms via Cloudflare edge CDN).
  * **Inventory Integrity:** Strict 1:1:1:1 count parity verified across 31 `content/*.md`, 31 `articles/*.html`, 31 `data.js` database records, and 37 `sitemap.xml` URLs.
  * **Link Integrity:** 511 internal hyperlinks checked with **0 broken links**.
  * **External Standards Reachability:** 8/8 verified active and responding (BPI, NFRC, FCICA, DSIRE, ACCA, ICC, Networx, Modernize).
  * **Structured Data:** Validated with Schema.org JSON-LD (`Article`, `FAQPage`, `HowTo`).
* **Latest Telemetry Snapshot (Oct 26, 2026):**
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
