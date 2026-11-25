# scripts

Everything here is run from the Midwest folder. `pull-data.bat` is the menu for the data pulls.

## Active (stays in this folder)

| File | What it does | Run from |
|---|---|---|
| lib-data.js | Shared helpers for the pull scripts (not run directly) | used by the pulls |
| pull-seo-data.js | Search Console and Bing data into data\latest | menu 1 |
| pull-index-status.js | Is each sitemap page indexed, and which canonical Google chose | menu 2 |
| pull-trends.js | Quick US-wide Google Trends check | menu 3 |
| pull-cloudflare.js | Cloudflare visits and crawlers | menu 4 |
| submit-indexnow.js | Tell Bing/IndexNow about changed pages | menu 5, 6 |
| pull-trends-midwest.js | Yearly 12-state Trends pull (slow, resumable) | menu 7 |
| submit-bing-urls.js | Called by build.js after a build | build.js |
| site-health-audit.js | Weekly check of links, sitemap and robots | node scripts\site-health-audit.js |
| latest-health-audit.json | Output of the health audit | |

## archive\ (kept, not used day to day)

One-off scripts from earlier rounds of work. They already did their job. Each one assumes it sits directly in scripts\, so run them from there if you ever need one again (move it up first).

- content-batches: the article rewrite, cluster update and link-injection scripts
- audits-and-checks: inventory, audit and inspection scripts
- old-data-pulls: earlier Search Console, Bing and Trends scripts replaced by the pull-* scripts

archive\_moves.csv lists every move so `organize-scripts.ps1 -Undo` can reverse it.
