# Replacing jQuery with Vanilla JavaScript

Tags: [[Drafts]] [[Code]] [[Javascript]]

## Using `for` loops for binding event listeners

```js

this.buttons = document.querySelectorAll('.media-item__play-button');

for (let i = 0; i < this.buttons.length; i++) {
  const button = this.buttons[i];
  button.addEventListener('click', () => {
    // Do something
  });
}
```

## Adding and Removing Classes

```js
const element = document.querySelector('.selector');

// Check if an element has a class
element.classList.contains('some-class');

// Add a class
element.classList.add('new-class');

// Remove a class
element.classList.remove('new-class');

```

## Creating Elements and Appending Them

### document.createElement
```js
const self = e.currentTarget;

// Create the element.
const iframe = document.createElement('iframe');

// Add attributes.
iframe.src = videoService + videoId + videoSettings;
iframe.frameBorder = 0;
iframe.allowFullscreen = true;

// Append the element to somewhere else.
self.parentNode.appendChild(iframe);
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