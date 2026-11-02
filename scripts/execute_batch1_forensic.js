const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\Dylen\\Desktop\\AEC\\Midwest';
const contentDir = path.join(rootDir, 'content');

console.log('=== RE-EXECUTING BATCH 1 WITH NORMALIZED CRLF REPLACEMENT ===');

function robustReplace(filePath, targetPattern, replacement) {
  let raw = fs.readFileSync(filePath, 'utf8');
  let norm = raw.replace(/\r\n/g, '\n');
  
  if (typeof targetPattern === 'string') {
    const targetNorm = targetPattern.replace(/\r\n/g, '\n').trim();
    if (norm.includes(targetNorm)) {
      norm = norm.replace(targetNorm, replacement.replace(/\r\n/g, '\n').trim());
      fs.writeFileSync(filePath, norm.replace(/\n/g, '\r\n'), 'utf8');
      console.log(`✓ Replaced string in ${path.basename(filePath)}`);
      return true;
    } else {
      console.warn(`⚠ String target NOT FOUND in ${path.basename(filePath)}`);
      return false;
    }
  } else if (targetPattern instanceof RegExp) {
    if (targetPattern.test(norm)) {
      norm = norm.replace(targetPattern, replacement.replace(/\r\n/g, '\n').trim());
      fs.writeFileSync(filePath, norm.replace(/\n/g, '\r\n'), 'utf8');
      console.log(`✓ Replaced regex in ${path.basename(filePath)}`);
      return true;
    } else {
      console.warn(`⚠ Regex target NOT FOUND in ${path.basename(filePath)}`);
      return false;
    }
  }
}

// -----------------------------------------------------------------------------
// 1. basement-waterproofing.md
// -----------------------------------------------------------------------------
const f1 = path.join(contentDir, 'basement-waterproofing.md');
const oldIntro1 = `## Spring Cloudburst in Indianapolis at 58°F

It is 6:00 PM on an April Tuesday on the north side of Indianapolis, Indiana. A violent line of spring thunderstorms has stalled over Marion County, dumping 3.4 inches of rain in under four hours onto heavy, saturated clay lawns, and the red bar stops at a sodden 58°F.

Inside a three-year-old home with a finished basement, the homeowner walks downstairs to grab a load of laundry. Stepping onto the luxury vinyl plank (LVP) flooring, a soft squishing sound echoes underfoot.

Pressing down with a shoe, milky-white water oozes up between the seams of the planks. Across the playroom, the expensive flooring is cupping, buckling, and lifting two inches off the slab in long ridges. 

Pulling back several planks reveals a shocking sight: the underside of the vinyl is soaked in condensation, the factory sound-dampening foam backing has turned into a slimy biofilm, and the concrete slab is covered in a gritty white crust of efflorescence salts.

The homeowner checks the sump pump. The basin is bone dry, and the pump never turned on. There are no cracks in the drywall and no visible water pouring down the foundation walls. 

Where did the water come from?

The disaster was caused by two compounding physical forces: **hydrostatic head pressure** pooling in the uncompacted backfill trench, and **subterranean capillary vapor transmission** that completely bypassed a cheap, shredded 6-mil plastic vapor barrier beneath the slab.`;

const newIntro1 = `## Active Failure Symptoms: The Cove Joint Hydrostatic Leak

During torrential spring downpours or rapid seasonal snowmelts, homeowners across the Great Lakes and Northern Plains face a sudden, alarming failure: water pooling along the basement perimeter while the sump pump basin remains bone dry.

### The Immediate Visual Symptoms
1. **The Floor-Wall Seep (The Cove Joint):** Water oozes upward along the seam where the concrete floor slab meets the exterior foundation wall. It runs beneath baseboards, saturating carpets and cupping vinyl planks without a single crack visible in the upper concrete wall.
2. **Squishing Under Finished Flooring:** Stepping onto basement flooring produces a squishing sound as trapped groundwater is forced up through click-lock seams, carrying dissolved alkaline salts (white powdery efflorescence) across the floor.
3. **The Sump Pit Paradox:** The primary sump pit sits dry while water pools 20 feet away on the far side of the basement. The sub-slab water table has crested, but localized hydrostatic pressure cannot reach the sump basin because the footing drainage path is crushed, silt-clogged, or non-existent.

This failure is not a roof or gutter mystery. It is the direct physical consequence of **hydrostatic head pressure** pooling in the excavated "clay bowl" around your foundation, combined with groundwater migrating upward through porous concrete cold seams.`;

robustReplace(f1, oldIntro1, newIntro1);

