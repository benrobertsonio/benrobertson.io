---
layout: post
author: Ben Robertson
title:  "5 Tools For Automated Accessibility Audits"
date:   2019-02-20 00:00:00 -0500
categories: accessibility
snippet: "Some of the quickest accessibility wins can be simple fixes, but if you don't know what to look for, they can be hard to spot."
canonical: https://www.mediacurrent.com/blog/5-website-accessibility-checkers/
path: /accessibility/tools-for-website-audits
---

Some of the quickest accessibility wins can be simple fixes, but if you don't know what to look for, they can be hard to spot.

Maybe a key image on your site is missing an alt description. Maybe the headings on a page look right, but actually are in the incorrect order. Or maybe your newsletter sign up form is missing a label. Any of these issues could prevent someone from understanding a web page or completing the actions you want them to do on your site.

Identifying these issues is important, which is why there is a whole slew of web accessibility checkers available to help identify these problems. I want to introduce you to a few tools that you might find helpful in identifying accessibility issues. Just remember though, that [automated tests can only catch a portion of all issues](https://www.mediacurrent.com/blog/manual-accessibility-testing-why-how/).




## WAVE: Website Accessibility Evaluation Tool
Perhaps the most well known name in accessibility testing, the WAVE ([Website Accessibility Evaluation](http://wave.webaim.org/) Tool) suite of products is developed and maintained by WebAIM, an organization devoted to making web content accessible to people with disabilities.

They have several website accessibility checker tools. At the main [WAVE page](http://wave.webaim.org/), you can enter a url to have a single page checked. It will pop open a sidebar next to your page that lists errors, warnings and accessibility features found on your page. It will also overlay your page with icons showing you where the errors.

![Example WAVE report on the Mediacurrent blog page](https://dzwonsemrish7.cloudfront.net/items/0a3g3N3x3z392X0Y0M12/Image%202018-07-27%20at%205.21.59%20PM.png?v=81829398)

Even better, this free tool is also available as a browser extension so you can easily run it on the page you are on ([WAVE for Chrome](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh) and [WAVE for Firefox](https://addons.mozilla.org/en-US/firefox/addon/wave-accessibility-tool/)). This makes it really easy to run a quick test on any page. The WAVE Extension is usually my go-to extension for a quick initial accessibility audit.

If you are looking for something more automated, WebAIM provides the [WAVE API](http://wave.webaim.org/sitewide) as a paid product that you can use to schedule and / or automate accessibility checks for your site. You can use the API to check accessibility at customized viewport sizes, provide authentication to check pages that are behind a login, and snap screenshots of the results.

## [SortSite](https://www.powermapper.com/products/sortsite/checks/accessibility-checks/)

SortSite is a web site testing tool available both as a desktop and web application that tests for accessibility, broken links, HTML and CSS standards, search engine optimization and cross-browser compatibility.

The accessibility checker will run against all three WCAG 2 levels (A, AA, AAA), as well as guidelines specific to Section 508. You can run a free accessibility scan of 10 pages at [their site](https://www.powermapper.com/products/sortsite/checks/accessibility-checks/). Here's a sample of what the report looks like:

![A screen grab of the SortSite accessibility report tab](https://dzwonsemrish7.cloudfront.net/items/332h203y3L1t34311k1m/Image%202018-07-27%20at%205.05.11%20PM.png?v=d9a9dff0)

The generated report will show errors and warnings, and prioritize them based on level of impact. The highest priority means that users will find certain pages impossible to use, down to pages that are "somewhat difficult". The report contains direct links to the WCAG and Section 508 guidelines which you can pass on to developers and designers so they can take follow the guideline to take the correct course of action.

In my experience, this tool can be very helpful for scanning an entire site quickly and generating a large report, but the error messages can be somewhat confusing. The report exports the line numbers of where the errors are found, which can be helpful if you have the web-based report with URLs, but can be confusing to developers who see the line numbers but aren't sure what they are referencing.

## [aXe: The Accessibility Engine](https://axe-core.org/)
Like WAVE, aXe has extensions for [Chrome](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/), however the aXe extensions are more developer-focused. The extension will add a new tab to the Developer Tools in your browser.

![Screen grab of the aXe extension developer panel](https://dzwonsemrish7.cloudfront.net/items/1B1f190o0W331W2R0k1B/Image%202018-07-27%20at%204.10.16%20PM.png?v=135249a6)

The aXe extension is a really great tool for developers. When you run the report on a page, you get a list of all issues. These issues can be filtered as clear violations or as issues needing review since the success or failure of accessibility tests can often be dependent on context.

For each issue, the report will show how many times it was found on the page and the HTML selector of the element that caused the issue, and a direct link to that element in the Developer Tools. It will also give you guidance on how to solve the issue in the same tab.

For issues that require review, you can mark them as "not an issue" or "this is an issue" to help clean up your report while you are working.

### Digging Deeper

The aXe browser extensions are based on the [open source axe-core JavaScript library](https://github.com/dequelabs/axe-core). This means the engine is able to be used to create custom automated accessibility tests and works with the major JavaScript testing libraries.

## [Pa11y](http://pa11y.org/)
Pa11y is another more developer-focused accessibility testing resource. They provide several tools for setting up your own suite of accessibility testing, including a command line interface, a dashboard, and a web service for scheduling tests for multiple URLs.

These tools require a developer to set them up, but once in place they can be a great tool for monitoring accessibility issues on an ongoing basis.

At Mediacurrent, we have the pa11y command line tool integrated into a lot of our build processes and continuous integration pipelines, which helps us catch accessibility issues before they make it into a code base. Proactively preventing issues can be a great way to help developers learn more about accessibility best practices.

If you aren't a developer but would like to see the kind of reports generated by the pa11y tools, you can use [Koa11y](https://open-indy.github.io/Koa11y/). Koa11y is a desktop app available for macOS, Windows, and Linux operating systems that runs the pa11y command line interface under the hood. This could be a helpful tool if developers on your team are already using the pa11y command line tools and you want to see a friendly version of the issues they are looking at. [Here is a sample report.](http://open-indy.github.io/Koa11y/sample-report.html)

## [tota11y](http://khan.github.io/tota11y/)
tota11y is a tool built by developers from Khan Academy. The goal of the tools is to reduce the barrier of entry to understanding accessibility issues by visualizing them on a page.

When tota11y is active, a menu will appear in the bottom left corner of your web browser. When open, you have the option to display or hide errors related to headings, contrast, confusing link text, form labels, and images. Tota11y will highlight the errors, revealing them on the page and also give details about what is causing the issue and steps you can take to correct the issue.

There is also an experimental "Screen Reader Wand" that will show you how a screen reader will interpret an element. This can be a great way to see your content the way a screen reader will, though I also recommend getting comfortable with a screen reader at some point.

The tota11y tool is [available as a bookmarklet](http://khan.github.io/tota11y/#Installation) that can easily be used on any site in any desktop browser. You can also include the script directly on your own site if you'd like to do that as well, though the bookmarklet would be the most common use case.

## Other tools
These five tools are just a handful of accessibility tools available for automated testing today. I've highlighted ones that I find the most useful in my work that cover a few different use cases (developer-focused, non-developer focused). There are also plenty of paid services out there for more comprehensive monitoring - but the tools I've listed here are great for getting started with accessibility audits.



