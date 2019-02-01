---
layout: post
author: Ben Robertson
title:  "How to Make a Front End Style Guide, the Easy Way"
date:   2016-11-30 00:00:00 -0500
categories: front-end
snippet: "Spoiler alert: use kss-node"
path: /front-end/easy-front-end-styleguides
---

Our main requisites for a style guide generator were not wanting to maintain a separate code base, ease of updating the style guide, and ease in accessing the style guide.

Based on those prerequisites, here's the quickest way to a maintainable style guide that I've found.

The main functionality is provided by [kss-node](https://github.com/kss-node/kss-node). We use [Michelangelo](https://github.com/stamkracht/michelangelo) to provide some theming and a really nifty color grid. [grunt-kss](https://github.com/soenkeschnoor/grunt-kss) handles the compiling of the style guide during dev and on deployment.

This setup generates a static style guide inside your existing web project. It's based completely off of comments in your sass. I see two benefits in this. The first is that we don't have to maintain a separate code base for the style guide. The second is that even if you aren't looking in the style guide, the comments live in the code so they are highly visible in development.

## Step by Step Setup:

Install the necessary packages: `npm install kss michelangelo grunt-kss --save-dev`

In your `Gruntfile.js`, add a `kss` task. Here is the setup I use:

{% highlight javascript %}
kss: {
    options: {
        title: 'Title of the Style Guide',
        verbose: false,
        builder: "./node_modules/michelangelo/kss_styleguide/custom-template/", // tells kss to use the michelangelo template.
        css: [
            "../css/dist/main.css" // path to your compiled css, relative the style guide directory
        ],
        // if you want to include some javascript, add a block like this:
        js: [
            "path/to/compiled/js"
        ]
    },
    dist: {
        src: "webroot/css/src/", // path to the sass files to watch for comments
        dest: "webroot/styleguide/", // path to where the style guide should live. Add this path to your .gitignore
    }
},
{% endhighlight %}

I then add the `kss` task to the watch task. This will compile the style guide as you are working on it.

I also add the `kss` task to whatever task gets run on deployment.

Don't forget to add the compiled style guide path to your `.gitignore`.

Run `grunt watch` and start working away on your style guide.

## Example Component:

The entire commenting spec is available here, but here are a few of the highlights.

Your comment block for a component will look something like this:

{% highlight sass %}
// Buttons
//
// A brief description of this component.
//
// Weight: 1
//
// Markup:
// <button class="{{modifier_class}}">Click Me</button>
//
// :hover - Hover over the button.
// :focus - A focused button.
// :active - An active button.
// .button--large - A large button.
//
// Styleguide base.forms.buttons
{% endhighlight %}

The part that actually includes your comment block in the style guide is the `Styleguide base.forms.buttons`. In the above example, your button component will display in the Base section, in a sub-section called Buttons underneath Forms. For best results, I would also include a block that defines those sections as well. For example:

{% highlight sass %}
// Forms
//
// Some info about forms
//
// Styleguide base.forms

{% endhighlight %}

Some other important things for consideration from our button example:

### Weight

The weight property is optional. By default, our setup will organize sections alphabetically by their title. If you want to change the order, you can provide a weight to the component. A higher weight will bring the component lower in its section.

### Markup

For the markup property, you are providing example markup so that your style guide will render the element. If your element has modifiers (either state or class) adding the `{{modifier_class}}` in a class attribute and defining the modifiers below will display the modified version of the element.

### Style guide home page

By default, this setup will look for a `homepage.md` file in your css src directory. If you create one, it will use the contents as the home page of your style guide.

### Color block

The nifty color block I mentioned above is specific to the `Michelango` layer on top of `kss-node`. The documentation for it is available [here](https://www.npmjs.com/package/michelangelo#michelangelo-specifications). Note that it only accepts hexadecimal values.

## Conclusion

And that's it! As soon as you start saving changes to your sass, you should be able to access your style guide. In our example above, it's available at `/styleguide/index.html`.
