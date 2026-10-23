const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '..', 'content');
const backlogDir = path.join(__dirname, '..', 'content', 'backlog');

const seasonalWaves = [
  {
    name: "Early Winter Hard Freeze & Furnace Kickoff",
    dateRange: "Nov 1 - Nov 20",
    startMonth: 11, startDay: 1, endMonth: 11, endDay: 20,
    searchIntent: "First cold snap, frozen hose bibs, rim joist drafts, furnace short-cycling",
    targetTrade: "HVAC & Air Sealing Contractors",
    recommendedSpoke: "Electric Auxiliary Heat Lockout: Setting the Thermostat Balance Point on Heat Pumps"
  },
  {
    name: "Deep Freeze & Tariff Bill Shock Wave",
    dateRange: "Dec 15 - Jan 20",
    startMonth: 12, startDay: 15, endMonth: 1, endDay: 20,
    searchIntent: "Utility bill shock, ice dams forming, 150 CFM stack effect infiltration",
    targetTrade: "Insulation & Roofing Contractors",
    recommendedSpoke: "Roof Heat Tape & De-Icing Cables: Electrical Amps, Fire Hazards & Cold Roof Payback"
  },
  {
    name: "The False Spring Thaw Wave",
    dateRange: "Feb 1 - Feb 25",
    startMonth: 2, startDay: 1, endMonth: 2, endDay: 25,
    searchIntent: "Attic hoarfrost melting into ceilings, sweating concrete basement slabs, LVP buckling",
    targetTrade: "Roofing & Basement Waterproofing Contractors",
    recommendedSpoke: "Emergency Ice Dam Steaming vs. Roof Hacking: Damage Risks & Shingle Warranties"
  },
  {
    name: "Spring Deluge & Foundation Hydrostatic Wave",
    dateRange: "Mar 20 - May 1",
    startMonth: 3, startDay: 20, endMonth: 5, endDay: 1,
    searchIntent: "Sump pump failure, cove joint seepage, wet drywall baseboards, replacement windows",
    targetTrade: "Basement Waterproofing & Replacement Windows",
    recommendedSpoke: "Sump Pump Sizing & Dual-Battery Backups: Gallons Per Hour (GPH) & Check Valve Physics"
  }
];

function runRadar() {
  const now = new Date();
  // Look ahead 21 days
  const future = new Date(now.getTime() + 21 * 24 * 60 * 60 * 1000);
  const futureMonth = future.getMonth() + 1; // 1-based
  const futureDay = future.getDate();

  console.log(`[RADAR] Current Date: ${now.toDateString()}`);
  console.log(`[RADAR] Looking ahead 21 days to: ${future.toDateString()} (Month ${futureMonth}, Day ${futureDay})\n`);

  const liveFiles = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
  const backlogFiles = fs.existsSync(backlogDir) ? fs.readdirSync(backlogDir).filter(f => f.endsWith('.md')) : [];

  console.log(`--- Live Specifications Active: ${liveFiles.length} ---`);
  console.log(`--- Staged Backlog Inventory: ${backlogFiles.length} (${backlogFiles.join(', ') || 'None'}) ---\n`);

  // Find matching wave for 21 days out
  const upcoming = seasonalWaves.find(w => {
    if (w.startMonth <= w.endMonth) {
      return (futureMonth > w.startMonth || (futureMonth === w.startMonth && futureDay >= w.startDay)) &&
             (futureMonth < w.endMonth || (futureMonth === w.endMonth && futureDay <= w.endDay));
    } else {
      // Wraps around year (e.g. Dec to Jan)
      return (futureMonth === 12 && futureDay >= w.startDay) || (futureMonth === 1 && futureDay <= w.endDay);
    }
  }) || seasonalWaves[0];

  console.log(`[UPCOMING SEASONAL WAVE IN 21 DAYS]:`);
  console.log(`Wave: "${upcoming.name}" (${upcoming.dateRange})`);
  console.log(`Search Pain Points: ${upcoming.searchIntent}`);
  console.log(`Target Contractor Trade: ${upcoming.targetTrade}`);
  console.log(`\n[EDITORIAL GAP ANALYSIS & RECOMMENDATION]:`);
  console.log(`Recommended Spoke Report to Draft: "${upcoming.recommendedSpoke}"`);
  console.log(`Action: Draft into content/backlog/ this week so it indexes before the wave hits!`);
}

runRadar();
