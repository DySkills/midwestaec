const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\Dylen\\Desktop\\AEC\\Midwest';
const contentDir = path.join(rootDir, 'content');

// 1. ice-dams-roofs.md
const f1 = path.join(contentDir, 'ice-dams-roofs.md');
let c1 = fs.readFileSync(f1, 'utf8').replace(/\r\n/g, '\n');

const old1 = `## The Icicle Curtain at 18°F

It is 7:30 AM on a bright January morning in Minneapolis. Outside, the sun reflects brilliantly off a fresh eight-inch blanket of powder, and the red bar stops at a crisp 18°F. 

Along the front eaves of a 1978 colonial home, an ominous row of three-foot icicles hangs suspended like a wall of crystal daggers, bowing the aluminum gutters under hundreds of pounds of solid ice. Inside, a faint, rhythmic sound breaks the morning quiet: *drip... drip... drip...* In the upstairs bedroom, a dark, amber water stain has expanded across the drywall ceiling, and meltwater is slowly leaking around the casing of the north-facing window into a plastic bucket on the carpet.

In a panic, the homeowner drives to the local home center, loading their shopping cart with zigzag electric heating cables, an aluminum telescoping roof rake, and nylon pantyhose stuffed with calcium chloride salt pucks. Within a week, a contractor arrives, proposing an urgent $14,000 mid-winter tear-off to replace the shingles with "heavy-duty architectural asphalt."

Neither purchase solves the problem. A brand-new roof will leak just as quickly as a thirty-year-old roof if the thermal mechanics beneath the plywood decking remain broken. Stopping an ice dam requires looking past the shingles and understanding the thermodynamic laws governing snow, air, and heat transfer.`;

const new1 = `## Immediate Symptom Triage: The Eave Ice Dam & Interior Wall Leaks

When a midwinter Arctic blast settles across the Great Lakes and Upper Midwest, thousands of homes develop thick ice ridges along their roof eaves, accompanied by interior ceiling leaks:

### 1. The Active Failure Symptoms
- **The Eave Ice Wall:** A solid block of ice, 3 to 10 inches thick, freezes inside the gutters and extends 2 to 4 feet up the roof slope, creating a reservoir of trapped liquid water behind it.
- **The Amber Ceiling Stain:** Meltwater backed up beneath the asphalt shingles bypasses overlapping shingle laps, saturates attic insulation, and drips through drywall or plaster ceilings directly above exterior windows.
- **Paint Blisters & Siding Seepage:** Trapped water runs down exterior wall framing, bubbling interior latex paint and weeping out through exterior siding laps or soffits.

### 2. Immediate Emergency Action (Do This Today)
1. **Never Hack Ice with Shovels or Hammers:** Striking frozen shingles with axes, hammers, or shovels shatters cold asphalt granules and punctures the underlying decking, causing permanent structural leaks.
2. **Relieve Interior Drywall Pockets:** If ceiling sheetrock is sagging with water, place a bucket beneath and pierce the drywall center with a screwdriver to drain the trapped water cleanly before the ceiling collapses.
3. **Engage Professional Low-Pressure Steaming:** If water is actively running into your walls, the only safe emergency removal is low-pressure steam (100–250 PSI at 290°F). Avoid high-pressure power washers, which blast off shingle granules.`;

if (c1.includes(old1)) {
  c1 = c1.replace(old1, new1);
  fs.writeFileSync(f1, c1.replace(/\n/g, '\r\n'), 'utf8');
  console.log('✓ Successfully updated ice-dams-roofs.md');
} else {
  console.warn('⚠ Could not match old1 in ice-dams-roofs.md');
}

// 2. false-spring-envelope-thaw.md
const f2 = path.join(contentDir, 'false-spring-envelope-thaw.md');
let c2 = fs.readFileSync(f2, 'utf8').replace(/\r\n/g, '\n');

const old2 = `## Mid-February, and the First False Spring Is Around the Corner...

Mid-February, and the first false spring is around the corner. Across Missouri, Illinois, Indiana, and Ohio, the brutal gray monotony of January suddenly cracks. The wind shifts from the northwest to the Gulf, the thermometer jumps from a biting 14°F on Monday morning to an unseasonable 52°F by Tuesday afternoon, and the heavy crust of dirty snow on the front lawn begins to slush and run.

Windows crack open for the first time in three months. Neighbors stand on driveways in light jackets, listening to the roar of gutters discharging snowmelt into the street. 

And then, inside thousands of homes across the Midwest, the quiet emergencies begin:

* In an upstairs hallway in Peoria, a homeowner hears a faint, rhythmic tapping on the ceiling drywall. They climb into the attic expecting to find a missing asphalt shingle, only to discover that the dark roof plywood is glistening wet, and droplets of water are raining down across eighteen inches of fiberglass insulation like a subterranean cave.
* In a finished basement in St. Louis, brand-new "100% waterproof" luxury vinyl plank (LVP) flooring begins to feel oddly spongy underfoot. When stepped on, water squishes through the click-lock seams, and a sharp, sour smell of damp concrete fills the recreation room.
* On the kitchen counter, the January utility bill sits open: \$512 for natural gas and electricity—a 45% jump over last year—despite the thermostat never climbing above 68°F.

Panicked homeowners call roofing contractors for emergency shingle replacements, flooring installers for warranty claims, and HVAC technicians for new furnace bids. In nearly every instance, all three service calls misdiagnose the underlying cause. 

The roof didn't leak, the flooring wasn't defective, and the furnace didn't fail. What the false spring revealed is the forensic reality of the building envelope: **the physics of uncontrolled air leakage, winter moisture condensation, and thermal equilibrium.**`;

