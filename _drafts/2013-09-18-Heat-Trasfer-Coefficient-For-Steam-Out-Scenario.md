---
published: false
---

I had a post on how to calculate the required relief rate for a [steam out scenario]({% post_url 2013-09-17-Steam-Out-Scenario %}). However, it was trickly to pick an overall heat transfer coefficient. So I doodle around to see what I can find. Of course, people have already talked about it [here](http://www.eng-tips.com/viewthread.cfm?qid=155185) but arrived at no concencus. Here is my take. 

## Overall Heat Transfer Coefficient Equation
The configuration for heat transfer that popped into my mind was:
![Heat Flow Configuration]({{ site.url }}/images/2013-09-18-Heat-Transfer-Configuration.svg)
*Note*: when it's raining outside, I'm treating the outside as *water* since air heat transfer coefficient is much smaller than water. 

## Options for Heat Transfer Coefficient Values
As stated in the [steam out scenario article]({% post_url 2013-09-17-Steam-Out-Scenario %}), simply use $$3\; btu/hr\cdot ft^2\cdot F$$ or be conservative and treat the condensation as if it's occuring in a exchanger. According to [engineering toolbox](http://www.engineeringtoolbox.com/overall-heat-transfer-coefficients-d_284.html), heat transfer coefficient for an exchanger with combination of fluid and material as steam-cast-iron-water is $$160\; btu/hr\cdot ft^2\cdot F$$. That should be safe.

Or we can do some math instead of just picking random numbers. API 2000 6th ed. Annex E.4 provides assumptions for its calculation of inbreathing scenario (due to raining under normal condition). The heat transfer coefficients used were:

- Rain to ambient: $$15\; W/m^2\cdot K$$.
- Wall to inside: $$5\; W/m^2\cdot K$$.
- Film cooling to the outside: $$5000\; W/m^2\cdot K$$.


