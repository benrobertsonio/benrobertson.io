---
title: The 80/20 on Website Accessibility Mistakes / 9 Website Accessibility Mistakes and how to fix them
---

## The Principles: A Refresher

Ok so that wraps up our four principles.

Just to recap:

Principle 1 is that web design is more than graphic design.
Principle 2 is be as semantic as possible.
Principle 3 is that websites should look good naked.
Principle 4 is talk to your computer, use ARIA.

Now we can get into some common accessibility mistakes.

## Missing Title

We'll start with an easy one.

Mistake #1: Missing title.

Every web page needs a `<title>` tag with a title in it. (No empty titles). This goes in the head of your document. The title tag is what ends displaying on your browser tab. It is also the first thing that gets read out loud by a screen reader when a user loads your page. It tells people what page they are on.

For this reason, the title should be informative. It also needs to be unique. Imagine opening a bunch of tabs on a web page, but they all had the same exact description in the title. How would you know which tab you want?

To avoid this, we need to be especially careful about setting default titles. Using the company or brand name may seem like a reasonable fall back, but it can be so confusing.

Here's another example:

Now imagine you are blind, using a screen reader. You are on a page with the title, Enrollment Form. You fill out all the fields on the page and then hit the next button. The first thing you hear is "Enrollment Form". You start to wonder, did I click the wrong button? Did I leave something blank? Did all my information get lost? It's confusing and disorienting. That's why unique titles are so important.

The multi-step enrollment form is technically all one form. But, it's spread across different pages. And so a really great fix for this is to update the page title with the form progress.

Form step 1: `<title>Enrollment Form Step 1 of 4: Family Members</title>`
...
Form step 4: `<title>Enrollment Form Step 4 of 4: Results</title>`

So - make sure every page has a unique informative title.

## Poor Heading Structure

Mistake #2 is poor heading structure. This comes from misusing heading tags: h1s, h2s, h3s, etc.

Heading tags are used to form the outline of the web page. They are one of the main things that help a site look great naked. They can also be a way that screen readers let you navigate the page. If you open up the macOS screen reader, you can get a list of all the headings on a page and navigate directly to the one you want. It's pretty neat.

I mentioned this earlier, but when I was first building websites, and I needed large text, I would use an h1 because they are already large. Less work for me. I would do this for large statistic callouts, like "90% better than our competitor". I'd stick 90% an h1 and "better than our competitor" would be in an paragraph or span. I styled it with CSS and it looked fine. But when you look at this naked or use a screen reader, your attention is drawn to a bunch of not very informative or interesting content: "90%" "200" "1/3". It doesn't clearly organize the content.

And that's what heading tags are for: clearly organizing your content.

Every page should have an h1 - and it should describe the main content or purpose of the page. It could even be identical to your page title like we just talked about.

But most pages have enough content to break up the page into sections. The main sections of your website then, should each have a second level heading: an h2. If there are different sections inside each section, then use an h3 for each to organize them.

This really helps the readability of a site. People can scan the site and see the main points and dig into just the information they are looking for.

A place where I am always so thankful for this is on Wikipedia. I know we've all been there, googling some obscure fact and we end up on a wikipedia page, frantically scanning for the information we want. Thankfully, wikipedia makes great use of heading tags to divide up the content. Look at those h2s and h3s! So nice.

## Read More Links

Ok, common mistake #3 is Read More links.

So this often happens on a blog or on a home page, where we should a teaser of content. We'll see a display with a Title, image, teaser paragraph, and the ever-popular "Read more" button.

The problem with Read More links is that "Read More" as a link title doesn't give very much context on where the link is going to take you. Read more what? Read more where? Link text is supposed to be informative and should be able to stand on it's own, without the context of what is around it.

Now visually, these buttons may make sense. Looking at a teaser, you can see that all the content goes together, and gather that your are going to read more about the teaser you just read.

But, remember principle #1, web design is more than graphic design. Not everyone is going to be "looking" at the website. Some people will just be hitting the tab key over and over, their screen reader endlessly droning on "Read more Read more Read More Click Here Read more". Most screen readers have the ability to list all links on a page: cue "read more ad nauseam".

But we don't necessarily need to get rid of the Read More buttons, though some people do advocate for that.

The trick is to include some hidden text for screen reader users. Sometimes this is done by using something like Drupal's built-in "visually-hidden" css class to include the title. But that actually can mess up the reading order in certain browsers.

The best way to provide extra context for these links is to *talk to our computer* and use `aria-label`. When used on a link like this, the aria-label will be read by a screen reader *instead* of the link text. So we can include whatever we want there, but I recommend something like "Read more about {{ title }}." Using this technique, these links will have context and be more informative for all users.

## Inputs and Labels

On to mistake #4. Not including a label with an input. The most common way I have done this is using a placeholder instead of a label. I have worked with designers who just *love* to use placeholders. It's a really common design pattern -- look, even Google is doing it.

