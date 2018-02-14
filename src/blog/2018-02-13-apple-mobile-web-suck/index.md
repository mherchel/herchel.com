---
title: Apple has a monetary interest in making the mobile web suck
date: "2018-02-13T00:00:00.000Z"
subtitle: "More people will use apps"
display: "true"
---
Earlier this month I ran into [this article](https://medium.com/@firt/pwas-are-coming-to-ios-11-3-cupertino-we-have-a-problem-2ff49fd7d6ea) on Twitter, which details inconsistencies and bugs in mobile Safari's version of service workers.

> I’m sorry to confirm that most problems are the same that I stated 18 months ago...

This article also talks about Apple's decision to [remove service workers after "a period of a few weeks"](https://webkit.org/blog/8090/workers-at-your-service/). This is inconsistent with every other browser on the market. 

For those that are not web developers, let's dive into what service workers are, and why this is relevant. Service workers are background processes that can be "installed" by websites. They're really neat, and can do many things including:

* Offloading of processing
* Pre-fetching of resources
* Operate your website while you're offline
* Background updates

Service workers are a key component of what Google labels Progressive Web Applications (PWAs). Progressive Web Apps enable you to install the website (or web application) onto your home screen. Once it's installed, service workers can enable it to be run when your phone is offline. When your phone is back online, it can then synchronize and reconcile any data input or updates &mdash; *unless the service worker has been removed by Apple*.

### Sound familiar? 

It sounds like a native app. But the difference is 1) It doesn't require you to download it from an App Store, and 2) It's built off of web technologies.

These two reasons means that 1) Apple doesn't get its standard <strike>30%</strike> 15% cut of any revenue, and 2) Apple doesn't get to keep control of what does or does not get available to install.

In 2017 alone, Apple made [11 Billion dollars off of the App Store](https://www.forbes.com/sites/chuckjones/2018/01/06/apples-app-store-generated-over-11-billion-in-revenue-for-the-company-last-year/#2754e1626613)!

## But I'll just use another browser. 

This whole point would be moot, except for the fact that Apple requires all browsers to [use *their* provided rendering engine](https://www.howtogeek.com/184283/why-third-party-browsers-will-always-be-inferior-to-safari-on-iphone-and-ipad/), and *their* provided JavaScript engine. This means that any bugs present in mobile Safari will also be present in Chrome, Firefox, and any other browser you try to install.

> 2.5.6 Apps that browse the web must use the appropriate WebKit framework and WebKit Javascript. https://developer.apple.com/app-store/review/guidelines/

Why? Control.

## But doesn't Google have the same incentive?

Google is an interesting case, because yes it has incentive to keep apps in its Google Play store. But the difference is that Google draws the majority of its revenue from its advertising sales: AdSense and AdWords ([Over $96B](https://www.statista.com/statistics/266249/advertising-revenue-of-google/)). And advertising sales is more profitable when there are more things to advertise (for example web applications).

This is the main reason why Google makes Chrome. Its using Chromium to help drive web technologies forward (and it's working). Google *needs* the web to remain open in order for its primary revenue stream to remain profitable.

## Apple wants a walled garden

Apple wants you in a walled garden. It wants you to use its App Store to find applications (and tack on an extra 15% fee). It then wants you to use these apps to download news (see Apple instant articles).

It wants the web to remain unstable, slow, and not as useful as native apps. And to do this it only allows you to use one defacto browser that remains extremely buggy.