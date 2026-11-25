const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '..', 'content');
const backlogDir = path.join(__dirname, '..', 'content', 'backlog');

const seasonalWaves = [
  {
    id: "early-winter",
    name: "Early Winter Hard Freeze & Furnace Kickoff",
    dateRange: "Nov 1 - Nov 20",
    startMonth: 11, startDay: 1, endMonth: 11, endDay: 20,
    searchIntent: "First cold snap, frozen hose bibs, rim joist drafts, furnace short-cycling, aux heat strip spike",
    targetTrade: "HVAC & Air Sealing Contractors ($120-$180/lead)",
    primarySpoke: "Electric Auxiliary Heat Lockout: Setting the Thermostat Balance Point on Heat Pumps",
    recommendedSlug: "heat-pump-aux-heat-lockout-balance-point",
    relatedCornerstones: ["cold-climate-heat-pumps.md", "attic-air-sealing-baffles.md", "energy-hikes.md"]
  },
  {
    id: "deep-freeze",
    name: "Deep Freeze, Polar Vortex & Tariff Bill Shock Wave",
    dateRange: "Dec 15 - Jan 20",
    startMonth: 12, startDay: 15, endMonth: 1, endDay: 20,
    searchIntent: "Sub-zero furnace lockouts, ice dams forming, 150 CFM stack effect infiltration, frozen intake pipes, utility bill doubling",
    targetTrade: "Insulation, Roofing & Emergency HVAC Contractors ($150-$250/lead)",
    primarySpoke: "Roof Heat Tape & De-Icing Cables: Electrical Amps, Fire Hazards & Cold Roof Payback",
    recommendedSlug: "roof-heat-tape-deicing-cables",
    relatedCornerstones: ["ice-dams-roofs.md", "furnace-vent-pipe-freeze-lockout.md", "attic-frost-roof-sweating.md", "roof-insulation-over-sheathing.md"]
  },
  {
    id: "false-spring",
    name: "The False Spring Thaw Wave",
    dateRange: "Feb 1 - Feb 25",
    startMonth: 2, startDay: 1, endMonth: 2, endDay: 25,
    searchIntent: "Attic hoarfrost melting into ceilings, sweating concrete basement slabs, LVP buckling, emergency ice dam steam removal",
    targetTrade: "Roofing, Steaming & Basement Waterproofing Contractors ($140-$220/lead)",
    primarySpoke: "Emergency Ice Dam Steaming vs. Roof Hacking: Damage Risks & Shingle Warranties",
    recommendedSlug: "ice-dam-steaming-vs-roof-hacking",
    relatedCornerstones: ["false-spring-envelope-thaw.md", "attic-frost-roof-sweating.md", "basement-lvp-flooring-moisture.md"]
  },
  {
    id: "spring-deluge",
    name: "Spring Deluge & Foundation Hydrostatic Wave",
    dateRange: "Mar 20 - May 1",
    startMonth: 3, startDay: 20, endMonth: 5, endDay: 1,
    searchIntent: "Sump pump failure, cove joint seepage, wet drywall baseboards, hydrostatic head pressure, battery backup sizing",
    targetTrade: "Basement Waterproofing & Foundation Repair ($150-$250/lead)",
    primarySpoke: "Sump Pump Sizing & Dual-Battery Backups: Gallons Per Hour (GPH) & Check Valve Physics",
    recommendedSlug: "sump-pump-failure-spring-thaw-backups",
    relatedCornerstones: ["basement-waterproofing.md", "crawlspace-encapsulation.md", "sub-slab-insulation-specs.md"]
  }
];

function parseFrontmatter(filePath) {
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!match) return { title: path.basename(filePath, '.md'), slug: path.basename(filePath, '.md') };
    const yaml = match[1];
    const titleMatch = yaml.match(/title:\s*"([^"]+)"/);
    const slugMatch = yaml.match(/slug:\s*"([^"]+)"/);
    return {
      title: titleMatch ? titleMatch[1] : path.basename(filePath, '.md'),
      slug: slugMatch ? slugMatch[1] : path.basename(filePath, '.md')
    };
  } catch (e) {
    return { title: path.basename(filePath, '.md'), slug: path.basename(filePath, '.md') };
  }
}

