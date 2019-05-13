---
title: Chrome Developers Summit Recap
date: "2018-11-18T00:00:00.000Z"
subtitle: "Notes from Chrome Developers Summit in San Francisco"
---

Chrome Developers Summit is an annual conference that focuses on new and emerging web technologies. While I don’t have an accurate count of atten2018.11-20dance, I would guess in the neighborhood of 600 people. The event is also live-streamed on YouTube to thousands of viewers around the world.

<figure border>
    <img src="./summit.jpg" alt="View of the summit.">
    <figcaption>View Chrome Developers Summit.</figcaption>
</figure>

## Overall Theme

The primary theme of this year’s conference was PWAs. If you’re not familiar with what a PWA is, PWA stands for “Progressive Web Application.” In a nutshell, this means that its a website that acts like a native app on your phone. This means it appears and functions like a native app, and can also work in offline mode, and do background data syncs and notifications.

Google is pushing PWAs very hard because Google’s main cash cow is making sense of the unorganized web (and then inserting advertising). Opposite of this is Apple, who makes billions off of their App Store.

Google demonstrated the power of PWAs this conference by launching https://squoosh.app, which is a PWA that compares the slight variations of image formats in pictures that you upload. The app is especially impressive in that it integrates a huge number of advanced technologies including service workers, web workers (which take processing off of the primary CPU), and a complete C++ implementation of image decoders compiled into web assembly. The site is built using Preact, and the initial page-load downloads only 15kb of JavaScript! The code is fully open sourced on GitHub.

## Project Visbug

Project Visbug is a Chrome extension that aims to be the “Firebug for designers”. Visbug allows designers and developers to toggle on/off a toolbar which enables tons of fun and amazing features including drag and drop, double-click to edit content, and lots more.

## Performance Tooling and Lighthouse

Paul Irish gave a detailed overview of Chrome’s performance tooling, which utilizes to score various aspects of performance. Various performance metrics were also discussed, but nothing that has not yet talked about.


> Can't improve what you don't measure

Something that is new is that Google’s PageSpeed Insights tool now utilizes Lighthouse (previously it was doing its own thing). This is important because previously, different tools will give different scores. In addition, Google is providing an API to this service.

## Better web performance through better data formats

Web performance is very important in Google’s eyes. Websites that are slow will never be able to compete with native apps, and thus Google has incentive to promote fast sites.

There was a lot promotion of the new WEBP image format (now being implemented by Edge and Firefox). This image format can easily shave off 30% or more of your JPGs, and much more off of PNG images. In addition it supports transparency, so can function in place of either. WEBP can be implemented with progressive enhancement via the `<picture>` HTML tag. Browsers that support the format will download the appropriate image, while legacy browsers will fallback to legacy formats.

In addition, Google talked about their new AV1 video codec. They opened this technology up royalty-free to any vendors that want to implement this. This format can also dramatically save bandwidth, but it can also change image formats on the fly (mid-stream). This might be important for lower-powered devices that have trouble decoding AV1.

One more surprise related to images: Google Chrome is in the process of implementing native image lazy-loading! This means that the images will not download until the user is about to scroll to them. Currently this is only possible through JavaScript. They did not go over the implementation yet. It’s entirely possible that they will only do lazy-loading on slow connections (they currently limit `document.write` on slow connections).

## Better web performance through less JavaScript

A frequent theme of modern web performance tuning is reducing the size of your JavaScript bundles. Chrome Developers Summit continued to repeat this (recall that squoosh.app only serves 15kb on the initial page-load). According to HTTP Archive, the median JS served is 420kb over the wire. This is approximately 1mb decompressed.

Google also showed a currently-working method to serve different JS bundles to legacy browsers. This is really neat because you don’t want to have to penalize modern browsers with the parsing of multiples of JavaScript polyfills.

```
<!-- Will only get loaded by browsers that have implemented ES6 module loading -->
<script type="module" src="js-w-no-polyfill.js"></script>

<!-- Will only get loaded by browsers that have NOT implemented ES6 module loading -->
<script nomodule src="legacy.js"></script>
```

## Service workers (and WordPress) Oh My!

One of the core component technologies of PWAs are service workers. For those not familiar, service workers are JavaScript runtimes that sit in between the network and the webpage’s main thread. They can serve data when the website is offline, and can even fetch data and do work when the website is not active.

Google went into detail on caching with service workers, which enables much more granular caching than simple browser caching. That being said, if all you are doing is caching static assets, service workers will slow you down. Google also talked about Workbox, which is a collection of JS libraries that enable an easy-to-work-with API when implementing SW caching.

Google is also doing direct development on WordPress core. They are attempting to implement a service worker API that utilizes Workbox to enable efficient and granular caching, with a PHP abstraction layer on top. This will enable WP PHP plugin developers to declare caching which will be included in a single service worker. This work is not yet merged into WP core. I’m not sure how close this is.

## After Party

The event’s afterparty was held on premises at the Yerba Buena Arts Center. Karen and I met up with Barbara from Google, who is the lead of their CMS outreach effort. We had our own little roped-off area on the floor, and got to discuss shop with various other CMS representatives including WordPress and Typo3.


<figure border>
    <img src="./icecube.jpg" alt="Icecube with Google Chrome Logo.">
    <figcaption>Icecube with Google Chrome Logo.</figcaption>
</figure>

## Day 2 was focused on the future of the web

While the first day of Chrome Developers Summit was focused on what had been done. Day two is focused on what’s in the pipeline.

So what’s in the pipeline? Various APIs that will make JavaScript frameworks faster.

> Frameworks sometimes make web apps slower. They are also our best hope to make it faster

Included in this will be a new scheduling API that will allow frameworks to more efficiently write to the DOM. As part of this, Google is also ponying up $200,000 to sponsor development of performance related 3rd party frameworks.

## Browser Feature Policies

Chrome is also implementing “Browser Feature Policies”, which allow the site to define various performance policies such as not having an image that is a certain percentage larger than it is being rendered.

## Portals and native page transitions

Chrome is also implementing native page transitions, so a traditional (non SPA) webpage will behave more like an SPA. This includes “Portals”, which is a new iframe-like HTML element where you can preview and transition to other pages. This is something that I really want to learn more about.

## Houdini

There was also talk on Houdini sweet of APIs which uses “worklets” (note that this is different than “workers”), such as the CSS Paint API. This will enable you to define the visual output of the browser painting, which you can control through CSS values such as `background-image: paint(my-paint);`.

## Odds and Ends
- Karen and I ran into David Strauss. For those of you who don’t know David, he’s a founder of Pantheon, and an extremely technical person. He is now part of the [AMP Technical Steering committee](https://amphtml.wordpress.com/2018/09/18/governance/!
- We also talked with a person who is a developer at Capital One. He told us that they evaluated Drupal vs Hippo (which is a Java-based CMS), and chose Hippo. He said that Acquia was the representative on the Drupal side of things, and he also said his marketing people knew it as “Acquia CMS” and that’s what they were evaluating.
