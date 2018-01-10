---
title: Making Scroll Animations on Syfy.com Not Suck
date: "2015-04-19T00:00:00.000Z"
subtitle: "A deep dive into browser rendering and devTools"
---

Earlier this year, [Lullabot](https://www.lullabot.com/) launched the new [Syfy.com](http://www.syfy.com/). I was fortunate to be the lead front-end developer on the project. The new Syfy design called for some very complex animations that were directly bound to the scroll event. So, on every scroll, animations would progress a certain amount.

One of the most difficult challenges was to make these interactions performant on slower computers. To do this, I had to dive deep into how browsers render pixels on screen, and then use this knowledge to optimize the HTML, JavaScript, and CSS to make it performant as possible.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/mikeherchel?ref_src=twsrc%5Etfw">@mikeherchel</a> nothing standing out to me on desktop, even while emulating. would need to try it on my device on 3G to evaluate the rest.</p>&mdash; Paul Irish (@paul_irish) <a href="https://twitter.com/paul_irish/status/582244919311409152?ref_src=twsrc%5Etfw">March 29, 2015</a></blockquote>

I spoke on this topic at [Florida Drupalcamp 2015](http://2015.fldrupal.camp/), and I also gave an abbreviated version of the talk, a week later, at [Orlando Barcamp 2015](http://barcamporlando.org/).

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/mikeherchel?ref_src=twsrc%5Etfw">@mikeherchel</a> teaching wizardry <a href="https://twitter.com/hashtag/fldc15?src=hash&amp;ref_src=twsrc%5Etfw">#fldc15</a> <a href="http://t.co/gwrFytzjo3">pic.twitter.com/gwrFytzjo3</a></p>&mdash; Tobias Williams (@widescreen_bob) <a href="https://twitter.com/widescreen_bob/status/586886578242461697?ref_src=twsrc%5Etfw">April 11, 2015</a></blockquote>

https://speakerdeck.com/mherchel/making-syfy-dot-coms-scroll-interactions-not-suck