---
title: Making Rainbows with CSS Variables and React
date: "2018-01-20T00:00:00.000Z"
subtitle: "🌈"
display: "false"
---
I added an _easter egg_ to my blog last week. If you click and drag the background (you have to be on a screen wider than 1000px to do so), the background color will change. It's pretty silly, but I had a lot of fun doing it. Here's how it's done and why it's performant (sometimes).

Here's a [video of the color changing in action](./color-changing-variables.mp4), in case you're on mobile.

## First, let's set up the fixed background

Before we can start messing with variables or React, let's get the background set up.

My default background color is `deepskyblue`, which is a named color. 

```css
body {
  background-color: deepskyblue;
}
```

For the background image, I'm using a pattern from [Subtle Patterns](https://www.toptal.com/designers/subtlepatterns/) that can be downloaded [here](https://www.toptal.com/designers/subtlepatterns/subtle-grey/). 

I want the background image to be fixed (meaning that it won't move when scrolled), but that introduces a performance issue: When scrolling on a page that has `background-attachment: fixed;`, the page will continuously repaint on scroll. This is expensive for the CPU, and can often lead to situations where the page acts "janky" while scrolling. 

To get around this, I'm creating a `::before` pseudo-element on the `body`, and then fixed positioning it, *and* promoting it to its own composite layer using `backface-visibility: hidden;`. This will mitigate any scrolling issues.

```css
body:before {
  content: "";
  position: fixed; /* This will not scroll with the page. */
  z-index: -1; /* Make sure it appears behind any content. */
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  backface-visibility: hidden; /* This is what promotes it to its own layer. */
  background-image: url(/bg.jpg);
}
```

Now the background image is taking up the full width of the screen and doesn't scroll &mdash; but, it doesn't look right yet. We cannot see the color underneath.

![Screenshot](./bg-1.jpg)

To fix this, we need to grayscale the image, invert the colors, and then add an opacity. We do all of this via CSS:

```css
body:before {
  content: "";
  position: fixed;
  z-index: -1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  backface-visibility: hidden;
  background-image: url(/bg.jpg);

  /* New stuff down here. */
  opacity: 0.4;
  filter: grayscale(100%) invert(100%);
}
```

Here's what it looks like now.

![Screenshot](./bg-2.jpg)

Looking good! But, we still need to add that fade that's near the top. To do this, we're using a [linear-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient) fading between `deepskyblue` and `transparent`. 

Because we also do not want this to scroll, we're using the `::after` pseudo element on the `body` tag.

```css
body:after {
  content: "";
  position: fixed;
  z-index: -1;
  backface-visibility: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to bottom, deepskyblue, transparent 70%);
}
```

Now it looks right! But, there's a problem. We're declaring `deepskyblue` twice. What can we do about that?

## CSS Variables to the rescue!

[CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) (aka CSS Custom Properties) are awesome. Let's get started. 

First we'll add the variable to the `:root` element, which is the HTML element. We call this `--primary` because it's the primary color. Variables are always prepended with double-hyphens.

```css
:root {
  --primary: deepskyblue;
}
```

Then we can change around the background color, and the linear-gradient using the `var()` function.

```css
body {
  background-color: var(--primary);
}

body:after {
  background-image: linear-gradient(to bottom, var(--primary), transparent 70%);
}
```

While we're at it, let's change the colors of hyperlinks and `h3` tags.

```css
.content a {
  color: var(--primary);
}

h3 {
  color: var(--primary);
  filter: brightness(75%); /* Let's darken this a bit. */
}
```

Looking good, but how can we manipulate the colors?

## Convert the colors to HSLA

We're going to use HSLA colors here. HSLA stands for **H**ue, **S**aturation, **L**ightness, and **A**lpha. This means that we can change the any of these values individually.

We can use an [online color converter](https://www.w3schools.com/colors/colors_converter.asp) to do the job.

```css
body {
  background-color: hsl(195, 100%, 50%, 1); /* This is the same as deepskyblue. */
}
```
Because we're planning on manipulating the hue, and the lightness separately, let's split each value into their own variables and combine all of those into `--primary`.

```css
:root {
  --primary: hsla(var(--primary-hue), 
                  var(--primary-saturation), 
                  var(--primary-lightness), 
                  var(--primary-alpha));
  --primary-hue: 195;
  --primary-saturation: 100%;
  --primary-lightness: 50%;
  --primary-alpha: 1;
}
```
*Now we're cooking with gas... err... variables!*

But we still need to change these variables via React.

## Bringing in ReactJS

The first thing we need to do is to track the mouse movement via the [mousemove](https://developer.mozilla.org/en-US/docs/Web/Events/mousemove) event.


I create a 

```js
handleMouseMove(e) {
  const hueIncrement = window.innerHeight / 360
  const mouseYPositionPercent = (e.clientY / window.innerHeight) * 100
  const mouseXPositionPercent = (e.clientX / window.innerWidth) * 100
  const hueValue = mouseYPositionPercent * hueIncrement

  this.setState({
    xpos: e.clientX,
    ypos: e.clientY,
    hue: hueValue,
    lightness: mouseXPositionPercent
  })
}
  ```

Changing the variable to more variables

Bind the variables to react state

react helmet

Detecting the mouse position
 Only do so on click
  don't do so when highlighting content
 Update the state on change

disable highlighting text

What's next?

Save state in local storage