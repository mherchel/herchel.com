---
title: Notes on Developing with Drupal 8 (Alpha 10)
date: "2014-04-29T00:00:00.000Z"
subtitle: "Trials, tribulations, and lots of beer..."
---

Earlier this year, I decided to redevelop my site in Drupal and start blogging. Being a Drupal developer, this should be an ace in the hole. But, I chose to up the ante and do it in the yet-unrelesed version of Drupal - Drupal 8. Specifically, Drupal 8 Alpha10.

Recently,. a number of dev shops have been doing similar. Yesterday, Denver’s [New Media](http://www.newmediadenver.com/), launched their site, and even before that, Swiss company Amazee Labs launched [their site](http://www.amazeelabs.com/en).

So, here I am.

## Freaking awesome

The first thing that really amazes me about D8 is that you can finally develop an entire basic website in core. This is radically different that in previous versions. In Drupal 6, you had to install CCK, and Views. Drupal 7 saw CCK moved into core, but Views was still in contrib. Drupal 8 brings Views into core, along with several Field API modules like date (enable date/time fields), entity reference (reference between articles, images, content, etc), and more.

## Some minor issues... and a major

I ran into several minor issues, and one major one during the development process. The minor ones mainly consisted of UI quirks. And the major issue was simply trying to get Jquery to load for anonymous users.

My mobile menu uses Jquery to toggle a class on and off. This should be pretty straightforward. In Drupal 7 it was- Jquery is always loaded. In Drupal 8, though, Jquery is only loaded when it needs to be. This is fantastic- why load a ~100k library if its not being used?

The problem that I ran into is a known one. Adding the dependency into my theme’s YAML libraries file didn’t work. Luckily I had a bit of help from the west coast in the form of Danny Englander (who maintains the Gratis theme and it’s D8 version)

## Div-itis

If you haven’t heard yet, Drupal’s theming system is getting a complete rewrite. In addition to pulling out and replacing Drupal’s old PHPTemplate templating system with Twig (the templating engine used by the Symfony2 framework), many developers are working on making Drupal’s default markup to be more simple and semantic.

That all being said, work is still being done. This is the markup generated from a simple custom text block.

```html
<div data-edit-entity-id="custom_block/1" class="block block-custom-block contextual-region" id="block-callout">
  <div data-contextual-id="block:block=callout:|custom_block:custom_block=1:changed=1396462689">
  </div>
  <div class="field field-custom-block--body field-name-body field-type-text-with-summary field-label-hidden" data-edit-field-id="custom_block/1/body/und/full">
    <div class="field-items">
      <div class="field-item">
        Actual Text.
      </div>
    </div>
  </div>
</div>
```

Ugh. Something like this might be more appropriate:

```html
<div data-edit-entity-id="custom_block/1" class="block block-custom-block contextual-region" id="block-callout">
  Actual Text.
</div>
```

One Div. No bullshit :)

Like I mentioned before, I’m not the only one who cares about this. This problem is being worked on in issues [2214241](https://drupal.org/node/2214241) and [2160611](https://drupal.org/node/2160611), as well as others. Hopefully, these will make it into D8.

## A couple other interesting tidbits

* You can’t disable modules. You need to uninstall them.
* Right now, there’s no path_to_theme() function. This is being [worked on](https://drupal.org/node/2168231).
* YAML is super-easy to work with (much more so than PHP)

## So what now?

Currently, alpha versions of Drupal are not upgradable - meaning that I have to blow away my installation (data, config, and everything) to upgrade. This will change once beta1 comes out (or at least it should). Beta versions will be upgradable.

I don’t plan on chasing HEAD or upgrading until the stable release is put out. Even then, I may wait a bit. Chances are I’ll have to refactor my theme and rebuild everything... but that shouldn’t be too much of an issue on a small site like this.

The value is that I had a chance to learn about the Drupal 8. I was super excited about it before, and working with it makes me even more pumped. Even in it’s current Alpha 10 state, its still fairly stable with only minor issues appearing (at least for this small site).

I firmly believe that Drupal 8 is going to freaking rock on so many levels.

When is it going to be released? Probably late summer. I’m calling it now: August 4th :p