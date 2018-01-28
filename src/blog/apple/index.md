---
title: Apple has a monetary interest in making the mobile web suck
date: "2018-01-27T00:00:00.000Z"
subtitle: ""
display: "false"
---
Earlier this week I ran into [this article](https://medium.com/@firt/pwas-are-coming-to-ios-11-3-cupertino-we-have-a-problem-2ff49fd7d6ea) on Twitter, which details inconsistencies and bugs in mobile Safari's version of service workers.

For those that are not web developers, let's dive into what service workers are, and why this is relevant. Service workers are background processes that can be "installed" by websites. They're really neat, and can do many things including:

* Offloading of processing
* Pre-fetching of resources
* Operate your website while you're offline
* Background updates

Service workers are a key component of what Google labels Progressive Web Applications (PWAs). Progressive Web Apps enable you to install the website (or web application) onto your home screen. Once it's installed, service workers can enable it to be run when your phone is offline. When your phone is back online, it can then synchronize and reconcile any data input or updates.

Sound familiar? It sounds like a native app. But the difference is 1) It doesn't require you to download it from an App Store, and 2) It's built off of web technologies.

These two reasons means that 1) Apple doesn't get its standard 30% cut of any revenue, and 2) Apple doesn't get to keep control of what does or does not get available to install.

In 2017 alone, Apple made X hundreds of millions of dollars off of the App Store.

## But I'll just use another browser. 

This whole point would be moot, except for the fact that Apple requires all browsers to use *their* provided rendering engine, and *their* provided JavaScript engine. This means that any bugs present in mobile Safari will also be present in Chrome, Firefox, and any other browser you try to install.

Why? 

Control.

## But doesn't Google have the same incentive.

Google is an interesting case, because yes it has incentive to keep apps in its Google Play store. But the difference is that Google draws the majority of its revenue from its advertising sales, AdSense and XXX. And advertising sales is more profitable when there are more things to advertise (for example web applications).

This is the main reason why Google makes Chrome. Its using Chromium to help drive web technologies forward (and it's working). Google *needs* the web to remain open in order for its primary revenue stream to remain profitable.

## Apple wants a walled garden

Apple wants you in a walled garden. It wants you to use its App Store to find applications (and tack on an extra 30% fee). It then wants you to use these apps to download news (see Apple instant articles).

It wants the web to remain unstable, slow, and not as useful as native apps. And to do this it only allows you to use one defacto browser that remains extremely buggy.