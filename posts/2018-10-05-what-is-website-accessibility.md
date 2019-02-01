---
layout: post
title:  "What is website accessibility?"
author: Ben Robertson
date:   2018-10-02 08:00:00 -0500
categories: accessibility
snippet: "Short answer: web accessibility means building websites that are usable by as many people as possible"
path: /accessibility/what-is-website-accessibility
---

At the most basic level, web accessibility means building websites that are usable by as many people as possible.

Even though each of us might not say we have a disability, I’m sure we’ve all probably encountered a website that was difficult to use for one reason or another. Maybe a button was too small to be tapped with our finger or the text had poor contrast and was unreadable.

Now think about this: in the US alone, 57 million people report having a disability. That’s one in every five people, and the equivalent of the entire populations of New York and California combined. And around 30 million of those people report having a *severe* disability. Imagine using an already difficult to use website under those circumstances.

## What makes a site inaccessible?

Now there are many ways that users might be impeded by an inaccessible website.

Some people may not be able (*or may not want*) to use a mouse, and so need to be able to scroll, click, navigate and [interact with all parts of a website using only a keyboard](/accessibility/javascript-accessibility#2-plan-for-common-keyboard-interactions) or other device.

Others may have some form of color-blindness, so may have difficulty discerning links and buttons from other text content.

Dyslexia can cause some people to struggle to understand the content of a site.

For people with severe visual impairments, it is necessary for all content and interactivity on a page to be [understandable to a screen reader](/accessibility/understanding-layout-for-screen-readers), a program that reads the contents of a webpage to the user and lets them interact with the page. There are even machines that will provide braille output from webpages.

## Accessibility is a Web Standard

I've just barely scratched the surface on different challenges people can have in accessing websites face, and it is impossible for the average web team to keep up with all these different situations that can prevent people from using and enjoying websites.

That is why the [World Wide Web Consortium](https://www.w3.org/) first drafted [standards for developing accessible websites](https://www.w3.org/TR/WCAG10/) back in 1999. Given a set of standards for web developers to follow, it should be easier for development teams to understand how to ensure their work is accessible to all. These standards are what you may have heard referenced as WCAG (sometimes pronounced wee-kag), which stands for [Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG20/).

These guidelines provide a detailed look at common patterns and areas that can cause usability issues in different situations. At a higher level though, they outline the four broad guidelines of web accessibility:

- **Perceivable** - can all people perceive the content on the page?
- **Operable** - can all people interact with the page?
- **Understandable** - can all people understand the content on the page?
- **Robust** - can the content be interpreted by a wide variety of programs and devices, including screen readers?

While these guidelines have been around for a long time, stakeholders at all levels of web projects often aren’t aware of their existence or don’t think it is a concern for their organization. So let's look at some of the benefits of web accessibility to see why these guidelines are important.

## What are the benefits of web accessibility?

### SEO Benefits
First, there can be SEO benefits from prioritizing accessibility.

The same practices that ensure all content is perceivable and understandable to screen readers and people with visual impairments also benefits the robots that index websites for Google and other search engines.

Many accessibility guidelines focus on providing text-based alternatives to content that is available in video or audio, which allows this content to be visible to screen readers and search engines alike. The guidelines also encourage the use of proper page organization to help users best understand the layout and content of a page, which coincidentally helps search engines understand the content of a page better.

Making your web content easier for people to understand will make it easier for Google’s robots to understand as well.

### Usability Benefits
There are also usability benefits.

All of us at some point have encountered a website that was unusable: between text that doesn’t have enough contrast with its background and buttons that our fat fingers can’t click on our smartphones. Focusing on web accessibility can help us eliminate basic issues like these ones and make sure our site is just as usable on mobile devices as it is on larger screens.

Beyond this, there are people in other situations that can benefit from accessibility work. By meeting the [reading level guidelines](https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-supplements.html) and making sure text is readable at a lower secondary education reading level, we can help people with low literacy or who are not fluent in our language understand our website more easily.

Likewise, by ensuring that our web sites are robust and the content be interpreted by a wide variety of programs and devices, including screen readers (the fourth guideline from WCAG), we will help people who may be using older technologies or have low bandwidth have access to a web site.

### Currying Goodwill and Retaining Market Share
Organizations that prioritize accessibility will not only develop goodwill with their users but will also ensure they can serve ~100% of the marketplace. Even more, they will protect themselves against losing the ability to serve their customers as they age.

## What are the legal requirements for website accessibility?
Besides the benefits following accessibility guidelines can bring, there can also be negative consequences for failing to meet these guidelines.

Accessibility issues have come to the forefront due to a series of lawsuits filed under [Title III](https://www.ada.gov/regs2010/2010ADAStandards/2010ADAstandards.htm) of the Americans with Disabilities Act (ADA). Title III requires public spaces and commercial facilities to be designed and built so that users with disabilities can enjoy equal access to these facilities. While the law was originally written with physical spaces in mind, the prevalence of web-based activities including shopping and education has brought inaccessible web experiences under scrutiny as well.

Notably, a [federal judge ruled in June 2017](https://www.forbes.com/sites/legalnewsline/2017/06/13/first-of-its-kind-trial-goes-plaintiffs-way-winn-dixie-must-update-website-for-the-blind/) that Winn-Dixie’s web properties were so integrated into their physical locations that they were subject to Title III of the ADA. The judge ruled in favor of the blind man that filed the suit, requiring Winn-Dixie to update their site to meet the Web Content Accessibility Standards and perform annual audits to ensure they continue to meet these standards. ([The courts full 13 page order is available here](http://www.adatitleiii.com/wp-content/uploads/sites/121/2017/06/16-cv-23020-63-Verdict-Order_WinnDixie.pdf)).

Furthermore, the sheer number of web accessibility-related lawsuits has skyrocketed. The Seyfarth Shaw law firm [reports](https://www.adatitleiii.com/2017/08/website-accessibility-lawsuit-filings-still-going-strong/) that there were approximately 57 federal web-accessibility related lawsuits filed in 2015, 262 in 2016, and 432 between January and August of 2017 alone. Beyond that, the US Department of Education has recently opened [350 web accessibility investigations](http://legalnewsline.com/stories/510738182-department-of-education-increases-investigations-into-website-compliance-with-ada).

## Conclusion

The good news is that there are clear guidelines for developers, product managers, designers, and content editors to follow for developing and maintaining accessible websites. With good planning, execution, and accountability, an accessible website is an attainable goal for every organization. By being proactive, organizations that embrace an accessibility-first approach will be able to generate goodwill with their customers, avoid the bad press and expenses associated that come along with a lawsuit, and serve a larger market.


*I wrote this overview of web accessibility for a webinar we hosted at Mediacurrent on frequently asked questions about website accessibility back in August. Check out the [video and transcript of the questions and answers](https://www.mediacurrent.com/blog/website-accessibility-faqs-webinar-recording-and-transcript/)  if you want to learn more!*
