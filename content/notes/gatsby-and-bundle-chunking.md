---
title: Gatsby and Bundle Chunking
---

Tags: [[Performance]] [[Gatsby]] [[Code]]

This my understand on how Gatsby chunks bundles, based on this [PR by Ward Peeters](https://github.com/gatsbyjs/gatsby/pull/22253).

> Big libraries over 160kb are moved to a separate library all together to improve js parsing & execution costs.

Gatsby now has the following bundles:


## App
dependencies used across the app, things like Apollo, theming / style libraries, poly fills

> This bundle is produced from production-app.js which will mostly be discussed in this section. It is configured in webpack entry

![](/img/notes/app-bundle.png)

## webpack-runtime-[contenthash].js

> This contains the small webpack-runtime as a separate bundle (configured in optimization section). In practice, the app and webpack-runtime are always needed together.

## Framework (framework-[contenthash].js)
(for react and react-dom) might move reach/router in here too. This lets Gatsby do caching of dependencies that don't change.

![](/img/notes/framework-bundle.png)

## commons-[contenthash].js

> Libraries used on every Gatsby page are bundled into the commons javascript file. By bundling these together, you can make sure your users only need to download this bundle once.

## component---[name]-[contenthash].js
Things like  (component--src-pages-index-hash.js, component--src-templates-post-hash.js), page or component only.

> This is a separate bundle for each page. The mechanics for how these are split off from the main production app are covered in [Code Splitting](https://gatsbyjs.org/docs/how-code-splitting-works/).

## Granular chunks
These are are completely hashed, like this: `4f8ce8a27ecdca4a64741fe9081f6491727e7816-176af1ec8bf65e843533.js`. These are dependencies used in at least two pages -- *actually, I'm not sure if this is the case*.

![](/img/notes/chunk-bundle.png)