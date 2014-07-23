---
published: true
layout: post
category: ChE
tags: 
  - relief valve
  - API 521
  - Admistrative Control
comments: true
---


## The short version:

Uses of administrative controls such as car-seal-open (CSO) a valve only eliminate the scenarios if failure of the administrative control does not result in an overpressure that exceeds the hydrotested pressure of the equipment. When the equipment does not have a hydrotested pressure, then stress analysis should be done. MAWP can be used as the limit instead of the hydrotested pressure. 

## The long version:

In the past when I consider a blocked outlet scenario, if we can CSO the outlet path, then I would dismiss the blocked outlet scenario under the basis that “if the valve is CSO, there is no need to consider valve closing during operating.” 

Similarly, I would do the same thing for a control valve’s bypass line that is CSC. If the bypass is CSC, then I do not assume that the bypass will open can cause overpressure. 

Someone pointed out that I overlooked the possibility of failure of the administrative control itself. 

## The Relevant Standards
After reviewing API 521 6th Section 4.2.2 in the hierarchy of protective measures, administrative control is at the bottom of the list. 

1.	Avoiding risk
2.	Engineering controls
3.	Administrative control

Regarding the administrative control, the spirit of [API 521 Section 4.2.2](#API521422) is: 

> An administrative control should be used as a protection measure if the potential overpressure does not exceed the corrected hydrotest pressure

## Implication
I have been doing this wrong for so long (well, for moths at least). We have the tendency to recommend CSO to eliminate blocked outlet scenarios and that’s not correct. 
For example, I recently reviewed a recommendation to CSO a gate valve on the outlet of a PD pump to avoid blocked outlet scenario. This approach turns out to be inappropriate. In the event that administrative control failure, the valve does get shut, the PD can overpressure itself. Like in API 521 6th Section 4.4.2.1 clearly said:

> [..]administrative controls can be used to prevent the closed outlet scenario unless the resulting pressure exceeds the maximum allowed by the pressure design code [usually the corrected hydrotest pressure is exceeded (see 3.1.22 and 4.2.2)].[..]

So now, whether CSO outlet gate valve or not, we still need a relief device (engineering controls).  

Though my next question would be, if we have a HIPS on a control valve that is used to eliminate the control valve failure, is this considered administrative control? If so, then should we consider failure of this system and whether overpressure can exceed the hydrotested pressure of the protected system? Hopefully this philosophy is not overriding the HIPS credit. 

Note: The ASME VIII Appendix M is non-mandatory. Therefore, the consideration of administrative control failure is only recently made clear to me through API 6th edition. 

---

### <a name="API521422">API 521 6th 4.2.2</a>

Use of Administrative Controls if Corrected Hydrotest Pressure Not Exceeded

Certain pressure design codes allow the use of administrative controls if the potential overpressure does not exceed the corrected hydrotest pressure, whereas other pressure design codes do not address this subject. Therefore, applying this for equipment built to pressure design codes that do not address the issue could cause the equipment to be overstressed. In these cases, the user should perform mechanical analyses and/or risk analyses. This philosophy is applied to the following scenarios:

a. closed outlets on vessels (see 4.4.2),
b. inadvertent valve opening (see 4.4.9.2),
c. check valve leakage or failure (see 4.4.9.3),
d. heat transfer equipment failure (see 4.4.14).
