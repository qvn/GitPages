---
layout: post
title: Rake for Jekyll
date: 2012-09-06 22:47:07
---

## Rake
I'm no expert at Rails but from [what I gathered](http://jasonseifer.com/2010/04/06/rake-tutorial), Rake is like a compiler for Rails. Commands are entered in the files, execute the files, series of commands are fired. That's is all. 

## Rake and Jekyll
Rake can be used to create a new post or page. Now, before I dive into my own rake file, there is an existing folk of Jekyll called [Jekyll Bootstrap](http://jekyllbootstrap.com/). It has the rake file already set up and much better documentation. Takes 20 seconds to set up, literally. 

However, if you happen to be using the original [Jekyll](https://github.com/mojombo/jekyll), there isn't any Rake file. We need to make one. This is more for the interest of learning how to mess with Rake to customize as you wish. Otherwise, it takes only a few minutes to copy your files from the regular Jekyll to jekyll-bootstrap. 

## Rakefile
And here is my rake file that I use to create post every time.

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
	
Usage is quite simple. To create a new post:

	rake
	
This will invoke the default action. It will ask you to enter the title, then create a markdown file with proper naming in the _post folder. 

If I turn on (remove the # sign) the option 

	sh "mate #{path}"

the shell will launch Textmate to edit the file immediately after created the file. 




