---
title: "Sagging Center Beams: Sizing Steel Lally Columns, Concrete Spread Footings, and Hydraulic Jacking"
subtitle: "Forensic structural engineering analysis of tributary floor loads, basement slab punching shear failure, screw jack vs concrete-filled steel columns, and safe incremental jacking rates."
category: "rural-development"
layout: post
readTime: 14 min read
date: "2026-03-27"
author: "Midwest AEC Building Science Diagnostic Taskforce"
authorRole: "Forensic Hydronic, Envelope, and Geotechnical Engineering Group"
heroImage: "/images/heroes/basement-lally-columns.png"
description: "Diagnose and fix sagging basement carrying beams and bouncing first-floor joists. Size structural steel Lally columns, spread footings, and jacking protocols."
summary: "An engineering-grade structural guide for Midwest homeowners and foundation contractors on calculating tributary floor loads, pouring isolated concrete footing pads, and safely jacking center beams without drywall cracking."
tags:
  - "Structural Engineering"
  - "Foundation Repair"
  - "Lally Columns"
  - "Floor Jacking"
  - "Wood Framing"
---

# Sagging Center Beams: Sizing Steel Lally Columns, Concrete Spread Footings, and Hydraulic Jacking

Across historic two-story bungalows, Victorian farmhouses, and mid-century ranches throughout the Midwest, sagging first-floor framing is one of the most common structural defects encountered during forensic inspections. Interior doors stick in their jambs, drywall cracks develop at the upper corners of door openings, and floors display noticeable slope toward the center of the house.

In basements and crawlspaces, the root cause is almost always found at the main center carrying beam. Over decades of service, wooden support posts rot at the wet slab connection, undersized timber beams experience irreversible viscoelastic creep, or temporary screw jacks installed directly on thin basement slabs cause catastrophic punching shear failure.

Repairing a deflected carrying beam requires an accurate understanding of structural tributary area calculations, Euler column buckling capacities, concrete footing bearing stresses, and controlled hydraulic leveling protocols.

```
            TRIBUTARY LOAD DISTRIBUTION AND CENTER BEAM DEFLECTION
            
       Second Floor Load (Dead + Live: 40 PSF)
   ===================================================================
       First Floor Load (Dead + Live: 50 PSF)
   ===================================================================
            |                                         |
     Exterior Wall                             Exterior Wall
     Carries 25% Load                          Carries 25% Load
            |                                         |
            |      Center Carrying Beam               |
            |      Carries 50% OF ENTIRE HOUSE LOAD!  |
            v                 v                       v
   +-----------------+   +----+----+            +-----------------+
   | Foundation Wall |   | SAGGING |            | Foundation Wall |
   | Concrete Stem   |   | CENTER  |            | Concrete Stem   |
   +-----------------+   | BEAM    |            +-----------------+
                         +----+----+
                              |
                              v Concentrated Point Load (12,000 - 25,000 lbs!)
                         +----+----+
                         | Lally   |
                         | Column  |
                         +----+----+
                              |
                              v
   ===========================+=======================================
   Basement Slab (3" Concrete): PUNCHING SHEAR FAILURE IF NO FOOTING!
   Cracks into pieces under point load!
```

---

## 1. Structural Engineering Physics of Center Beams and Point Loads

A residential floor system is designed to support both dead loads (the permanent weight of structural materials, drywall, flooring, and MEP systems) and live loads (transient human occupancy and furniture weight). Under standard building codes (IRC Table R301.5), living areas must support a minimum uniform live load of **30 to 40 pounds per square foot (PSF)** and an estimated dead load of **10 to 15 PSF**, resulting in a total design load of roughly **50 PSF**.

### Tributary Area Calculations
The center carrying beam supports floor joists spanning from exterior foundation walls to the center of the basement. The proportion of the floor load carried by the beam is governed by its **tributary area** ($A_{\text{trib}}$):

$$A_{\text{trib}} = L_{\text{span}} \cdot \left(\frac{S_{\text{left}} + S_{\text{right}}}{2}\right)$$

Where:
* $L_{\text{span}}$ is the unsupported span between vertical support columns (e.g., $10\text{ feet}$).
* $S_{\text{left}}$ and $S_{\text{right}}$ are the clear spans of the floor joists resting on the beam on either side (e.g., $14\text{ feet}$ to each foundation wall).

For a center beam supporting two 14-foot joist spans, the tributary width is $\frac{14 + 14}{2} = 14\text{ feet}$. 

In a typical two-story home with an attic load, the center beam carries not only the first floor, but also an interior bearing partition supporting the second floor and roof ceiling joists. The combined multi-story design load frequently reaches **120 to 160 pounds per linear foot per foot of tributary width**:

$$w_{\text{beam}} = 140\text{ PSF} \cdot 14\text{ ft} = 1,960\text{ lbs per linear foot}$$

