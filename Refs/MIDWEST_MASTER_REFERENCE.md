# Midwest AEC: Master Reference & System Encyclopedia

> **Document Version:** 2.0 (November 2026)  
> **Target Audience:** Human Owners, Technical Editors, Antigravity Agents, and Subagents  
> **Live Production Domain:** [`https://midwestaec.com`](https://midwestaec.com)  
> **Canonical Root Workspace:** `C:\Users\Dylen\Desktop\AEC\Midwest`  
> **GitHub Repository:** [`https://github.com/DySkills/midwestaec`](https://github.com/DySkills/midwestaec) (Branch: `main`)  
> **Hosting & Edge Infrastructure:** Cloudflare Pages / GitHub Pages with Cloudflare Edge SSL  

---

## 1. Executive Summary & Brand Identity

### The Mission
**Midwest AEC** (Midwest Architecture, Engineering & Construction) is an independent building science and forensic construction publication engineered specifically for the extreme continental climatic stresses of the American Midwest.

### The Geographic & Climatic Footprint
* **IECC Climate Zones:** Zone 4A (Mixed-Humid, southern IL/IN/MO), Zone 5A (Cold, central Midwest/Great Lakes), and Zone 6A (Very Cold, Upper Midwest/Northern Plains).
* **Target States:** Illinois, Indiana, Iowa, Kansas, Michigan, Minnesota, Missouri, Nebraska, North Dakota, Ohio, South Dakota, Wisconsin.
* **Primary Metro Markets:** Chicago, Minneapolis–St. Paul, St. Louis, Kansas City, Indianapolis, Detroit, Cleveland, Columbus, Milwaukee, Des Moines, Omaha.
* **The Physics Reality:** The Midwest experiences greater annual temperature and humidity swings than almost any other populated region on earth: from $-25^\circ\text{F}$ polar vortexes with deep soil frost lines ($42''$ to $60''$) to $+95^\circ\text{F}$ summer heat waves with $80\%$ relative humidity and intense vapor drives. Buildings here fail from freeze-thaw cycles, capillary suction, thermal bridging, and severe inward moisture drives.

### Editorial Voice & Persona
* **The Author:** NAAB B.Arch graduate from a multigenerational Missouri builder family. Deep jobsite experience diagnosing historic drafty homes, wet basements, and modern high-performance envelopes.
* **Tone:** Authoritative, forensic building scientist and veteran jobsite superintendent.
* **Style:** Fact-first, trade-grounded, code-cited, and deeply practical. Zero academic jargon, zero filler, zero condescension.
* **Monetization Architecture:** High-intent Pay-Per-Lead (PPL) contractor dispatch (foundation repair, basement waterproofing, emergency HVAC, siding, structural framing) via Networx and Modernize targeting $120–$250 per qualified homeowner bid, plus technical tool/material affiliate partnerships. Strictly zero intrusive display ads or pop-up clutter.

---

## 2. Technical Architecture & Build Pipeline

Midwest AEC runs on a zero-framework, lightning-fast static site generator written in Node.js.

```
C:\Users\Dylen\Desktop\AEC\Midwest\
├── content/                    # 39 published production markdown files with YAML frontmatter
│   └── backlog/                # 4 staged seasonal backlog articles awaiting rollout
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
* **Never use em-dashes (`—`) in body text or headings.**
* Use hyphens (`-`), commas, or parentheses instead. A site-wide purge was executed across all 39 articles to ensure 0 em-dashes exist on the site.

### 2. No Formulaic Bullet Prefixes
* **Do not use** `- **The [Noun]:**` or `- **[Verb] the [Noun]:**` bullet structures.
* Integrate takeaways into natural, high-density trade sentences.

### 3. Banned AI Vocabulary
Strictly avoid academic/dramatic AI cliches:
* ❌ *Furthermore*, *Moreover*, *Delve*, *Tapestry*, *Testament*, *Paramount*
* ❌ *Catastrophic hydrostatic wedge*, *Psychrometric trap*, *Suffocating on latent moisture*, *Sump Pit Paradox*
* ✅ Use real jobsite terms: *head pressure*, *capillary rise*, *frost heave*, *backdrafting*, *weeping tile*, *Delta-MS dimple mat*, *R-value degradation*, *vapor permeance (perms)*, *thermal bridging*.

### 4. Code & Technical Standards
Every guide must cite real, enforceable residential codes with specific numerical dimensions:
* **IRC Section R405 / R406:** Foundation drainage, gravel bed sizing, damp-proofing vs full elastomeric waterproofing.
* **IRC Section R310:** Egress window net clear openings (minimum $5.7\text{ sq ft}$, maximum $44''$ sill height).
* **IRC Section R502 / R602:** Wood floor and wall framing, joist cutting/notching, LVL sizing, bearing requirements.
* **IRC Section R806:** Roof and attic ventilation ($1:150$ or $1:300$ rule with balanced ridge/soffit ratios).
* **NFPA 54 / ANSI Z223.1 / CSA B149.1:** Fuel Gas Code, Category IV venting, 1/4" per foot slope back to furnace, sidewall clearances.
* **ASHRAE 62.2 & 90.1 / IECC:** Mechanical ventilation, air changes per hour (ACH50), continuous insulation R-values.

### 5. In-Body Contextual Internal Linking (Reasonable Surfer Model)
* Google's Reasonable Surfer Model heavily discounts links tucked away in "Related Articles" boxes at the bottom of pages.
* High-priority internal links **must be woven directly into the editorial narrative paragraphs**.
* Currently, **104+ in-body contextual links** are active across the 39 articles.
* Special emphasis is placed on linking to the ICF hub ([`icf-basements-walls.html`](file:///C:/Users/Dylen/Desktop/AEC/Midwest/articles/icf-basements-walls.html)) to maintain Page 1 search ranking momentum for queries like `"icf basement"`.

---

## 4. Complete Published Article Inventory (39 Live Specifications)

| # | Slug | Category | Format | Primary Architectural / Building Science Focus |
|---|---|---|---|---|
| 1 | `attic-air-sealing-baffles` | Envelope | Tutorial | Rafter baffle baffles, top plate foam sealing, soffit intake airflow |
| 2 | `attic-frost-roof-sweating` | Envelope | Report | Cold-roof condensation, stack effect exfiltration, winter attic frost |
| 3 | `balloon-framing-retrofit-steps` | Historic | Tutorial | Continuous stud cavity fireblocking, mineral wool, dense-pack cellulose |
| 4 | `balloon-framing` | Historic | Report | Convective draft chimneys in 1880–1930s homes, structural firestops |
| 5 | `barndominium-post-frame` | Materials | Feature | Thermal breaks, girt framing, condensation control in steel post-frame |
| 6 | `basement-egress-window-cutting` | Basements | Tutorial | IRC R310 code compliance, diamond track sawing, gravel well drainage |
| 7 | `basement-lvp-flooring-moisture` | Basements | Report | Concrete vapor emission rates, 6-mil poly, dimple underlayments |
| 8 | `basement-waterproofing` | Basements | Report | Interior drain tile vs exterior excavation, hydrostatic pressure relief |
| 9 | `blower-door-checklist` | Diagnostics | Tutorial | Prep checklist, depressurization testing, CFM50 and ACH50 math |
| 10 | `bug-prevention` | Envelope | Listicle | Rainscreen insect screens, weep hole baffles, pest entry sealing |
| 11 | `cold-climate-heat-pumps` | HVAC | Report | Low-ambient inverter compressors, COP curves at $-15^\circ\text{F}$, backup heat |
| 12 | `cold-climate-septic-well-freeze-solutions` | Plumbing | Report | Frost line penetration ($48''$), snow cover insulation, line heating |
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

## 5. Staged Backlog Pipeline (4 Remaining Articles)

These articles are prepared and staged in `content/backlog/` for scheduled deployment:

1. **`siding-comparison-hardie-lpsmartside-vinyl.md`** (Target: Nov 9)
   * Fiber cement vs engineered wood strand vs vinyl cladding in freeze-thaw and hail climates.
2. **`emergency-window-repair-seal-failure.md`** (Target: Nov 16)
   * Insulated glass unit (IGU) desiccant saturation, fogging, and thermal seal restoration.
3. **`foundation-freeze-thaw-crack-repair.md`** (Target: Nov 19)
   * Frost heave lateral soil pressure, carbon fiber strap reinforcement, and epoxy injection.
4. **`roof-heat-tape-deicing-cables.md`** (Target: Nov 30)
   * Electrical operating costs of zig-zag de-icing cables vs long-term cold-roof air sealing payback.

---

## 6. Google Docs Two-Way Sync System

To allow manual editorial rewrites in a rich word processor without needing Microsoft Word or local desktop software, Midwest AEC integrates with Google Docs via the official `gdocs` plugin CLI using the authenticated account `zunesofficial@gmail.com`.

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

## 7. Google Search Console & Automations Telemetry

### GSC Configuration
* **Property:** `sc-domain:midwestaec.com`
* **Bot Account:** `midwest-aec-bot@gen-lang-client-0789736011.iam.gserviceaccount.com` (Verified Owner)
* **Credentials:** `gsc-credentials.json` (Protected by `.gitignore`, verified 100% untracked by Git).

### Daily Dispatcher (`C:\Users\Dylen\Desktop\AEC\automations\network-dispatcher.js`)
* Configured in `network-registry.json` to dispatch telemetry briefings directly to the active Antigravity chat session.
* Current Registered Conversation ID: `63fbd059-e331-49d5-b57d-727590d12336`.
* **Important:** If switching to a new permanent chat conversation, update `target_conversation_id` in `C:\Users\Dylen\Desktop\AEC\automations\network-registry.json` so morning reports deliver to the active window.

### Top SEO Opportunities & Telemetry Targets
1. **The ICF Basements Cluster (`icf-basements-walls.html`):**
   * Over 94 impressions across high-intent queries: `"icf basements"`, `"icf basement"`, `"insulated concrete forms foundation"`.
   * `"icf basement"` is hovering at **Position 20 (Top of Page 2)**. Internal linking and trade depth are designed to push this query onto Page 1.
2. **Embodied Carbon Materials (`embodied-carbon-materials.html`):**
   * Surged to 95 impressions across `"low carbon insulation"`, `"cellulose insulation carbon footprint"`, and localized commercial queries.
3. **Insulating Historic Brick (`insulating-brick.html`):**
   * Page 1/2 performance with active organic clicks on masonry thermal retrofits.
4. **Surging Winter Emergency Waves:**
   * Breakout seasonal queries: `"furnace blowing cold air"`, `"furnace clicking"`, `"aux heat on honeywell"`, `"frozen sump pump discharge pipe"`, `"frozen house pipes"`, `"prevent ice dams on roof"`.

### Search Console Telemetry Dynamics & Flatline FAQ
* **48-to-72 Hour GSC Reporting Lag:** Google Search Console operates on a delay. Fresh architectural changes, backlink propagation, or newly promoted articles take 2 to 3 days to register their first data points in API reporting.
* **Aggregated 28-Day Rolling Metrics:** GSC displays aggregated totals over a rolling 28-day window. When a cluster undergoes initial algorithmic testing (e.g. 94 impressions recorded during an indexing test), the total metric will appear flat until the next crawl and recalculation batch arrives.
* **Recrawl to Re-ranking Propagation Delay:** Googlebot sitemap ingestion (e.g. the 45-URL sitemap recrawl on Nov 4) occurs before search index recalculation. Moving from Page 2 (Position 20) to Page 1 typically requires a 7 to 14 day index evaluation window as Google recalculates internal PageRank distribution from in-body links.
* **Winter Wave Indexing Ramp:** Newly published seasonal emergency guides spend 5 to 10 days in standard indexing and crawl queues before generating their initial impression footprints.

---

## 8. Git & Deployment Workflow

* **Main Branch:** `main`
* **Local Commits:** The agent performs local git staging and commits automatically.
* **Remote Push:**
  * Windows Credential Manager can cause non-interactive background subshells to hang during `git push origin main`.
  * **Rule:** The agent creates clean local commits. The user executes `git push origin main` in their PowerShell window, or authorizes an interactive push.
* **Deployment Verification:** Cloudflare Pages auto-deploys upon push to `origin/main`. Changes are typically live within 60 seconds.

---

## 9. Handoff Instruction for New Chats

If opening a new chat window, simply paste:

```text
Please read the master reference documentation at C:\Users\Dylen\Desktop\AEC\Midwest\Refs\MIDWEST_MASTER_REFERENCE.md and continue from previous conversation ID: 63fbd059-e331-49d5-b57d-727590d12336.
The active workspace is C:\Users\Dylen\Desktop\AEC\Midwest.
```
