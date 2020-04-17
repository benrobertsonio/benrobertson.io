# Handling External Links

Tags: [[Accessibility]] [[Drafts]]

During QA on almost every web project I've worked on, a time comes when somebody files a bug report like this:

> These links should open in a new window.

I usually try to have a conversation with them about how opening links in a new window is unexpected behavior, it can be jarring, we should let users decide how to use their browser, et cetera, but I have never won that battle and always end up implementing `target="_blank"`

On one project I inherited though, a bunch of links were already opening in a new window. I was doing an accessibility audit and remediation. In order to keep the links opening in a new window and meet WCAG guidelines, links that opened in a new window needed:

 - a visual indication that they open in a new window
 - textual indication that the link would open in a new window for screen readers
 - `rel="noopener noreferrer"` for [security]()

Instead of combing through the markup to add this, I created a small JavaScript module that would accomplish all three. Here's how I did it.

{{TOC}}

## Set Up
In our initialization, we need two things:

1. The current host (for example, you are currently on https://benrobertson.io)
1. A list of all links on the page.

You can get the current host with JavaScript easily with `window.location.host`. We'll use this to compare each link to.

To grab all the links, we can use an attribute selector that targets the `href` attribute. We already know we only want external URLs so we'll grab elements with an href that starts with `http`.

```
// This will grab every single <a> on the page
document.querySelectorAll('a');

// This will grab only <a> elements that have a full url in the href, either http or https
document.querySelectorAll('a[href^="http"]');
```

## Parse the URLs Array
Next we need to loop through each array and determine if we need to do anything to it.

```

```

## Set Attributes / Add Indicators

## Final Code

```
var ExternalLinks = {
	host: '',
	links: [],
	init: function() {
		// Get the current host
		this.host = window.location.host;
		// find all links
		this.links = $('a[href^="http"]');
		// Parse all links
		this.parse();
	},
	parse: function() {
		var self = this;
		$.each(this.links, function(index, link) {
			if ( link.host !== ExternalLinks.host ) {
				link.rel = 'noopener noreferrer';
				link.target = '_blank';

				if(	link.host.indexOf('facebook') >= 0 || link.host.indexOf('youtube') >= 0 ||
					link.host.indexOf('instagram') >= 0 || link.host.indexOf('twitter') >= 0) return;

				self.signifier(link);
			}
		});
		},
	signifier: function(link) {
		var icon = document.createElement('span');
		icon.classList.add('glyphicon', 'glyphicon-new-window', 'glyphicon--small', 'glyphicon--space-left');

		var span = document.createElement('span');
		span.textContent = 'new window';
		span.classList.add('screen-reader-text');

		icon.appendChild(span);
		link.appendChild(icon);
	}
};
```