---
layout: post
author: Ben Robertson
title:  "SVG Workflow"
date:   2016-03-24 00:00:00 -0500
categories: front-end
snippet: "How to use SVG for maintainability, performance, and profit."
path: /front-end/svg-workflow
---

When working with web images at Up&Up, we like to use SVG as much as possible. Because they are scalable, they look good everywhere. And because we can include them inline we can make our sites faster and more performant by limiting the amount of requests we make using images.

It used to be that you would receive a comp and when you started development you would slice out all the little arrows, grid, and other random icons as PNGs and then stick them in an image tag every time you needed to use one (or you included them as a background image). This can lead to pages with over 100 requests!

To save on requests, maintainability, and code cleanliness, here is the official Up&Up SVG Workflow version 1.0.

### 1\. Get your SVGs out of the comps

Look through your comps in Illustrator. Find the icons that you will use as SVGs. Anything that is a scalable icon or graphic will work. Think arrows, grids, and other icon things.

Select one of these icons, making sure you've got all the pieces of it. Copy it, open a new Illustrator file, and paste in your image. Make sure you fit your artboard to your new artwork and group together all the elements in the image (option+G). Then, click File -> Save As, and save your file as an SVG into an SVG folder in your project.

There will be a pop up that starts with SVG Profiles. Choose SVG 1.1 and under advanced options / css properties, select Style Elements. This will place all styles (like colors) into style tags in your SVGs and makes them easier to remove later.

Repeat these steps till you've got all your SVGs into your project folder.

### 2\. Optimize your SVGs

