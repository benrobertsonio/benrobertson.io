---
layout: post
title:  "The Future of the Web is Accessible"
author: Ben Robertson
date:   2018-06-13 09:00:00 -0500
categories: accessibility
snippet: ""
---

Tags: [[Accessibility]] [[Drafts]]

For the last 8 years, we've been focused on building [responsive websites](http://alistapart.com/article/responsive-web-design): websites with layouts that respond to the size of the screen the user is viewing it on. We've practiced squeezing and stretching our browser viewports as we develop to make sure that  our sites will look flawless on any **_screen_**. But soon, that won't be enough.

## The Screenless Future

The future of the web will involve making our websites respond to any user interface, with or without a screen. Voice interfaces are becoming more common as Google, Amazon, and Apple race to get their voice assistants into as many of our phones, cars, computers, thermostats, light switches and other internet connected devices as possible. But while the current generation of voice assistants may be able to search the web for us, they still require us to click on a link and read a web page.

In the not-too-distant future, these voice assistants will be able to scan a web page, determining the different regions of the page and find what we are looking for for us. We will be able to fill out forms with a simple voice confirmation to use the address and contact info saved on our machine. We will be able to interact with all the elements on a page, just by speaking into a little microphone. We'll be able to do everything we currently do on websites, but without needing to look at a website.

## Accessibility Tree 🌲

How will all this come to pass? In order for voice assistants to offer a voice-interface version of a web page that is easy to understand and interact with, they will need to know what is actually on a page. They'll need to be able to discern the difference between the main information on the page and the extra stuff.

These voice assistants will use the [accessibility tree](https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/the-accessibility-tree). The *Accessibility Tree* is a simplified version of the DOM that provides all the information assistive technology, like a screen reader, needs to interact with a page. It is a version of the page that computers can understand and interpret.



Since Alexa, Siri and Google will need to be able to understand everything on a web page in order to determine what info is relevant or what interaction points exist and provide those options to users.

Much of the accessibility work that we do is to making sure the all the elements of a web page have an accessibility tree that accurately represents the content of a page. [Proper use of landmarks and roles](https://benrobertson.io/accessibility/understanding-layout-for-screen-readers) can help make a layout much more intelligible to users and machines alike. Using [semantic HTML and responsible JavaScript](https://benrobertson.io/accessibility/javascript-accessibility) to add interactivity ensures that interfaces will be accessible to users no matter how they click, focus, or otherwise interact with a site. All of these methods are essentially an attempt to allow computers to understand our interfaces so that they can provide alternative ways of interacting with them.

In fact, Mozilla is reportedly already working on a [voice-controlled web browser called Scout](https://www.cnet.com/news/mozilla-working-on-scout-a-voice-controlled-web-browser-project/). I suspect we'll see the popular voice-controlled assistants provide similar features in the next few years.

When voice assistants develop the ability to fully interact with a web page, accessible sites won't have to do anything extra. For everyone else not meeting the WCAG Guidelines, there will be a race to implement the web accessibility best practices that have been in place for decades.

Web accessibility is the foundation for a less screen-centered web.