---
layout: post
author: Ben Robertson
title:  "Site Performance Basics"
date:   2016-03-24 00:00:00 -0500
categories: front-end
snippet: "Some pointers on measuring performance and small .htaccess tweaks you can make to boost performance right now."
path: /front-end/site-performance-basics
---

This post is on basic site performance tweaks that we make on every site we work on over at Up&Up. We try to keep it updated as our work progresses, but here it is as of now:

## Measuring Performance

There's a couple ways you can measure performance. There are some simple, browser based solutions, like [Web Page Test](http://www.webpagetest.org/), [GT Metrix](https://gtmetrix.com/), and Google's [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/).

Those are good to use when you're first starting out as they give you good explanations of the kind of changes you'll need to perform. As you gain more experience with site performance, however, you'll come to see patterns that you'll need to implement for almost every site and you'll want a faster way to run those tests.

### Command Line Speed Tests

There are also some fun command line tests. Google's Pagespeed Insights has a node.js wrapper, built by [Addy Osmani](http://addyosmani.com/blog/automating-web-performance-measurement-with-psi-for-node/). If you've got node.js and npm installed, run

`npm install -g psi`

to install. Then run `psi example.com` to get the Pagespeed analysis of your site on mobile and `psi example.com --strategy=desktop` to get the desktop analysis.

This test is like golf--high scores are bad. The lower your scores across all the test parameters, the faster your site will be. Tackle the high numbers first to get the biggest gains the fastest.

## Basic Performance Tweaks

Here are the standard things that we should always make sure that we are doing.

### Leverage Browser Caching

This one shows up all the time. It's a really easy fix--just stick this in the `.htaccess` file. If you don't want a certain file type cached for as long, just move it into a different section.

```apache

    <IfModule mod_headers.c>
         # 1 YEAR
        <FilesMatch "\.(ico|pdf|flv)$">
        Header set Cache-Control "max-age=29030400, public"
        </FilesMatch>
        # 1 Month
        <FilesMatch "\.(xml|txt|css|js)$">
        Header set Cache-Control "max-age=2592000, must-revalidate"
        </FilesMatch>
        # 1 WEEK
        <FilesMatch "\.(jpg|jpeg|png|gif|swf|svg|.mp4)$">
        Header set Cache-Control "max-age=604800, must-revalidate"
        </FilesMatch>
        # 1 MIN
        <FilesMatch "\.(html|htm|php)$">
        Header set Cache-Control "max-age=60, private, must-revalidate"
        </FilesMatch>
    </IfModule>
```

### Enable GZIP Compression

This one goes in the `.htaccess` file as well. Usually if this one pops up it's because svgs aren't being compressed. We add the first two lines to add svgs to the compression.

```apache

    AddType image/svg+xml .svg
    AddOutputFilterByType DEFLATE image/svg+xml
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
```

### Optimizing SVGs

How we handle SVGs is the topic of a yet-to-be written post, but no matter what they should be optimized. There is a really cool SVG optimizer that has a GUI: [SVG OMG](https://jakearchibald.github.io/svgomg/). You just paste in your svg markup and it spits out the optimized SVG. You can play with all the different settings. Our standard setting is to take all the defaults, and then we also want to enable prettify code and sort attrs. This makes it easier to work with the file in development.

The optimizer also exists in a node.js form. To install run: `npm install -g svgo`

To run on a file:

`svgo test.svg --pretty --enable=sortAttrs`

This gives the same output as the SVG OMG GUI with the options we specified.

To run it on a folder:

`svgo -f ../path/to/folder/with/svg/files --pretty --enable=sortAttrs`

... and BAM! all your svgs are optimized and ready to use. Here's the full documentation: [SVGO](https://github.com/svg/svgo)
