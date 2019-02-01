---
layout: post
author: Ben Robertson
title:  "CSS Standards and Normalization"
date:   2017-02-23 00:00:00 -0500
categories: front-end
snippet: "A CSS styleguide I wrote for the dev team at Up&amp;Up."
path: /front-end/css-standards
---

This is the Up&Up CSS / Sass styleguide that I wrote up for our team. I started work on it in the fall of 2016 and we have been rolling it out to all new projects. After writing CSS / SCSS / Sass for a few years now, I really enjoyed sitting down and reflecting on how I have been writing it, how the team has been writing it, and how we could work better together by being intentional about how we write our code.

I'm publishing it here for the purpose of showing how a team develop their own code style guide that works for them and to show the thought process behind it. A lot of the thoughts behind this were a result of a whole-site CSS refactor for one of our clients.

## Purpose

The purpose of this document will be to define some standardized best practices for how our CSS is composed and organized in our projects.

## Principles

The Goals of Drupal 8's CSS philosophy will serve as a good starting point for our CSS philosophy. Well-architected CSS should be:

> #### 1\. Predictable
>
> CSS throughout Drupal core and contributed modules should be consistent and understandable. Changes should do what you would expect without side-effects.
>
> #### 2\. Reusable
>
> CSS rules should be abstract and decoupled enough that you can build new components quickly from existing parts without having to recode patterns and problems you’ve already solved. – Philip Walton, CSS Architecture
>
> #### 3\. Maintainable
>
> As new components and features are needed, it should be easy to add, modify and extend CSS without breaking (or refactoring) existing styles.
>
> #### 4\. Scalable
>
> CSS should be easy to manage for a single developer or for large, distributed teams (like Drupal’s).
>
> Source: [CSS architecture (for Drupal 8)](https://www.drupal.org/docs/develop/standards/css/css-architecture-for-drupal-8)

In addition, we should keep Mark Otto's Golden Rule in mind:

> Every line of code should appear to be written by a single person, no matter the number of contributors.
>
> [Code Guide](http://codeguide.co/#golden-rule) by Mark Otto

## Style Guide

High level (borrowed from [css guidelines](http://cssguidelin.es/#syntax-and-formatting)):

*   Sass, not scss.
*   Four (4) space indents, no tabs.
*   Multi-line css
*   Meaningful use of white space.

### Sass

Moving forward, we will depart from our Scss convention and start using Sass. This has the benefit of less brackets {} and semi-colons and overall a cleaner feel.

Each project should include Sass linting. Use our [default .sass-lint.yml file](https://gist.github.com/mergeweb/d317ffde258f718a2aa0d033161ac2fc). It will point out the rules below for you.

### Four space indents

Since we aren't using brackets, this keeps the Sass clearer and also is aligned with our Javascript and PHP standards.

### Multi-line css

Selectors and properties each get their own line. Do it like this:


{% highlight sass %}
.container
    width: 95%
    max-width: 40em
{% endhighlight %}

### Meaningful use of white space

White space can give context to class definitions. Include two empty lines between top-level css blocks, and one line between properties and nested classes.

Example:


{% highlight sass %}
.card
    padding: 1rem
    margin: 1rem

    &__header // leave one empty line above this since it is nested
        border-bottom: 1px solid gray

.card--white // two empty lines above this new class block
    background-color: white
{% endhighlight %}


### Nesting Depth

Nesting depth should be limited to 2.

Example:

{% highlight sass %}
.block
    &__element
        &--modifier // Deepest Nest Allowed
{% endhighlight %}

### Limit line length to 80 characters

This helps make the code more readable without horizontal scrolling. Because you're writing multi-line css, this should really only come into play for comments. Limiting your line length will make your comments easier to read and therefore more useful. For instances like long urls or gradient syntax, don't worry about it.

Example:

{% highlight sass %}
    // This file is where you override default Bootstrap variables. You
    // can find a list of the default Bootstrap variables
    // in _variables.scss
{% endhighlight %}

### Use single line comments

Your comments don't have to be on one single line, just don't use `/* These kinds of comments */`, because they will end up in the compiled css. Your comments, even if they are multi-line, should look like this:

{% highlight sass %}

    // This file is where you override default Bootstrap variables. You
    // can find a list of the default Bootstrap variables
    // in _variables.scss

{% endhighlight %}

### Clean Import paths

You don't need to include leading underscores or filename extensions in your import paths. To stay consistent, your imports should look like this:

{% highlight sass %}

    @import "base/typography" // where this file is base/_typography.sass
    @import "base/colors"

    @import "layout/grid"
    @import "layout/containers"

{% endhighlight %}

### Class Name Format

Class names should use full words rather than abbreviations. Remember that your class names are written for the benefit of other developers, not the computer. Prefer `class="button"` to `class="btn"`.

Class names for components should use dashes between words. Prefer `class="component-name"` to `class="componentname"`.

We will use a BEM-style class naming system. BEM stands for Block Element Modifier. You can also think about it as Component, Sub-object, Variant.

Examples:

{% highlight sass %}

    .block
        .block--modifier
        .block__element
        .block__element--modifier

    .component-name
        .component-name--variant
        .component-name__sub-object
        .component-name__sub-object--variant

    .component-name
        &--variant
        &__sub-object
        &__sub-object--variant

    // A real world example from http://github.com/mergeweb/v2heavy
    .site-header // the site header
        .site-header__top // the top portion of the site header
        .site-header__bottom // the bottom portion of the site header
        .site-header--admin // variant of site-header

{% endhighlight %}

Additionally, limit your BEM depth to 1\. This means that blocks should not have nested elements. If there are elements nested inside of elements, start a new block.

{% highlight sass %}

    // Don't do this
    .block__element__sub-element

    // Definitely don't do this
    .block__element
        &__sub-element
            &__sub-element-2

{% endhighlight %}

Consider name-spacing layout and javascript specific classes.

For instance, instead of using a class name like `.container`, you could use `.layout-container`. Or `.layout-grid`, over `.grid`. This gives the benefit of clear separation between component

Or for javascript that is manipulating the DOM, use something like `.js-behavior-hook` instead of `.behavior-hook` to make sure that it is a dedicated class not used for styling.

Source: [Drupal 8 CSS Architecture \| Class Name Formatting](https://www.drupal.org/docs/develop/standards/css/css-architecture-for-drupal-8#formatting)_

### Avoid Using id Selectors

You can use them for Javascript or for providing anchor-links, but don't use them for styling.

### Avoid Vendor Prefixes

For sites that are using a build tool like Grunt or Gulp, we can skip vendor prefixes in the css in favor of using the [PostCSS Autoprefixer plugin](https://github.com/nDmitry/grunt-postcss). It will automatically determine what prefixes are necessary based on browser support requirements and only include the necessary

### Use relative units for font-sizing.

Prefer relative units like `rem` or `em` for font-sizing. This allows for more flexible, more maintainable font styling. It also allows us to better control font styles based on what fonts have been loaded or not loaded.

Likewise, avoid specifying units for line-height. Line-height should be a ratio of font-size. You will need to write a lot less css if your line-height ratios are on to begin with.

## Linting

The easiest way to put these guidelines into practice will be to use `sass-lint`. You can install it globally like so: `npm install -g sass-lint` or on a per-project basis like this: `npm install sass-lint --save-dev`

Add a copy of our [.sass-lint.yml](https://gist.githubusercontent.com/mergeweb/d317ffde258f718a2aa0d033161ac2fc/raw/5d47ebe144f691d96e0885bfd24c2d47d2905fde/.sass-lint.yml) to the root of your project.

To lint your project from the command line, you can do this:

`sass-lint -v`

Or, for as-you-go linting, install the sass-lint plugin for your respective editor:

*   [PHPStorm Lint Plugin](https://github.com/idok/sass-lint-plugin)
*   [Atom Plugin](https://atom.io/packages/linter-sass-lint)

[sass-lint documentation](https://github.com/sasstools/sass-lint/)

## Resources

We leaned heavily on the following resources for these guidelines:

*   [Drupal 8 CSS Architecture](https://www.drupal.org/docs/develop/standards/css/css-architecture-for-drupal-8)
*   [CSS Guidelines](http://cssguidelin.es)
*   [SMACSS by Jonathon Snook](https://smacss.com/book/)
