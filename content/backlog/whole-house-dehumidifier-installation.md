---
title: "Dedicated Whole-Home Dehumidifiers: Sizing, Dedicated Return-to-Supply Ducting, and Latent Load Physics"
subtitle: "Forensic HVAC psychrometrics of low-load homes, sensible heat ratios (SHR), dedicated duct configurations, energy factor ratings (L/kWh), and sub-slab moisture management."
category: "hvac"
layout: post
readTime: 14 min read
date: "2026-07-10"
author: "Midwest AEC Building Science Diagnostic Taskforce"
authorRole: "Forensic Hydronic, Envelope, and Geotechnical Engineering Group"
heroImage: "/images/heroes/whole-house-dehumidifier.png"
description: "Solve high indoor summer humidity and clammy air in tight Midwest homes. Size dedicated whole-house dehumidifiers (Aprilaire, Santa Fe) and duct properly."
summary: "An engineering-grade psychrometric guide for Midwest homeowners and HVAC contractors on sizing ducted whole-house dehumidifiers, decoupling latent loads, and installing dedicated return-to-supply airflow loops."
tags:
  - "Dehumidification"
  - "HVAC Diagnostics"
  - "Indoor Air Quality"
  - "Psychrometrics"
  - "Building Science"
---

# Dedicated Whole-Home Dehumidifiers: Sizing, Dedicated Return-to-Supply Ducting, and Latent Load Physics

Across Climate Zones 5A and 6A, modern building codes (such as the 2021 and 2024 IECC) mandate exceptionally tight, well-insulated building envelopes with continuous air barriers and high-performance windows. While these tightly built homes dramatically reduce winter heating bills and summer sensible cooling loads, they create a major building science challenge during humid Midwest summers: **unmanaged indoor latent moisture loads**.

During June, July, and August, outdoor dew point temperatures frequently exceed 70 to 75 degrees Fahrenheit. In a tightly built home, internal moisture generation (from human respiration, cooking, and showering) combined with sub-slab moisture vapor drive cannot escape. 

Because the home's high thermal resistance ($R\text{-value}$) keeps the air conditioner from running long enough to remove moisture (short sensible runtimes), the central AC cycles off before condensing sufficient humidity out of the air. The home becomes clammy and cold, with indoor relative humidity soaring to 65 to 75 percent, fostering dust mite proliferation and toxic fungal growth.

The engineering-grade solution is a **dedicated whole-home mechanical dehumidifier** (such as an Aprilaire e100 or Santa Fe Ultra120) ducted in a dedicated return-to-supply loop, decoupling latent moisture removal from sensible thermostatic cooling.

```
            DECOUPLING SENSIBLE COOLING FROM LATENT MOISTURE
            
       TRADITIONAL CENTRAL AC (FAILS IN TIGHT HOMES)
       Cools air quickly (Short sensible runtime); cycles off at 70°F.
       +---------------------------------------------------------------+
       | Supply Air (Cold: 55°F)                                       |
       | BUT Relative Humidity climbs to 70%! (Cold & Clammy!)         |
       | [Zero latent moisture removal when compressor is off!]        |
       +---------------------------------------------------------------+
       
       DEDICATED WHOLE-HOUSE DEHUMIDIFIER (WORKS!)
       Runs independently of central AC thermostat; targets 50% RH!
       +---------------------------------------------------------------+
       | Dedicated Living Area Return Duct (Draws warm, humid air)     |
       |                                                               |
       v                                                               |
   +------------------------------------+                              |
   | High-Efficiency Dehumidifier       |                              |
   | (Extracts 100-130 Pints/Day!)      |                              |
   | Energy Factor: > 2.0 L/kWh         |                              |
   +-----------------+------------------+                              |
                     |                                                 |
                     v Dry Air (50% RH)                                |
   +------------------------------------+                              |
   | Discharges into Central AC Supply  |                              |
   | or Dedicated Living Space Duct     | =============================+
   +------------------------------------+
   Warm, perfectly dry air distributes evenly; AC runs smoothly!
```

---

## 1. Psychrometric Physics of Sensible vs Latent Cooling Loads

The total cooling load ($q_{\text{total}}$) of a residential building is divided into two distinct thermodynamic components:

$$q_{\text{total}} = q_{\text{sensible}} + q_{\text{latent}}$$

Where:
* $q_{\text{sensible}}$ is the heat energy that changes air temperature without changing moisture content (heat conducting through walls, roofs, windows, and internal heat from lighting and electronics):
  
  $$q_{\text{sensible}} = 1.08 \cdot \text{CFM} \cdot \Delta T$$

* $q_{\text{latent}}$ is the heat energy required to condense water vapor into liquid water (the latent heat of vaporization of water, $h_{fg} \approx 1,061\text{ BTU/lb}$):
  
  $$q_{\text{latent}} = 4,840 \cdot \text{CFM} \cdot \Delta W$$
  
  (Where $\Delta W$ is the humidity ratio difference in pounds of moisture per pound of dry air).