Now Google isn't actually using a placeholder, I just made up this code. But here is how you normally would add a placeholder, as an attribute on the input itself. And it is totally fine to use placeholders to add extra context / information to users as they are filling out a form. The problem comes when placeholders are used instead of labels, because we lose the affordances browsers have built in for labels / inputs.

First, when a label and input are properly associated (either by wrapping the input in the label or using the `for` attribute on the label), clicking on the label focuses the input. It gives the user a little more wiggle room, which can be helpful for people with motor control issues.

Second, labels persist when entering data. As soon as you enter data in a field with a placeholder, it disappears, which can leave someone wondering what format they were supposed to use.

Third, labels are just easier to style. You can move them, animate them, change their size easily, and adjust the contrast easily. The default placeholder style has light contrast, which can be a problem for anybody trying to see something on a computer with a less than stellar monitor.

And it is possible to achieve this placeholder type pattern accessibly. The pattern is commonly referred to as the "float label" pattern, and I've got a short link here to a CSS Tricks article on how to achieve it.

The short of it is that you actually place the label directly after the input, and then add conditional styles to the label when the input is focused.

In any case, every input needs a label. It should be a real `<label>` tag that has text in it, and it must be associated with the input, so that everybody can detect what is supposed to go in the box.

## Grid / Flexbox

On to number 5. This one isn't so much a common mistake, but something to keep in mind as you are using Flexbox and Grid. Everybody loves flexbox, and there's a new article about CSS Grid every day, right? They are both awesome and very powerful tools. But as most of our powerful tools do, they can cause accessibility problems if used improperly.

One of the powerful properties both Flexbox and Grid have in common is the `order` property. Given a Grid or Flex layout, you can manually set the order of any item by giving it an order property. By default, all elements have an order property of 0. -1 sends the item to be first in line. Any other number sets the order manually.

While this is a powerful property, the accessibility issue arises because it changes only the visual order, not the document order. The tabindex remains the same, so if you have a nav that you have reordered with flexbox, the tab order of that nav will be out of sync with the visual order. And, if you move content around on the page using order, a screen reader will still read the page in the original order, so it may appear as if the screen reader is jumping all over the place.

The important distinction to make here is between the visual order of the page and the logical order of the page.

This property should only be used for visual reordering, not logical reordering.

**Visual reordering** would be reordering grid / flex items that are merely visual - such as some kind of visual pattern or design treatment.

**Logical reordering** would include any kind of content reordering.

If you are moving a piece of content somewhere else using `order`, because it makes more sense there or some other reason, then you are performing logical reordering, and that's what we need to avoid.

Mozilla developer network has this helpful guideline:

> If at any time in the design process you find yourself using grid to relocate the position of an element, consider whether you should return to your document and make a change to the logical order too.

In short, when you need to change the order of your content, change your markup, not your CSS. In most cases, the order property should really be avoided.

Plus, this is the kind of thing you should be able to catch with the naked test, as you should notice the content on the page changing order once the CSS is gone.

## Images and alt attributes.

Here we go, number 6: Images and alt attributes. We discussed how web design is more than just visual, but what do you do with something very visual, like an image? That is the main purpose of the alt attribute on image tags.

The alt attribute provides a text **alternative** to the image, in the event that someone is unable to see an image. This may happen for a variety of reasons:

 - broken image link
 - slow internet
 - using a screen reader

You should always include the alt attribute. If you don't, screen readers will read the image file name. That can be very annoying for computer generated names like 201018acn300x450.jpeg.

However, the alt attribute does not always need to be filled in -- it can be empty.

If an alt attribute exists and is empty, the screen reader will skip this image entirely. If the image is not content and not important for understanding content or functionality, an empty alt attribute can be a good strategy.

You might do this in a situation like this. A profile card of a person with a name, image, description, and link.

```
<div class="card">
	<h2>Ben Robertson</h2>
	<img src="/handsome-ben-robertson.jpg" alt="Ben Robertson" />
	<p>Ben Robertson is a front end developer at Mediacurrent.</p>
	<a href="/ben-robertson">View Ben Robertson's Profile</a>
</div>
```

In this example, a screen reader will end up reading Ben Robertson three times in a row: once for the title, once for the image alt, and once for the paragraph. Leaving the alt tag blank would reduce repetition and the content would still be understandable.

Another example is a "Close Menu" button, with an image and text inside:
```
<button>
	<img src="/close-menu.png" alt="Close Menu" />
	<span>Close Menu</span>
</button>
```

Here, the alt is communicating the same information as the text immediately following it. Leaving the alt blank here will still let the user know what the button is for.

So: always include the alt attribute, but leave it blank sometimes.

## :focus { outline: none; }

Lets talk about some keyboard functionality. Mistake #7 is very common, because it made it's way into a bunch of the CSS Resets, like normalize.css and others. The code removes the default outline that is added to any element when it receives focus in the browser.

The reason this is typically added in a reset is so that we developers can go ahead and style it consistently, across browsers, but often times that can be forgotten.

