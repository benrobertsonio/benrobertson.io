---
layout: post
title:  "How to Write Accessible Javascript"
author: Ben Robertson
date:   2017-10-05 07:00:00 -0500
categories: accessibility
snippet: "Save yourself some trouble with these JavaScript techniques for developing accessible web interfaces."
path: /accessibility/javascript-accessibility
---

You're wrapping up a web project and just as you're putting the finishing touches you get sent a list of accessibility errors forwarded to you by your project manager. Inadequate color contrast. Missing alt tags. This interactive component needs to be keyboard accessible.

We might not like to admit it but we've all been there: at the end of a project trying to reverse engineer accessibility into our site. It's frustrating for developers, designers, project managers and clients.

While accessibility can be frustrating, you can set yourself, your team, and your client up for success by planning for accessibility from the beginning. Here are 4 techniques to save you time and trouble when building accessible JavaScript-enabled websites and applications.

* TOC
{:toc}

## 1. Use the `<button>` element for anything that users click on.

In general, using semantic HTML elements will be a boon to the accessibility of your web project. When working with interactivity, the `<button>` is *the* semantic tag for things users are clicking on that aren't links or other inputs. It is a semantic way to denote that an element is clickable and will be your new best friend.

> The HTML `<button>` element represents a clickable button.
>
> <cite>- [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)</cite>

When you use the `<button>` element for interface elements that are clickable and bind click event listeners to those buttons, you get a lot of functionality for free.

First, **buttons are automatically focusable**; they are in the tab index of a page. If a user lands on your site and is only using a keyboard, they can press the tab key to cycle through all the focusable elements, including hyperlinks and buttons, on your page.

Second, screen readers will announce to a user that a button is in focus. **Screen reader users know by default that button elements are interactive**. This makes it especially important to include clear, understandable text inside your `<button>` so all users can understand what clicking it will do. There are also some helpful `aria` attributes you can add to your button, but we'll [get to that later](#3-manage-aria-states).

Third, when you add a click event listener to a `<button>` element, **you get keyboard accessibility for free.** This means can write less JavaScript when you use the `<button>` element. By contrast, if you add a click event listener to a `div`, you would also have to add keyup listeners for the spacebar and enter keys in order to make that element accessible to keyboards. With the button element, the default keyboard actions (spacebar and enter) and screen reader click actions trigger the click event. You don't have to write extra keyboard listeners.

To sum up: if a user is clicking on it and it's not a link or some kind of input, just use a `<button>`.

## 2. Plan for Common Keyboard interactions.

For more complex interactive components, there are likely several interactive elements in the component. Pay attention to what kind of event listeners you are adding to the DOM, and consider whether these actions be able to be triggered by the keyboard.

For instance, is there a close or minimize button on your component? The ESC key should probably be able to trigger the close as well. Is there some sort of horizontal scroll-type action or Next / Previous buttons? Consider binding events to the arrow keys.

Common interactions can include:
1. Exiting the current component
2. Submitting
3. Moving position / browsing