// -----------------------------------------------------------------------------
// 2. ice-dams-roofs.md
// -----------------------------------------------------------------------------
const f2 = path.join(contentDir, 'ice-dams-roofs.md');
const oldIntro2 = `## The Icicle Curtain at 18°F

It is late January in Minneapolis. Outside, the morning air is dead calm and biting cold at 18°F. 

On the north-facing eaves of a 1950s story-and-a-half bungalow, a frozen curtain of massive icicles hangs from the aluminum gutters. Some of the ice spears are thicker than a baseball bat, stretching five feet down toward the snowdrifts below. 

Inside, in the second-floor master bedroom, the homeowner hears a slow, rhythmic sound: *drip... drip... drip.*

Looking up, a tea-colored water stain is blooming across the white plaster ceiling directly above the window casing. A small blister in the latex paint swells, tears, and releases a trickle of dirty water down the interior wall trim, pooling on the hardwood floor.

The homeowner assumes the roof has failed. They bundle up, climb a snowbank with a snow shovel, and begin furiously hacking at the gutter ice. Within ten minutes, an errant blow cracks the frozen aluminum gutter and punctures two asphalt shingles, exposing bare fiberglass matting. 

The homeowner thinks they have an exterior roofing problem. In reality, they have an **interior thermal envelope and stack-effect building science failure**.`;

const newIntro2 = `## Immediate Symptom Triage: The Eave Ice Dam & Interior Wall Leaks

When a midwinter Arctic blast settles across the Great Lakes and Upper Midwest, thousands of homes develop thick ice ridges along their roof eaves, accompanied by interior ceiling leaks:

### 1. The Active Failure Symptoms
- **The Eave Ice Wall:** A solid block of ice, 3 to 10 inches thick, freezes inside the gutters and extends 2 to 4 feet up the roof slope, creating a reservoir of trapped liquid water behind it.
- **The Tea-Colored Ceiling Stain:** Meltwater backed up beneath the asphalt shingles bypasses overlapping shingle laps, saturates attic insulation, and drips through drywall or plaster ceilings directly above exterior windows.
- **Paint Blisters & Siding Seepage:** Trapped water runs down exterior wall framing, bubbling interior latex paint and weeping out through exterior siding laps or soffits.

### 2. Immediate Emergency Action (Do This Today)
1. **Never Hack Ice with Shovels or Hammers:** Striking frozen shingles with axes, hammers, or shovels shatters cold asphalt granules and punctures the underlying decking, causing permanent structural leaks.
2. **Relieve Interior Drywall Pockets:** If ceiling sheetrock is sagging with water, place a bucket beneath and pierce the drywall center with a screwdriver to drain the trapped water cleanly before the ceiling collapses.
3. **Engage Professional Low-Pressure Steaming:** If water is actively running into your walls, the only safe emergency removal is low-pressure steam (100–250 PSI at 290°F). Avoid high-pressure power washers, which blast off shingle granules.`;

robustReplace(f2, oldIntro2, newIntro2);

// -----------------------------------------------------------------------------
// 3. false-spring-envelope-thaw.md
// -----------------------------------------------------------------------------
const f3 = path.join(contentDir, 'false-spring-envelope-thaw.md');
const oldIntro3 = `## Mid-February, and the First False Spring Is Around the Corner...

Across the Midwest, February is a month of extremes. One week, a polar vortex drives the mercury to -15°F in Minneapolis, Chicago, and Des Moines. The ground freezes solid down to 48 inches, furnaces run continuously, and frost coats the interior of unconditioned attics. 

Then, within 48 hours, a massive warm front sweeps up from the Gulf of Mexico. Outdoor temperatures spike to 45°F under bright sunshine. Snow on south-facing roofs begins to melt rapidly, birds start chirping, and homeowners celebrate the arrival of "False Spring."

Inside the home, however, a series of hidden building science failures is triggered:

1. **The Raining Attic:** The thick hoarfrost that accumulated on the underside of the cold roof sheathing melts in an afternoon, raining water down into ceiling insulation and leaking through recessed can lights.
2. **The Sweating Basement:** Outdoor dew points surge into the 50s, while the basement concrete floor remains locked at a sub-surface 38°F. The floor begins sweating profusely, causing "waterproof" luxury vinyl plank (LVP) flooring to cup and buckle.
3. **The Ice Dam Collapse:** Snowpack insulation melts from beneath, feeding unsealed eave ice dams that force water under shingles and behind siding.

Here is the building science autopsy of why these False Spring failures occur, what they reveal about your home's thermal and air barriers, and the exact steps to remediate them before next winter.`;

