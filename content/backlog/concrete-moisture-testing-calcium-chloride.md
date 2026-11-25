---
title: "Concrete Slab Moisture Testing: ASTM F1869 Calcium Chloride vs ASTM F2170 In-Situ Relative Humidity"
subtitle: "Forensic materials science analysis of Moisture Vapor Emission Rates (MVER), capillary equilibrium, digital RH sensor insertion at 40% slab depth, and epoxy moisture mitigation."
category: "water-barriers"
layout: post
readTime: 13 min read
date: "2026-05-08"
author: "Midwest AEC Building Science Diagnostic Taskforce"
authorRole: "Forensic Hydronic, Envelope, and Geotechnical Engineering Group"
heroImage: "/images/heroes/concrete-moisture-testing.png"
description: "Master ASTM concrete moisture testing before installing finished flooring over basement slabs. Compare calcium chloride MVER to in-situ relative humidity probes."
summary: "An engineering-grade diagnostic guide for Midwest flooring contractors and commercial inspectors on measuring concrete slab moisture emissions, drilling 40% depth RH sensor holes, and preventing floor adhesive debonding."
tags:
  - "Concrete Testing"
  - "Moisture Control"
  - "Flooring Diagnostics"
  - "Building Materials"
  - "Basement Protection"
---

# Concrete Slab Moisture Testing: ASTM F1869 Calcium Chloride vs ASTM F2170 In-Situ Relative Humidity

Across residential finished basements and commercial slab-on-grade structures throughout the Midwest, flooring adhesive failures represent one of the costliest construction defects. Luxury vinyl tile (LVT) curls at the edges, hardwood planks cup and warp, carpet emits persistent musty mold odors, and high-performance epoxy floor coatings develop giant fluid-filled blisters that pop and peel away from the concrete.

Contractors frequently claim the floor failed because of "bad glue" or a "defective batch of flooring." In reality, more than 95 percent of these failures are caused by unmitigated moisture vapor emissions migrating upward through the porous concrete slab from damp subgrade soils.

To prevent flooring failure, building science requires precise quantitative moisture testing before installation. However, intense confusion exists between two competing ASTM standards: the traditional **ASTM F1869 Anhydrous Calcium Chloride Test** and the modern **ASTM F2170 In-Situ Relative Humidity (RH) Probe Test**. Understanding the thermodynamic physics behind these tests is essential to choosing the correct moisture mitigation strategy.

```
            CONCRETE SLAB MOISTURE TESTING PHYSICS
            
       SURFACE TEST: ASTM F1869 (CALCIUM CHLORIDE)
       Measures ONLY the top 1/2" of concrete!
       +-----------------------------------------------+
       | Plastic Dome Sealed to Floor                  |
       | +---------------------------+                 |
       | | Anhydrous CaCl2 Crystals  | (Weighed Before |
       | | Absorbs Surface Vapor     |  & After 72 Hrs)|
       +-----------------------------+-----------------+
       =================== Slab Surface ================
       [DRY SURFACE ZONE: 1/2" depth dried by HVAC air]
       -------------------------------------------------
       [WET RESERVOIR ZONE: Deep slab saturated with     |
       | high moisture from uninsulated earth below!]   |
       =================================================
       
       DEEP EQUILIBRIUM TEST: ASTM F2170 (IN-SITU RH PROBE)
       Measures true internal slab humidity at 40% depth!
       =================== Slab Surface ================
       |               Drilled Hole (40% Depth)
       |               +-----------------+
       |               | Digital RH      | Reads TRUE internal
       |               | Sensor Sleeve   | equilibrium humidity:
       |               | [85% to 95% RH] | e.g. 92% RH!
       |               +-----------------+
       =================== Subgrade Earth ==============
```

---

## 1. The Materials Science of Concrete Moisture Transport

Poured concrete is not a solid, impermeable stone. It is a porous, permeable composite material interlaced with a microscopic network of capillary channels and gel pores formed as mixing water evaporates during hydration.

### The Drying Gradient and Fick's Second Law of Diffusion
When an indoor space is conditioned by an HVAC system (maintaining $70^\circ\text{F}$ and $40\%$ relative humidity), moisture evaporates rapidly from the top surface of the concrete slab. However, moisture transport within the dense concrete matrix is an extremely slow process governed by Fick's Second Law of Diffusion:

$$\frac{\partial C}{\partial t} = D \cdot \frac{\partial^2 C}{\partial z^2}$$

Where:
* $C$ is the moisture concentration at depth $z$.
* $t$ is the drying time.
* $D$ is the moisture diffusion coefficient of the concrete ($D \approx 10^{-7}\text{ to }10^{-8}\text{ cm}^2/\text{s}$).

Because moisture moves through concrete so slowly, a steep moisture gradient forms within the slab. The top 1/2-inch of concrete dries out and reaches equilibrium with the indoor air, while the bottom 3 inches of the slab remain nearly saturated with moisture drawn from the ground (often measuring $90\text{ to }98\%$ relative humidity).

