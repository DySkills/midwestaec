const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\Dylen\\Desktop\\AEC\\Midwest';
const contentDir = path.join(rootDir, 'content');

// -----------------------------------------------------------------------------
// 1. summer-humidity-ac.md
// -----------------------------------------------------------------------------
const file1 = path.join(contentDir, 'summer-humidity-ac.md');
let c1 = fs.readFileSync(file1, 'utf8');

c1 = c1.replace('readTime: "8 min read"', 'readTime: "11 min read"');
c1 = c1.replace(
  'summary: "Why high-efficiency AC leaves Midwest homes cold and clammy: The thermodynamic conflict of sensible vs latent cooling, oversizing, and dehumidification engineering."',
  'summary: "House feels cold and clammy with AC running: Why oversized air conditioners fail to dehumidify, whole-home dehumidifier costs, and airflow tuning."'
);

const acHumiditySection = `## Whole-House Dehumidifiers vs. Oversized AC: Cost Breakdown & Sizing Rules

During July and August across the Corn Belt and Great Lakes, outdoor dew points routinely surge past 74°F. Homeowners frequently complain: *"My thermostat is set to 70°F, the air feels cold, but my home feels sticky, clammy, and my basement baseboards smell musty."*

### 1. The Physics of the "Cold & Clammy" Trap
When an air conditioner is oversized (e.g., a 4-ton unit installed where Manual J calculated a 2.5-ton load):
- The massive compressor satisfies the sensible temperature setpoint in just **6 to 10 minutes** and shuts off.
- To remove latent moisture from the air, the indoor evaporator coil must remain below the dew point (45°F to 50°F) for at least **15 to 20 minutes of continuous runtime**.
- In an oversized system, moisture condensed on the coil fins doesn't have time to drain; when the compressor short-cycles off and the fan keeps running, that moisture evaporates straight back into the supply ductwork.
- **The Relative Humidity Spike:** Relative humidity is temperature-dependent. When you lower indoor air temperature from 76°F to 70°F without removing water vapor, **relative humidity increases by 12% to 18%**. The result is a cold, clammy 70°F room with 72% RH—the exact biological breeding ground for dust mites and mildew.

### 2. Dedicated Central Dehumidifiers: Installed Price Breakdown
Rather than replacing your existing air conditioner, the building science solution is adding a dedicated whole-home dehumidifier integrated into your central ductwork:
- **Turnkey Installed Cost:** **$2,400 to $3,800** (featuring an Energy Star AHRI 920 certified unit such as the Aprilaire e100 / Santa Fe Ultra120).
- **Independent Humidity Control:** Operates completely independently of cooling calls. It samples return air and removes up to 100 to 120 pints of water per day, using 40% less electricity than running a short-cycling central AC compressor.
- **Thermostat Setpoint Lift:** Maintaining 45% to 50% relative humidity allows homeowners to comfortably set their summer AC thermostat to **75°F instead of 70°F**, cutting summer cooling bills by **15% to 25%** while eliminating clamminess.

---
`;

if (!c1.includes('Whole-House Dehumidifiers vs. Oversized AC')) {
  const target1 = `## Equipment Performance Benchmark: Humidity Control`;
  c1 = c1.replace(target1, acHumiditySection + '\n' + target1);
  fs.writeFileSync(file1, c1, 'utf8');
  console.log('✓ Updated summer-humidity-ac.md');
}

// -----------------------------------------------------------------------------
// 2. does-house-need-to-breathe.md
// -----------------------------------------------------------------------------
const file2 = path.join(contentDir, 'does-house-need-to-breathe.md');
let c2 = fs.readFileSync(file2, 'utf8');

c2 = c2.replace('readTime: "8 min read"', 'readTime: "10 min read"');
c2 = c2.replace(
  'summary: "Does an old house need to breathe? The building science truth about air leakage, moisture rot, stack pressure, and why controlled mechanical ventilation (ERV) is required."',
  'summary: "Does a house need to breathe myth: Why air leaks cause structural rot, ERV vs HRV costs in the Midwest, and balanced ventilation engineering (ASHRAE 62.2)."'
);

const ervHrvSection = `## ERV vs. HRV for Midwest Climates: Sizing, Costs & Humidity Recovery

The persistent myth that *"a house needs to breathe through random cracks"* has ruined thousands of homes. When an envelope "breathes" through random air leaks, humid outdoor air condenses inside wall cavities, causing structural framing rot and driving pollen, vehicle exhaust, and radon into living spaces. The building science rule is: **Build tight, ventilate right.**

### 1. ERV vs. HRV: Which System Wins in the Midwest?
Mechanical ventilation standards (ASHRAE 62.2 / IRC Section M1505) mandate balanced mechanical ventilation in tightly sealed homes (< 3.0 ACH50):
- **HRV (Heat Recovery Ventilator):** Transfers only sensible temperature (heat). Excellent in dry, sub-zero Arctic zones, but in humid Midwest summers, an HRV pulls outdoor humidity directly into the home without recovery.
- **ERV (Energy Recovery Ventilator):** Transfers both sensible heat *and* latent water vapor via a permeable enthalpy core.
- **The Midwest Verdict: ERV Is Superior.** In summer, an ERV pre-dries incoming humid air by transferring its moisture to the outgoing exhaust stream. In winter, it retains indoor moisture so your home doesn't drop to a bone-dry 15% RH that causes dry skin and static shocks.

### 2. Installed Cost Breakdown
- **Dedicated Ductwork Whole-Home ERV Package:** **$2,600 to $4,500** turnkey (featuring a high-efficiency unit like the Panasonic Intelli-Balance 100 or Broan AI Series). Includes outdoor intake/exhaust hoods spaced 10 feet apart, insulated flex ductwork, and digital multi-speed wall controls.
- **Operating Cost:** Variable-speed ECM motors draw barely 25 to 50 watts of electricity, costing roughly **$3.50 to $6.00 per month** to continuously deliver hospital-grade, MERV-13 filtered fresh air to every bedroom.

---
`;

if (!c2.includes('ERV vs. HRV for Midwest Climates')) {
  const target2 = `## The Action Plan: Specific Services & Implementation Steps`;
  c2 = c2.replace(target2, ervHrvSection + '\n' + target2);
  fs.writeFileSync(file2, c2, 'utf8');
  console.log('✓ Updated does-house-need-to-breathe.md');
}
