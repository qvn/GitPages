---
layout: post
category: Code
tags: [jekyll, code, tips]
title: Rake for Jekyll
date: 2012-09-06 22:47:07
---

I'm no expert at Rails but from [what I gathered](http://jasonseifer.com/2010/04/06/rake-tutorial), Rake is like a compiler for Rails. Commands are in the rakefile. Execute the file and a series of commands are fired. That's is all. 

Rake can be used to create a new post or page for Jekyll. However, I happened to be using the original [Jekyll](https://github.com/mojombo/jekyll), there isn't any Rake file. And Jekyll is a bit underdocumented. So, whenever I attempt 'rake', error occurs:

{% highlight bash%}
rake	
rake aborted!
No Rakefile found (looking for: rakefile, Rakefile, rakefile.rb, Rakefile.rb)

(See full trace by running task with --trace)

{% endhighlight %}	

This means I needed to make my own rake file. I started from these 3 websites:

1. [Rake Tasks for Jekyll](http://www.layouts-the.me/rake/2011/04/23/rake_tasks_for_jekyll/)
2. [Rake Tutorial](http://jasonseifer.com/2010/04/06/rake-tutorial)
3. [Get Input in Rake Tasks](http://elia.wordpress.com/2008/11/07/get-input-in-rake-tasks/)

These are more for the interest of learning Rake and to customize it as you wish. Otherwise, it takes only a few minutes to transfer your blog over from the regular Jekyll to jekyll-bootstrap. 

There is an existing folk of Jekyll called [Jekyll Bootstrap](http://jekyllbootstrap.com/). It has the rake file already set up and much better documentation. Takes 20 seconds to set up, literally. Also, it's under better development and seems rather promising. The file structure and usage is identical so there shouldn't be any issue. 

### Rakefile
And here is my rake file that I use to create post every time.

{% highlight ruby %}
	
# Sources:
# http://jasonseifer.com/2010/04/06/rake-tutorial
# http://elia.wordpress.com/2008/11/07/get-input-in-rake-tasks/
# http://www.layouts-the.me/rake/2011/04/23/rake_tasks_for_jekyll/

# Asking for title
def ask message
print message
STDIN.gets.chomp
end
title = ask('Title: ')

#Create new a post
desc "Default 'rake' command creates a new post"
task :default do
  filename = "#{Time.now.strftime('%Y-%m-%d')}-#{title.gsub(/\s/, '_').downcase}.markdown"
  path = File.join("_posts", filename)
  if File.exist? path; raise RuntimeError.new("File exists #{path}"); end
  File.open(path, 'w') do |file|
    file.write <<-EOS

# YAML Front Matter
---
layout: post
title: #{title}
date: #{Time.now.strftime('%Y-%m-%d %k:%M:%S')}
---
EOS
end

# invoke Textmate to edit file
# sh "mate #{path}"
	
	end
	
{% endhighlight %}	

Usage is quite simple. To create a new post:

{% highlight bash %}
	rake
{% endhighlight %}

This will invoke the default action. It will ask you to enter the title, then create a markdown file with proper naming in the _post folder. 

If I turn on (remove the # sign) the option 

{% highlight bash %}
	sh "mate #{path}"
{% endhighlight %}

the shell will launch Textmate to edit the file immediately after created the file. 