### The Sensible Heat Ratio (SHR) Problem in Tight Homes
The proportion of sensible to total cooling load is defined as the **Sensible Heat Ratio (SHR)**:

$$\text{SHR} = \frac{q_{\text{sensible}}}{q_{\text{total}}} = \frac{q_{\text{sensible}}}{q_{\text{sensible}} + q_{\text{latent}}}$$

In an older, poorly insulated home with drafty single-pane windows, the sensible load is massive ($\text{SHR} \approx 0.80\text{ to }0.85$). The central air conditioner runs continuously for hours on a 90-degree day. As warm indoor air washes over the $45^\circ\text{F}$ evaporator coil, gallons of water condense on the aluminum fins and drain away. Moisture is removed as an incidental byproduct of cooling.

However, in a modern high-performance home with R-24 walls, R-60 attic insulation, and Low-E argon windows, sensible heat gain is reduced by more than **50 percent**. 

Yet the internal moisture load from human occupancy (roughly **20 to 30 pounds of water per day** for a family of four) remains completely unchanged! 

The home's Sensible Heat Ratio plunges to **$\text{SHR} \approx 0.55\text{ to }0.65$**. 

Because the central AC unit's thermostat measures *only dry-bulb temperature*, the high-efficiency compressor satisfies the sensible thermostat setting in just 8 to 12 minutes. 

It takes roughly 10 minutes for an evaporator coil to become cold enough to reach steady-state moisture condensing conditions. The instant the coil begins dripping, the thermostat reaches $72^\circ\text{F}$ and shuts the compressor off. The indoor blower shuts down, and the moisture sitting on the wet evaporator coil evaporates right back into the supply air stream!

---

## 2. Why Portable Basement Dehumidifiers and Aggregators Fail

Generic advice on home improvement portals consistently recommends ineffective solutions:

1. **Relying on Portable Rolling Dehumidifiers:** Aggregators often suggest placing a 50-pint portable dehumidifier in the basement. Portable units consume enormous amounts of electricity, with poor Energy Factors ($1.2\text{ to }1.5\text{ L/kWh}$). More importantly, a small portable unit has a weak 150-CFM fan that cannot circulate air throughout a 2,500-square-foot multi-level home. It creates an isolated dry zone in a 10-foot radius around the machine, while upstairs bedrooms remain at 70 percent RH.
2. **Oversizing the Central Air Conditioner:** Inexperienced HVAC technicians often propose solving high humidity by installing a larger 4-ton or 5-ton AC unit. Oversizing makes the problem far worse. A larger AC unit satisfies the thermostat even faster (dropping sensible runtime down to 5 minutes), completely eliminating latent dehumidification and causing severe short-cycling.
3. **Plumbing the Dehumidifier into the Return Duct Only:** Many contractors install whole-house dehumidifiers by pulling air from the central return duct and dumping it directly back into the return duct ("Return-to-Return"). This creates a short-circuit loop where hot, dry air recirculates inside the furnace cabinet, overheating the dehumidifier compressor and failing to deliver dry air to the living space.

---

## 3. Forensic Indoor Humidity Diagnostic Matrix

When evaluating high indoor humidity, musty odors, or clammy air during summer, apply this diagnostic protocol.

| Diagnostic Observation | Measured Environmental Conditions | Engineering Root Cause | Corrective Engineering Action |
|:---|:---|:---|:---|
| **Dry-bulb temperature is comfortable ($70^\circ\text{F}$), but RH is 68%** | Indoor dew point $> 59^\circ\text{F}$; AC runs $< 15$ min/hr | Low Sensible Heat Ratio ($\text{SHR} < 0.65$); AC short-cycling | Install dedicated ducted whole-home dehumidifier set to 50% RH. |
| **Condensation on supply registers and duct sweating** | Supply air temperature $54^\circ\text{F}$; ambient air dew point $60^\circ\text{F}$ | Cold supply air chilling uninsulated metal grilles below room dew point | Wrap supply boots in R-8 insulation; lower house dew point with dehumidifier. |
| **Basement floor tiles damp; efflorescence on concrete** | Slab relative humidity $> 90\%$ RH (ASTM F2170) | Capillary ground moisture evaporating into basement air volume | Apply epoxy vapor barrier; run dedicated dehumidifier continuous drain. |
| **Dehumidifier runs constantly, but humidity never drops below 60%** | Measured outdoor fresh air intake CFM exceeds 150 CFM | Excessive ventilation bringing humid outdoor air into building | Balance fresh air intake (HRV/ERV) to ASHRAE 62.2 code limits. |
| **Mold growing on closet shoes, leather, and baseboards** | Sustained relative humidity $> 65\%$ for over 72 hours | Exceeds microbial germination threshold ($a_w \ge 0.65$) | Lower target setpoint to 45-50% RH; treat active mold with antimicrobial wash. |

---

## 4. Engineering-Grade Installation Specification

