---
title: Making Scroll Animations on Syfy.com Not Suck
date: "2015-04-19T00:00:00.000Z"
path: "/making-syfy-animations-not-suck/"
---

Earlier this year, [Lullabot](https://www.lullabot.com/) launched the new [Syfy.com](http://www.syfy.com/). I was fortunate to be the lead front-end developer on the project. The new Syfy design called for some very complex animations that were directly bound to the scroll event. So, on every scroll, animations would progress a certain amount.

One of the most difficult challenges was to make these interactions performant on slower computers. To do this, I had to dive deep into how browsers render pixels on screen, and then use this knowledge to optimize the HTML, JavaScript, and CSS to make it performant as possible.

> @mikeherchel nothing standing out to me on desktop, even while emulating. would need to try it on my device on 3G to evaluate the rest.
> 
> — Paul Irish (@paul_irish) March 29, 2015

I spoke on this topic at [Florida Drupalcamp 2015](http://2015.fldrupal.camp/), and I also gave an abbreviated version of the talk, a week later, at [Orlando Barcamp 2015](http://barcamporlando.org/).

> @mikeherchel teaching wizardry #fldc15 pic.twitter.com/gwrFytzjo3
> 
> — Tobias Williams (@widescreen_bob) April 11, 2015

https://speakerdeck.com/mherchel/making-syfy-dot-coms-scroll-interactions-not-suck