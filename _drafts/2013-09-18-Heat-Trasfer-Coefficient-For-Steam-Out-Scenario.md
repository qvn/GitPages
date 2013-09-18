---
published: false
---

I had a post on how to calculate the required relief rate for a [steam out scenario]({% post_url 2013-09-17-Steam-Out-Scenario %}). However, it was trickly to pick an overall heat transfer coefficient. So I doodle around to see what I can find. Of course, people have already talked about it [here](http://www.eng-tips.com/viewthread.cfm?qid=155185) but arrived at no concencus. Here is my take. 

## Overall Heat Transfer Coefficient Equation
The configuration for heat transfer that popped into my mind was:
![Heat Flow Configuration](http://web.mit.edu/16.unified/www/FALL/thermodynamics/notes/fig9WallCondConv_web.jpg)
where `1` is the outside and `2` is the inside of the tank, with the wall in between. *Note*, when it's raining outside, I'm treating the outside as *water* since 

## Complexity
The configuration above is overly simplified. There are several ways to make that more complex:
1. One may include an addtional film of water next to the wall to model a raining enviroment. I simply assume the outside is water (instead of air) since water transfer heat much more effectively than air. Distinguishing (and calculating) heat transfer between water and air is not practical when air heat transfer would be very small compared to that of water. 
2. Unsteady state. The temperature inside the tank will change. Though it's probably safe to assume that the largest temperature change occurs during the first few minutes when the temperature differences is the greatest. 
3. Take in account account cooler air entering the tank during relief. A vacuum vent would let air enter the tank and accelerate the cooling process. 

I can't think of more variables, but as with all engineering problems, there are many many variables that affect all things. I'll just pick whichever is the simplest.