---
published: true
layout: post
category: Code
tags: 
  - python
  - code
  - tips
  - mac
  - brew
---

Got Homebrew on my mac, then a [new python 2.7.6 from Homebrew over the Mac's Python 2.7.5]({% post_url 2014-05-11-Replace-Mac-Python-with-Homebrew-Python %}). However, Virtual Env Wrapper for Python virtualenv automatically default back to the Mac's Python 2.7.5. So to specify the Python Homebrew install, we need to use the `python` in `/usr/local/bin/python` whenever I start a new enviroment 

{% highlight bash %}
mkvirtualenv -p /usr/local/bin/python FlaskCoolProp
{% endhighlight %}

[source](http://stackoverflow.com/questions/1534210/use-different-python-version-with-virtualenv)