# 5 Bookmarklets for Quick Accessibility Checks

Tags: [[Accessibility]] [[Drafts]]

## Missing alt

https://twitter.com/jdjuan/status/1022301088651853824

https://gist.github.com/cfjedimaster/ee4a2fd935318e29bd5364d71ea221c1

```
img:not([alt]) {
   filter: grayscale(100%);
}
```

```
javascript:(
  function() {
    const images = document.querySelectorAll('img:not([alt])');
		for (let i = 0; i < images.length; i++) {
		  const image = images[i];
		  image.style.filter = 'grayscale(100%)';
		}
		if(images.length > 0) {
		  console.warn(`${images.length} images are missing an alt attribute`, { images });
		} else {
		  console.info('👍 No images are missing alt attributes.');
		}
 }
)()
```

## Duplicate IDs

```
javascript:(
	function () {
		var ids = {};
		var found = false;
		jQuery('[id]').each(function() { if (this.id && ids[this.id]) { found = true; console.warn('Duplicate ID #'+this.id); } ids[this.id] = 1; }); if (!found) console.log('No duplicate IDs found'); })();
```

## Links the open in a new window
```js
javascript:(function() {
  const links = document.querySelectorAll('[target]');
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    if (link.getAttribute('target') !== '_self') {
      link.style.backgroundColor = 'yellow';
      link.style.outline = '2px solid orange';
    }
  }
  console.warn(`${links.length} links open in a new window.`, { links });
})()
```

## What Has Focus
https://codepen.io/svinkle/pen/WgYRxq

## [Trashy.css](https://github.com/t7/trashy.css/)