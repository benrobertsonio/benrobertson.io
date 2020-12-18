# Prefetch Preload Preconnect

Tags:

- [[Performance]]

<https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf>

> preload is a declarative fetch, allowing you to force the browser to make a request for a resource without blocking the document’s onload event.

> Prefetch is a hint to the browser that a resource might be needed, but delegates deciding whether and when loading it is a good idea or not to the browser.

> When should you `<link rel="preload">` vs `<link rel="prefetch">`?
> Tip: Preload resources you have high-confidence will be used in the current page. Prefetch resources likely to be used for future navigations across multiple navigation boundaries.

[//begin]: # "Autogenerated link references for markdown compatibility"
[Performance]: performance "Performance"
[//end]: # "Autogenerated link references"