```
            DEDICATED RETURN-TO-SUPPLY DEHUMIDIFIER DUCTING
            
       Dedicated Living Area Return Grilles (Main Floor / Hallway)
       +===========================================================+
       | 8" or 10" Rigid Galvanized Duct (Acoustically Lined)      |
       +-----------------------------+-----------------------------+
                                     |
                                     v
       +-----------------------------------------------------------+
       | Whole-House High-Efficiency Dehumidifier                  |
       | (Aprilaire e100 / Santa Fe Ultra120)                      |
       | MERV 13 Air Filtration + Digital Outdoor Humidity Control |
       | Energy Factor: 2.8 L/kWh (Energy Star Most Efficient)     |
       +-----------------------------+-----------------------------+
                                     |
                                     v Dry, Warm Air (85°F @ 25% RH)
       +-----------------------------------------------------------+
       | Backdraft Gravity Damper (Prevents AC Air Reversal)       |
       | Discharges into Central AC Supply Plenum Downstream of Coil|
       +===========================================================+
```

### Installation Standard (ASHRAE 62.2 & AHAM Standards)
1. **Duct Configuration (Dedicated Return to Main Supply):**
   * The professional engineering standard for whole-home dehumidification is the **Dedicated Return to Main Supply** configuration.
   * Pull return air directly from the living space using a dedicated 8-inch or 10-inch return grille located in a central hallway or high-humidity living area. This draws the warmest, most moisture-laden air into the dehumidifier.
   * Route the dry discharge air through a spring-loaded or gravity-operated backdraft damper into the central HVAC supply plenum **downstream of the air conditioner evaporator coil**.
   * Interlock the dehumidifier control board with the central furnace fan relay (using an internal fan activation contact, commonly marked `G`). When the dehumidifier senses indoor relative humidity exceeding the 50 percent setpoint, it simultaneously starts its internal compressor and activates the central HVAC variable-speed blower on low speed, circulating perfectly dry air throughout every room in the home.
2. **Equipment Sizing Standard:**
   * Sizing is calculated based on building square footage, envelope airtightness (ACH50), and occupant moisture load:
     * Homes up to $2,500\text{ sq ft}$ (tight construction, $< 3\text{ ACH50}$): Minimum **90 to 100 pints per day (PPD)** capacity (e.g., Aprilaire e100).
     * Homes over $2,800\text{ sq ft}$ or with unencapsulated basements/crawlspaces: Minimum **120 to 140 pints per day (PPD)** capacity (e.g., Santa Fe Ultra120).
   * Specify units with an Energy Factor of at least **$2.0\text{ to }2.8\text{ Liters per Kilowatt-Hour (L/kWh)}$**, which consume roughly half the electrical power of portable units.
3. **Condensate Drainage Standard:**
   * Never rely on manual collection buckets.
   * Connect the dehumidifier condensate port to a 3/4-inch rigid PVC drain line equipped with an internal P-trap and an open vent tee.
   * Route the drain line by gravity to a dedicated utility floor drain or sump basin. If a gravity drain is unavailable, install an industrial-grade condensate removal pump equipped with a safety float switch wired to the dehumidifier control circuit to automatically shut the unit down if the pump fails.

---

## 5. Cost Schedule: Whole-Home Dehumidifier vs Ineffective Portables

| Dehumidification Scope / Component | Material Cost | Professional HVAC Contractor | Energy Efficiency & IAQ Impact |
|:---|:---|:---|:---|
| **Aprilaire e100 Whole-House Unit (100 PPD, 2.8 L/kWh)** | $1,250 - $1,550 | $2,600 - $3,800 | Decoupled latent control; maintains 45-50% RH whole home |
| **Santa Fe Ultra120 High-Capacity Unit (120 PPD)** | $1,650 - $1,950 | $3,200 - $4,600 | Commercial-grade longevity; 6-year warranty; ultra-quiet |
| **Dedicated Return-to-Supply Ducting & Dampers** | $180 - $320 | $650 - $1,200 | Eliminates short-cycling; ensures whole-house air distribution |
| **Portable Rolling 50-Pint Dehumidifier (DIY Hardware Store)** | $220 - $350 | N/A (Plug-in) | High electric bill; noisy; localized 10-ft drying radius only |
| **Mold Remediation Following Chronic 70%+ Summer RH** | Chemical wash | $3,500 - $9,500 | Necessary if humidity exceeds 65% for prolonged periods |

---

## 6. Building Code Citations and Performance Standards

* **ASHRAE Standard 62.2 (Ventilation and Acceptable Indoor Air Quality in Residential Buildings):** Section 4.5 recommends indoor relative humidity be maintained below 60 percent to prevent mold and dust mite proliferation.
* **International Energy Conservation Code (2024 IECC) Section R403.6:** Mechanical ventilation systems in tight homes shall be designed to control indoor moisture and humidity.
* **AHAM Standard DH-1:** Association of Home Appliance Manufacturers testing standard for residential dehumidifier capacity and energy factor verification at $80^\circ\text{F}$ and $60\%$ RH.
* **Energy Star Dehumidifier Specification Version 5.1:** Establishes minimum energy factor thresholds ($\ge 1.9\text{ L/kWh}$) for residential ducted units.