Over a 10-foot column span, the total load resting on that beam section is:

$$W = 1,960\text{ lbs/ft} \cdot 10\text{ ft} = 19,600\text{ lbs}$$

Each support post at the ends of that span carries half of that load, producing a concentrated point load ($P$) of **9,800 to 15,000 pounds (nearly 5 to 7.5 tons)** acting on a single vertical post!

### Punching Shear Failure in Basement Concrete Slabs
A standard residential basement floor is a non-structural "floating" concrete slab, typically only 3 to 4 inches thick, cast from unreinforced 2,500 to 3,000 PSI concrete over gravel. It is designed exclusively to support light foot traffic.

When a temporary screw jack or new steel column is placed directly on top of this 3-inch slab without an isolated footing pad below, the concentrated 12,000-pound point load generates severe **two-way punching shear stress** ($v_u$) around the perimeter of the column base plate:

$$v_u = \frac{P_u}{\phi \cdot b_0 \cdot d}$$

Where:
* $P_u$ is the factored ultimate point load.
* $b_0$ is the critical shear perimeter located at distance $d/2$ from the edge of the base plate.
* $d$ is the effective structural thickness of the concrete slab ($d \approx 2.5\text{ inches}$).

The allowable two-way shear capacity of unreinforced concrete (ACI 318 Section 22.6) is limited to:

