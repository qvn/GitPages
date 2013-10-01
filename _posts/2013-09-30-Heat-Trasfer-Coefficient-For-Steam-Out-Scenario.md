---
published: true
publish: true
comments: true
category: article
tags: "engineer, relief valve, math, equation"
layout: post
---

I had a post on how to calculate the required relief rate for a [steam out scenario]({% post_url 2013-09-17-Steam-Out-Scenario %}). However, it was trickly to pick an overall heat transfer coefficient to represent the heat transfer during such event. So I googled around to see what I can find. Of course, people have already talked about it [here](http://www.eng-tips.com/viewthread.cfm?qid=155185) but arrived at no concencus. 

So I went on to tackle this myself. 

## Pick a Heat Transfer Coefficient
In a quick summary, most people from the forum just picked a number for the heat transfer coefficient:

1. I selected $$3\; btu/hr\cdot ft^2\cdot F$$ since I've seen it done before (not really a good reason, I know, but that's why I'm writing this). 
2. Be conservative and treat the condensation as if it's occuring in a exchanger. According to [engineering toolbox](http://www.engineeringtoolbox.com/overall-heat-transfer-coefficients-d_284.html), heat transfer coefficient for an exchanger with combination of fluid and material as steam-cast-iron-water is $$160\; btu/hr\cdot ft^2\cdot F$$. 

## Calculate a Heat Transfer Coefficient
Why pick random numbers without any justifications? **For fun**, we can estimate the heat transfer coefficients. Turns out, I get $$2.303\; btu/hr\cdot ft^2\cdot F$$. Picking $$3\; btu/hr\cdot ft^2\cdot F$$ weren't too crazy after all. 
The work of course needs to be verified by someone else. I just post it here for record, take it with skepticism. Read on and have fun. 

## Summary - The Short Version

We need three coefficients:

1. Convection from steam to wall – with condensation ($$h_{steam}$$)
2. Conduction through wall ($$k_{steel}$$)
3. Convection from wall to air – without condensation ($$h_{air}$$)

We need an overall heat transfer coefficient:

$$\frac{1}{U}=\frac{1}{h_{steam}}+\frac{dx}{k_{steel}}+\frac{1}{h_{air}}$$

If we assume: 

- $$60^\circ F$$ air at atmospheric temperature, 
- Wall temperature is the same as air, 
- Steam at $$0\; psig$$ saturation ($$212^\circ F$$), 
- Tank is $$40ft$$ high with $$3/16\; in$$ wall thickness

We have the three terms:

$$\frac{1}{h_{steam}}  \approx \frac{1}{5000} =2.0\times 10^{-8}$$

$$\frac{dx}{k_{steel}}=\frac{0.156}{9.4} =1.662 \times 10^{-3}$$

$$\frac{1}{h_{air}}=\frac{1}{2.303} =0.410$$

And so we notice

$$\frac{1}{h_{air}} >> \frac{dx}{k_{steel}} >> \frac{1}{h_{steam}}$$

And therefore it may be safe to say:

$$\frac{1}{U} \approx \frac{1}{h_{air}}$$

And so

$$U = h_{air} = 2.303\; \frac{hr\cdot ft^2\cdot F}{btu}$$

Even though the value of $$U$$ above is pretty close to the $$3\; btu/hr\cdot ft^2\cdot F$$, it could have been a mere conincidence. Also, this has not accounted rain. That kind of question is best answered with an experiment and empirical equations.  

Now, the rest of this writing is just more details on how to arrive at the conclusion here. Read on if you are interested. 

*Reference:* 

 1. Warren L. McCabe, Julian C. Smith, and Peter Harriott. *Unit Operations of Chemical Engineering*.  7th ed. McGraw-Hill Book Company, 2005
 2. American Petroleum Institute, *API 2000: Venting Atmospheric and Low-Pressure Storage Tanks*, 6th ed. Washington, DC, 2008.
 3. Engineering Toolbox (http://www.engineeringtoolbox.com/)

---

## Heat Transfer Coefficients from API 2000
I attempt to look at API 2000 6th Ed. Annex E, which states their assumptions for the thermal inbreathing scenario, taking into account effects of rain. The assumed heat transfer coefficients are:

- Rain to ambient: $$15\; W/m^2\cdot K$$.
- Wall to inside: $$5\; W/m^2\cdot K$$.
- Film cooling to the outside: $$5000\; W/m^2\cdot K$$

However, they assumed air instead of steam. This is significant because steam out scenario is caused by steam condensation (phase change) whereas thermal inbreathing is cause by air contraction (without phase change). Therefore, **I would rather not use the coefficients from Annex E**. 

## Overall Heat Transfer Coefficient
The overall heat transfer coefficient is defined [here](http://en.wikipedia.org/wiki/Heat_transfer_coefficient#Overall_heat_transfer_coefficient) as:

$$\frac{1}{U}=\sum \frac{1}{h}+\sum \frac{dx}{k}$$
 
Where $$h$$ is the heat transfer coefficient for *convective* heat transfer and $$k$$ is thermal conductivity for *conductive* heat transfer. All radiations will be ignored from the following calculations. Wikipedia is your place to review the [modes of heat transfer]( http://en.wikipedia.org/wiki/Heat_transfer).

We have three coefficients:

1. Convection from steam to wall – with condensation ($$h_{steam}$$)
2. Conduction through wall ($$k_{steel}$$)
3. Convection from wall to air – without condensation ($$h_{air}$$)

So the overall heat transfer coefficient becomes:

$$\frac{1}{U}=\frac{1}{h_{steam}}+\frac{dx}{k_{steel}}+\frac{1}{h_{air}}$$
 
We can go through one at a time.

### Steel thermal conductivity
Thermal conductivity for steel can be found in McCabe as $$9.4\; btu/hr\cdot ft^2\cdot F$$ 

Let’s assume the steel is $$3/16 in$$ ($$0.156ft$$) thick, the thinnest steel plate used on tank that I've seen. So our heat transfer coefficient is: 

$$\frac{dx}{k_{steel}}=\frac{0.156}{9.4}=1.662 \times 10^{-3}\;  \frac{hr\cdot ft^2\cdot F}{btu} $$

The term $$dx/k_{steel}$$ is also the expression for thermal resistance. Looks like because we have a very thin steel plate, the thermal resistance is minimal. We could have ignored this term entirely. 

### Steam Convection
Let’s take a look at what we know about these coefficients. 
According to McCabe:

Type of Process              | Heat Trasfer Coefficient $$(\frac{hr\cdot ft^2\cdot F}{btu})$$
-----------------------------|-----------------------------
Steam drop-wise condensation | 5,000-20,000
Steam film-wise condensation | 1,000-3,000
Water (heating or cooling)   | 50-3,000 
Air                          | 0.2-10

*Source: Table 11.2 Magnitudes of heat-transfer Coefficients (p.343, McCabe)*

We will most likely have a drop-wise condensation on the steam side. However, from the info above, the heat transfer coefficient for steam is around *a thousand time* more than that of air. Therefore:

$$\frac{1}{h_{air}} >> \frac{1}{h_{steam}}$$

Looking at this, we can ignore the steam side condensation.

Thank goodness. I have wasted ton of time fiddling with steam drop-wise condensation to simply realized that it’s out of my league (probably can use a phD for that). Now, since we can ignore it instead of rigorously calculate the value, it saves ton of time. 

### Air Convection
Heat transfer with air from the vertical tank wall is natural convection without phase change. McCable (p.379) provides equation for heat transfer of this type as:

$$Nu_f = b(GrPr)_{f}^{n} = \frac{hL}{k_f}$$

Where

$$Gr = \frac{L^3\rho _f^3g\beta _f\Delta T}{\mu _f^2}$$

$$Pr = \left ( \frac{c_p\mu}{k}  \right )_f$$

With all properties evaluated at the mean temperature $$T_f$$ defined as:

$$T_f = \frac{1}{2}(T_w-\overline{T})=0.5\Delta T$$

Where $$T_w$$ is wall temperature and $\overline{T}$ is the fluid bulk temperature. 

Thermal expansion coefficient for *ideal gas* is defined as:

$$\beta _f=\left ( \frac{\partial v}{\partial T} \right )_p\frac{1}{v} = \frac{1}{T}$$

Values of $$b$$ and $$n$$ are 

System          | Range of $$GrPr$$  | $$b$$    | $n$
----------------|--------------------|----------|--------
Vertical plates | $$10^4-10^9$$      | $$0.59$$ | $$0.25$$
Vertical plates | $$10^9-10^{12}$$   | $$0.13$$ | $$0.333$$

*Source: Table 12.4 Values of Constant in Eq. (12.74) (p.380, McCabe)*

Let’s say we have $$60F$$ air (close to ideal gas) at atmospheric temperature, wall temperature is the same as air, steam at $$0\; psig$$ saturation ($$212^\circ F$$), and tank is $$40ft$$ high. 

Variable                    | Symbol         | Value | Unit
----------------------------|----------------|-------|-----
Wall Height                 | $$L$$           | $$40 $$   |$$ft$$
Wall Temp                   | $$T_w$$          |$$212  $$  |$$^\circ F$$
Fluid Bulk Temp             | $$\overline{T}$$ |$$60  $$   |$$^\circ F$$
Fluid Mean Temp             | $$T_f$$          |$$76   $$  |$$^\circ F$$
Bulk & Mean Temp Difference | $$\Delta T$$     |$$152  $$  |$$^\circ F$$

Fluid properties must be evaluated at $T_f$, simulation software like HYSYS is wonderfully useful here.

Variable                    | Symbol         | Value | Unit    
----------------------------|----------------|-------|---------
Desity                      | $$\rho_f$$       |$$0.07408$$| $$lb/ft^2$$
Abs Viscosity               | $$\mu_f$$        |$$12.633 \times 10^{-6}$$| $$lb/fts$$
Heat Capacity               | $$Cp_f$$         |$$0.237 $$ | $$btu/lb^\circ F$$
Heat Cap. Ratio             | $$k_f$$          |$$1.41  $$ |
Compressibilty Factor       | $$z$$            |$$0.999 $$ |          
Gravity Constant            | $$g$$            |$$32.174$$ |$$ft/s^2$$

So, the results are

Variable                    | Symbol         | Value 
----------------------------|----------------|------
Thermal Expansion Coeff.    |$$\beta_f$$       |$$6.579 \times 10^{-3}$$
Grashof Number              | $$Gr$$           |$$7.080 \times 10^{13}$$
Prandtl Number              | $$Pr$$           |$$2.124 \times 10^{-6}$$
$Gr$ & $Pr$ Product         | $$Gr \times Pr$$ |$$1.508 \times 10^8$$

With value of $$Gr \times Pr$$ known, we can now choose $$b=0.13$$ and $$n=0.333$$. Therefore,

$$Nu_f = b(GrPr)_{f}^{n} $$

$$h_{air} = \frac{k_f}{L} 0.59(GrPr)_{f}^{0.025}=2.303\; \frac{hr\cdot ft^2\cdot F}{btu}$$


## What if it rains?
I do not know what would happen if it does rain. Since water conduct heat much better than air, I would imagine $$U$$ will increase quite a bit. How much? No idea. Rain does not form a nice layer of liquid on tank. I don't think I can predict drops formation. This kind of question is best answered with an experiment and empirical equation. Need sleep.