### ASTM F1869: The Limitations of Calcium Chloride Testing
The ASTM F1869 test measures the **Moisture Vapor Emission Rate (MVER)**, expressed in pounds of water vapor released per 1,000 square feet of slab area over a 24-hour period ($\text{lbs}/1,000\text{ sq ft}/24\text{ hr}$):

$$\text{MVER} = \frac{\Delta w \cdot 24}{A \cdot t}$$

Where:
* $\Delta w$ is the weight gain of anhydrous calcium chloride crystals sealed under a plastic dome for 60 to 72 hours.
* $A$ is the contact surface area beneath the dome.
* $t$ is the precise duration of the test.

While MVER testing has been used for decades, it suffers from a fundamental physical flaw: **it only measures moisture in the top 1/2-inch of the concrete**. 

If a dry HVAC system has been running, the calcium chloride test will register a low, safe reading (e.g., $2.5\text{ lbs}/1,000\text{ sq ft}$), leading the contractor to believe the floor is ready for impermeable vinyl planks. 

However, the instant the impermeable flooring is glued down, the slab surface is sealed. Moisture evaporating from the deep, damp lower section of the slab can no longer escape into the room. Within days, moisture redistributes uniformly through the slab until the surface reaches the same high relative humidity as the bottom. The floor adhesive dissolves via alkaline hydrolysis, and the floor buckles.

### ASTM F2170: In-Situ Relative Humidity Probes
To solve this thermodynamic blind spot, structural flooring engineers developed **ASTM F2170**. This test measures the internal relative humidity of the slab at its future equilibrium state by inserting an electronic digital probe into a drilled hole.

Extensive research at the National Institute of Standards and Technology (NIST) proved that when a slab is sealed by finished flooring, the final uniform relative humidity of the entire slab equals the initial relative humidity measured at **exactly 40 percent of the slab's total thickness** (for a slab drying from one side, such as a basement floor on grade).

For a standard 4-inch concrete slab, drilling a test hole to a depth of **1.6 inches ($40\%$ depth)** and sealing a digital sensor probe inside allows contractors to measure the slab's true future equilibrium relative humidity with precision.

---

## 2. Why Aggregators and Handymen Misinterpret Testing

Mainstream DIY portals and general home repair articles promote disastrous testing mistakes:

1. **Relying on Handheld Pin or Impedance Surface Meters:** Contractors often press a handheld acoustic or electrical impedance pin meter against the surface of the concrete and declare the floor dry if the LED lights green. Surface meters measure only the top 1/4-inch of concrete. A surface can read completely dry even when the interior of the slab is holding hundreds of gallons of water.
2. **Ignoring Ambient Temperature Equilibrium:** Testing must be performed under the building's permanent operating temperature and humidity conditions. Performing moisture testing in an unconditioned building (e.g., $45^\circ\text{F}$ in winter without the furnace running) produces artificially low vapor readings that spike dramatically once the homeowner moves in and turns the heat up to $70^\circ\text{F}$.
3. **Failing to Identify Alkaline Hydrolysis:** When moisture vapor migrates through concrete, it dissolves calcium hydroxide ($\text{Ca(OH)}_2$) and other soluble salts, creating an alkaline solution with a pH of 11 to 13. When aggregators suggest using standard water-based flooring adhesive on a damp slab, they fail to recognize that pH 12 alkaline water destroys acrylic adhesives, turning the glue into a sticky, foul-smelling liquid.

---

## 3. Forensic Concrete Moisture Diagnostic Protocol

Follow this diagnostic triage sequence before installing resilient flooring, hardwood, or epoxy coatings.

| Test Parameter | Measured Value | Risk of Flooring Failure | Required Engineering Action |
|:---|:---|:---|:---|
| **ASTM F2170 In-Situ RH** | Less than 75% RH | Negligible; slab is in dry equilibrium | Standard low-VOC flooring adhesives permitted without mitigation. |
| **ASTM F2170 In-Situ RH** | 75% to 85% RH | Moderate; exceeds standard adhesive limits | Use moisture-resistant transitional adhesive rated up to 85% RH. |
| **ASTM F2170 In-Situ RH** | 85% to 95% RH | Severe; adhesive breakdown and mold growth guaranteed | Apply a 100% solids, two-part epoxy moisture mitigation barrier (ASTM F3010). |
| **ASTM F2170 In-Situ RH** | Greater than 95% RH | Extreme; active liquid wicking or uninsulated subgrade | Full shot-blast surface prep; apply 10-mil ASTM F3010 epoxy barrier plus underlayment. |
| **Concrete Surface pH** | pH 11.0 to 13.0 | Chemical saponification of standard glues | Apply alkaline-resistant primer or install complete epoxy vapor seal. |

---

## 4. Engineering-Grade Moisture Testing and Mitigation Protocol

