---
layout: post
category: code
tags: [vim, spf13, git, Vundle, sync]
---

I have been fiddling with Vim lately while I was learning Ruby on Rails. The only thing I was learning was `hjkl` movement keys after using [mVim](https://code.google.com/p/macvim/) for about a few months, on and off.

So I decided to do something fancy, to sync them across my mac. Totally have nothing to do with improving vim foo, but it's fun. I got started from [this blog post from VimCasts using Pathogen][2]. 

But being in love with Vundle after using [spf13][1], I insist on using Vundle. Turns out, it's much easier with Vundle since no need to install git submodule or update them. Vundle takes care all of them for you.

*Note:* if you are farmilar with everything, have your .vim on github and just want to switch to Vundle, there are two steps:

1. Install Vundle as usual. Instruction is [here][3]
2. Put `~/.vim/bundle` to your .gitignore. 
3. See my example, sloppy [github repo](https://github.com/ma65p/vim)

Here is the long step by step version.

## Setting up ~.vim
I'm going to be short and brief here. Read the [original post][2] if you are confused on the steps.

If you have your own `~/.vim` directory and `.vimrc` file, let's gather them into `~/.vim` directory and then symlink your .vimrc and .gvimrc files:

{% highlight bash %}
    mv .vimrc ~/.vim/.vimrc
    mv .gvimrc ~/.vim/.vimrc
    ln -s ~/.vim/.vimrc ~/.vimrc
    ln -s ~/.vim/.gvimrc ~/.gvimrc
{% endhighlight %}

## Setting Up Git

Turns your .vim directory to a git directory, make an empty README, commit. 

{% highlight bash %}
    cd ~/.vim
    git init
    touch README.md
    git add --all
    git commit -m "Initial Commit with Empty README.md"
{%endhighlight%}

Now that you have a local git, makes a repository on [github](github.com). If you are unsure how to do that, visit [this help page](https://help.github.com/articles/create-a-repo)

Obtain your git repo link such as `git@github.com:username/repository-name.git`. Add that repo in github.com to your remote. Use the link to your own repository below

{% highlight bash %}
    git remote add origin git@github.com:username/repository-name.git.
    git push origin master
{%endhighlight%}

Now you have everything linked up to your github, we are ready to install Vundle.

## Setting Up Vundle 

First, let's install Vundle in your machine:

{% highlight bash %}
    git clone https://github.com/gmarik/vundle.git ~/.vim/bundle/vundle
{%endhighlight%}

Then make sure these are in your `.vimrc` to use Vundle:

{% highlight vim %}
    set nocompatible               " be iMproved
    filetype off                   " required!
    set rtp+=~/.vim/bundle/vundle/
    call vundle#rc()

    " let Vundle manage Vundle
    " required! 
    Bundle 'gmarik/vundle'
    filetype plugin indent on     " required!
{%endhighlight%}

You of course can read more about Vundle [here][3]

## Install and Manage Bundles
With Vundles installed, to install any git-managed plugins, find the corresponding git directory and the link to your `.vimrc` file such as:

{% highlight vim %}
     " My Bundles here:
     "
     " original repos on github
     Bundle 'tpope/vim-fugitive'
     Bundle 'Lokaltog/vim-easymotion'
     Bundle 'rstacruz/sparkup', {'rtp': 'vim/'}
     Bundle 'tpope/vim-rails.git'
     " vim-scripts repos
     Bundle 'L9'
     Bundle 'FuzzyFinder'
     " non github repos
     Bundle 'git://git.wincent.com/command-t.git'
     " git repos on your local machine (ie. when working on your own plugin)
     Bundle 'file:///Users/gmarik/path/to/plugin'
     " ...
 {%endhighlight%}
So now, open Vim (or mVim) and install the bundles with: 

    :BundleInstall

All your bundles that you put in `.vimrc` should install now.

## Let Vundle Manage Bundles {#UsingVundle}
The only thing we are going to sync is your .vimrc. We will not sync Vundle bundles or even Vundles itself. We'll let Vundles manage all of that. So, don't let git manage your `~/.vim/bundle` folder, exclude it with .gitignore

{% highlight bash %}
    touch .gitignore
    echo "bundle/*" >> .gitignore
    echo "~/.vim/bundle/* >> .gitignore
    git status
    git add .gitignore
    git commit -am "Add .gitignore"
{%endhighlight%}

[1]: https://github.com/spf13/spf13-vim
[2]: http://vimcasts.org/episodes/synchronizing-plugins-with-git-submodules-and-pathogen/)
[3]: https://github.com/gmarik/vundle
