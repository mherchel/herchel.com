---
title: Making Rainbows with CSS Variables and React
date: "2018-01-20T00:00:00.000Z"
subtitle: "🌈"
display: "false"
---
I added an [easter egg](https://en.wikipedia.org/wiki/Easter_egg_(media)) to my blog last week. If you click and drag the background (you have to be on a screen wider than 1200px to do so), the background color will change. It's pretty silly, but I had a lot of fun doing it and looks pretty sweet. 

![Napoleon Dynamite Meme](./sweet.jpg)

Here's a [video of the color changing in action](./color-changing-variables.mp4), in case you're on mobile.

Here's how it's done and why it's performant (sometimes).

## First, let's set up the fixed background

Before we can start messing with variables or React, let's get the background setup.

My default background color is `deepskyblue`, which is a named color. 

```css
body {
  background-color: deepskyblue;
}
```

For the background image, I'm using a pattern from [Subtle Patterns](https://www.toptal.com/designers/subtlepatterns/) that can be downloaded [here](https://www.toptal.com/designers/subtlepatterns/subtle-grey/). 

I want the background image to be fixed (meaning that it won't move when scrolled). But, that introduces a performance issue: When scrolling on a page that has `background-attachment: fixed;`, the page will continuously repaint on scroll. This is expensive for the CPU, and can often lead to situations where the page acts "janky" while scrolling. 

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

Because we also do not want this to scroll, we're using the `::after` pseudo element on the `body` tag in a similar fashion to what we did before.

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

First we'll add the variable to the `:root` element (which is the `<html>` element). We call this `--primary` because it's the primary color. Variables are always prepended with double-hyphens.

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

We can use an [online color converter](https://www.w3schools.com/colors/colors_converter.asp) to convert from hex to HSLA.

```css
body {
  background-color: hsl(195, 100%, 50%, 1); /* This is the same as deepskyblue. */
}
```
Because we're planning on manipulating the hue, and the lightness separately, let's split each value into their own CSS variables and combine all of those into the `--primary` variable.

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

Updating the variables would be pretty easy to do with vanilla JavaScript, but since this blog is using React, we're going to make use of that.

The first thing we need to do is keep track of current *hue* and *lightness* via React's state system. 

### Set up State

```js
class Template extends React.Component {
  constructor() {
    super()
    this.state = {
      hue: 195,
      lightness: 50
    }
  }
  render() {
    ...
  }
}
```

### Track mouse movement

Next, we need to do track the mouse movement via the [mousemove](https://developer.mozilla.org/en-US/docs/Web/Events/mousemove) event and calculate and then update those values.

```js
class Template extends React.Component {
  constructor() {
    super()
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.state = {
      hue: 195,
      lightness: 50
    }
  }
  handleMouseMove(e) {
    const hueIncrement = window.innerHeight / 360
    const mouseYPositionPercent = (e.clientY / window.innerHeight) * 100
    const hue = mouseYPositionPercent * hueIncrement
    const lightness = (e.clientX / window.innerWidth) * 100

    this.setState({ hue, lightness })
  }
  render() {
    // ...
  }
}
```

We're passing in the event object into this method. `e.clientX` and `e.clientY` will return the mouse's position within the viewport.

### Set up event listeners

The `mousemove` event won't fire unless we set up an event listener to tell it to do so. For performance reasons, we only want this to be active when the mouse button is actually being pressed.

So, we need to set up methods to handle the `mousedown` and `mouseup` events.

```js
class Template extends React.Component {
  constructor() {
    super()
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.state = {
      mousedown: false,
      hue: 195,
      lightness: 50
    }
  }
  handleMouseDown(e) {
    if (!e.target.matches(`.${layoutStyles}, .${layoutStyles} *`)) {
      this.setState({ mousedown: true })
      document.addEventListener('mousemove', this.handleMouseMove)
    }
  }
  handleMouseUp(e) {
    this.setState({ mousedown: false })
    document.removeEventListener('mousemove', this.handleMouseMove)
  }
  render() {
    // ...
  }
```

We're passing the event object to the `handleMouseDown` method. We then check to see if the target of the click is within the content area of the page (this is what checks to verify you clicked on the background). 

We're using the [element.matches() API](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches), which takes a standard selector. The selector in this situation is determined by [Emotion JS](https://github.com/emotion-js/emotion), but is referenced through the `layoutStyles` variable. Note that we're also checking to see if the target is anything *within* `layoutStyles`.

Only then do we change the mousedown state, and add an event listener for `mousemove`.

We also have a method for handling the `mouseup` event, that changes state and removes the event listener (for performance reasons) when the user stops pressing the mouse.

### Set up event listeners for mouseup and mousedown

We still need event listeners for the `mouseup` and `mousedown` events. To set these up we place them within React's [componentDidMount()](https://reactjs.org/docs/react-component.html#componentdidmount) lifecycle method, which is invoked immediately after a component is mounted. 

```js
class Template extends React.Component {
  constructor() {
    // ...
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleMouseDown)
    document.addEventListener('mouseup', this.handleMouseUp)
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleMouseDown)
    document.removeEventListener('mouseup', this.handleMouseUp)
  }
  render() {
    // ...
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