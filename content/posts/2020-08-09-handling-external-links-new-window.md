---
layout: post
author: Ben Robertson
title:  "Handling External Links"
date:   2020-08-09 00:00:00 -0500
categories: accessibility, frontend
snippet: "Some strategies for dealing with the 'these external links should open in a new window' feature request with usability and accessibility in mind."
path: /accessibility/handling-external-links
---

During QA on almost every web project I've worked on, a time comes when somebody files a bug report like this:

> These links should open in a new window.

I usually try to have a conversation with them about how opening links in a new window is unexpected behavior, it can be jarring, we should let users decide how to use their browser, [et cetera](https://css-tricks.com/use-target_blank/), but I have never won that battle and always end up implementing `target="_blank"`.

On one project I inherited though, a bunch of links were already opening in a new window. I was doing an accessibility audit and remediation. In order to keep the links opening in a new window and meet WCAG guidelines, links that opened in a new window needed:

- a visual indication that they open in a new window
- textual indication that the link would open in a new window for screen readers
- `rel="noopener noreferrer"` for [security](https://web.dev/external-anchors-use-rel-noopener/)

Instead of combing through the markup to add this, I created a small JavaScript module that would accomplish all three. Here's how I did it.

## Set Up

In our initialization, we need two things:

1. The current host (for example, you are currently on https://benrobertson.io)
1. A list of all links on the page.

You can get the current host with JavaScript easily with `window.location.host`. We'll use this to compare each link to.

To grab all the links, we can use an attribute selector that targets the `href` attribute. We already know we only want external URLs so we'll grab elements with an href that starts with `http`.

```js
// This will grab every single <a> on the page
document.querySelectorAll('a');

// This will grab only <a> elements that have
// a full url in the href, either http or https
document.querySelectorAll('a[href^="http"]');
```

## Parse the URLs Array

Next we need to loop through each array and determine if we need to do anything to it.

```js
// Create an array from all the links we found in the
// last step and loop through it.
Array.from(this.links).forEach((link) => {

    // If the host doesn't match the current host,
    // that means it's an external link.
    // Otherwise do nothing.
    if (link.host !== this.host) {

      // Add the external link attributes
      link.rel = 'noopener noreferrer';
      link.target = '_blank';
      this.addIndicator(link);
    }
  })

```

## Add Indicators

For this particular site, we were already using [Bootstrap + glyphicons](https://getbootstrap.com/docs/3.3/components/), so that gave a nice icon we could use. The only thing we need to do is add some markup with the right class names inside of each link. We also want to add some screen reader text (visually hidden) so that people using assistive technology will know that the link will update in a new window as well.

```js
addIndicator: function(link) {
    // Create a span element to add the icon to.
    var icon = document.createElement('span');
    // Add the icon classes.
    icon.classList.add(
      'glyphicon',
      'glyphicon-new-window',
      'glyphicon--small',
      'glyphicon--space-left'
      );

    // Create another span that will add some screen reader
    // friendly text to announce that the window will
    // open in a new window.
    var span = document.createElement('span');
    span.textContent = 'new window';
    span.classList.add('screen-reader-text');

    // Add the markup that we added to the page.
    icon.appendChild(span);
    link.appendChild(icon);
  }
```

## Final Code

Here's everything put together. Add the script to a page and then call `ExternalLinks.init()` to add the markup and indicators. You could also package up something like this in a library (I'm guessing one or more exists already).

```js
var ExternalLinks = {
  host: '',
  links: [],
  init: function() {
    // Get the current host
    this.host = window.location.host;
    // find all links
    this.links = document.querySelectorAll('a[href^="http"]');
    // Parse all links
    this.parse();
  },
  parse: function() {
    Array.from(this.links).forEach((link, index) => {
      if (link.host !== this.host) {
        link.rel = 'noopener noreferrer';
        link.target = '_blank';
        this.addIndicator(link);
      }
    })
  },
  addIndicator: function(link) {
    var icon = document.createElement('span');
    icon.classList.add(
      'glyphicon',
      'glyphicon-new-window',
      'glyphicon--small',
      'glyphicon--space-left'
    );

    var span = document.createElement('span');
    span.textContent = 'new window';
    span.classList.add('screen-reader-text');

    icon.appendChild(span);
    link.appendChild(icon);
  }
};
```