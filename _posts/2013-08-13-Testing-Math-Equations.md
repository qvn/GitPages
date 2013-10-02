---
title: Testing Math Equations with MathJax
layout: post
tag: [test, math, web, programming]
category: note
---

## MathJax installation
The [installation](1) was relatively simple. One script:

{% highlight html%}

    <script type="text/javascript"
       src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
{% endhighlight %}

And the presentation examples with latex \(ax^2 + bx + c = 0\)


$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

And the color is different because pygment and MathJax shared the same classes `mi` and `mo` in the `pygment.css` so the styling got conflicted. Solution and problems are described [here](2)

[1]: http://docs.mathjax.org/en/latest/platforms/index.html
[2]: https://groups.google.com/forum/#!msg/mathjax-users/LgwIpABeP1A/KyNPPBKhz2YJ