const new2 = `## Immediate Symptom Triage: The 24-Hour False-Spring Melt Disaster

In late winter, weather across the Great Lakes and Northern Plains frequently swings from 5°F to 45°F within 36 hours. Under bright sunshine, this rapid temperature spike triggers immediate building envelope distress:

### 1. Active Failure Symptoms
- **The "Raining Attic" Phenomenon:** Water drips from ceiling recessed can lights, bathroom exhaust grilles, and smoke detectors on sunny 40°F days when there has been zero rain.
- **The Sweating Basement Slab:** Finished basement floors become slick with condensation, and click-lock flooring squishes underfoot as humid warm air contacts deep-soil chilled concrete.
- **Ice Dam Wall Flooding:** Sun-melted snowpack flows into frozen eave dams, backing liquid water up past the roof perimeter membrane into exterior wall cavities.

### 2. Immediate Diagnostic Triage: Roof Defect vs. Melting Hoarfrost
Before hiring an emergency roofer to tear off shingles, confirm the water source:
- If water drips during a sunny thaw without rain, shine a flashlight onto the underside of your attic roof sheathing.
- If the plywood is black, damp, and dripping water across broad areas with rust rings around every roofing nail, your roof is not leaking from outside. You are witnessing the catastrophic thaw of **indoor winter hoarfrost**.`;

if (c2.includes(old2)) {
  c2 = c2.replace(old2, new2);
  fs.writeFileSync(f2, c2.replace(/\n/g, '\r\n'), 'utf8');
  console.log('✓ Successfully updated false-spring-envelope-thaw.md');
} else {
  console.warn('⚠ Could not match old2 in false-spring-envelope-thaw.md');
}

// 3. summer-humidity-ac.md
const f3 = path.join(contentDir, 'summer-humidity-ac.md');
let c3 = fs.readFileSync(f3, 'utf8').replace(/\r\n/g, '\n');

const old3 = `## Corn-Sweat Humidity in Kansas City at 96°F

It is 4:00 PM on a blistering July Friday in Kansas City, Missouri. Across the Missouri River basin and the rolling plains of western Missouri, millions of acres of mature corn are pumping billions of gallons of water vapor into the boundary layer through evapotranspiration. 

The outdoor humidity is sitting at a suffocating 78%, and the red bar stops at an oppressive 96°F.

The combined heat and moisture generate an outdoor dew point of **77°F**—tropical conditions rivaling the Gulf Coast of Florida.

Inside a suburban two-story home, the homeowners spent $14,000 in May to install a brand-new, top-of-the-line 5-ton 16-SEER2 central air conditioning system. The HVAC sales contractor assured them that "bigger is always better in the Midwest heat."

Yet standing in the living room, the atmosphere is miserable. The digital thermostat reads a frigid 67°F, but the indoor humidity display shows **68% relative humidity**. The leather sofa feels sticky and clammy. 

Downstairs in the finished basement, the environment is far worse. The basement air temperature is 63°F, but the relative humidity is sitting at **82%**. The air smells heavily of musty cellar rot, the baseboard trim behind the television is swelling, and a white powdery dusting of mold is forming across the backs of upholstered chairs.

The homeowners called the HVAC contractor back to complain. The technician checked the refrigerant charge, shrugged, and said: "The system is blowing 52°F air and the compressor is cycling perfectly. If you're still warm, just bump the thermostat down to 64°F."`;

const new3 = `## Active Failure Symptoms: The "Cold & Clammy" 70°F / 72% RH Basement Trap

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

if (c3.includes(old3)) {
  c3 = c3.replace(old3, new3);
  fs.writeFileSync(f3, c3.replace(/\n/g, '\r\n'), 'utf8');
  console.log('✓ Successfully updated summer-humidity-ac.md');
} else {
  console.warn('⚠ Could not match old3 in summer-humidity-ac.md');
}
