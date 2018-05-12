---
title: Resource Hints
date: "2018-01-21T00:00:00.000Z"
subtitle: ""
display: "false"
---
`<link rel='preload'>` - forces browser to fetch resource. Does not block onload.
  * This can be done via HTTP header also FYI
  * use the `as` attribute
    * Tells browser what priority to request items as
    * Use this to avoid prefetching resource twice.
    * Add cross origin attribute fetch to fonts to avoid double fetch
      * https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes
  * Use to load _late discovered_ scripts.
  * Preload web fonts
  * Won't be refetched if cached
`<link rel='prefetch'>`
 * Use to fetch future navigation item

## Browsers are smart. Don't overdo this


### Browser fetch prority

Render blocker? In hero

### HTTP2 Server Push
* Use Push when you know the precise loading order for resources and have a service worker to intercept requests that would cause cached resources to be pushed again. Use preload to move the start download time of an asset closer to the initial request — it’s useful for both first and third-party resources.


## Browser support preload
Chrome, FF, new version of Safari (not edge yet)
https://caniuse.com/#feat=link-rel-preload

## Browser support prefetch
Chrome, FF, Edge. No Safari. https://caniuse.com/#search=prefetch

## Resources
https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf

## link rel="preload"
https://www.w3.org/TR/preload/