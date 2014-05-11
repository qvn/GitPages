---
published: true
layout: post
category: Code
tags: 
  - python
  - code
  - tips
  - brew
---

I got [HomeBrew](brew.sh) on my mac and managed to replace mac `python 2.7.5` with `python 2.7.6` because the [recent Maverick update messed up my python](http://stackoverflow.com/questions/22313407/clang-error-unknown-argument-mno-fused-madd-python-package-installation-fa) and keep giving the error:

	error: command 'cc' failed with exit status 1


## Replace mac python with Brew Python
Relatively straight forward with Brew. If you don't have Homebrewm, just follow the instruction on the homepage:

{% highlight bash %}
	ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
	brew doctor
	brew install python
{% endhighlight %}

Check your python version with `python --version`. 

It should give 

	python 2.7.6

If you are still getting `python 2.7.5` then make sure your path is correct. Check your `$PATH` with `echo $PATH`. Since brew install packages in `/usr/local/bin` instead of systemwide `/usr/bin`, make sure that your `$PATH` starts with `/usr/local/bin`. Add this to your `~/.bash_profile` (or `~/.profile` or `~/.bashrc` but stick with `~/.bash_profile` if you don't have the others):

	# add custom, local installations to PATH
	PATH=/usr/local/bin:"$PATH"


Then in the Terminal, source it


	source ~/.bash_profile


Now recheck your python with `python --version`.