To optimize your SVGs, you can open each file, copy the code, and paste it into the wonderful tool [SVG OMG](https://jakearchibald.github.io/svgomg/) for each file. This will take you a long time, but you should do it with one SVG so you can see what the tool actually does.

Then you should install the command line tool, which depends on node.js. To install run:

`npm install -g svgo`

To run it on a single file:

`svgo filename.svg --pretty --enable=sortAttrs`

The best way to do it though is to optimize your whole folder of SVGs all in one fell swoop. You can do it like this if you are outside of the folder:

`svgo -f ../path/to/folder/with/svg/files --pretty --enable=sortAttrs`

Or you can do it like this inside of your SVG folder:

`svgo -f . --pretty --enable=sortAttrs`

These commands will override your old SVGs with the new, optimized code. If you would rather output new files, specifiy an output folder with `-o`:

`svgo -f ../path/to/folder/with/svg/files -o ../path/to/folder/with/svg/output --pretty --enable=sortAttrs`

For full documentation of the svgo optimizer see the [github repo](https://github.com/svg/svgo)

### 3\. Use the SVGs

#### 3.1 Setting up your SVG Library

Here's where the fun starts happening. We're basically going to create an SVG sprite sheet with all of our optimized SVGs.

Create a new file at the root of your site, or wherever the best place you think will be to call this file. In Drupal, I usually keep it in the same folder as my block--header.tpl.php. I name it something like `svg-defs.svg`.

At the top of the file, add this code:

`<svg xmlns="http://www.w3.org/2000/svg" style="display:none;">`

then close the svg tag: `</svg>`.

Inside the `<svg>` tag, create a symbol tag, and give it an id that's descriptive and easy to type, like this:

{% highlight html %}

<svg xmlns="http://www.w3.org/2000/svg" style="display:none;">
    <symbol id="arrow">
    </symbol>
</svg>

{% endhighlight %}

Now open your optimized SVG file for this particular SVG. My `arrow.svg` file looks like this:

{% highlight html %}

<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 39.4 31.4">
  <style>
    .st0{fill:#FFFFFF;}
  </style>
  <path id="XMLID_3_" d="M23.7 31.4L22.3 30l14.3-14.3L22.3 1.4 23.7 0l15.7 15.7z" class="st0"/>
  <path id="XMLID_2_" d="M0 14.7h38v2H0z" class="st0"/>
</svg>

{% endhighlight %}

We are going to ignore the SVG wrapper and the style tag, and just copy the two path tags into our `svg-defs.svg` file, so it looks like this now:

{% highlight html %}
<svg xmlns="http://www.w3.org/2000/svg" style="display:none;">
    <symbol id="arrow">
        <path id="XMLID_3_" d="M23.7 31.4L22.3 30l14.3-14.3L22.3 1.4 23.7 0l15.7 15.7z" class="st0"/>
        <path id="XMLID_2_" d="M0 14.7h38v2H0z" class="st0"/>
    </symbol>
</svg>
{% endhighlight %}

Then we need to grab the viewBox attribute from our original SVG and add it to the symbol tag. Here's our finished product:

{% highlight html %}
<svg xmlns="http://www.w3.org/2000/svg" style="display:none;">
    <symbol id="arrow" viewBox="0 0 39.4 31.4">
        <path id="XMLID_3_" d="M23.7 31.4L22.3 30l14.3-14.3L22.3 1.4 23.7 0l15.7 15.7z" class="st0"/>
        <path id="XMLID_2_" d="M0 14.7h38v2H0z" class="st0"/>
    </symbol>
</svg>
{% endhighlight %}

Add all your SVGs within the same SVG tag, each as their own symbol. Be sure to give them each a unique ID because we will be using that to reference them.

You'll notice that we totally ignored the style tag. For SVGs that are a single color, it's better to define this in CSS with the `fill` property. Then you can change the color (and many other styles). If you define a style within your SVG, you won't be able to override it with CSS. If you have a specific SVG with several colors and more detail, you will probably want to move the styles tag over as well.

#### 3.2 Reference your SVG

Now that you have your `svg-defs.svg` file set up, you can start referencing the SVGs in your HTML. You'll need to first include the file on your page. In Wordpress and Drupal, you can go like this:

{% highlight php %}

<?php include_once("svgs/svg-defs.svg"); ?>

{% endhighlight %}

Do that in your header, before you you need to use any of the SVGs on the page. Now that your SVGs are ready for use, you can reference them. We reference them by creating an `<svg>` tag, and then inside that we place a `<use>` tag with an `xlink:href` attribute. Here's what it looks like:

{% highlight html %}

<svg class="arrow-icon" width="30px" height="30px">
    <use xlink:href="#arrow"></use>
</svg>

{% endhighlight %}

Do it on one line for cleaner code:

{% highlight html %}

<svg class="arrow-icon icon" width="30px" height="30px"><use xlink:href="#arrow"></use></svg>

{% endhighlight %}

Your `xlink:href` is just the ID that we defined in the `svg-defs.svg` file, in this case, the ID was 'arrow' so we reference it with `#arrow`. You don't need to add a class to your `<svg>` tag, but it's a good practice to add a class that matches your ID so you can style it later. I like to keep my naming convention the same across all my SVGs.

Since we stripped out all of our styles above, it's a good idea to set some base styles for your SVGs in css. Usually the only one that I define is fill color:

{% highlight scss %}

svg{
    fill: white;
}

{% endhighlight %}

You may find that you have other base styles to apply, but since we set the height and width of the SVG in the HTML you probably won't have that many.

Other styles should be added using class names. You can do some pretty cool things with the CSS transform property and SVGs. For instance - you only need one arrow svg, because you can change it's color and change it's direction just with CSS. Pretty cool, huh?

### 4\. Don't Skip These Important Notes

#### 4.1 You must specify width and height attribute within your SVG element

Even though you can modify width and height of the SVG using CSS, Internet Explorer will not render an SVG that does not have a defined width and height in the HTML element.

#### 4.2 Don't use padding on SVG elements.

This will make them be all weird on iOS devices. Don't do it. You can use margin though.

### 5\. Javascript Tips

#### 5.1 Changing SVG Icons

You can switch out SVG icons pretty easily with jQuery by referencing the xlink:href attribute. This code snippet checks to see if the SVG has a class of menu-btn, and if it does, changes the X svg back to a hamburger:

{% highlight javascript %}

// switches x back to hamburger
if ($('.btn').hasClass('menu-btn')){
    $('.menu-btn').find('use').attr("xlink:href", "#hamburger");
}

{% endhighlight %}
