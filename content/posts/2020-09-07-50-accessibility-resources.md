---
layout: post
author: Ben Robertson
title: '50+ Web Accessibility Resources for Web Developers'
date: 2020-09-07 00:00:00 -0500
categories: accessibility
snippet: ''
path: /accessibility/web-accessibility-resources-web-developers
---


## Getting Started with Web Accessibility

There are lots of different ways to get started with accessibility, and honestly, looking at a list like what I've compiled here might be more overwhelming than it needs to be.

Getting started with web accessibility can be boiled down into [four simple principles](/accessibility/principles-getting-started-website-accessibility), but depending on how you like to learn you may find one or more of these resources helpful. I've certainly consulted them over the years!

### [The A11y Project](https://www.a11yproject.com/)

The A11Y Project is a community-driven effort to make digital accessibility easier.

It features [articles](https://www.a11yproject.com/posts/) on accessibility, a [checklist](https://www.a11yproject.com/checklist/) based on WCAG, and other [resources](https://www.a11yproject.com/resources/).

### [A11y Coffee](https://a11y.coffee/)

Amberley Romo wanted a single place to be able to point people to answer the question, "what is web accessibility and how do I get started?". She built [a11y.coffee](https://a11y.coffee) to answer it, and answers it quite well!

### How to use a screen reader

The Paciello Group has a really helpful [quick start guide for screen readers](https://developer.paciellogroup.com/blog/2015/01/basic-screen-reader-commands-for-accessibility-testing/) including JAWS, Narrator, NVDA and VoiceOver.

When people ask me how to get started using a screen reader on macOS, I send them this guide from Bocoup: [Getting Started with VoiceOver & Accessibility](https://bocoup.com/blog/getting-started-with-voiceover-accessibility).

### Keep up to date with [A11y Weekly](https://a11yweekly.com/)

The [A11y Weekly](https://a11yweekly.com/) newsletter, curated by David A. Kennedy, is a great resource for staying connected on what's happening on a weekly basis in the web accessibility community.

The format is usually:

- a featured article on accessibility
- a roundup of some of the best new accessibility writing, tools, resources, and tutorials
- another featured article

<hr />

## Books

Sometimes I find books a helpful way to focus on a topic and cut out a lot of noise. Reading one person's longer perspective on a topic can often be more efficient than reading a bunch of isolated blog posts and cobbling them together.

Here are some great books about web accessibility.

### [Accessibility for Everyone](https://abookapart.com/products/accessibility-for-everyone) by Laura Kalbag

*If you want a one book intro to the field, I suggest this one.*

This is a great overview of the web accessibility landscape. You'll learn about disabilities and impairments, how to plan for accessibility, content and design considerations, HTML and accessibility, testing, and relevant laws and guidelines.



### [Inclusive Design Patterns](https://shop.smashingmagazine.com/products/inclusive-design-patterns) by Heydon Pickering

This book aims to show how to build accessible web interfaces without extra effort and provides front-end patterns as examples

### [Inclusive Components](http://book.inclusive-components.design/) by Heydon Pickering

This book looks at common web design patterns through the lens of inclusion and shows more accessible, robust solutions for these common patterns. Some of the components are available for free at [inclusivecomponents.design](https://inclusive-components.design/).

### [Resilient Web Design](https://resilientwebdesign.com/) by Jeremy Keith

This is more of a history book of the web than a set of tutorials, but in it Jeremy Keith provides so much helpful context for understanding why websites are built in certain ways and not in others, and longer term ideas to follow to build websites that are *resilient*.

> You won’t find any code in here to help you build better websites. But you will find ideas and approaches. Ideas are more resilient than code. I’ve tried to combine the most resilient ideas from the history of web design into an approach for building the websites of the future.
>
> This book explains how we can craft accessible interfaces without extra effort — and what front-end design patterns we can use to create inclusive experiences.


<hr />

## Libraries

As in most areas of web development, smart, helpful people have built robust open-source libraries to help solve common accessibility problems. If you're looking to build a new component or are having trouble implementing a pattern they way you think it should be, you may find some help here

I've grouped these here into [general JavaScript libraries](#javascript-libraries), [React libraries](#react-libraries), and more fully featured [style guides / pattern libraries](#style-guides--pattern-libraries).

### General JavaScript Libraries

These libraries are generally framework agnostic, or may depend on jQuery.

#### [Accessible Autocomplete](https://github.com/alphagov/accessible-autocomplete)

A JavaScript autocomplete built from the ground up to be accessible.

#### [Adobe Accessible Mega Menu](https://adobe-accessibility.github.io/Accessible-Mega-Menu/)

A demonstration of how to implement a keyboard and screen reader accessible mega menu as a jQuery plugin.

#### [Accessible Dropdown Navigation](https://github.com/ireade/accessible-dropdown-navigation)

A more accessible multi-level dropdown navigation, with an explainer [blog post here](https://bitsofco.de/accessible-multi-level-dropdown-navigation/).

#### [a11y Dialog](https://github.com/edenspiekermann/a11y-dialog)

A11y dialog is a lightweight (1.3Kb) yet flexible script to create accessible dialog windows.

#### [Micromodal](https://micromodal.now.sh/)

> Micromodal.js is a lightweight, configurable and a11y-enabled modal library written in pure JavaScript

### React Libraries

React libraries to help with common accessibility patterns.

#### [React Modal](https://github.com/reactjs/react-modal)

An accessible modal dialog component for React, built and maintained by the core React team.

#### [React Menu Button](https://github.com/HugoGiraudel/react-menu-button)

react-menu-button is a React component for [inclusive-menu-button](https://github.com/Heydon/inclusive-menu-button) meant to ease the use of accessible menu buttons in React applications.

#### [React Clickable Box](https://github.com/danoc/clickable-box)

React component to add onClick to HTML elements without sacrificing accessibility.

#### [React ARIA Accordion](https://www.npmjs.com/package/react-aria-accordion)

This accordion component aims to follow the guidelines set out in the WAI-ARIA Authoring Practices 1.1 and uses the render props pattern to be as flexible as possible.

#### [Reach UI](https://ui.reach.tech/)

Reach UI seeks to become the accessible foundation of your React-based design system. Each component is tested with Safari + VoiceOver, Firefox + NVDA, and Edge + JAWS.

### Style Guides / Pattern Libraries

#### [Rocketbelt](http://rocketbelt.design/)

Rocketbelt is a UX-focused, responsive, and mobile-first pattern library collaboratively assembled at Pier 1 Imports.

#### [A11y Style Guide](http://a11y-style-guide.com/style-guide/)

This application is a living style guide or pattern library, generated from KSS documented styles, with an accessibility twist.

It comes with pre-populated accessible components that include helpful links to related tools, articles, and WCAG guidelines to make your site more inclusive.

#### [eBay MIND Patterns](https://ebay.gitbooks.io/mindpatterns/content/)

A [book](https://ebay.gitbook.io/mindpatterns/) with corresponding examples, from the team at eBay.


#### [United State Web Design System](https://designsystem.digital.gov/)

> A design system for the federal government
>
> Design and build fast, accessible, mobile-friendly government websites backed by user research.

#### [Paragon, the Open edX React Pattern Library](https://github.com/edx/paragon)

Paragon is a pattern library containing accessible React components and a SCSS foundation built on Twitter Bootstrap. Paragon is developed for the Open edX platform.

#### [Styled Form Controls](https://scottaohara.github.io/a11y_styled_form_controls/)

A repository of styled and “styled” form control elements and markup patterns, and how they are announced by screen readers.

#### [Web Experience Toolkit (WET)](http://wet-boew.github.io/wet-boew/index-en.html)

- An award-winning front-end framework for building websites that are accessible, usable, interoperable, mobile friendly and multilingual
- A collection of flexible and themeable templates and reusable components
- A collaborative open source project led by the Government of Canada

#### [Léonie Watson's Accessible Design Patterns](https://design-patterns.tink.uk/)

#### [A11y Nutrition Cards](https://davatron5000.github.io/a11y-nutrition-cards/)

A11Y Nutrition Cards from Dave Rupert are an attempt to simplify the accessibility expectations when it comes to component authoring. Based on the [WAI ARIA Authoring Practices Guide](https://w3c.github.io/aria-practices/).

There are examples for:

- Accordion
- Button
- Disclosure (Show/Hide)
- Menu & Menu Button
- Tabs
- Tooltip

<hr />

## Automated Testing

Automated testing is really helpful both for learning about accessibility and making sure the sites you build are accessibile. Automated testing won't catch all issues, but is well-worth the effort to set up! For more info on different kinds of accessibility testing, check out Madalyn Parker's article, [Accessibility Testing is Like Making Coffee](https://madalyn.dev/blog/a11y-testing-coffee/).

### [ESLint & Accessibility](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)

An ESLint plugin for checking common accessibility errors.

### [Pa11y](https://github.com/pa11y/pa11y)

Pa11y is your automated accessibility testing pal. It runs accessibility tests on your pages via the command line or Node.js, so you can automate your testing process.

### [AccessLint](https://www.accesslint.com/)

AccessLint is a GitHub App that finds accessibility issues in your pull requests.

### [aXe: The Accessibility Engine](https://github.com/dequelabs/axe-core)

Axe is an accessibility testing engine for websites and other HTML-based user interfaces. It's fast, secure, lightweight, and was built to seamlessly integrate with any existing test environment so you can automate accessibility testing alongside your regular functional testing.
<hr />

## Sites

### [HTML5 Accessibility](https://www.html5accessibility.com/)

Get the current accessibility support status of HTML5 features across major browsers.

### https://axesslab.com/

### https://www.accessibility-developer-guide.com/

### Accessibility for Teams

https://accessibility.digital.gov/

### Four Principles of Accessibility

https://www.w3.org/TR/UNDERSTANDING-WCAG20/intro.html#introduction-fourprincs-head

### https://developers.google.com/web/tools/chrome-devtools/accessibility/reference

### [CSS Tricks Accessibility Posts](https://css-tricks.com/tag/accessibility/)

### [Inclusive Components - Heydon Pickering](https://inclusive-components.design/)


<hr />

## Tools

### Accessibility Auditing Tools

#### SortSite

#### WAVE: Website Accessibility Evaluation Tool

#### [18F list of tools](https://accessibility.18f.gov/tools/)

#### [WAI List of Tools](https://www.w3.org/WAI/ER/tools/)


### SiteImprove

### Koa11y

### Tenon

### tota11y

### https://github.com/liip/TheA11yMachine

### https://github.com/ffoodd/a11y.css

### https://achecker.ca/checker/index.php

### Browser Extensions / Bookmarklets

#### [Trashy.css](https://t7.github.io/trashy.css/)

Trashy is a bookmarklet that removes the CSS on your page, reveals the structure of your HTML and displays possible errors. All with just a few CSS files.

#### [ANDI](https://www.ssa.gov/accessibility/andi/help/install.html)

ANDI (Accessible Name & Description Inspector) is a bookmarklet that:

- Provides automated detection of accessibility issues
- Reveals what a screen reader should say for interactive elements
- Gives practical suggestions to improve accessibility and check 508 compliance

![](https://www.ssa.gov/accessibility/andi/help/images/andi-overview.png)
<hr />

## Communities

### Web A11y Slack

I hang out in here quite a bit :) My handle is @ben if you want to get in touch!
Get an invite here: https://web-a11y.herokuapp.com/