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

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Yesterday I heard one of the most useful talks in front-end development. Thanks to <a href="https://twitter.com/mikeherchel?ref_src=twsrc%5Etfw">@mikeherchel</a></p>&mdash; Marcos Hernández 🇻 (@marcoslhc) <a href="https://twitter.com/marcoslhc/status/589852629615976448?ref_src=twsrc%5Etfw">April 19, 2015</a></blockquote>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">getting the down dirty scoop about layout thrashing from <a href="https://twitter.com/mikeherchel?ref_src=twsrc%5Etfw">@mikeherchel</a> at <a href="https://twitter.com/DrupalCamp_ATL?ref_src=twsrc%5Etfw">@DrupalCamp_ATL</a></p>&mdash; Jeremy Dost (@jezza) <a href="https://twitter.com/jezza/status/655121344330362880?ref_src=twsrc%5Etfw">October 16, 2015</a></blockquote>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I got a sneak peek at <a href="https://twitter.com/mikeherchel?ref_src=twsrc%5Etfw">@mikeherchel</a>&#39;s presentation about front-end performance for <a href="https://twitter.com/fldrupalcamp?ref_src=twsrc%5Etfw">@fldrupalcamp</a>. Go! I promise you&#39;ll learn something new.</p>&mdash; Joe Shindelar (@eojthebrave) <a href="https://twitter.com/eojthebrave/status/586574097733124096?ref_src=twsrc%5Etfw">April 10, 2015</a></blockquote>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Had a great time at <a href="https://twitter.com/hashtag/fldc15?src=hash&amp;ref_src=twsrc%5Etfw">#fldc15</a> today, <a href="https://twitter.com/mikeherchel?ref_src=twsrc%5Etfw">@mikeherchel</a> showing off some great stuff. Community is strong in Florida.</p>&mdash; Tobias Williams (@widescreen_bob) <a href="https://twitter.com/widescreen_bob/status/587060026516316160?ref_src=twsrc%5Etfw">April 12, 2015</a></blockquote>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">If you want to learn how to be BA at front-end development, <a href="https://twitter.com/mikeherchel?ref_src=twsrc%5Etfw">@mikeherchel</a>’s talk at <a href="https://twitter.com/fldrupalcamp?ref_src=twsrc%5Etfw">@fldrupalcamp</a> this weekend is where to go!</p>&mdash; Marc Drummond (@MarcDrummond) <a href="https://twitter.com/MarcDrummond/status/586695328319016960?ref_src=twsrc%5Etfw">April 11, 2015</a></blockquote>