$$V_c = 4 \cdot \sqrt{f'_c} \cdot b_0 \cdot d$$

For a 4-inch by 4-inch base plate on a 3-inch slab, the punching shear stress exceeds the concrete's shear capacity by more than **350 percent**. The column punches through the floor slab like a nail through cardboard, sinking 1 to 3 inches into the sub-base soil and causing the center beam above to sag even further.

---

## 2. Why National Aggregators Give Dangerous Advice

Mainstream DIY portals promote dangerous practices regarding basement beam leveling:

1. **Recommending Adjustable Telescoping Screw Jacks as Permanent Supports:** Aggregators often suggest buying 40-dollar telescoping screw jacks from hardware stores and leaving them in place permanently. Standard light-duty screw jacks are rated only for temporary shoring during construction. Under sustained loads, their thin-wall tubing (12-gauge or 14-gauge) is vulnerable to Euler buckling, and their loose threads can vibrate loose or corrode.
2. **Jacking the Center Beam Up in a Single Afternoon:** Handymen often bring a 20-ton hydraulic bottle jack into the basement and crank the beam up 1-1/2 inches in an hour. Fast jacking shatters plaster walls, snaps hydronic heating pipes, binds gas supply lines, and cracks ceramic floor tiles upstairs. Structural wood undergoes creep over 50 years; it cannot be forced back into alignment in minutes.
3. **Placing Steel Posts on Existing Basement Slabs:** Home repair articles routinely show columns set directly on clean concrete floors. As demonstrated by punching shear physics, placing a column on a floating slab without an engineered footing guarantees slab cracking and future settlement.

---

## 3. Forensic Structural Inspection Matrix

When inspecting a deflected center beam or sagging first floor, apply this diagnostic protocol.

| Step | Diagnostic Observation | Structural Engineering Failure Mode | Corrective Action Protocol |
|:---|:---|:---|:---|
| **01** | Spiderweb cracks radiating from the base of a steel post in the slab | Two-way punching shear failure; post placed on floating slab | Shore beam temporarily; sawcut slab $24'' \times 24''$; excavate and pour isolated spread footing pad. |
| **02** | Center beam sags between posts; posts are plumb and have not settled | Long-term viscoelastic timber creep or undersized beam section | Add intermediate Lally columns to cut clear spans in half, or sister beam with engineered LVL/steel flitch plates. |
| **03** | Wooden post base is soft, dark, and spongy when probed with awl | Capillary wicking of moisture from concrete slab rotting timber post | Shore beam; remove rotted wood post; install concrete-filled steel Lally column on standoff base. |
| **04** | Steel post bows noticeably out of plumb in the center | Euler structural column buckling due to undersized pipe schedule | Install temporary shoring posts; replace with 3-1/2-inch or 4-inch Schedule 40 concrete-filled Lally column. |
| **05** | Beam crushed locally directly above the top plate of the post | Excessive perpendicular-to-grain compression stress on wood beam | Install a heavy 1/2-inch thick structural steel bearing plate ($6'' \times 8''$) to distribute load. |

---

## 4. Engineering-Grade Structural Remediation Protocol

```
             ISOLATED CONCRETE SPREAD FOOTING DETAIL
             
                     Center Beam (Triple 2x10 or LVL)
                     +==============================+
                     |                              |
                     v                              v
           +--------------------+        +--------------------+
           | 1/2" Steel Plate   |        | 1/2" Steel Plate   |
           +---------+----------+        +---------+----------+
                     |                              |
                     | 4" Schedule 40               | Temporary Shoring
                     | Steel Pipe Column            | Hydraulic Bottle
                     | (Filled with Concrete:       | Jack System
                     | Permanent Lally Column)      |
                     |                              |
   ==================+==============================+==================
   Existing 3" Slab  |                              |
   ------------------+                              +------------------
                     |                              |
                     | 24" x 24" x 12" Deep         |
                     | Isolated Concrete Footing    |
                     | (4,000 PSI Poured Concrete)  |
                     | Reinforced with #4 Rebar Grid|
                     +------------------------------+
```

### Protocol A: Excavating and Pouring the Isolated Spread Footing
1. Set up temporary shoring towers on either side of the planned column location. Use two heavy timber posts or heavy-duty structural screw jacks resting on 3-inch thick hardwood timber blocking distributed across at least 4 square feet of floor slab to prevent slab damage.
2. Transfer just enough load to the temporary shoring to stabilize the beam (do not jack upward yet).
3. Sawcut and remove a 26-inch by 26-inch section of the existing basement concrete slab using a diamond-blade wet saw.
4. Excavate the sub-base soil down to undisturbed, competent native soil (typically 12 to 18 inches below the top of the slab, ensuring the base sits on soil with an allowable bearing capacity of at least 2,000 to 3,000 PSF).
5. Compact the subgrade soil and place a 2-inch layer of crushed gravel.
6. Assemble a two-way reinforcing grid using four pieces of #4 (1/2-inch) deformed steel rebar tied at 6-inch centers on plastic rebar chairs (maintaining 3 inches of clear concrete cover from the earth).
7. Pour 4,000 PSI compressive strength concrete into the excavation up to the level of the existing floor slab. Trowel smooth and allow to cure for a minimum of 7 to 14 days before applying full structural load.

### Protocol B: Controlled Hydraulic Jacking and Column Installation
1. Position a 20-ton hydraulic bottle jack on the newly cured concrete footing pad. Place a heavy steel bearing plate on the jack ram to distribute the force against the underside of the beam.
2. **Jacking Rate Standard:** Lift the beam at a maximum rate of **1/8-inch per week**. This slow rate allows the wood framing, interior plaster, drywall, and upstairs door frames to relax and adjust without sudden brittle cracking or plumbing pipe shearing.
3. Once the target elevation is reached (verified with a laser level), measure the exact clear height from the top of the concrete footing to the underside of the beam bearing plate.
4. Install an ICC-ES approved permanent steel column (such as a 3-1/2-inch or 4-inch outside diameter Schedule 40 steel pipe filled with 5,000 PSI concrete, ASTM A53 Grade B).
5. Secure the top plate to the timber beam with 1/2-inch structural lag screws, and anchor the bottom base plate to the concrete footing using two 1/2-inch wedge expansion anchors. Lower the hydraulic jack and remove the temporary shoring.

---

## 5. Cost Breakdown: Permanent Lally Column vs Temporary Jacking

| Project Component / Operation | Typical Material Cost | Professional Contractor Range | Structural Permanence Delivered |
|:---|:---|:---|:---|
| **Poured Concrete Spread Footing ($24'' \times 24'' \times 12''$)** | $120 - $220 | $650 - $1,200 | Eliminates punching shear; rated for 15,000+ lb point loads |
| **Permanent Concrete-Filled Steel Lally Column (4-inch)** | $160 - $280 | $450 - $850 | Fully code-compliant permanent structural post (ICC-ES approved) |
| **Engineered Controlled Hydraulic Jacking (per week)** | $80 (jack rental) | $350 - $700 / visit | Gradual 1/8" incremental lift; prevents plaster/pipe damage |
| **Triple LVL Beam Sistering / Replacement (20-ft run)** | $450 - $850 | $2,200 - $4,500 | Restores flexural stiffness ($EI$); eliminates timber bounce |
| **Temporary Hardware-Store Screw Jack (Unapproved DIY)** | $45 - $80 | Not recommended | Code violation; high risk of catastrophic buckling under load |

---

## 6. Building Code Citations and Structural Standards

* **International Residential Code (IRC) Section R407.3:** Structural columns shall be not less than 3-inch diameter standard pipe or approved manufactured columns; columns shall be anchored to prevent lateral displacement at the top and bottom.
* **IRC Table R407.3:** Maximum allowable load tables for steel columns based on outside diameter and unsupported height.
* **American Concrete Institute (ACI 318-19) Chapter 22:** Structural concrete design specifications for two-way punching shear and bearing stresses on spread footings.
* **American Institute of Steel Construction (AISC 360):** Specification for Structural Steel Buildings, governing column buckling, slenderness ratios ($KL/r$), and allowable axial compressive loads.