The default outline is there to comply with the standard requirement which says that

> Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible

This helps people know where they are in a page. You can quickly tell if a site is doing this by pressing the tab key while on the page. You should see something change - a link is outlined, or highlighted, or visually changes in some way.

Now, I can say I have gotten a lot of feedback from designers that they don't like these outlines. "These shouldn't have outlines," they say. "Where did these weird outlines come from, I didn't design this". This is a perfect opportunity to explain what the focus rings are for, and then tell the designer that they have the opportunity to put their design skills to the test and design some really awesome focus styles.

I was having one of these conversations with a designer once when he asked me a really good question: "If focus ring styles are made for keyboard users to keep track of the focus on the page, why do they need to show up when I click on an element? Can we add focus rings for keyboard users only?"

The answer is yes! There is a `:focus-visible` selector coming with the CSS 4 spec, and there is a nice polypill available that allows you to style focus styles only for keyboard interactions. It's a really nice feature and I've got a short link here on how to get started with the focus-visible polyfill.

## Missing keyboard functionality

Number 8 is another keyboard related issue: when interactive content is only triggerable via a mouse click. For interactivity, any functionality that  someone using a mouse can do should also be able to be accomplished using only a keyboard. In fact, you shouldn't need a mouse at all to operate a website.

If there is a button that opens the main navigation of the site with a click, a user should be able to trigger that with the return key or spacebar. If there is a close button on a modal, pressing the ESC key should allow the user to close the modal.

This kind of functionality is often an afterthought, but it doesn't have to be difficult to implement. The trick to keep in mind is that in almost all cases, you should bind click event listeners to buttons.

Remember what I said earlier? If it needs to be clickable and is not a link, you should probably use a button. Let's get into it

If you don't use a `<button>` you'll end up having to write more JavaScript. Besides your click handler, you'll have to bind to the keydown event and write logic to sort out what key the user is pressing, and if it is the right key then do the thing as well.

When you bind a click event to a button element, the browser does extra work for you. The browser will automatically listen for return or spacebar keypresses (the default "click" alternatives) on the button and interpret them as clicks. You only have to write one click handler, and the browser takes care of the keyboard functionality.

Now, you may have to write some extra CSS to override the default button styles, but you won't have to write nearly as much JavaScript, and I always prefer more CSS to JavaScript.

So the button element handles a lot of work for you, and with that work out of the way, you have more time to spend on other keyboard interactions. Common interactions you might face are

 - Exiting the current component
 - Submitting
 - Moving position / browsing

For each of these, you'll need to add a listener to the keyup or keydown event inside your component. JavaScript uses keyCodes to keep track of what key is being pressed, so you'll need to check which key code is being pressed. keycode.info is a great resource for this. Here are my most commonly used keys and codes.

 - ESC
 - enter or spacebar
 - arrows

This may seem complicated, but I have found that making my JavaScript keyboard operable has been strangely rewarding.

## Hiding Things

We're heading into the last tip here. Hiding things. We do this a lot with CSS. We have lots of ways to hide things.

We can use display: none.

We can set the opacity to zero.

We can move it off-screen.

We can transform the scale to zero.

We can use z-index to hide it behind something else.

The biggest accessibility mistake with hiding things is visually hiding it but not hiding it from assistive technologies like screen readers.

Similar to our discussion of the order property, if we remove something from the visual order, we need to remove it from the logical order.

An example of a failure of this is when you have a navigation that is hiding off-screen. You would assume that no one would ever see this navigation unless they click to expand, and you'd be right. But if someone starts tabbing through your site with their keyboard or browsing with a screen reader, if you have only visibly hidden the nav then they will find their keyboard focus taken off-screen, which can be very confusing.

The good thing is that we have ways of hiding content visually and from screen readers. There are two ways that combine hiding visually and from screen readers: display: none, and the html hidden attribute.

For both methods:
The content is not displayed to any users.
Focusable content cannot be tabbed to.

This is the goal when you are hiding things.

Now sometimes display:none doesn't work out too well because of animation or transitions. In those cases where you have some other CSS method of hiding and showing something, make sure to toggle aria-hidden to true and false when it is hiding versus showing, so that the accessibility state is the same as the visible state.

## aria-expanded

Now, when we are hiding or showing things, there is usually some kind of trigger to show or hide. There's typically something that we click on, hover, or focus on to reveal the content. We know by now that this should be an HTML `<button>` element. And we know how to show and hide things, but how will a screen reader user know that there is something hidden that can be revealed?

We can use the aria-expanded property we mentioned earlier. This property “indicates whether the element, or another grouping element it controls, is currently expanded or collapsed,” according to the W3C spec. The aria-expanded property should be added on the button, and when a screen reader user encounters a value of false it will read "collapsed" and if true it will read "expanded". We toggle it with JavaScript using the setAttribute method.

It's a really nice affordance because it lets people know right away that the content is interactive.


## That's it!
