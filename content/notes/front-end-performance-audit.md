---
title: Front End Performance Audit
---

Tags: [[Code]] [[Drafts]] [[Performance]]

How to do a front end performance audit and some resources.

## Resources

- [Front-End Performance Checklist 2020 - Smashing Mag](https://www.smashingmagazine.com/2020/01/front-end-performance-checklist-2020-pdf-pages/)
- [Auditing Performance - Google](https://developers.google.com/web/fundamentals/performance/audit)

## Webpack Bundle Analyzer 
Tags: [[Performance]]

Gatsby-config.js:

```js
{
	resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
	options: {
	  generateStatsFile: true,
	  statsOptions: {
	    reasons: true
	  }
	}
},
```

## Auditing Network Requests

Third party scripts are always going to be a nightmare. 

But, to ignore them, you can filter by domain in Chrome Dev Tools: `domain:example.com` This will show you all network requests originating from that domain.

Or you can do a negative filter, like `-domain:yogainternational.com` This will show you all network requests not originating from that domain.

## Things to [[Learn]] About

[[Web Workers]]:

 - https://github.com/developit/workerize (Moves a module into a Web Worker, automatically reflecting exported functions as asynchronous proxies.)