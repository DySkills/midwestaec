# Midwest AEC: Master Project State & Continuity Guide

**Live Domain:** [`https://midwestaec.com`](https://midwestaec.com)  
**GitHub Repository:** [`https://github.com/DySkills/midwestaec`](https://github.com/DySkills/midwestaec) (Branch: `main`)  
**DNS & Edge Proxy:** Cloudflare (Edge SSL active)  
**Last Updated:** October 24, 2026

---

## 1. Project & Author Overview
* **Publication:** **Midwest AEC** (Midwest Architecture, Engineering & Construction).
* **Mission:** Independent building science publication focusing on residential envelope performance, cold-climate HVAC, moisture remediation, and capital construction across Climate Zones 4 and 5.
* **Founder Background:** NAAB B.Arch, multigenerational Missouri construction family heritage, lived experience in old, drafty, and modern homes. Narrative-meets-physics editorial philosophy.
* **Legal Status:** Sole proprietorship / independent digital publisher. Zero corporate "LLC" or physical address claims. Full legal compliance deployed at `privacy.html`, `terms.html`, and `disclosure.html` (FTC 16 CFR Part 255).

---

## 2. Article Inventory & Content Architecture
* **Total Published Articles:** **31 live specifications** (17 Reports, 8 Features, 4 Tutorials, 2 Listicles).
* **Compiler Engine:** [`build.js`](build.js) compiles `content/*.md` into `articles/*.html`, auto-generates Schema.org JSON-LD (`Article`, `FAQPage`, `HowTo`), regenerates [`data.js`](data.js), and generates [`sitemap.xml`](sitemap.xml) (37 indexed URLs).
* **Staged Backlog Inventory (6 Specifications Staged):**
  1. [`rammed-earth-midwest-flooring.md`](content/backlog/rammed-earth-midwest-flooring.md) — Staged for **Monday, Oct 26 ("Flooring Day")**
  2. [`basement-egress-window-cutting.md`](content/backlog/basement-egress-window-cutting.md) — Staged for **Thursday, Oct 29**
  3. [`load-bearing-wall-removal-lvl.md`](content/backlog/load-bearing-wall-removal-lvl.md) — Staged for **Monday, Nov 2**
  4. [`heat-pump-aux-heat-lockout-balance-point.md`](content/backlog/heat-pump-aux-heat-lockout-balance-point.md) — Staged for **Thursday, Nov 5 (Early Winter Wave Spoke)**
  5. [`siding-comparison-hardie-lpsmartside-vinyl.md`](content/backlog/siding-comparison-hardie-lpsmartside-vinyl.md) — Staged for **Monday, Nov 9**
  6. [`emergency-window-repair-seal-failure.md`](content/backlog/emergency-window-repair-seal-failure.md) — Staged for **Monday, Nov 16**

---

## 3. The 5-Week Construction Pillar Cadence
Transitioning from purely seasonal weather triage to high-ticket, year-round evergreen construction needs ($80–$160/lead):
1. **Week 1 (Oct 26–30):** Foundation & Basement Expansion (Rammed Earth + Legal Basement Finishing & Egress Windows).
2. **Week 2 (Nov 2–6):** Structural Alterations & Wall Removal (Load-bearing walls, LVL sizing, shoring).
3. **Week 3 (Nov 9–13):** Cladding & Siding ($35k Hardie vs LP SmartSide vs Rainscreens).
4. **Week 4 (Nov 16–20):** 200-Amp Electrical Panel Upgrades (Load sizing for heat pumps & EVs).
5. **Week 5 (Nov 23–27):** Garage & Outbuilding ADU Conversions (Slab insulation, mini-splits, codes).

---

## 4. Google Search Console & Automations
* **Property:** `sc-domain:midwestaec.com`
* **Bot Service Account:** `midwest-aec-bot@gen-lang-client-0789736011.iam.gserviceaccount.com` (Verified user in GSC).
* **API Scripts:**
  * [`scripts/fetch-queries.js`](scripts/fetch-queries.js): Pulls search impressions, clicks, CTR, and sitemap status.
  * [`scripts/seasonal-radar.js`](scripts/seasonal-radar.js): Audits content against upcoming 21-day weather/seasonal search waves.
* **Antigravity Automations Configured:**
  1. `gsc-search-radar`: Daily at 7:00 AM Central (GSC query fetch & micro-tuning).
  2. `monday-backlog-deployer`: Mondays at 8:00 AM Central (Deploys staged backlog articles).
  3. `weekly-site-health`: Sundays at 11:00 PM Central (Crawls URLs for 200 OK).
  4. `seasonal-editorial-radar`: Daily at 8:00 AM Central (Looks ahead 21 days for coverage gaps).
* **Latest Telemetry Snapshot (Oct 24, 2026):**
  * 14 active queries indexed; 37 sitemap URLs successfully submitted and downloaded with 0 errors.
  * High-momentum clusters: `icf-basements-walls.html` (12 impressions, "icf basement" pos 15.0), `embodied-carbon-materials.html` (8 impressions, cellulose/low-carbon), `cold-climate-heat-pumps.html` (pos 29 for "r744 heat pump for cold winters").
  * Page 1 organic anchors: `smart-vapor-retarders.html` (pos 1.75), `energy-hikes.html` (pos 1.0), `balloon-framing.html` (pos 2.0, 1 click, 33.3% CTR).

---

## 5. Affiliate & Contractor PPL Status
* **Networx:** Application in progress. In dialogue with affiliate rep. Non-exclusive agreement.
* **Modernize:** Application submitted, pending review.
* **CJ Affiliate:** Postponed until monthly pageviews scale.

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
