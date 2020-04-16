---
layout: post
author: Ben Robertson
title:  "How to Run a Quick Accessibility Audit"
date:   2019-01-09 00:00:00 -0500
categories: accessibility
snippet: "Run a quick accessibility audit on any website, even if you've never done one before."
listId: '6e6d0bd232'
interestGroup: '2' # Accessibility audit checklist
formTitle: "Want the accessibility audit checklist?"
formContent: "Get the checklist as a PDF - enter your email below and I'll send it right away."
formCTA: "Send me the checklist"
path: /accessibility/how-to-run-quick-accessibility-audit
---

I've said this [before](https://benrobertson.io/accessibility/principles-getting-started-website-accessibility), but I remember learning *very little* about web accessibility when I was first entering the front end developer ranks. And then one day at work, somebody asked me to put together an accessibility audit for a client. The conversation was probably something like this:

> *Cool agency office, circa 2016*:
>
> **Project manager**:
>
> Hey Ben, can you put together an accessibility audit for the website we built a while back? Our client is asking for it.
>
> **Me:**
>
> What's accessibility?
>
> **Project manager:**
>
> Not sure, but I think it has something to do with Section 508.
>
> **Me**:
>
> *has no idea what that means*
>
> Sure, I'll put something together.

And so I started googling about [web accessibility](/accessibility) and consuming all the resources I could find. That's really how I got into accessibility work. It was like I was suddenly introduced to a whole new layer of web development I had never encountered before, and I found it so interesting.

And as I learned more, I realized that a large portion of the work I had done in my career up to that point was inaccessible in some fashion. Oops 😬.

I also found that identifying accessibility issues can be complicated, especially when you don't have much experience. I felt like I had to go through the entire WCAG specification, understand all of it, and then build this huge checklist, and the entire prospect was overwhelming and sounded like a huge undertaking.

<small>*If you're feeling overwhelmed with web accessibility, you might enjoy my free email course ✉️: [Common accessibility mistakes and how to avoid them](/courses/common-accessibility-mistakes/). It covers 10 common mistakes in approachable lessons spread out over a month so you can digest it all. Interested? [👉 Sign up here.](/courses/common-accessibility-mistakes/)*</small>

As I got more comfortable identifying accessibility issues, I began to see common patterns arise with where issues could be found. To streamline finding these issues (and to help my coworkers identify issues on their own) I put together a little audit process.

This should help you run a quick accessibility audit on any website, *even if you've never done one before*.

I've outlined the process below. If you'd like a PDF checklist version of the audit, [I can send that to you](#signup).

## Quick and Dirty Accessibility Audit

When I run through this list, I take note of any component on the site that fails one of these tests.

I try to make these questions a yes or no answer, so that I can quickly identify what components have accessibility issues, and at the end I have a list of site components that are either really inaccessible, have minor problems, or in some cases, are really good and I want to give kudos.

Having a list of the components that needs work helps the client understand better and also helps in the estimation process.

### Can you navigate using the tab key?
For this section, I load up the website I want to test and just start pressing the tab key. If a focus ring appears, it moves to a new element every time I press tab, and it never goes off-screen, then things are looking good. If not, this is a really quick way to identify issues.

These are the questions I am asking:

 - Are there discernible focus states for everything that receives focus?
 - As you tab through the page, can you tell where the current focus is?
 - As you tab through the page, do any hidden / off-screen items receive focus without becoming visible?

Navigating with the tab key is my first step, for two reasons:

1. Focus is incredibly easy to test
2. If focus is not working, there's a pretty good chance we're gonna find screen reader issues as well


### Is the content of the page screen reader friendly?
After I'm done evaluating tab / keyboard navigation, I fire up a screen reader and start navigating the page. (If you've never used one before, macOS has VoiceOver built in. [This is a great guide for getting started with VoiceOver](https://bocoup.com/blog/getting-started-with-voiceover-accessibility). On Windows, you'll probably want to try [NVDA](https://www.nvaccess.org/download/)).

As I go through the page, here are the questions I'm asking:

 - Does all the visual content on the page get read by the screen reader?
 - Is the content of the page read in a logical order?
 - Do all images have meaningful alt attributes?
 - Can all custom interactions be performed with the screen reader dialog?

### Is the page structured correctly?
Next I do a quick check of the page structure. You can use the VoiceOver rotor (<kbd>CMD+U</kbd>) to quickly see all headings / landmarks, or a tool like [WAVE](/accessibility/how-to-run-quick-accessibility-audit#wave) to do this (more on this below).

Here's what I'm looking for:

 - Are heading tags used correctly, and in the correct order?
 - Are there any landmarks? (For giving kudos 😃)

### Interactivity
Interactivity testing can be a little more involved. I try to quickly identify:

 - Are there any things actions you can perform on the site with a mouse but not a keyboard?
 - Is new content ever dynamically added to the page?
	 - Does focus move to that content?
	 - Does a screen reader announce that new content has been added?

I don't usually go crazy documenting issue, I just try to document briefly what components failed these tests. I usually go into more detail later during estimation or if somebody is asking for an in-depth check.

### Check Color Contrast
Lastly, do a quick contrast check to identify any inaccessible color combinations. (More on this in the tools section below, [WAVE is a quick way to check this](/accessibility/how-to-run-quick-accessibility-audit#wave)).

### That's it

Once you've gone through this list, you should have a (hopefully) short list of some site wide issues (like structure and color contrast) and some individual components with accessibility issues.

## Tools for More Detailed Audits
For some cases, you may want or need more detailed information. These are tools that I often turn to when I want to get more specific.

### [WAVE](https://wave.webaim.org/extension/)

The best thing about this tool is that it is fast. It is also easier for people who are not familiar with Chrome DevTools.

The WAVE extension is particularly good for:

- single page audits
- Quickly identifying the structure of a page
- Pointing to errors exactly where they occur on a page
- quickly stripping CSS from a site to see the html structure
- built in color contrast checker
- identifying misused ARIA attributes

### [aXe](https://www.deque.com/axe/)

This tool will give you more specific, code-level references to accessibility issues. Good for people who are comfortable in DevTools.

Good for:

- page audits
- quickly identifying the code that is causing an accessibility issue
- gives suggestions for fixing
- shows what guidelines you might be breaking

## Get the Checklist

That's my simple audit process! Give it a try. The more you do it, the faster you'll get.

And, if you want the checklist for easy reference, sign up below and I'll send it right away!
