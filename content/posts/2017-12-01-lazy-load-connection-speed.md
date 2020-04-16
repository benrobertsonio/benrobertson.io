---
layout: post
title:  "Lazy Loading Video Based on Connection Speed"
author: Ben Robertson
date:   2017-12-01 09:00:00 -0500
categories: front-end
snippet: "How to conditionally load a video based on connection speed using vanilla JavaScript and Promises."
path: /front-end/lazy-load-connection-speed
---

We recently redesigned the [Up&Up](https://www.upandup.agency) website from the ground up. The team wanted to do one of those full-screen background videos on the home page. I wasn't excited about it because the home page was already a little unwieldy with the large background images and some of the scroll-jacky things we are doing there.

In past versions of the site, we've had some very heavy videos in the background. (I'm embarrassed to say, there was once a day we had a 40mb background video.) For this version, I wanted to make the site as performant as possible, so I got curious about how I could treat the background video as a progressive enhancement for users on connections that could handle a potentially large download. I made sure to emphasize to our team the importance of a small, compressed video file, but I also wanted some programmatic magic to happen too.

Here's a breakdown of the solution I ended up with:

1. Try loading the `<source>` with JavaScript
2. Listen for the `canplaythrough` event.
3. Use `Promise.race()` to timeout the source loading if the `canplaythrough` event doesn't fire within 2 seconds.
4. Remove the `<source>` and cancel the video loading if we don't detect the `canplaythrough` event.
5. Fade the video in if we do detect the `canplaythrough` event.

## The Markup
The main thing to note in my video markup is that even though I am using the `<source>` elements inside the `<video>`, I have not set the `src` attribute for either of the sources. If you set the `src` attribute, the browser automatically finds the first `<source>` it can play and immediately starts downloading it.

Since the video is a progressive enhancement in this example, we don't need or want the video to load by default. In fact, the only thing that will load is the poster, which I have set to be the featured image of the page.


```html
<video class="js-video-loader video-autoplay--reduce-motion" poster="<?= $poster; ?>" muted="true" loop="true">
    <source data-src="path/to/upup_homepage_loop.webm" type="video/webm">
    <source data-src="path/to/upup_homepage_loop.mp4" type="video/mp4">
</video>
```

## The JavaScript
I wrote a small JavaScript class that looks for any video that has a `.js-video-loader` class on it so that we could reuse this  logic in the future for other videos.

Here's the constructor:

```js
constructor () {
    this.videos = Array.from(document.querySelectorAll('video.js-video-loader'));

    if(!this.videos || window.innerWidth < 992) return;

    this.videos.forEach(this.loadVideo.bind(this));
}
```

What we are doing in here is finding all the videos on the page that we want to lazy load. If there are none, we can return. The video was also having conflicts with some of the more intense scroll-jacking stuff we were doing on the homepage, so I'm also returning for small screens. (I'm thinking now I could have done this with media queries in the `<source>` elements, but I'm not sure.)

Then I run our video loading logic for each video.

`loadVideo()` is a small function that calls some other functions:

```js
loadVideo(video) {
    this.setSource(video);

    // Reload the video with the new sources added.
    video.load();

    this.checkLoadTime(video);
}
```

`setSource()` is where we find the sources that we included as data attributes and add them as proper `src` attributes. 
```js
/**
 * Find the children of the video that are <source> tags.
 * Set the src attribute for each <source> based on the
 * data-src attribute.
 *
 * @param {DOM Object} video
 */

setSource (video) {
    let children = Array.from(video.children);
    children.forEach(child => {
        if (
            child.tagName === 'SOURCE' &&
            typeof child.dataset.src !== 'undefined'
        ) {
            child.setAttribute('src', child.dataset.src);
        }
    });
}
```

Basically what I am doing is looping through each child of the `<video>` element. I only want to find children that are `<source>` elements and that have a `data-src` attribute defined (`child.dataset.src`). If both of those conditions are met, we use `setAttribute` to set the `src` attribute of the source.

Now that video element has its sources set, we need to tell the browser to try loading the video again. We did this above in our `loadVideo()` function, with `video.load()`. `load()` is part of the [HTMLMediaElement API](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement) that resets the media element and restarts the loading process.

Next up is where the magic happens. In `checkLoadTime()` I create two Promises. The first Promise resolves when the `<video>` element fires the [canplaythrough](https://developer.mozilla.org/ro/docs/Web/Events/canplaythrough) event. This event is fired when the browser thinks it can play the media without stopping to buffer. To do this, we add an event listener in the Promise, and `resolve()` only if the event is triggered.

```js
// Create a promise that resolves when the
// video.canplaythrough event triggers.
let videoLoad = new Promise((resolve) => {
    video.addEventListener('canplaythrough', () => {
        resolve('can play');
    });
});
```

We also create another promise that functions as a timer. Inside the Promise, we use `setTimeout` to resolve the Promise after an arbitrary time limit. For my purposes, I set a timeout of 2 seconds (2000 milliseconds).

```js
// Create a promise that resolves after a
// predetermined time (2sec)
let videoTimeout = new Promise((resolve) => {
    setTimeout(() => {
        resolve('The video timed out.');
    }, 2000);
});
```

Now that we have two Promises, we can race them against each other to find out which one finishes first. `Promise.race()` accepts an array of promises and we pass in the promises we created above to this function.

```js
// Race the promises to see which one resolves first.
Promise.race([videoLoad, videoTimeout])
.then(data => {
    if (data === 'can play') {
        video.play();
        setTimeout(() => {
            video.classList.add('video-loaded');
        }, 3000);
    } else {
        this.cancelLoad(video);
    }
});
```

In our `.then()` we are looking to receive the data from the Promise that resolves first. I send the string 'can play' through if the video can play, so I am checking against that to see if we can play the video. `video.play()` uses the HTMLMediaElement `play()` function to trigger the video to play.

The `setTimeout()` function adds the `.video-loaded' class after 3 seconds to help the finesse the fade-in animation and the autoplay loop.

If we don't receive the `can play` string, then we want to cancel the loading of the video.

  The `cancelLoad()` method basically does the opposite of our `loadVideo()` function. It removes the `src` attribute from each `<source>` and then triggers `video.load()` to reset the video element.

If we didn't do this, the video would keep loading in the background even though we aren't displaying it.

```js
/**
 * Cancel the video loading by removing all
 * <source> tags and then triggering video.load().
 *
 * @param {DOM object} video
 */
cancelLoad (video) {
    let children = Array.from(video.children);
    children.forEach(child => {
        if (
            child.tagName === 'SOURCE' &&
            typeof child.dataset.src !== 'undefined'
        ) {
            child.parentNode.removeChild(child);
        }
    });

    // reload the video without <source> tags so it
    // stops downloading.
    video.load();
}
```

The downfall of this method is that we are still attempting to download a potentially large file over a potentially poor connection, but by providing a timeout, I'm hoping to save data and recoup some performance for users on slow connections. In my tests in the Chrome Dev Tools throttled down to a Slow 3G connection, this logic ends up loading <512kb of the video before the timeout fires. Our current video loop is 3-5mb depending on if you are loading the webm or mp4, so this is still a significant savings for users on a slow connection.

## Caveats
I'm pretty new to working with Promises, so this logic could probably be better, and I'm sure there's things I'm doing with `resolve()` (and not doing with `reject()`) that I should or could be doing.