---
title: Turning a Gatsby Site into a Progressive Web App
---

Tags: [[Gatsby]] [[Drafts]]

## Add [gatsby-plugin-manifest](https://www.npmjs.com/package/gatsby-plugin-manifest)

## Add [gatsby-plugin-offline]()

Check to see if there are updates:

```js
const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    'This application has been updated. ' +
      'Reload to display the latest version?'
  );

  if (answer === true) {
    window.location.reload();
  }
};

export { onServiceWorkerUpdateReady, shouldUpdateScroll, wrapPageElement };

```
