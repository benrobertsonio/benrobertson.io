---
title: Replacing jQuery with Vanilla JavaScript
---

# Replacing jQuery with Vanilla JavaScript

A while back at a previous job, I set out on an internal initiative to remove jQuery from our company website.

It was a useful exercise both in lessening the amount of JavaScript we were shipping in the site and as a learning exercise for myself.

I came across some common patterns that I needed to figure out how to do without the help of jQuery.

Tags: [[Drafts]] [[Code]] [[Javascript]]

## Using `for` loops for binding event listeners

In jQuery, you can get all elements with a selector and add an event listener to them quite easily and with very little code. Something like this:

```js
$('.media-item__play-button').click(doSomething());
```

It's not as simple or as clean in vanilla JavaScript. Here's what something like this would translate to without jQuery.

We use `document.querySelectorAll()` to get all elements on a page that match a certain selector.

```js
// Get all elements on the page that match a selector.
// This replaces $('.media-item__play-button') from above.
const buttons = document.querySelectorAll('.media-item__play-button');

// Loop over all instances of the found buttons.
// jQuery abstracts this away and does it for
// you behind the scenes.
for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  // Add the event listener.
  // This is the .click() part from above.
  button.addEventListener('click', () => {
    // Do something
  });
}
```

## Adding and Removing Classes

Adding and removing classes in jQuery is really simple, using either [addClass](https://api.jquery.com/addClass/) or [removeClass()](https://api.jquery.com/removeClass/).

You end up with something like this:

```js
// Add the class.
$('.my-button').addClass('active');
// Remove the class.
$('.my-button').removeClass('active');
```

Though it used to be more complicated, this has been pretty simple in vanilla JavaScript for a while now as well!

```js
// Check if an element has a class
document.querySelector('.selector').classList.contains('some-class');

// Add a class
document.querySelector('.selector').classList.add('new-class');

// Remove a class
document.querySelector('.selector').classList.remove('new-class');
```

## Creating Elements and Appending Them

I found several places where our site was creating elements and appending them to the DOM based on user interaction.

This is pretty easy to do with jQuery's [append()](https://api.jquery.com/append/) and [prepend()](https://api.jquery.com/prepend/) methods.

For example, say clicking on a link should create an iframe of a video to display in an overlay. You could do that like this in jQuery:

```js
// Select the dom node where you want to insert the video
$('.insert-video-here')
// Write the markup you want to insert and it will be inserted!
.append('<iframe src="https://youtube.com/watch?v=zvUUeSSidgI" frameborder="0" allowFullScreen="true"></iframe>');

```

### document.createElement

In vanilla JavaScript, this isn't as simple. We have to do a little bit more work to "create" the markup that we want to use using [document.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement). With jQuery, we could write it as we would in a code editor and jQuery takes care of the work we have to do below now.

```js
// Grab the dom node where you want to insert the video.
const insertVideoHere = e.currentTarget;

// Create the element, using createElement
const iframe = document.createElement('iframe');

// Add attributes programatically to the iframe element we've created
iframe.src = videoService + videoId + videoSettings;
iframe.frameBorder = 0;
iframe.allowFullscreen = true;

// Insert the element to the spot we want!
insertVideoHere.parentNode.appendChild(iframe);
```

### Template Literals and `innerHtml`

```js
function createMarkup(data) {
	return `
		<h3>${data.title}</h3>
		<p>${data.body}</p>
	`;
}

document.querySelector('.insert-here').innerHtml = createMarkup(data);

```

## Scrolling

### Scrolling the Page

```js
window.scrollTo({
  top: 100,
  behavior: 'smooth'
});

```

### Scroll an Element Into View

```js
element.scrollIntoView({top: 0, behavior: 'smooth'});

```

### Smooth Scroll Polyfill
[Repo](https://github.com/iamdustan/smoothscroll)
[Demo](http://iamdustan.com/smoothscroll/)


###  Figure out where an element is on the page.

```js
 const element = document.querySelector('.contact-us__form-wrapper');

// Scroll position plus element position minus height of fixed
// header plus some padding.
const top =
  window.pageYOffset + element.getBoundingClientRect().top - 120;

// Scroll the window to the success message.
window.scroll({top: top, behavior: 'smooth'});
```

## Get Parent / Get Closest

```js

element.parentElement;

```


From [Go Make Things](https://gomakethings.com/how-to-get-the-closest-parent-element-with-a-matching-selector-using-vanilla-javascript/)

```js
  getClosest(elem, selector) {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      function(s) {
        const matches =
          (this.document || this.ownerDocument).querySelectorAll(s);
        let i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) {}
        return i > -1;
      };
    }

    for ( ; elem && elem !== document; elem = elem.parentNode ) {
      if ( elem.matches( selector ) ) {
        return elem;
      }
    }
    return null;
  }

```

## Resources
 - [You Might Not Need jQuery](http://youmightnotneedjquery.com/)
 - Chris Ferdinandi at [Go Make Things](https://gomakethings.com/articles/)
 - Wes Bos on [Template Literals](https://wesbos.com/template-strings-html/)

[//begin]: # "Autogenerated link references for markdown compatibility"
[Drafts]: drafts "Drafts"
[Code]: code "Code"
[Javascript]: javascript "Javascript"
[//end]: # "Autogenerated link references"