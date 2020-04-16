---
layout: post
author: Ben Robertson
title:  "Move Fast, Don't Break Things: Trends in Modern Web Development"
date:   2019-02-01 00:00:00 -0500
categories: general
path: /general/trends-in-web-development-2019
snippet: "How moving away from CMS-centered development will make web development better for everybody: front end developers, back end developers, project managaers, and clients."
---

Back in December, I was invited to speak at the very first [Gatsby Days](https://www.gatsbyjs.org/blog/2019-01-09-gatsby-days-talks-are-here/) on behalf of [Mediacurrent](https://mediacurrent.com). I'd been lucky enough to work on our first client Gatsby site, and *loved it*, and the Gatsby team asked me to share what trends I saw from my perspective working at a large agency. I talked about increasing specialization in front end development, how working with content management systems has changed over the past few years, and how decoupling can change both the development process and an organization.

I had a blast going out to San Francisco, and all the Gatsby folks were very kind. They also did really nice recordings of all the talks. I've got mine [embedded below](#video-recording), and you can see all the [presentations here as well](https://www.gatsbyjs.org/blog/2019-01-09-gatsby-days-talks-are-here/).

I have a habit of writing my presentations out word for word, so I thought I'd share my presentation here as well, for posterity. The slides are on [Notist](https://noti.st/benrobertson/xJwZIr), and embedded [underneath the video](#slides) as well.

## Introduction


I'm going to be talking about how to move fast without breaking things. Because at the end of the day, that's what every body really wants, right? We want our web projects:

- done quickly
- under budget
- to spec
- with no bugs

Wouldn't that be great? It's the magical formula for dev, project manager and client happiness.

And while hitting all these things 100% may be a pipe dream, I think new development practices enabled by technology like [Gatsby](https://www.gatsbyjs.org/) and others can really help get us closer to this pipe dream.

## Agenda

So, more specifically, here's what I want to cover:

First I'll just give a little background on me, who I am, the kind of work I do, etc.

Then I want to go over the ways working with content management systems on the front end has changed for me over the past few years.

I'll share a case study from a decoupled Drupal and Gatsby project we took on earlier this year and our experience from that.

And based on that experience, I want to discuss the different ways decoupling can change things at an organization, including the development process, but even beyond into hiring and client diversity.





## About Me

So first, a little about me. My name is Ben Robertson and I live in Greenville, South Carolina. I am a front end developer at Mediacurrent.

I got my start in front end web development hacking on Wordpress and Joomla sites as a freelancer after watching just enough online dev courses to be dangerous. My first memory is getting FTP credentials for my first client's site and taking the site down in under 5 minutes. Oops. That was stressful.

After I gained a little experience I moved to a creative agency in Greenville doing some more complex Drupal and Wordpress builds for universities.

And now I'm at Mediacurrent. Mediacurrent is a full-service digital agency, so we do strategy, design, and web development for enterprise organizations looking for a better ROI. We're 82 people strong this week. And on the development side, we've traditionally been a Drupal shop. We've got some of the best Drupal developers around, our devs are maintaining modules, working on core initiatives and always pushing the envelope on ambitious projects with Drupal. Our team has really enjoyed the Gatsby projects we've taken on in the past year as well. So if you're looking for Drupal or Gatsby or strategy or design work, [give us a call](https://www.mediacurrent.com/contact-us/). Or if you want to work remote with an awesome team, [get in touch](https://www.mediacurrent.com/about/careers/) - we're always looking for great people.

## CMS & Front End Through the Years

![Sean and Cory from Boy Meets World are best friends and they are happy to see each other.](/img/gatsby-days-2018/boy-meets-world.gif)
<em>Old friends.</em>

Now, let's do a little story time. I call this story "A personal history of templating".

### Template Overrides

Let's go back in time to 2015. In my version of 2015, React is not in the picture. In this story, I am at a small agency in Greenville, SC hacking on Drupal sites in Drupal 7.

I still remember vividly the first time I was handed some designs and asked to build them, but in Drupal. I started at Drupal.org, downloaded Drupal 7, worked on getting a local dev site setup, and then started working on a theme. I remember spending *hours* trying to get a custom template to render "Hello world". Maybe even a whole day.

Granted, I was still relatively new to web development, and brand new to Drupal. And maybe I'm not the *sharpest* tool in the shed. But man was it frustrating.

Anyways. As my work progressed, my theme directory started taking on a structure like this:

![Screengrab of a Drupal theme directory structure with many different templates with very long, specific file names.](/img/gatsby-days-2018/01-drupal-theme-directory.png)
<em>Just look at all the dashes in those file names.</em>

- lots of very specifically named files, with ever increasing specificity
- folder structures for things that weren't really clear to me at the time:
  - what's a block?
  - what's a region?
  - what's a view?

Once inside the file, I'd often wonder, where is this data coming from? Why is it nested in so many arrays? What are these preprocess functions? Where do I find them? Where are `$classes` defined?

![Screen grab of a Drupal 7 template file with HTML and PHP inside.](/img/gatsby-days-2018/02-template-overrides.png)
<em>A Drupal 7 template from yesteryear.</em>

And looking back on this with my 2018 perspective, I start to notice other things, like:

- Where are the styles?
- How do you maintain CSS that could possibly be split up over so many template files?
- Where is the JavaScript? How does it relate to any of these templates?

To answer any of these questions, at the time, you needed a lot of *domain specific knowledge* for Drupal. And, for those of us still maintaining these sites, we have to retain that knowledge, even now.

On top of this, I also built WordPress sites. And maintained CakePHP applications (versions 1 and 2 and eventually 3). And worked on other random things like an old Python application and a Salesforce knowledge base. Each requiring their own set of domain specific knowledge. I found myself spread thin across so many different domains.

#### Component Driven Development

As time went on, our small team of 3 was feeling the strain of maintaining all the different domains, so we tried to streamline our front end development process. We started experimenting with more component-focused development processes on the front end.

We started with SMACSS for our CSS, which helped us organize our CSS. It introduced separation between global CSS and component specific CSS. All our projects could have the same kind of CSS folder structure.

We started using the BEM naming conventions for CSS, which helped prevent style pollution and further isolated our components from each other. All our projects could use similar naming conventions for CSS, making looking for things that much easier. (I wrote about these [CSS standards](/front-end/css-standards) a while back, if you're curious.)

SMACSS and BEM gave us a component driven process for writing CSS, but this process didn't really bleed into other areas like markup because we still had page-template-focused dev environments and long jQuery files.

Later, we started experimenting with React for some projects, which helped us see we could include our markup in our JavaScript, and our component CSS could be imported directly into the component as well.

Around the same time, we started looking at different pattern library workflows and tools, like Pattern Lab, Atomic Design, and [KSS Node](/front-end/build-style-guide-straight-from-sass). Our front ends became more component focused and streamlined, but the domain-specific knowledge that came with each CMS and framework didn't go away.

#### Mediacurrent and Drupal

After I became more comfortable with a component-driven approach and more frustrated with being spread too thin across so many different domains, I joined [Mediacurrent](https://mediacurrent.com).

At Mediacurrent, because they focused on one primary domain (Drupal) they were able to focus really take the component driven approach to the next level from what I was used to.

#### KSS Node and Drupal

The approach leveraged a tool I was already familiar with: [KSS Node](/front-end/build-style-guide-straight-from-sass). KSS is a documentation syntax for CSS. It lets you write inline documentation as comments in your CSS and generates a living style guide from that documentation.

KSS Node also has a twig extension, so that you can include Twig templates next to your CSS / SCSS files. Those Twig templates are then used for the markup portion of your style guide.

Each component ends up with its own directory with a Twig file, a SCSS file, and we can also include one or more JavaScript files with the component in the same directory. So now on the front end we have self-contained components.

Drupal 8 uses Twig as its templating system, so now our Node-based style guide can use the same templates as Drupal. And thanks to the Drupal Component Libraries module, we can attach the component JavaScript directly to the individual component and Drupal will create bundles of JavaScript / CSS for the components and smartly include them where they need to be included.

![Topher Grace in a business suit, hooks his hands together a mouths, "Synergy"](/img/gatsby-days-2018/synergy.gif)
<em>Synergy.</em>

Synergy. Backend and Frontend using the same templates. *Theoretically* front-enders can work exclusively in the style guide and back-enders can focus on the backend.

## Problems with CMS-Centered Development

But we still have a few problems:

### 1. Integration.

Somewhere, somebody has to get the content out of the CMS into a front end template. When we do this in templates, the logic can get hairy, and downright unreadable. When we do this in PHP, it can lead front end devs to a place they are not as familiar.

### 2. Drupalisms / Domain specific knowledge

When front end developers are making new components, we are rarely thinking about how Drupal will cache the template or what attributes from Drupal need to come through so that the Drupal cache can correctly clear. We are thinking of the most performant, semantic, accessible way to match the designs we are given. And when the integration step comes around, we often find that the architecture the backend was envisioning is not what we imagined on the front end and we need to reconcile the differences.

### 3. Performance

Hidden in these questions is an underlying question of performance. There is server performance, PHP performance, front end performance, file compilation and bundling etc. And since they are all kind of intertwined in Drupal, you have to have some very specific knowledge to make it all work. It's not enough to know about how to write performant PHP or performant JavaScript. You might have to know both and understand Drupal's caching layer and do load testing on your server to make sure it's all working correctly. And have a very strong caching layer in front of all that.

These problems are part of a continuously ongoing conversation we have at Mediacurrent about the best way to front end Drupal. We've got some smart people working to come up with workflows and methods to resolve these issues and I'm confident they'll come up with something great in the Drupal sphere.

## Trends in Modern Web Development

But, I also think these issues are related to larger trends in the web industry, and may have answers outside the problem sphere.

### Front end complexity

The first related trend is increasing complexity on the front end. The front end has always had its share of challenges, some of them often overlooked, like accessibility and performance, and some more obvious like trying to make a website look just exactly right on every screen ever made.

But now the front end is really becoming more complex. We are doing more and more on the front end:

- 💪 we are building complex web applications that rival native functionality
- 💡 We can send and receive push notifications
- ⚡️ We have prefetching, preloading, that can make everything faster
- 👷‍♀️ Serviceworkers are letting JavaScript take our sites offline, but in a good way :)
- ✨ Web workers and other technologies I don't know about yet

And as we get more capabilities on the front end, the domain knowledge you need to work on the front end is a lot larger.

### Stronger need for specialization

And so because of this, we have a stronger need for specialization.

For us as an agency, we need the specialization in order to remain competitive. We want to be recognized as industry leaders. We *don't* want to be so firmly stuck to what was the "right" way to do something five years ago or even two years ago that we miss out on the new opportunities all around us.

In order to deliver the kinds of solutions clients are looking for today, we need our front end developers to be able to focus on the new capabilities we have on the front end. And we need our back end developers to be pushing the envelope on what their work is capable of too without worrying about the front enders breaking something.

### Decoupling the CMS

And where I really see this driving us as an agency, and all of us in the web industry in general is to the **decoupling of the CMS.**

The problems I identified earlier: integration, drupalisms , performance I think all come from web work that is centered around content management systems. Let's call it CMS-centered development.

When we are doing CMS-centered development, we end up with a lot of domain specific knowledge for those systems. I think it's true whether it's Drupal or WordPress or any other traditional CMS. And that knowledge may or may not be relevant to our sphere of front end development or the problem you are trying to solve for a client.

If we remain focused on CMS-centered development and all the various knowledge it requires, we risk missing out on new opportunities. New opportunities that come from letting the front end play to its strengths, and new opportunities that come from letting the CMS play to its strengths.

And this I think is the main benefit to decoupling the front end from the content management system: better, faster, more advanced front ends with people who are better equipped to work on them. Better, more powerful, easier to use content management systems.

In order for CMS's and front ends to be the best versions of themselves, I think we need to separate them completely. Go Decoupled. Off with their heads.

## Case Study: City of Sandy Springs, GA

So to illustrate this, let's take a look at a real life project.

The City of Sandy Springs, Georgia came to us with a few needs. They had a new art and cultural center called City Springs that needed a website. At the same time, they were adding digital signs across the development and the city properties, so they needed a way to manage content for all the signs.

And, as we can all understand, they did not want to add another two new sites for managing content and logging into and all the overhead that creates. They wanted one place where people can login to manage all kinds of content for all around the city. They dreamed of a "Unified Platform".

So for our scope of work for phase one of the project, we laid out a plan to build out a Unified Platform for managing content that would be extendable. At first it manage the content for the new City Springs site as well  the digital signage in City Springs and office break rooms and even across the city as new signs are added.

To meet these requirements, we built:

 - a Drupal install
 - a customizable RSS feed for the signage
 - a Gatsby site ([https://citysprings.com](https://citysprings.com))

![A diagram that shows Drupal as the center, powering a Gatsby site and the RSS signs.](/img/gatsby-days-2018/04-5-structure.png)

And just to set the stage a little bit, this was definitely an experimental project for us. We had done decoupled Drupal before and we had some digital signage projects in the works but:

 - This was our first project as a team that used Gatsby
 - This was a budget that was way under what we would normally do for a full Drupal 8 build
 - We had never worked with this specific digital signage provider before

There's the stage. Now lets dig in to how we built it out.

### Drupal Install
The core of the unified platform is a Drupal install. When we talk about the unified platform, we are actually logging into a Drupal admin interface.

The difference from a regular Drupal install, is that this Drupal install doesn't have a real front end. No public users are accessing the front end. It had the [JSON API module](https://www.drupal.org/project/jsonapi) installed which let us get the content we needed to Gatsby, and then we had a custom RSS feed that got the content needed to the digital signage platform.

### Promotion / Tagging
Within Drupal, we used a taxonomy structure for distributing and promoting content. When users are creating content, they have some fields that ask them where they would like to promote the content. There were three main ways they can do this:

#### Destination
First we had a destination taxonomy, and this determined where the content should live. So if a user selects "Citysprings.com" as the destination for the new page they are creating, it would get published to the City Springs Gatsby site. Pretty straightforward.

#### Tagging
Next, we had tagging structure. Tags are used for two main things.

The first thing tags were used for is on the City Springs Gatsby site, events can be filtered based on their event type. So comedy versus concert. That's a pretty normal feature.

But the really cool feature of tagging is that a custom RSS feed can be built based on content types and tags. We created a default base feed that displays all content from the platform, but also the ability to filter the feeds based on the url structure. These urls can be used in the digital signage provider as the source for the signs' content. So for example, say there is a digital sign in the City Hall break room, and they want to have that sign display news items that are specific to city employees. They would plug in a url like `unifiedplatform.com/feed/news/city-employee-news`  to the signage platform and it would pull news tagged for City Employees from the unified platform to the sign. URLs can be combined, remixed etc to pull all different kinds of content from the platform. This is a really powerful feature as it allows for *a lot* of customization in the signage platform. This is how all the signs get content.

#### Promotion
The third and last way of distributing content was through what we called *promotion*. Promotional spots are places where content that lives in one place can be promoted in another.

For example, on the City Springs Gatsby site there is a featured events sidebar and events that are tagged City Springs -> Featured Events will show up in that sidebar.

Another thing we used promotional spots for was for creating embeddable iframes. In Gatsby we had an iframe specific template  that consumes content from these promotional tags and then can be embedded in another city website. This was to help drive home the concept of a unified platform that could push content to any city property or any web property, really.

### Recap

So to recap we built:

- a Drupal install
- that includes a customizable RSS feed
- a Gatsby site for citysprings.com

### Benefits to Sandy Springs

But what the client really got was a content management system that could:

- manage any amount of signs across the entire city
- manage the content for a single web property now and any amount of other web properties in the future
- manage content that is embeddable on any web property

With the [citysprings.com](https://citysprings.com) Gatsby site:

- They got a fast, reliable site built with some of the newest best front end practices
- They got a site that was easy for their developer to work on, since he didn't need any prior Drupal experience to work on the front
- They saved a bunch of money on hosting.

The hosting thing was something the client was really happy about. Since no public users would be hitting the Drupal site, we were able to use a much smaller Drupal hosting plan. On the front end, we hosted with Netlify for free. The client saved a significant portion of the budget they had set aside for hosting, which they were ecstatic about and in turn decided to spend that money with us on new feature development.

### Benefits to Mediacurrent

From our perspective at Mediacurrent, Gatsby was a huge win.

The amount of money Gatsby saved the client on hosting directly translated into more revenue for us.

We were able to deliver the project:

- on time
- right on budget
- to spec
- with very few bugs

And when we did our internal retrospective on this project, a theme that kept coming up was how this was our first time using Gatsby. Our project budget, although smaller than what we would have for a full Drupal 8 build, was actually generous enough to get us through the learning curves that come with any new technology. The challenges we initially faced with Gatsby, like new conventions, really figuring out the source plugin for Drupal and handling images were not large enough hurdles to set us back. And now that we've resolved those issues, our workflow Gatsby workflow is even more streamlined for the future - we won't face those same hurdles again.

## How Decoupling Changes Development

So those are some of the outcomes that were specific to this project, and now I want to touch on some of the larger themes that I came to see during this project that I think are the result of decoupling the CMS.

### A Front end that does exactly what we want and nothing more

On the front end, for City Springs, we got a front end that does exactly what we want and nothing more.

As I've covered, traditional content management systems have a very opinionated way that their templating structure works and how content maps to the front end.

There's usually boilerplate markup you have to override or delete or figure out a way to ignore, and pages you don't want accessible so you have to work with redirects or something to hide them.

With Gatsby, you're really only building what you need. At its core you're just creating React components, and they can pretty much be structured anyway you want them. No need to override, no need to delete. You can even import any component from NPM or wherever you want to use and pass your data into.

Beyond this, we are also free to adopt the latest best practices. We don't have to figure out a way to shoehorn React or npm modules into the Drupal JS bundler. And we are free to switch out the front end as needed without changing the backend.

### Performance

Right off the bat, the performance of our front end is way more independent from our backend infrastructure. We are talking about static HTML now, and don't need to be concerned with what PHP is doing or the capacity of our backend server, since it is rarely being touched.

We've divided up the stack and so it less likely to topple over.

And, because the front end performance is independent of the back end performance, it is much more firmly in the front end wheelhouse. We know that if there are performance issues, they are coming from the front end, and so they can be addressed there. A developer doesn't need to switch between their front end / back end hats to solve the problem.

Beyond that, Gatsby's built-in preloading and prefetch is incredible. These sites are *fast*, out of the box. Faster than any PHP. Faster than regular old static HTML. Lightning fast.

### Asynchronous Development

With the fully decoupled approach we took with Gatsby and Drupal, we were also able to leverage a pretty asynchronous development timeline.

### You don't need the backend to start development.

With Gatsby, because you can pull data from anywhere, you don't need the backend set up to start development. You can start development with JSON files mocking the data structure you expect to have. And when the backend is built, you can structure your GraphQL queries to match the structure of your JSON.

### Ease of Integration

I mentioned a few times all the problems with where to put integration logic. In my experience with full Drupal builds, integration between the front end and back end can cause a lot of headaches during development as mis-matched expectations between backend and frontend come into play. But beyond development, the integration layer is where a lot of maintenance issues come into play as well, because it can be harder to reason about why something is in a template or in php when you aren't actively building out the site.

With Gatsby, the integration layer happens in the GraphQL. Having a convention and a very simple syntax for getting data for components goes a long way to speeding up the development process.

Additionally, the Graphical interface built in to Gatsby also makes it super intuitive for front end developers with no knowledge of Drupal to explore and find the data they need. They can find and select the data they need, build their GraphQL queries in a way they are familiar with, without needing to know why Drupal nests things the way it does or using php var_dump to inspect render arrays.

### A More Powerful CMS

Lastly, and I think this is the most important point: decoupling the CMS really unleashes the power of the content management system in ways we wouldn't have thought possible a few years ago.

Traditionally 1 CMS = 1 website. But now, the content management system can be so much more than a single website. It has the potential to power an entire organization, or as we are seeing with Sandy Springs, even an entire city.

## How Decoupling Changes an Organization

To close, I want to talk about how these decoupled approaches go beyond introducing changes to our development workflow, to making real changes in our organizations.

### Hiring
Let's talk about hiring first. Earlier I outlined some of the progression that front end work has followed through the past few years.

A lot of what I focused on was how it required a lot of domain specific knowledge, and I think this has the biggest impact on hiring. When we hire, we want to make sure that people who join the team are able to be productive fairly quickly in their realm of expertise. We want them to know the basics off the bat. But which basics do we prefer? The Drupal basics? Or front end basics? Finding a really good front end developer who is a good Drupal developer can be challenging. So can finding a really good Drupal developer who is also a good front end developer.

The component-based development process we use for typical Drupal builds goes a long way for our team to let us focus on hiring strong front end developers.

Because we have isolated the front end somewhat from the Drupal theme, new front end devs without Drupal experience are able to make pull requests pretty quickly after joining the team if we point them to exclusively style-guide based work. And, as they work with the team longer, they are able to learn some Drupalisms from the more experienced Drupalers.

With decoupling methods like Gatsby though, our hiring pool gets a lot bigger, because we start pulling from front end devs with React experience rather than front end devs with Drupal experience. And the React experience often translates to other more specialized front end skillsets rather than devs who are split across the stack.

### Client Diversity
As our team becomes more specialized in different areas of development, the kinds of clients we take on changes.

Whereas before, when every site was a full Drupal build with the entire theming layer and often required careful attention to server requirements, caching, and content delivery networks, we had a fairly high budget threshold for clients we could work with.

With how much a Gatsby development process has sped up our front end workflow, we can take on smaller projects and still make them profitable. And I think Gatsby really shines here, this is our big opportunity. And then once our initial engagement is complete, we can roll those into support contracts to incrementally add new features.

Beyond the budget aspect, working in Gatsby gives all our developers more experience in React and writing modern JavaScript. This has translated to new work opportunities for us where we take on other React projects because we are able to leverage our previous React knowledge.

## Wrap Up
So just to wrap up, I think leveraging the advantages I've outlined of decoupling front end from the content management system is going to really change the way we work at Mediacurrent and how a lot of people are working on the web. I know for us it has helped speed up our development process. We are moving faster, building more reliable sites, doing them for less money while remaining profitable, getting into new kinds of work, and doing it on budget.

## Video Recording


<div class="responsive-iframe">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/QiocnDGnKfs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Slides

<div class="responsive-iframe">
<iframe src="https://noti.st/benrobertson/xJwZIr/embed" frameborder="0" width="960" height="540" allowfullscreen></iframe>
</div>
