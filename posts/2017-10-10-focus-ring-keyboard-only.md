---
layout: post
title:  "Focus Rings for Keyboard Interactions Only"
author: Ben Robertson
date:   2017-10-10 07:00:00 -0500
updated: 2018-08-02
categories: accessibility
snippet: "Implementing the :focus-visible polyfill for better focus styles."
path: /accessibility/focus-ring-keyboard-only
---
One thing that inevitably makes it's way into our QA process on any project is the unexpected appearance of focus rings.

<figure>
![Example of a focus ring](/assets/img/focus-visible.png)
<figcaption>
A wild focus ring appeared
</figcaption>
</figure>

We've had a lot of discussions about how to handle these. The project manager and designer often suggest removing them. While that would be the easy solution, it would be a web design **anti-pattern**. Default focus rings are provided by all browsers so that keyboard users can determine which element is currently in focus. In fact, **focus rings are required to meet accessibility standards**:

> Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.
>
> <cite>- [W3 Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG21/#focus-visible)</cite>

Even when we decide not to remove focus rings, designers are usually unhappy with the default styles. One question that came up recently is if focus ring styles are made for keyboard users to keep track of the focus on the page, why do they need to show up when I click on an element? Can we add focus rings for keyboard users only?

The answer is yes! We can use the [`:focus-visible` polyfill](https://github.com/WICG/focus-visible) to add focus rings only when a user is navigating with a keyboard.

## How to use the `:focus-visible` polyfill
Here's how you can implement the `:focus-visible` in your projects right now.

If you are using ES6 modules, install the polyfill via npm:
`npm install --save focus-visible`

Import the module into your main JavaScript file:
```js
import 'focus-visible';
```

When your page loads, your `<body>` will get a class of `.js-focus-visible` so you can conditionally hide default focus rings only if the polyfill is loaded. Additionally, when you are navigating via keyboard, focused elements will get a class of `.focus-visible`.

Now we can add our css:

```scss
// override UA stylesheet, only when polyfill is loaded
.js-focus-visible :focus:not(.focus-visible) {
    outline-width: 0;
}

// establish desired focus ring appearance for appropriate input modalities
.focus-visible {
  outline: 2px solid $bright-brand-color;
}
```

## Other Resources
 - [`:focus-visible` polyfill on Github](https://github.com/WICG/focus-visible)
 - [Focus-ring on A11y Casts](https://www.youtube.com/watch?v=ilj2P5-5CjI&feature=youtu.be)
 - [The CSS Working Group focus-visible pseudo-class spec](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo)

