---
title: Why is Gatsby so Fast? The PRPL Pattern.
date: "2018-01-08T00:00:00.000Z"
subtitle: "WTF is the PRPL pattern?"
---
Gatsby is a ReactJS based static site generator. This means that the *build process* will automatically generate all files that are sent to the end-user's computer. You don't need to do server-side processing. 

Gatsby is also ridiculously fast. Gatsby follows the PRPL pattern, which is a technique being pushed by Google for making fast PWAs (Progressive Web Apps). 

## What is PRPL?

PRPL stands for 

* **Push** critical resources for the initial URL route. Basically this uses [HTTP/2 Server push](https://www.smashingmagazine.com/2017/04/guide-http2-server-push/), which allows you to send site assets to the user before they’ve even asked for them.
* **Render** initial route. This is the basic rendering of the web page.
* **Pre-cache** remaining routes. This includes analyzing any current hyperlinks, and then downloading the code for each before they're needed. Gatsby uses a service worker to pre-fetch and cache.
* **Lazy-load** and create remaining routes on demand. As the end-user scrolls down the page, each hyperlink that comes into the viewport also gets pre-downloaded.

Because each page is pre-downloaded, when the end user clicks a link, the next page is rendered instantly. There's no performance penalty for pre-downloading the pages because this happens only after the page you're looking at is rendered.

## This sounds complicated.

It really is complicated. Normally, you'd have to create a custom webpack config with code splitting, and a lot of custom development to do this properly. 

But Gatsby makes it easy. It just handles it - in fact, it's pretty hard to make a slow website in Gatsby. Gatsby will automatically follow this pattern. If you open up the network panel in Chome Developer Tools, you can watch the network requests filter in as you scroll down the page. Cool!

Gatsby has a number of out-of-the-box speed optimizations:

* Inline critical CSS
* Static rendering of pages (pretty obvious for a static site generator)
* No page reloads
* HTTP/2 push of critical resources
* Per-route code/data splitting
* Prefetch resources

All of this without configuring webpack, or React.

## How does development work, if you're not using webpack? 

When developing, you'll run the `gatsby develop` command. This will open up a lightweight http server on your localhost. This also enables hot-reloading, where changes to code (JavaScript, CSS, etc) are visible instantaneously. 

When you're ready to deploy, you'll run `gatsby build`. This will run a webpack build process that does code-splitting, tree-shaking, and goat-sacrificing to enable your website to be as fast as possible. 

## But it doesn't work without JavaScript, right?

It works without JavaScript! Seriously, disable JS and try it out. It obviously will not do many of the optimizations like pre-fetching routes, but it works. 

## What else do you have to do to make it fast?

Although it's hard to great a slow site in Gatsby, it's by no means impossible. To keep things fast on this blog, I'm exclusively using system fonts (no font downloads), and am as little images possible.