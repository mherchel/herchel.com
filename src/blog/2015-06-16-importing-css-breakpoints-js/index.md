---
title: Importing CSS Breakpoints Into Javascript
date: "2015-06-16T00:00:00.000Z"
subtitle: "A simpler way to keep your project's CSS and JS in sync"
---

*Note this article was originally published on [Lullabot.com](https://www.lullabot.com/articles/importing-css-breakpoints-into-javascript).*

There are a lot of challenges within responsive web design, and one that that has constantly been a pain is triggering JavaScript based on the current CSS media query breakpoint. The problem is that the breakpoints are in CSS, which JavaScript has no native way to access. Many solutions (including [window.matchMedia()](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia), and [Enquire.js](http://wicky.nillia.ms/enquire.js/)) involve declaring your breakpoints in both CSS and JS, or require IE10+. The problem with these solutions is that when you change a breakpoint value, you have to change it twice. However, it doesn't need to be like this.

## A Simpler Solution

A quick and easy solution to this problem is to have your JS import the breakpoints directly from the CSS values in the DOM. This solution brings the current breakpoint variable into your JS in a way that's

* Simple & Lightweight
* [DRY](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
* Compatible with all browsers that support media queries (IE9+)

To see where we're going with this, check out this [fully functioning codepen](http://codepen.io/mherchel/pen/gbygBd). Now, let's get started!

## Declare your breakpoints

For simplicity, this code is straight CSS and can easily be abstracted to Sass or Less.

```css
/**
 * These values will not show up in content, but can be 
 * queried by JavaScript to know which breakpoint is active.
 * Add or remove as many breakpoints as you like.
 */
body:before {
  content: "smartphone";
  display: none; /* Prevent from displaying. */
}
@media (min-width: 700px) {
  body:before {
    content: "tablet";
  }
}
@media (min-width: 1100px) {
  body:before {
    content: "desktop";
  }
}
```

Note that I have to hide the `::before` pseudo-element so it doesn't show to the user.

## Importing the Breakpoints into JavaScript

This is the magic that queries the property for the current breakpoint. In this combination of jQuery and javascript, I'm using an object to store the value.

```js
var breakpoint = {};
breakpoint.refreshValue = function () {
  this.value = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
};
```

There's a couple things going on here. I'm querying the content property on the `::before` pseudo element using this [method popularized by David Walsh](http://davidwalsh.name/pseudo-element). I can't attach the content property directly to the body tag, because Internet Explorer 9 will return a value of "normal" when querying. IE10 and IE11 work fine. Ugh!

Firefox and IE return the value with double quotes, while other browsers do not. To get consistent values I'm using replace() with regex to strip those out.

## Trigger on resize and page load

Breakpoints change based on your browser's viewport width, so I need to update the value when the browser is resized. I also trigger a resize event on the initial page load to get the first value.

```js
$(window).resize(function () {
  breakpoint.refreshValue();
}).resize();
```

## In use

This is a simple if-else statement that queries the current breakpoint, and runs code based on the result.

```js
if (breakpoint.value == 'tablet') {
  console.log('Tablet breakpoint');
}
else {
  console.log('Some other breakpoint');
}
```

## Sample Use Case

While redeveloping the website for [Syfy.com](http://www.syfy.com/), I had an interesting problem where I needed to inject a 728x90 leaderboard advertisement within the second row of tiles. The difficult part of this is that the number of tiles per row changes depending on the current breakpoint.

![Sample use case](./breakpoint-tiles.png)

Below is a simplified example of how I handled this.

### 1. Get the current breakpoint

```js
/**
 * Global: Get current CSS breakpoint
 */
 
var breakpoint = {};
breakpoint.refreshValue = function () {
  this.value = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
};
```

### 2. Function to pass the number of columns to leaderboardMoveHelper()

```js
/**
 * Pass the number of columns to leaderboardMoveHelper() to do all the work
 */
var leaderboardMove = function() {
  if (breakpoint.value == 'tablet_narrow') {
    leaderboardMoveHelper(2);
  }
  if ((breakpoint.value == 'tablet_wide') || (breakpoint.value == 'normal')) {
    leaderboardMoveHelper(3);
  }
  if (breakpoint.value == 'wide') {
    leaderboardMoveHelper(4);
  }
}
```

### 3. Helper function to move the leaderboard to the appropriate location within the DOM

```js
/**
 * Move the leaderboard to the second row
 */
var leaderboardMoveHelper = function(columns) {
  var $tileView       = $('.tile-container', context),
      $leaderboard    = $('.ad-leaderboard.processed', $tileView),
  // Move the leaderboard
  $('.tile:nth-child(' + (columns+1) + ')', $tileView).after($leaderboard);
  // Indicate it's moved
  $leaderboard.addClass('js-leaderboard-processed');
  $tileView.addClass('js-leaderboard-processed');
};
```

### 4. Run the JS on browser resize and page load

```js
/**
* Execute
*/
$(window).resize(function () {
  breakpoint.refreshValue();
  leaderboardMove();
}).resize();
```

## Conclusion

This is a simplification of a very useful technique. The same logic can also be used to pass breakpoint states of elements by modifying pseudo-elements of any element within the DOM. For example, if you have an element that has a CSS change between multiple breakpoints, you can pass and query the pseudo-element, or can even query for the changing CSS property itself. Feel free to [hack around and fork this over at Codepen](http://codepen.io/mherchel/pen/gbygBd).

## Awesome reception

A lot of people found this technique useful, which makes me happy 😀

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Importing CSS Breakpoints Into JavaScript <a href="http://t.co/yLynY7ziOF">http://t.co/yLynY7ziOF</a></p>&mdash; CSS-Tricks (@Real_CSS_Tricks) <a href="https://twitter.com/Real_CSS_Tricks/status/610471666250985472?ref_src=twsrc%5Etfw">June 15, 2015</a></blockquote>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Just in case you ever need to do this: Importing CSS Breakpoints into JavaScript. <a href="https://t.co/vhvSiIpk9U">https://t.co/vhvSiIpk9U</a></p>&mdash; Smashing Magazine (@smashingmag) <a href="https://twitter.com/smashingmag/status/611458840010207232?ref_src=twsrc%5Etfw">June 18, 2015</a></blockquote>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Importing CSS media query breakpoints into JavaScript <a href="http://t.co/DtneOU6elt">http://t.co/DtneOU6elt</a> - I use Modernizr but this is practical &amp; DRY. By <a href="https://twitter.com/mikeherchel?ref_src=twsrc%5Etfw">@mikeherchel</a></p>&mdash; Sara Soueidan (@SaraSoueidan) <a href="https://twitter.com/SaraSoueidan/status/610473520213139456?ref_src=twsrc%5Etfw">June 15, 2015</a></blockquote>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">now, this is quite brilliant: Importing CSS Breakpoints Into JavaScript <a href="https://twitter.com/mikeherchel?ref_src=twsrc%5Etfw">@mikeherchel</a> <a href="https://t.co/aVjwI4nuzd">https://t.co/aVjwI4nuzd</a></p>&mdash; Starve (@starveapp) <a href="https://twitter.com/starveapp/status/855193261325070338?ref_src=twsrc%5Etfw">April 20, 2017</a></blockquote>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Work smarter not harder with your responsive <a href="https://twitter.com/hashtag/webdev?src=hash&amp;ref_src=twsrc%5Etfw">#webdev</a> - Importing CSS Breakpoints Into JavaScript | Lullabot <a href="https://t.co/yQdSwYZ2ZM">https://t.co/yQdSwYZ2ZM</a></p>&mdash; Graeme Reed - UX (@greedesign) <a href="https://twitter.com/greedesign/status/796799820371345408?ref_src=twsrc%5Etfw">November 10, 2016</a></blockquote>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Love this! <a href="https://twitter.com/CodePen?ref_src=twsrc%5Etfw">@CodePen</a> Importing CSS Breakpoints Into Javascript <a href="https://t.co/uxdUzqrabK">https://t.co/uxdUzqrabK</a> <a href="https://twitter.com/hashtag/webdesign?src=hash&amp;ref_src=twsrc%5Etfw">#webdesign</a> <a href="https://twitter.com/hashtag/WebDev?src=hash&amp;ref_src=twsrc%5Etfw">#WebDev</a> <a href="https://twitter.com/hashtag/webdevelopment?src=hash&amp;ref_src=twsrc%5Etfw">#webdevelopment</a> <a href="https://twitter.com/hashtag/css3?src=hash&amp;ref_src=twsrc%5Etfw">#css3</a> <a href="https://twitter.com/hashtag/javascript?src=hash&amp;ref_src=twsrc%5Etfw">#javascript</a></p>&mdash; John (@johncarroll30) <a href="https://twitter.com/johncarroll30/status/698131373379469312?ref_src=twsrc%5Etfw">February 12, 2016</a></blockquote>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Very clever technique : using content properties of pseudo element =&gt; Importing CSS Breakpoints Into JavaScript <a href="http://t.co/5ZCd4x5vvX">http://t.co/5ZCd4x5vvX</a></p>&mdash; Simon Vart (@simonvart) <a href="https://twitter.com/simonvart/status/615610717035724800?ref_src=twsrc%5Etfw">June 29, 2015</a></blockquote>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/JS?src=hash&amp;ref_src=twsrc%5Etfw">#JS</a> <a href="https://twitter.com/hashtag/RWD?src=hash&amp;ref_src=twsrc%5Etfw">#RWD</a> that&#39;s very clever:<br>Importing CSS Breakpoints Into JavaScript<a href="https://t.co/jlxxX2YO8r">https://t.co/jlxxX2YO8r</a></p>&mdash; Thomas Jund (@_sacripant) <a href="https://twitter.com/_sacripant/status/614886838847844352?ref_src=twsrc%5Etfw">June 27, 2015</a></blockquote>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Brilliant! Importing CSS Breakpoints Into JavaScript. <a href="https://t.co/X98EOWSt9K">https://t.co/X98EOWSt9K</a></p>&mdash; Gray Ghost (@gryghostvisuals) <a href="https://twitter.com/gryghostvisuals/status/610703187532750848?ref_src=twsrc%5Etfw">June 16, 2015</a></blockquote>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">The trendy thing to tweet today: Importing CSS Breakpoints Into Javascript | Lullabot <a href="https://t.co/73jdVaRv5r">https://t.co/73jdVaRv5r</a> via <a href="https://twitter.com/lullabot?ref_src=twsrc%5Etfw">@lullabot</a> <a href="https://twitter.com/hashtag/CodeLikeAGirl?src=hash&amp;ref_src=twsrc%5Etfw">#CodeLikeAGirl</a></p>&mdash; Allison Logan (@acandreva) <a href="https://twitter.com/acandreva/status/610475393238368256?ref_src=twsrc%5Etfw">June 15, 2015</a></blockquote>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Interesting <a href="https://twitter.com/hashtag/JS?src=hash&amp;ref_src=twsrc%5Etfw">#JS</a> technique on working with breakpoints in <a href="https://twitter.com/hashtag/RWD?src=hash&amp;ref_src=twsrc%5Etfw">#RWD</a> - &quot;Importing CSS Breakpoints Into Javascript&quot; - <a href="http://t.co/gkuWTBmiKA">http://t.co/gkuWTBmiKA</a></p>&mdash; Raymond Spidla (@RaymondSpidla) <a href="https://twitter.com/RaymondSpidla/status/609123875633430528?ref_src=twsrc%5Etfw">June 11, 2015</a></blockquote>
