# Midwest AEC - Agent Briefing (Standing Orders)

> **Updated:** November 8, 2026. This file replaces the October briefing (archived in `Refs/archive/`).
> **Read order for a new chat:** this file, then `Refs/MIDWEST_MASTER_REFERENCE.md`, then `AGENT_HANDOFF.md`.
> If two documents disagree, this file wins, then the master reference, then the handoff.

---

## 1. Project

* **Publication:** Midwest AEC (MidwestAEC™, Midwest Architecture, Engineering & Construction). Use the ™ on the brand mark in mastheads and legal pages.
* **Live site:** https://midwestaec.com (Cloudflare in front of GitHub, branch `main`)
* **Repo:** https://github.com/DySkills/midwestaec
* **Workspace:** `C:\Users\Dylen\Desktop\AEC\Midwest`
* **Region:** Climate Zones 4A, 5A, 6A (IL, IN, IA, KS, MI, MN, MO, ND, NE, OH, SD, WI)
* **Business model:** Pay-per-lead contractor referrals (Networx primary, Modernize secondary) plus technical affiliate tools. No display ads. Affiliate disclosure stays on `disclosure.html`.
* **Standalone site.** No sister networks. Never add a network bar or links to Northwest, Southwest, Southeast, Northeast, or Tropical sites.

## 2. Voice

* Plainspoken building scientist with jobsite experience. Second person ("you") and third-person building science.
* No autobiographical stories. The background shows up as technical depth, not memoir.
* Calm and data-driven. No rants, no hype. Let ASTM data, physics, and codes make the case.
* Ground examples in real Midwest housing: 1920s brick bungalows, balloon-framed two-stories, 1950-75 ranches, post-frame homes, ICF basements.

## 3. Article rules (non-negotiable)

1. **No em-dashes** in body text or headings. Use hyphens, commas, or parentheses.
2. **No formulaic bullet prefixes** like `- **The Noun:**`. Write the point as a sentence.
3. **Banned words:** furthermore, moreover, delve, tapestry, testament, paramount, psychrometric trap, catastrophic wedge, suffocating on latent moisture, Sump Pit Paradox. Use trade terms (head pressure, backdrafting, weeping tile, Delta-MS membrane, perm rating, thermal bridge, capillary break).
4. **Paragraphs:** 2 to 3 sentences each.
5. **No emojis** or decorative symbols.
6. **Links:** arrow before the link, `&rarr; [Title](url)`. Internal links go inside body paragraphs, not only in footer boxes. Link to `icf-basements-walls.html` where ICF or foundations come up.
7. **Headings:** descriptive and unnumbered in Features and Reports. Numbers only for Listicles and Tutorial steps.
8. **Opening:** a summary box with an executive summary and 3 to 4 takeaways.
9. **Closing:** a 4-question FAQPage JSON-LD block.
10. **Codes:** cite real codes with numbers (IRC R405/R406, R310, R806, R905; NFPA 54 / ANSI Z223.1; ASHRAE 62.2; IECC climate zones). Back performance claims with at least two sources (ASTM, ORNL/LBNL/NREL, ASHRAE Handbook, model codes, utility dockets).
11. **Empower first, safety net second:** give real DIY inspection criteria, then say clearly when to call a licensed contractor.
12. **Format:** every article is one of Feature, Report, Listicle, or Tutorial (see `EDITORIAL_GUIDE.md` for the layout of each).

## 4. Site structure

* Published articles: `content/published/<category>/<slug>.md` (9 category folders).
* Staged articles: `content/backlog/<slug>.md`.
* `build.js` compiles published articles to `articles/*.html` plus a markdown twin, and regenerates `data.js`, `sitemap.xml`, `rss.xml`, and `llms.txt`.
* **Count parity:** published markdown files = `articles/*.html` = `data.js` records = sitemap article URLs.
* Google Docs sync registry: `docs-sync.json` (6 winter articles).

## 5. Lead verticals (Networx form IDs)

| Trade | Lead value | Form ID |
|---|---|---|
| Basement waterproofing | $150-250 | 17 |
| Roofing and ice dams | $160-260 | 14 |
| HVAC (heat pumps, furnaces) | $120-180 | 10 |
| Foundation repair and shoring | $175-280 | 22 |
| Attic air sealing and insulation | $100-160 | 18 |
| Egress windows and concrete cutting | $110-170 | 12 |
| Siding | $140-220 | 15 |

Each how-to or diagnostic article should end its practical steps with a contractor-referral step that matches its trade.

## 6. Diagrams

Off-white `#FBFBFC` canvas, no grid. Navy `#161F83` for structure (60%), steel blue `#3274AE` for air and water (30%), crimson `#C42927` for heat loss and failure (10%). Sans-serif labels with leader lines. Tracker: `ARCHITECTURAL_DETAILS_CHECKLIST.md` (1 of 12 done).

## 7. How work gets done now (no automation)

The old scheduled automations (daily Search Console dispatcher, Monday backlog deployer, weekly health crawl, seasonal radar) are retired. Nothing runs on its own. Everything below happens when a chat asks for it.

**Claude can do (in chat, with the Midwest folder connected):**
* Write, revise, and audit articles against section 3.
* Rewrite titles, meta descriptions, and FAQ blocks for search.
* Analyze Search Console and Bing exports and recommend what to write or update.
* Write files into the Midwest folder.

**Claude cannot do from the cloud workspace:** run `node build.js`, run the Search Console scripts, run `gdocs` sync, commit or push to git, move or delete files.

**To publish an article:**
1. Claude writes or fixes the file and saves it to `content/published/<category>/`.
2. You delete the backlog copy, run `node build.js`, check counts, then commit.
3. You run `git push origin main`. Cloudflare deploys within about a minute.

**For search data:** export the Queries and Pages CSVs from Search Console (maximum date range) and from Bing Webmaster Tools, put them in a `data` folder, and ask for the analysis. Keyword Planner or Google Trends exports cover topics you do not rank for yet.

## 8. Open items

* Backlog count: the folder holds 56 files; older docs say 6 or 17. Needs a quality pass before publishing.
* Networx affiliate ID (`NETWORX_AFF_ID` in `build.js`): confirm whether it is set.
* Modernize application: status unknown.
* "icf basement" is at position 20; the ICF article is in the Docs sync list.
