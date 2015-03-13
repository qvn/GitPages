---
layout: post
title: Inlet Pressure Drop Used for Relief Valve Capacity Calculation
date: 2014-07-25 20:09:11

published: true
layout: post

comments: true
share: true

tags: [relief valve, math, equation, API 520]
category: che
---

We just recently transitioned to a new software that size different relief system and we noticed that the relief capacity of the valve was different between the new and the old software. After some investigation we did find out the slight different:

Let's just pick one of the capacity equation. In this case, API 520 7th Ed. Eq. 3.2 equation for Critical Flow sizing:

$$A=\frac{W}{CK_{d}P_{1}K_{b}K_{c}}\sqrt{\frac{TZ}{M}}$$

That $P_1$ is the "absolute upstream relief pressure", which is the set pressure + allowed overpressure + atmospheric pressure. 

$$P_1=P_{set}+P_{ovp}+P_{atm}$$

In our current software, the relief pressure is actually defined just as above **subtract the inlet pressure drop**:

$$P_1=P_{set}+P_{ovp}+P_{atm} - dP_{inlet}$$

Our client never discovered this inconsistency in the software for the past 20 years or more using the software (or at least since 2000, when API 520 Part I Ed. 7th was published). The relief pressure P1 of our software is slightly smaller that it should have been. That means our capacity calculated is a bit larger. This was bad and good. 

The good is that we would have picked a valve that's bigger than needed. We do that anyway. The bad is that our pressure drops calculated using the capacity was a little smaller. Inlet pressure drop in particular is very sensitive since we have such little margin to play with. With only 3%, a bit of capacity drop will pull us to just below the 3% in some cases. But with the correct method, the inlet pressure drop is now suddenly more than 3%. That means a new valve, a new piping, or a pilot, all of which costs money, just because of a number.

I think the misusing this equation is pretty common (it makes engineering sense to be honest). As I reviewed the API 520 committee's ballot, they made a specific note to **exclude** the inlet pressure drop term from valve capacity calculation if it falls below 3%:

API 520 Part I 9th Ed. Ballot 2013 Section 5.4.1.1:

>[...]The effects of inlet pressure drop on specification of relieving pressure for PRV sizing can be neglected if the inlet pressure drop doesn't exceed 3% of set pressure.

You can obtain a copy of the ballot [here][1]. Since the link is public via a google search, I'm assuming I haven't violated any copyrights (fingers crossed). 

[1]: ballots.api.org/cre/scprs/ballots/docs/520Part1/520Part19thBallot2July2013.pdf



