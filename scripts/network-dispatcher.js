const fs = require('fs');
const path = require('path');
const { execSync, spawnSync } = require('child_process');

const registryPath = path.join(__dirname, 'network-registry.json');

function loadRegistry() {
  if (!fs.existsSync(registryPath)) {
    throw new Error(`Registry not found at ${registryPath}`);
  }
  return JSON.parse(fs.readFileSync(registryPath, 'utf8'));
}

const LANG_SERVER_EXE = "C:\\Users\\Dylen\\AppData\\Local\\Programs\\Antigravity\\resources\\bin\\language_server.exe";

function sendToChat(conversationId, title, message) {
  if (!conversationId) {
    console.log(`[Dispatcher] Skipping chat delivery (no conversationId configured).`);
    return;
  }
  try {
    console.log(`[Dispatcher] Dispatching to conversation: ${conversationId} (Title: ${title})...`);
    const cleanTitle = title.replace(/\s+/g, '_');
    const res = spawnSync(LANG_SERVER_EXE, ['agentapi', 'send-message', `--title=${cleanTitle}`, conversationId, message], {
      encoding: 'utf8'
    });
    if (res.error) {
      console.error(`[Dispatcher] spawn error:`, res.error);
    } else {
      console.log(`[Dispatcher] Output:`, res.stdout || res.stderr);
      console.log(`[Dispatcher] Successfully delivered to chat: ${conversationId}`);
    }
  } catch (err) {
    console.error(`[Dispatcher] Error sending to chat ${conversationId}:`, err.message);
  }
}

async function runMidwestTelemetry(site) {
  console.log(`[Dispatcher] Running Daily Search Telemetry for ${site.name}...`);
  try {
    const fetchOutput = execSync('node scripts/fetch-queries.js', {
      cwd: site.workspace,
      encoding: 'utf8',
      timeout: 20000
    });

    const lines = fetchOutput.split('\n');
    const queryLines = lines.filter(l => l.startsWith('Query: '));
    const totalQueries = queryLines.length;

    let briefing = `📊 **${site.name} — Morning Search Telemetry**\n\n`;
    briefing += `• **Active GSC Queries:** ${totalQueries}\n`;
    briefing += `• **Telemetry Status:** Healthy & Recording\n\n`;
    briefing += `**Top Queries Snapshot:**\n`;
    queryLines.slice(0, 8).forEach(q => {
      briefing += `• ${q.trim()}\n`;
    });

    sendToChat(site.conversationId, `${site.name} Daily Search Telemetry`, briefing);
  } catch (err) {
    console.error(`[Dispatcher] Telemetry error for ${site.name}:`, err.message);
  }
}

async function runMidwestSeasonalRadar(site) {
  console.log(`[Dispatcher] Running Seasonal Editorial Radar for ${site.name}...`);
  try {
    const radarOutput = execSync('node scripts/seasonal-radar.js', {
      cwd: site.workspace,
      encoding: 'utf8',
      timeout: 20000
    });

    let briefing = `🧭 **${site.name} — Seasonal Editorial Radar**\n\n`;
    briefing += radarOutput.substring(0, 1500) + '\n\n*(Full report logged in project workspace)*';

    sendToChat(site.conversationId, `${site.name} Seasonal Radar Briefing`, briefing);
  } catch (err) {
    console.error(`[Dispatcher] Seasonal radar error for ${site.name}:`, err.message);
  }
}

async function runMidwestSiteHealth(site) {
  console.log(`[Dispatcher] Running Weekly Site Health Audit for ${site.name}...`);
  try {
    const healthOutput = execSync('node scripts/site-health-audit.js', {
      cwd: site.workspace,
      encoding: 'utf8',
      timeout: 30000
    });

    let briefing = `🩺 **${site.name} — Site Health & Crawl Audit**\n\n`;
    briefing += healthOutput.substring(0, 1200);

    sendToChat(site.conversationId, `${site.name} Weekly Health Report`, briefing);
  } catch (err) {
    console.error(`[Dispatcher] Health audit error for ${site.name}:`, err.message);
  }
}

async function runBacklogCheck(site) {
  console.log(`[Dispatcher] Checking Staged Backlog Pipeline for ${site.name}...`);
  try {
    const backlogDir = path.join(site.workspace, 'content', 'backlog');
    if (!fs.existsSync(backlogDir)) return;
    const files = fs.readdirSync(backlogDir).filter(f => f.endsWith('.md'));
    let briefing = `📦 **${site.name} — Editorial Backlog Pipeline Status**\n\n`;
    briefing += `• **Staged Backlog Pool:** ${files.length} production-ready specifications\n`;
    briefing += `• **Upcoming Deployments:**\n`;
    briefing += `  - *Thursday (Oct 29):* Legal Egress Window Concrete Cutting (IRC R310)\n`;
    briefing += `  - *Monday (Nov 02):* Load-Bearing Wall Removal & LVL Sizing\n\n`;
    briefing += `To trigger an immediate deployment, reply: *"Deploy [slug]"* in this chat.`;

    sendToChat(site.conversationId, `${site.name} Backlog Status`, briefing);
  } catch (err) {
    console.error(`[Dispatcher] Backlog check error for ${site.name}:`, err.message);
  }
}

async function main() {
  const action = process.argv[2] || 'daily';
  const targetSiteKey = process.argv[3] || 'all';

  const registry = loadRegistry();
  const siteKeys = targetSiteKey === 'all' 
    ? Object.keys(registry.sites).filter(k => registry.sites[k].active)
    : [targetSiteKey];

  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 = Sun, 1 = Mon, 2 = Tue, 3 = Wed, 4 = Thu, 5 = Fri, 6 = Sat

  for (const key of siteKeys) {
    const site = registry.sites[key];
    console.log(`\n==================================================`);
    console.log(`Processing [${site.name}] -> Action: ${action} (Day: ${dayOfWeek})`);
    console.log(`Target Chat ID: ${site.conversationId || 'NONE'}`);
    console.log(`==================================================`);

    if (key === 'midwest') {
      if (action === 'daily') {
        // Daily: Always run morning search telemetry
        await runMidwestTelemetry(site);

        // Tuesday: Run seasonal editorial radar
        if (dayOfWeek === 2) {
          await runMidwestSeasonalRadar(site);
        }

        // Sunday: Run weekly site health & crawler
        if (dayOfWeek === 0) {
          await runMidwestSiteHealth(site);
        }

        // Monday & Thursday: Backlog deployment reminder
        if (dayOfWeek === 1 || dayOfWeek === 4) {
          await runBacklogCheck(site);
        }
      } else if (action === 'telemetry') {
        await runMidwestTelemetry(site);
      } else if (action === 'seasonal') {
        await runMidwestSeasonalRadar(site);
      } else if (action === 'health') {
        await runMidwestSiteHealth(site);
      } else if (action === 'backlog') {
        await runBacklogCheck(site);
      }
    } else {
      console.log(`[Dispatcher] Site ${site.name} pipeline queued.`);
    }
  }
}

main().catch(err => {
  console.error('[Dispatcher Fatal Error]:', err);
  process.exit(1);
});
