Then I discovered [spf13][1], a pre-packaged distribution with an awesome `vimrc` file completed and all the cool bundles installed. However, it was a nightmare to use because since I did not configure or managed the `vimrc` file myself or the bundles, when something goes awery, it's difficult to find out what's causing the problem. 

Here is an example of a glitch that took me a good few hours. When I was using `tmux` or ssh to Amazon EC2 Linux servers, the terminal there displaces a very strange color scheme for the status bar at the bottom. (picture???) At the time, I didn't know what the status bar was. And the screen was constantly blinking, rendering the whole thing unsuable. Turns out the bard error was because of the [vim-powerline plugin](https://github.com/Lokaltog/vim-powerline) requires a `256color` terminal, which the terminal on the server did not support. Digging through the .vimrc file in spf13 was no easy task. 

So I decided to set up my own configuration. And this time, I shall put the link [here](https://github.com/ma65p/vim) but you should **never ever** duplicate my vimrc. Make your own. 

The problem with a predistribution is that Vim itself is highly configurable and very personal. Your personal settings will not fit another person workflow. Even if it did, there is still a learning curve that the person must go through to be farmiliar with your setting. They can then remove what they don't like. But by the time they do that, might as well make their own. 

The learning exprience from preparing your own Vimrc and install your bundle is like making your own pizza. You get to pick the dough, yes, you can have sausage, and pinapple 2/3 of the pizza with the 1/3 cover in mushroom. You can then midway through the baking decided to add spinach to add a kick of healthy veggies. 

And it's your pizza. You'll learn things like too much pinapple will make your pizza wet. Your dough is too think. But it's all yours, you learn and you get to eat your own cake. 