function findMatchingWave(month, day) {
  return seasonalWaves.find(w => {
    if (w.startMonth <= w.endMonth) {
      return (month > w.startMonth || (month === w.startMonth && day >= w.startDay)) &&
             (month < w.endMonth || (month === w.endMonth && day <= w.endDay));
    } else {
      return (month === 12 && day >= w.startDay) || (month === 1 && day <= w.endDay);
    }
  });
}

function runRadar() {
  const now = new Date();
  
  // Tactical horizon: 21 days
  const tactical = new Date(now.getTime() + 21 * 24 * 60 * 60 * 1000);
  const tacticalMonth = tactical.getMonth() + 1;
  const tacticalDay = tactical.getDate();

  // Strategic indexing horizon: 50 days (4-8 weeks Googlebot seasoning)
  const strategic = new Date(now.getTime() + 50 * 24 * 60 * 60 * 1000);
  const strategicMonth = strategic.getMonth() + 1;
  const strategicDay = strategic.getDate();

  console.log(`================================================================================`);
  console.log(`        MIDWEST AEC PREDICTIVE SEASONAL EDITORIAL RADAR ENGINE                  `);
  console.log(`================================================================================`);
  console.log(`[TIMESTAMP] Execution Date: ${now.toDateString()} (${now.toLocaleTimeString()})`);
  console.log(`[RADAR 1] 21-Day Tactical Peak Window: ${tactical.toDateString()} (Month ${tacticalMonth}, Day ${tacticalDay})`);
  console.log(`[RADAR 2] 50-Day Strategic Indexing Runway: ${strategic.toDateString()} (Month ${strategicMonth}, Day ${strategicDay})\n`);

  const liveFiles = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
  const backlogFiles = fs.existsSync(backlogDir) ? fs.readdirSync(backlogDir).filter(f => f.endsWith('.md')) : [];

  const liveInventory = liveFiles.map(f => parseFrontmatter(path.join(contentDir, f)));
  const backlogInventory = backlogFiles.map(f => parseFrontmatter(path.join(backlogDir, f)));

  console.log(`--- Live Specifications Active: ${liveFiles.length} ---`);
  console.log(`--- Staged Backlog Inventory: ${backlogFiles.length} ---`);
  backlogInventory.forEach((b, i) => {
    console.log(`    [Backlog #${i+1}] ${b.slug}.md &rarr; "${b.title}"`);
  });
  console.log(``);

  // 1. Tactical Evaluation
  const tacticalWave = findMatchingWave(tacticalMonth, tacticalDay) || seasonalWaves[0];
  console.log(`--------------------------------------------------------------------------------`);
  console.log(`[TACTICAL RADAR: 21 DAYS OUT (PEAK ARRIVAL: ${tacticalWave.dateRange})]`);
  console.log(`Target Wave: "${tacticalWave.name}"`);
  console.log(`Search Pain Points: ${tacticalWave.searchIntent}`);
  console.log(`Contractor Value Hook: ${tacticalWave.targetTrade}`);
  
  // Check if primary spoke is live or staged
  const isTacticalLive = liveInventory.some(f => f.slug === tacticalWave.recommendedSlug || f.title.toLowerCase().includes(tacticalWave.primarySpoke.toLowerCase().slice(0, 20)));
  const isTacticalStaged = backlogInventory.some(f => f.slug === tacticalWave.recommendedSlug || f.title.toLowerCase().includes(tacticalWave.primarySpoke.toLowerCase().slice(0, 20)));

  if (isTacticalLive) {
    console.log(`Spoke Status: [LIVE & INDEXED] "${tacticalWave.primarySpoke}"`);
  } else if (isTacticalStaged) {
    console.log(`Spoke Status: [STAGED IN BACKLOG] "${tacticalWave.primarySpoke}"`);
    console.log(`  &rarr; File: content/backlog/${tacticalWave.recommendedSlug}.md (Scheduled for Week 2 Deployment)`);
    console.log(`  &rarr; Readiness: 100% Complete. Scheduled to hit Googlebot 10-14 days before peak freeze.`);
  } else {
    console.log(`Spoke Status: [CRITICAL EDITORIAL GAP] "${tacticalWave.primarySpoke}"`);
    console.log(`  &rarr; Action Required: Draft into content/backlog/ immediately!`);
  }

  // 2. Strategic Indexing Horizon Evaluation
  console.log(`\n--------------------------------------------------------------------------------`);
  const strategicWave = findMatchingWave(strategicMonth, strategicDay) || seasonalWaves[1];
  console.log(`[STRATEGIC RADAR: 50-DAY INDEXING RUNWAY (TARGET WINDOW: ${strategicWave.dateRange})]`);
  console.log(`Target Wave: "${strategicWave.name}"`);
  console.log(`Search Intent: ${strategicWave.searchIntent}`);
  console.log(`Contractor Value Hook: ${strategicWave.targetTrade}`);

  const isStrategicLive = liveInventory.some(f => f.slug === strategicWave.recommendedSlug || f.title.toLowerCase().includes(strategicWave.primarySpoke.toLowerCase().slice(0, 20)));
  const isStrategicStaged = backlogInventory.some(f => f.slug === strategicWave.recommendedSlug || f.title.toLowerCase().includes(strategicWave.primarySpoke.toLowerCase().slice(0, 20)));

  if (isStrategicLive) {
    console.log(`Spoke Status: [LIVE & INDEXED] "${strategicWave.primarySpoke}"`);
  } else if (isStrategicStaged) {
    console.log(`Spoke Status: [STAGED IN BACKLOG] "${strategicWave.primarySpoke}"`);
    console.log(`  &rarr; File: content/backlog/${strategicWave.recommendedSlug}.md`);
  } else {
    console.log(`Spoke Status: [UNFULFILLED STRATEGIC GAP & TOP DRAFTING TARGET]`);
    console.log(`  &rarr; Recommended Title: "${strategicWave.primarySpoke}"`);
    console.log(`  &rarr; Target Slug: ${strategicWave.recommendedSlug}.md`);
    console.log(`  &rarr; Why Now: December/January freeze and polar vortex searches spike violently.`);
    console.log(`           Drafting now provides the essential 4-6 week Googlebot crawling, rendering,`);
    console.log(`           and snippet seasoning runway required for Page 1 rankings.`);
  }

  // 3. Four-Wave Comprehensive Health Matrix
  console.log(`\n--------------------------------------------------------------------------------`);
  console.log(`[ANNUAL 4-WAVE COVERAGE MATRIX]`);
  console.log(`--------------------------------------------------------------------------------`);
  seasonalWaves.forEach(w => {
    const isLive = liveInventory.some(f => f.slug === w.recommendedSlug || f.title.toLowerCase().includes(w.primarySpoke.toLowerCase().slice(0, 20)));
    const isStaged = backlogInventory.some(f => f.slug === w.recommendedSlug || f.title.toLowerCase().includes(w.primarySpoke.toLowerCase().slice(0, 20)));
    const liveMatches = w.relatedCornerstones.filter(c => liveFiles.includes(c));
    const stagedMatches = w.relatedCornerstones.filter(c => backlogFiles.includes(c));

    let statusTag = '[OPEN GAP]';
    if (isLive) statusTag = '[LIVE]    ';
    else if (isStaged) statusTag = '[STAGED]  ';

    console.log(`${statusTag} ${w.name.padEnd(52)} (${w.dateRange})`);
    console.log(`           Primary Spoke: "${w.primarySpoke}"`);
    console.log(`           Live Anchors (${liveMatches.length}): ${liveMatches.join(', ') || 'None'}`);
    if (stagedMatches.length) {
      console.log(`           Backlog Spines (${stagedMatches.length}): ${stagedMatches.join(', ')}`);
    }
  });
  console.log(`================================================================================\n`);
}

runRadar();

