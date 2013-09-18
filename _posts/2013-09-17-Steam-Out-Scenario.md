---
published: true
layout: post
category: articles
tag: "engineering, overpressure, technical, oil & gas, math"
comment: true
comments: true
---

I recently sized a vacuum vent for a steam-out scenario and API 2000 did not provide guidance to calculate required relief rate. I thought I should share. 

Tank can be cleaned with high pressure steam. After the cleaning, as the tank cools back down to ambient temperature, steam condenses and can create a vacuum inside the tank if the tank is blocked-in and/or rain accelerates the condensation rate. [Tank vacuum implosion isn’t pretty](http://www.youtube.com/watch?v=Zz95_VvTxZM).

A vacuum vents or pressure/vacuum vents (e.g. [Groth vaccum breaker](http://www.grothcorp.com/en/product/cats/IndustrialProcessing/TankTopAppurtenances/1300A.html) or [Varec P/V vent]( http://valves.pentair.com/valves/products/pressure_relief_valves/tank_protection/?id=tcm:106-5807)) can be used to provide relief for an over-vacuum scenario (i.e. letting air entering the tank when a vacuum exists inside the tank). The amount of air entering the tank during relief must at least equal to the volumetric change caused by steam condensation. 

## Math!

The equations needed for calculations are simple. We assume steady state and start from the basics: 

1. Heat loss to the enviroment is the convective heat transfer:

    $$\dot{Q}=UA(T-T_w)$$

2. Heat loss is provided by the condensation of steam, which can be related to the volumetric change ($$\dot{V}$$) by:

    $$\dot{Q}=\dot{m}\lambda=\rho\dot{V}\lambda$$

3. Combining two two expressions, we have the volumetric change:

   $$\dot{V}=\frac{UA(T-T_w)}{\lambda\rho}$$
    
   $$T$$: Steam saturation temperature
   
   $$λ$$: Steam latent heat at saturation
   
   $$ρ$$: Steam density at saturation
   
   $$U$$: Overall heat transfer coefficient
   
   $$T_w$$: Tank wall temperature
   
   $$A$$: Surface area
   
   $$\dot{V}$$: Volumetric change

## Defining Relieving Condition

 Regardless of the pressure of the steam used to clean the tank, **the steam condition must be evaluated at relieving condition**. For a steam-out scenario, relieving condition is saturated steam at relieving vacuum. 
 
Often, relieving vacuum is very close to vacuum (within 0.5 psig or so), **it is often sufficient to evaluate steam at saturated condition at 0 psig(vacuum)**. 
 
Do not use the steam operating pressure to evaluate the volumetric change. For example, if 150# steam was used to clean the tank, the steam does not actually cause any vacuum until it condenses to ~0 psig. Thus, evaluating this scenario with 150# steam is incorrect. *Think about it, why would steam at 150 psig cause a vacuum? It's at 150 psig! That's no vacuum*.

I made that mistake once.

FYI, steam at 0 psig saturation has 

$$T = 212^{\circ}\: F$$

$$λ = 970.189\: btu/lb$$

$$ρ = 0.0373018\: lb/ft^3$$

## Heat Transfer Coefficient

Let's assume heat transfer coefficient $$U$$ is constant throughout the tank and constant during the relief. Picking which value to use is [a topic of debate](http://www.eng-tips.com/viewthread.cfm?qid=155185). I myself contemplate about this. 

However, at this point, pick a side and stick with it. 

I have been using $$3\; btu/hr\cdot ft^2\cdot F$$ value for my evaluations since I have seen another engineering analysis used it before. Or we can be conservative and treat the condensation as if it's occuring in a exchanger. According to [engineering toolbox](http://www.engineeringtoolbox.com/overall-heat-transfer-coefficients-d_284.html), heat transfer coefficient for an exchanger with combination of fluid and material as *steam-cast-iron-water* is $$160\; btu/hr\cdot ft^2\cdot F$$. That should be safe.

It could be confusing to know which heat transfer coefficient to pick and I unfortunately cannot provide a better answer. I myself is very uncertain of what to do. Hopefully there will be research and data to answer this.  

So what do I say when I don't know the answer to your question? *Use your engineering judgement*. Or if you know the answer, please let me know! Cheers.

## Wall Temperature
Let's assume we have a cold day in Texas ($$60^{\circ}F$$) and wall temperature is uniform and the same as ambient temperature during relief. You ought to consider your weather when picking this $$T_w$$ value. Folks in Alaska will say $$60^{\circ}F$$ is pretty toasty. 

## Surface Area 
Only take into accound the area that is exposed to ambient air. That is, exclude the bottom area and include the roof area. 

## Putting It All Together
Once you have made a decision on which wall temperature to use for your location, and stick with 0 psig saturated steam, the only variable left is the area ($$A$$). You can be wise and combine all the constants into one and vary $$U\cdot A$$ for different tanks:

$$\dot{V}=\frac{hA(T-T_w)}{\lambda\rho}=\frac{U\cdot A(212-60)}{973\cdot 0.0373018}=4.18794\cdot h\cdot A$$

I do this when I have 16 tanks to work with, nothing special if you have one or two at at time.