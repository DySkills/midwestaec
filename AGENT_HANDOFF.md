# Midwest AEC - Handoff

> **Updated:** November 8, 2026. Short pointer file. The rules live in `AGENT_BRIEFING.md`; the long reference is `Refs/MIDWEST_MASTER_REFERENCE.md`. Older versions of these files are in `Refs/archive/`.

## Start a new chat with this

```text
Please read C:\Users\Dylen\Desktop\AEC\Midwest\AGENT_BRIEFING.md, then C:\Users\Dylen\Desktop\AEC\Midwest\Refs\MIDWEST_MASTER_REFERENCE.md, and continue from there.
The active workspace is C:\Users\Dylen\Desktop\AEC\Midwest.
```

The chat needs the Midwest folder connected to read and write these files.

## Where things stand (November 8, 2026)

* **Live:** 39 articles in `content/published/` (9 category folders), compiled to `articles/`.
* **Health check (Nov 8, 6:00 AM Central):** 45 of 45 sitemap URLs returned 200, 635 internal links with none broken, 9 of 9 external standards links up, schema valid on all 39 articles, counts matching.
* **Backlog:** 56 files in `content/backlog/`, written Nov 6. Not yet audited. Older docs say 6 or 17.
* **Roadmap:** 104-article plan in Section 6 of the master reference (2 per week).
* **Search (latest numbers on file, Nov 6):** "icf basement" at position 20; `embodied-carbon-materials` at 95 impressions; `insulating-brick` at 3 clicks on 32 impressions (9.4% CTR); `crawlspace-encapsulation-steps` at position 29.8. Total clicks are still in the single digits, so expect slow movement and a 2 to 3 day reporting lag.
* **Google Docs sync:** 6 articles in `docs-sync.json`. You rewrite in Docs; to pull edits back, run the `gdocs readonly export` command from Section 8 of the master reference, then `node build.js`, then commit.

## Retired

The scheduled automations and the daily dispatcher chat are gone. Do not look for them, and do not recreate the `automations` folder or conversation-ID routing. The conversation ID from the earlier Antigravity chat no longer matters.

## Next

* Audit the 56 backlog files (em-dashes, banned words, bullet prefixes, code citations, internal link slugs, contractor-referral step).
* Pick the order to publish, winter topics first.
* Pull fresh Search Console and Bing exports to refresh the "what moved" picture.
* Sync Google Docs edits when ready.
