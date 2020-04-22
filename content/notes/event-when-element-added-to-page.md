---
title: Event when element added to page
---

Tags: [[Code]] [[Snippets]]

```js
// Listen for when new nodes are added to fad-content-result-wrapper.
// This should trigger after users click Find a Plan.
var observer = new MutationObserver(function(mutations) {
  // For the sake of...observation...let's output the mutation to console to see how this all works
  mutations.forEach(function(mutation) {
    if(mutation.addedNodes && mutation.addedNodes[0]) {
      const planDetails =
        mutation.addedNodes[0]
          .querySelectorAll('.product-card__details-header');

      for (let i = 0; i < planDetails.length; i++) {
        const button = planDetails[i];
        button.addEventListener('click', () => {
          dataLayer.push({ConversionPathStep: 'DentalFindAPlan2'});
          // this.pushData('DentalFindAPlan2');
        });
      }
    }
  });
});

// Notify me of everything!
var observerConfig = {
  childList: true
};

// Node, config
// In this case we'll listen to all changes to body and child nodes
var targetNode = document.getElementById('fad-content-result-wrapper');
observer.observe(targetNode, observerConfig);
```

https://davidwalsh.name/mutationobserver-api