const newIntro3 = `## Immediate Symptom Triage: The 24-Hour False-Spring Melt Disaster

In late winter, weather across the Great Lakes and Northern Plains frequently swings from 5°F to 45°F within 36 hours. Under bright sunshine, this rapid temperature spike triggers immediate building envelope distress:

### 1. Active Failure Symptoms
- **The "Raining Attic" Phenomenon:** Water drips from ceiling recessed can lights, bathroom exhaust grilles, and smoke detectors on sunny 40°F days when there has been zero rain.
- **The Sweating Basement Slab:** Finished basement floors become slick with condensation, and click-lock flooring squishes underfoot as humid warm air contacts deep-soil chilled concrete.
- **Ice Dam Wall Flooding:** Sun-melted snowpack flows into frozen eave dams, backing liquid water up past the roof perimeter membrane into exterior wall cavities.

### 2. Immediate Diagnostic Triage: Roof Defect vs. Melting Hoarfrost
Before hiring an emergency roofer to tear off shingles, confirm the water source:
- If water drips during a sunny thaw without rain, shine a flashlight onto the underside of your attic roof sheathing.
- If the plywood is black, damp, and dripping water across broad areas with rust rings around every roofing nail, your roof is not leaking from outside. You are witnessing the catastrophic thaw of **indoor winter hoarfrost**.`;

robustReplace(f3, oldIntro3, newIntro3);

// -----------------------------------------------------------------------------
// 4. summer-humidity-ac.md
// -----------------------------------------------------------------------------
const f4 = path.join(contentDir, 'summer-humidity-ac.md');
const oldIntro4 = `## Corn-Sweat Humidity in Kansas City at 96°F

It is late July in Kansas City, Missouri. The sprawling cornfields of the Midwest are transpiring millions of gallons of water vapor into the atmosphere—a regional phenomenon known as "corn sweat"—and the outdoor temperature hits 96°F with an 76°F dew point. 

Inside a newly constructed, two-story suburban home, the central air conditioning system is blasting. The high-efficiency 4-ton AC condenser outside hums with impressive power, cycling on and off like clockwork. 

The digital thermostat in the living room reads 70°F. The air blowing from the ceiling registers feels cold. 

Yet, walking through the house, the indoor environment feels miserable. The air is heavy, clammy, and sticky. Bedding feels noticeably damp to the touch. 

Down in the finished basement, the air is freezing cold—barely 63°F—but the relative humidity is pegged at 78%. Water droplets are beading on the cool surface of the luxury vinyl plank (LVP) flooring, and a musty mildew odor is rising from the baseboards. 

The homeowner lowers the thermostat to 68°F, hoping to "dry out" the house. Within two hours, the house feels like an underground meat locker, the basement floor is slick with water, and the family is wearing hoodies in July. 

What went wrong?

The homeowner fell into the **Midwest Summer Humidity Trap**: an engineered mismatch between sensible cooling and latent moisture removal caused by equipment oversizing and short-cycling.`;

const newIntro4 = `## Active Failure Symptoms: The "Cold & Clammy" 70°F / 72% RH Basement Trap

During peak Midwest summers, when outdoor dew points exceed 72°F along river basins and the Great Lakes, homeowners experience a baffling mechanical failure: their air conditioner runs constantly, the air is cold, but the house feels sticky, clammy, and smells musty.

### 1. Active Failure Symptoms
- **The "Meat Locker" Sensation:** The living room thermostat reads a chilly 68°F or 70°F, yet bedsheets feel damp, hardwood floors feel tacky under bare feet, and indoor air feels oppressively heavy.
- **The Sweating Basement Floor:** Downstairs, the finished basement hovers at 62°F with relative humidity pegged at **75% to 80%**. Liquid moisture beads on vinyl flooring, baseboards swell, and closet clothes develop musty mildew odors.
- **Rapid AC Short-Cycling:** The outdoor central AC condenser kicks on for only 6 to 10 minutes, blasts cold air through registers, and abruptly shuts off.

### 2. The Failed Band-Aid: Why Lowering the Thermostat Makes It Worse
When homeowners feel clammy, their natural instinct is to drop the thermostat from 72°F down to 68°F. This creates a severe psychrometric disaster:
- Lowering temperature without removing water vapor causes **relative humidity to skyrocket**.
- Cold air holds dramatically less moisture than warm air; chilling an already humid room drives indoor air right to its condensing dew point.
- The indoor space becomes colder and *more humid*, accelerating mold growth while burning massive electric kilowatt-hours.`;

robustReplace(f4, oldIntro4, newIntro4);