Common keys to add actions to:
- enter (keyCode 13)
- spacebar (keyCode 32
- arrow keys (37 - 40)
- ESC (keyCode 27)
- tab (keyCode 9)

How do you bind actions to specific keys? You can do it by adding an event listener to the `keyup` event. When you pass the event into your callback function, you have access to the `keyCode` property, and you can trigger actions depending on the keyCode. I have a hard time remember the `keyCodes`, so often during development I'll add an event listener that logs all keyCodes to the console so that I can find the ones I need to use:

```js
document.addEventListener('keyup', (event) => {
	console.log(event.keyCode);
});
```

To make things a little bit easier though, I'll document the most common keycodes I end up needing to reference. Here is a common pattern I end up using in components, with the most common keyCodes that I use:

```js
document.addEventListener('keyup', (event) => {
    switch (event.keyCode) {
        // escape
        case 27:
            // exit
            break;
        // enter || spacebar
        case 13 || 32:
            // submit or something
            break;
        // left arrow
        case 37:
            // move back / previous
            break;
        // right arrow
        case 39:
            // move forward
            break;
        // up arrow
        case 38:
            // move up
            break;
        // down arrow
        case 40:
            // move down
            break;
       }
}
```

I don't use all of these in every situation, but they are the ones I use most frequently.

Something else you'll want to keep in mind is that you'll often want to add these event listeners conditionally: only when a certain component is active or in use by the user. Otherwise you may have actions being triggered at the wrong time if all of your event listeners are in the global scope.

To add these conditionally, I usually have a function that handles all the keyup logic (with the creative name `this.handleKeyup()`). When my component is activated, I add an event listener with that function as the callback. When my component is disabled, I fire a `removeEventListener()` with that same function as the callback. That way, you can trigger different actions with different keys depending on what the user is doing at the moment.

You can take this to another level and test whether the user was also holding down the shift key by testing if `event.shiftKey === true`. You might do this is you are trying to trap focus inside of a modal and want to prevent users from `SHIFT+TAB`ing backwards out of a modal.

## 3. Manage ARIA states

There's a lot to the [Web Accessibility Initiative's Accessibility of Rich Internet Applications](https://www.w3.org/WAI/intro/aria) (WAI-ARIA, or just ARIA) spec, but when you're getting started with interactive JavaScript you should really focus on the `aria-expanded` attribute.

A lot of interactivity is focused on showing or hiding content on the page. The `aria-expanded` property "indicates whether the element, or another grouping element it controls, is currently expanded or collapsed," according to the [W3C spec](https://www.w3.org/TR/wai-aria/states_and_properties#aria-expanded).

You'll want to make sure that your element renders with the appropriate `aria-expanded` attribute:  false if the element is not expanded, true if the element is expanded. This attribute should be applied to the element that controls the expandable element. If the grouping element is a child of the controlling element, you don't need to do anything special, but if you have a `<button>` that is going to control a sibling `<ul>`, you will need to indicate that that the button controls the list with the `aria-controls` attribute ([aria-controls documentation at W3C](https://www.w3.org/TR/wai-aria/states_and_properties#aria-controls)). This attribute accepts an ID or list of IDs that are controlled by the interactive element. In our example, our markup would look like this:

```html
<button class="list-expander" aria-expanded="false" aria-controls="expandable-list-1">Expand List</button>
<ul id="expandable-list-1">
    <li><a href="http://example.com">Sample Link</a></li>
    <li><a href="http://example.com">Sample Link 2</a></li>
    <li><a href="http://example.com">Sample Link 3</a></li>
</ul>
```

Now we need to toggle the expanded state.
The way I normally do this is with the `setAttribute()` method.

```js
const listExpander = document.querySelector('.list-expander');
const list = document.querySelector('#expandable-list-1');
listExpander.addEventListener('click', (e) => {
    if(list.getAttribute('aria-expanded') === "true") {
        list.setAttribute('aria-expanded', 'false');
    } else {
        list.setAttribute('aria-expanded', 'true');
    }
});
```

Note that when I check to see the value of the `aria-expanded` attribute, I use `=== "true"`. That's because `getAttribute` returns either the string `"true"` or `"false"`, not an actual true or false value. (That tripped me up at first).

You can use this same kind of thinking with other true / false ARIA attributes. Most commonly, I use this with `aria-hidden` for showing and hiding modal dialogs.

## 4. Managing Focus

The last thing we'll cover in this guide is managing focus. Focus refers to the singular element in the browser that is able to be acted upon via the keyboard. Elements often receive focus when a user clicks on them, uses the TAB key to cycle through focusable elements, or uses a screen reader. At a basic level, you need to make sure that users can visually tell at any time what element is in focus.

The most common place that I end up managing focus is in modal components.

Here's a sample problem we need to solve. We have an about page that contains a bio of a person and a button that says "Contact this person". This button opens a modal that contains a contact form. But if the form is not in the natural tab order of the page (as is common with modals), when the user hits tab their keyboard focus is behind the modal. It's common for keyboard and assistive technology users to get stuck and frustrated with poorly designed modals.

To solve this, we want to do a couple of things:

1. When the modal opens, move the focus to the first focusable element inside the modal.
2. Ensure that users can easily close the modal via the keyboard when it is open.
3. When the modal closes, return focus to the element that was active when the modal opened.
4. If we want to be really careful, we can trap the TAB forward and backwards inside the modal so users can't escape unless they close the modal.

### Get the first focusable element.
I have a few helper methods to help me determine all focusable elements and the first focusable element in a given context. Here's how I find all focusable elements on the page (h/t to [Chris Ferdinandi](https://gomakethings.com/how-to-get-the-first-and-last-focusable-elements-in-the-dom/)).

```js
/**
 * Get all focusable elements inside of the specifed context.
 *
 * @param  {String} [context='document'] The DOM context you want to search in.
 * @return {Array}  Array of focusable elements
 */
function getFocusable(context = 'document') {
    let focusable = Array.from(context.querySelectorAll('button, [href], select, textarea, input:not([type="hidden"]), [tabindex]:not([tabindex="-1"])'));
    return focusable;
}
```

This function uses `querySelectorAll` with a list of selectors that are normally focusable: `<button>`, links with an `href` attribute, inputs, and things that have a tabindex set (that is not -1). I also am filtering the `<input>` selector by removing any input that is hidden, since those aren't focusable. I do the same kind of filtering for elements with a `tabindex` attribute set to -1, since those elements should only be focusable via JavaScript method, not in the normal tab index. I use `Array.from` to create an array from the NodeList returned by `querySelectorAll`.

What I like about this function is that I can also pass in a context. By default, the context is set to `document`, so it will find all focusable elements in the document. But in our modal example above, you could pass in the modal element itself as the context and get a list of all focusable elements in the modal 😎.

Finding the first focusable element is trivial now, it's a matter of popping off the first element in our array. I typically have another helper function to get me the first focusable element, and don't actually call that first one directly. It is like this:

```js
/**
 * Get the first focusable element inside of the specified context.
 *
 * @param  {String} [context='document'] The DOM context you want to search in.
 * @return {Object} A DOM element
 */
export function getFirstFocusable(context = 'document') {
    let focusable = getFocusable(context);
    return focusable[0];
}
```

You pass in a context and it calls our original `getFocusable()` function and returns the first item in the array. Now we can call `focus()` on that element to programmatically focus the first focusable element. It would look like this:

```js
getFirstFocusable(modal).focus();
```

### Ensure that users can easily close the modal via the keyboard when it is open
We've partially addressed this earlier when we discussed planning for common keyboard interactions. This is a perfect example of time when you want the user to be able to ESC out of a component.

You might also add an overlay between the modal and the site content that is clickable and focusable with click events that close the modal.

### When the modal closes, return focus to the element that was active when the modal opened.

In our example, the user clicked on a button and then their focus jumped to the modal. When they close the modal, we want to return their focus to the button that triggered the modal. This is actually pretty trivial using the `document.activeElement` property.

When we detect that a modal should open and **before** we transfer the focus to that modal, we can save the current active element to a variable like this:

```js
let previousActiveElement = document.activeElement;
```

Then we can transfer focus to our first focusable element, and whenever a user is done with the modal and decides to close it we transfer the focus back to our saved element:

```js
previousActiveElement.focus();
```

And now the user is back where they started!

### Trap the TAB and SHIFT + TAB inside the modal
As I mentioned above, if we want to be really careful, we can trap the TAB forward and backwards inside the modal so users can't escape unless they close the modal.

To do this, we need to listen to the `keyup` event while the modal is active, and here's the function I use to trap the focus (it depends on our `getFocusable()` function from above:

```js
/**
 * Traps the tab key inside of the context, so the user can't accidentally get
 * stuck behind it.
 *
 * Note that this does not work for VoiceOver users who are navigating with
 * the VoiceOver commands, only for default tab actions. We would need to
 * implement something like the inert attribute for that (see https://github.com/WICG/inert)
 * @param  {object} e the Event object
 */
export function trapTabKey(e, context) {
    if (e.key !== 'Tab') return;

    let focusableItems = getFocusable(context);
    let focusedItem = document.activeElement;

    let focusedItemIndex = focusableItems.indexOf(focusedItem);

    if (e.shiftKey) {
        if (focusedItemIndex == 0) {
            focusableItems[focusableItems.length - 1].focus();
            e.preventDefault();
        }
    } else {
        if (focusedItemIndex == focusableItems.length - 1) {
            focusableItems[0].focus();
            e.preventDefault();
        }
    }
}
```

First, we need to pass in the event object so we can detect what key is being pressed and a context for the user to be "trapped" inside of.

If the key they pressed was **not** the TAB key, we can safely return and do nothing.

If it **was** the TAB key, we get all the focusable elements in the modal and the element they are currently focused on. Once we have these two things, we can use the `indexOf` method to tell where the user is in the tab order of this context.

If they were holding the shift key (`e.shiftKey === true`), they were going backwards, so we want to stop them when they get to the first focusable item in the modal and focus on the last focusable item: `focusableItems[focusableItems.length - 1].focus()`.

If they were going forward and got to the last focusable item in the modal (`focusedItemIndex == focusableItems.length - 1`), we need to focus the first focusable item.

We need to call `e.preventDefault()` for both of these cases to prevent the default TAB function from firing. For all other instances though, we can let them TAB normally.

You'll want to make sure you remove your `keyup` event listener when the user closes the modal to let their TAB functionality return to normal.

## Conclusion
{:.no_toc}

We've covered a lot here, but it should be a really good start for you to start developing accessible interactive JavaScript sites and applications and give you a framework for thinking about how you might program other widgets and components. Remember to:

1. Use `<button>` for clickable elements
2. Plan for common keyboard interactions like ESC, Arrows, Enter and TAB.
3. Think about and manage any appropriate ARIA states.
4. Manage focus when necessary.

Keeping these techniques in mind from the beginning will save you time and trouble and your users will thank you!