```
                ASTM F2170 IN-SITU RH SENSOR DETAIL
                
   Drilled Hole Diameter: 5/8" to 3/4"
   Drilled to EXACTLY 40% of Slab Thickness (1.6" for 4" Slab)
   =================== Concrete Slab Surface ===================
     +---------------------------------------------------------+
     | Heavy-Duty Neoprene Sealing Cap                         |
     +---------------------------+-----------------------------+
                                 |
                                 | Solid Plastic Sleeve (ASTM F2170)
                                 | Prevents upper-slab vapor bypass
                                 |
                                 |
     ============================|==============================
     | Critical 40% Depth Line   |
     |                           v
     |             +---------------------------+
     |             | Digital RH / Temp Sensor  | <--- Equilibrium Probe
     |             | Measures at 40% depth!    |      Requires 24-hr rest!
     |             +---------------------------+
     ===========================================================
     Subgrade Gravel / Native Soil Earth
```

### Protocol A: Executing ASTM F2170 In-Situ RH Testing
1. **Site Conditioning:** Ensure the testing area has been maintained at service temperature ($65^\circ\text{F}\text{ to }75^\circ\text{F}$) and relative humidity ($40\%\text{ to }60\%$) for at least 48 hours prior to drilling.
2. **Frequency Standard:** Under ASTM F2170, perform three test holes for the first 1,000 square feet of slab area, and one additional test for each additional 1,000 square feet.
3. **Drilling to 40% Depth:** Measure the exact thickness of the concrete slab using an ultrasonic gauge or by drilling a test hole through the slab. For slabs drying from one side, multiply slab thickness by 0.40 (e.g., $4.0\text{ inches} \times 0.40 = 1.6\text{ inches}$). Use a rotary hammer drill with a 5/8-inch or 3/4-inch carbide bit equipped with a mechanical depth stop set to exactly $1.6\text{ inches}$.
4. **Hole Preparation and Sleeve Insertion:** Vacuum the hole thoroughly using a HEPA vacuum equipped with a micro-nozzle. Wire-brush the sides of the hole and vacuum again to remove all pulverized concrete dust. Insert the factory-calibrated sensor sleeve into the hole until it sits flush with the slab surface. Seal with the airtight cap.
5. **Equilibration and Measurement:** Allow the sealed hole to equilibrate for a minimum of **24 hours** (or per manufacturer specifications). Insert the digital relative humidity probe (such as a Wagner Rapid RH TotalCare sensor) into the sleeve. Record the equilibrium relative humidity and temperature.

### Protocol B: Epoxy Moisture Mitigation (ASTM F3010)
1. If the measured in-situ relative humidity exceeds **85 percent RH** (or MVER exceeds $5.0\text{ lbs}/1,000\text{ sq ft}/24\text{ hr}$), an engineered moisture mitigation membrane is mandatory before installing flooring.
2. Mechanically prepare the concrete surface using shot-blasting (ICRI CSP 3 profile). Acid etching is strictly prohibited because it drives moisture and chlorides into the slab.
3. Apply a two-part, 100 percent solids, amine-cured structural epoxy moisture barrier complying with **ASTM F3010** (such as Bostik D-250 or Mapei Planiseal EMB).
4. Apply the epoxy at a continuous thickness of 10 to 14 mils ($0.25\text{ to }0.35\text{ mm}$) to achieve a water vapor permeance of **less than 0.1 perms** (ASTM E96). This barrier permanently blocks moisture vapor and alkaline salts, allowing any finished floor to be installed on top with zero risk of adhesive failure.

---

## 5. Cost Schedule: Moisture Testing vs Flooring Remediation

| Project Scope / Component | Material Cost (DIY) | Professional Trade Range | Risk Avoidance Value |
|:---|:---|:---|:---|
| **ASTM F2170 Digital RH Starter Kit (5 Probes + Reader)** | $450 - $650 | $350 - $600 (Testing fee) | Provides certified data; required for flooring manufacturer warranties |
| **ASTM F1869 Calcium Chloride Dome Kit (Pack of 3)** | $45 - $80 | $200 - $350 (Testing fee) | Useful surface benchmark, but misses deep-slab reservoir moisture |
| **ASTM F3010 Two-Part Epoxy Vapor Barrier (per sq ft)** | $1.20 - $1.80 | $3.50 - $5.50 / sq ft | Permanent capillary seal; protects flooring up to 100% RH |
| **Flooring Adhesive Failure Tear-Out and Replacement** | $3.00 - $8.00 / sq ft | $4,500 - $12,000 | Scrapes ruined glue, replaces buckled vinyl or cupped hardwood |
| **Concrete Shot-Blasting Surface Prep (ICRI CSP 3)** | Machine rental | $0.80 - $1.50 / sq ft | Prepares concrete for 100% epoxy mechanical bond |

---

## 6. Building Code Citations and Testing Standards

* **ASTM F2170:** Standard Test Method for Determining Relative Humidity in Concrete Floor Slabs Using in situ Probes.
* **ASTM F1869:** Standard Test Method for Measuring Moisture Vapor Emission Rate of Concrete Subfloor Using Anhydrous Calcium Chloride.
* **ASTM F3010:** Standard Practice for Two-Component Resin Based Membrane-Forming Moisture Mitigation Systems for Use Under Resilient Floor Coverings.
* **ACI Standard 302.2R-06:** Guide for Concrete Slabs that Receive Moisture-Sensitive Flooring Materials, recommending in-situ relative humidity testing as the primary metric for slab readiness.
