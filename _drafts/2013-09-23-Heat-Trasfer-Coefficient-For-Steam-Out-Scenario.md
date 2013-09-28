---
published: true
layout: post
---

I had a post on how to calculate the required relief rate for a [steam out scenario]({% post_url 2013-09-17-Steam-Out-Scenario %}). However, it was trickly to pick an overall heat transfer coefficient to represent the heat transfer during such event. So I googled around to see what I can find. Of course, people have already talked about it [here](http://www.eng-tips.com/viewthread.cfm?qid=155185) but arrived at no concencus. 

So I went on to tackle this myself. 

## Pick a Heat Transfer Coefficient
In a quick summary, most people from the forum just picked a number for the heat transfer coefficient:

1. I selected $$3\; btu/hr\cdot ft^2\cdot F$$ since I've seen it done before.
2. Be conservative and treat the condensation as if it's occuring in a exchanger. According to [engineering toolbox](http://www.engineeringtoolbox.com/overall-heat-transfer-coefficients-d_284.html), heat transfer coefficient for an exchanger with combination of fluid and material as steam-cast-iron-water is $$160\; btu/hr\cdot ft^2\cdot F$$. 

## Calculate a Heat Transfer Coefficient
Why pick random numbers without any justifications? **For fun**, we can estimate the heat transfer coefficients I got about $$55\; btu/hr\cdot ft^2\cdot F$$. 
The number above is just my guesses. The work is of course need to be verified. I just post it here for record. Read on and have fun. 

## Heat Transfer Coefficients from API 2000
I attempt to look at API 2000 6th Ed. Annex E, which states their assumptions for the thermal inbreathing scenario, taking into account effects of rain. The assumed heat transfer coefficients are:

- Rain to ambient: $$15\; W/m^2\cdot K$$.
- Wall to inside: $$5\; W/m^2\cdot K$$.
- Film cooling to the outside: $$5000\; W/m^2\cdot K$$

However, they assumed air instead of steam. This is significant because steam out scenario is caused by steam condensation (phase change) whereas thermal inbreathing is cause by air contraction (without phase change). Therefore, I would rather **not** use the coefficients from Annex E. 

## Overall Heat Transfer Coefficient
The overall heat transfer coefficient is defined [here](http://en.wikipedia.org/wiki/Heat_transfer_coefficient#Overall_heat_transfer_coefficient) as:

$$\frac{1}{U}=\sum \frac{1}{h}+\sum \frac{dx}{k}$$
 
Where $$h$$ the heat transfer coefficient for convective heat transfer and $$k$$ is thermal conductivity for conductive heat transfer. All radiations will be ignored from the following calculations. Wikipedia is your place to review the [modes of heat transfer]( http://en.wikipedia.org/wiki/Heat_transfer).

We have three coefficients:

1. Convection from steam to wall – with condensation ($$h_{steam}$$)
2. Conduction through wall ($$k_{steel}$$)
3. Convection from wall to air – without condensation ($$h_{air}$$)

So the overall heat transfer coefficient becomes:

$$\frac{1}{U}=\frac{1}{h_{steam}}+\frac{dx}{k_{steel}}+\frac{1}{h_{air}}$$
 
We can go through once at a time.

### Steam Convection
Let’s take a look at what people have already done to establish these coefficients. 
According to McCabe:

**Type of Process** | **Heat Trasfer Coefficient (h)**
Steam drop-wise condensation | 5,000-20,000
Steam film-wise condensation | 1,000-3,000
Air | 0.2-10

*Source: Table 11.2 Magnitudes of heat-transfer Coefficients (p.343, McCabe)

We will most likely have a drop-wise condensation on the steam side. However, from the info above, the heat transfer coefficient for steam is several magnitudes more than that of air. Therefore the term $$1/h_{steam}$$ is insignificant compared to $$1/h_{air}$$. 

$$\frac{1}{h_{air}} >> \frac{1}{h_{steam}}$$

Looking at this, we can ignore the steam side condensation.

$$\frac{1}{U}\approx \frac{dx}{k_{steel}}+\frac{1}{h_{air}}$$
 
Thank goodness. I have wasted ton of time fiddling with steam drop-wise condensation to simply realized that it’s out of my league (probably can use a phD for that). Now, since we can ignore it instead of rigorously calculate the value, it saves ton of time. 

### Convection through air
Heat transfer with air from the vertical tank wall is natural convection without phase change. McCable (p.379) provides equation for heat transfer of this type as:

$$Nu_f = b(GrPr)_{f}^{n} = \frac{hL}{k_f}$$

Where

$$Gr = \frac{L^3\rho _f^3g\beta _f\Delta T}{\mu _f^2}$$

$$Pr = \left ( \frac{c_p\mu}{k}  \right )_f$$

With all properties evaluated t mean temperature $$T_f$$ defined as:

$$T_f = \frac{1}{2}(T_w-\overline{T})=0.5\Delta T$$

Where $$T_w$$ is wall temperature and $$\overline{T}$$ is the fluid bulk temperature. 
Thermal expansion coefficient is defined as:

$$\beta _f=\left ( \frac{\partial v}{\partial t} \right )_p\frac{1}{v}$$

And for a non-ideal gas:

$$PV=zRT$$

$$V=\frac{zRT}{P}$$

$$\left ( \frac{\partial v}{\partial t} \right )_p = \frac{zR}{P}$$

$$\beta _f=\left (\frac{z}{T}  \right )_f$$

Values of $$b$$ and $$n$$ are 

**System** | **Range of GrPr** | **b** | **n**
Vertical plates | $$10^4-10^6$$ | 0.59 | 0.25
Vertical plates | $$10^9-10^{12}$$ | 0.13 | 0.333


Let’s say we have $$60F$$ air at atmospheric temperature, steam at 0 psig saturation ($$212F$$), and tank is $$40ft$$ high. 

L
T_w
\overline{T}
T_f
\Delta T

Fluid properties must be evaluated at $$T_f$$, simulation software like HYSYS is wonderfully useful here.

\rho_f
\mu_f
Cp_f
k_f
z
\beta_f
g

So, the results are

Gr
Pr
Gr x Pr

We can now choose $$b$$ and $$n$$ as 0.13 and 0.333, respectively. Therefore,

$$Nu_f = b(GrPr)_{f}^{n} $$

$$h = \frac{k_f}{L} 0.13(GrPr)_{f}^{0.333}=61.40\; \frac{hr\cdot ft^2\cdot F}{btu}$$

### Steel thermal conductivity
Thermal conductivity for steel can be found in McCabe as $$9.4\; btu/hr\cdot ft^2\cdot F$$ 

Let’s assume the steel is $$3/16 in$$ ($$0.156ft$$) thick. So our heat transfer coefficient is: 

$$\frac{dx}{k_{steel}}=\frac{0.156}{9.4}=1.662 \times 10^{-3}\;  \frac{hr\cdot ft^2\cdot F}{btu} $$

*Reference:* Warren L. McCabe, Julian C. Smith, and Peter Harriott. *Unit Operations of Chemical Engineering*.  7th ed. McGraw-Hill Book Company, 2005, p.1101.

 had a post on how to calculate the required relief rate for a [steam out scenario]({% post_url 2013-09-17-Steam-Out-Scenario %}). However, it was trickly to pick an overall heat transfer coefficient. So I doodle around to see what I can find. Of course, people have already talked about it [here](http://www.eng-tips.com/viewthread.cfm?qid=155185) but arrived at no concencus. Here is my take. 

## Overall Heat Transfer Coefficient Equation
The configuration for heat transfer that popped into my mind was:
![Heat Flow Configuration]({{ site.url }}/images/2013-09-18-Heat-Transfer-Configuration.svg)
*Note*: when it's raining outside, I'm treating the outside as *water* since air heat transfer coefficient is much smaller than water. 

## Options for Heat Transfer Coefficient Values
As stated in the [steam out scenario article]({% post_url 2013-09-17-Steam-Out-Scenario %}), simply use $$3\; btu/hr\cdot ft^2\cdot F$$ or be conservative and treat the condensation as if it's occuring in a exchanger. According to [engineering toolbox](http://www.engineeringtoolbox.com/overall-heat-transfer-coefficients-d_284.html), heat transfer coefficient for an exchanger with combination of fluid and material as steam-cast-iron-water is $$160\; btu/hr\cdot ft^2\cdot F$$. That should be safe.

Or we can do some math instead of just picking random numbers. API 2000 6th ed. Annex E.4 provides assumptions for its calculation of inbreathing scenario (due to raining under normal condition). The heat transfer coefficients used were:

