---
layout: post
title:  "Notes on Animation at Work"
author: Ben Robertson
date:   2017-10-19 07:00:00 -0500
categories: front-end
snippet: "My takeaways from Rachel Nabor's Animation at Work. My rating: 👍👍"
path: /front-end/notes-on-animation-at-work
---

At work this summer, our team started experimenting a little with more interactive, animated experiences (for [Marian University](http://findout.marian.edu/what-are-you-made-of/) and the new Up&Up homepage - coming soon). As I started development on these projects, I quickly realized that our normal design to development workflow was going to be inadequate. I sat at my desk, staring at a video with split-second animations and wondered how on earth I was supposed to figure out everything that was animated.

I was **so** glad when I saw that A Book Apart was offering an ebook on the very subject, so I picked up Rachel Nabors' [Animation at Work](https://abookapart.com/products/animation-at-work) as soon as I could. The book is focused not so much on the technical aspects of implementing animations but on the intricacies of thinking and talking about animation as a team. This was the exact problem we needed help with.

Here are some of the things that have helped me the most so far.




## Communicating Animations
> Communication issues and inadequate deliverable documentation can make it hard for teams to design and build out animations quickly, leaving things like motion design and gestures at the bottom of the pile for implementation.
>
> <cite>Rachel Nabor, Animation at Work</cite>

Rachel discusses storyboards and animatics. The most helpful part of the communicating animation chapter was simply understanding the anatomy of an animation. It gives the designers and the developers on our team a shared language to talk about animations.

### Anatomy of Web Animation
- Easing
- Duration
- Properties

Just having this breakdown was a great guideline for starting conversations with the design team. It seems so basic, but we just didn't have a shared language to talk about animations. Most of the conversations focused on "making this *zing* more," or "this should be more of a *whoof* in and *pfoooof* out."

## Distinguishing types of animation
Rachel does a good job of dividing up animations in different ways that clarifies the communication and decision making process around animation.

### Animatable Properties
She talks about the three things we can animate:
1. Position / Location (translate / rotate / box-shadow)
2. Form / shape (scale / change shape)
3. Color (opacity / color)

It seems so simple, but I wouldn't have been able to articulate that before reading her book.

This distinction is even more helpful when added with Rachel's explanation of different purposes of animation. Broadly speaking, she says the main purpose of animation should be to "supply context in a context-poor environment". **Animation is for adding context.**

### Movement vs. Color
Diving a little deeper, Rachel explains that movement attracts attention, so use movement only when you need to draw the user's attention away from their current focus. Our eyes and brains are programmed to notice motion, especially in our peripheral vision.

On the other hand, color changes are more subtle, since we normally only notice these when we are focused on an object. Accordingly, color changes won't be effective at attracting attention. Rachel recommends using color changes for more subtle information hints, like state changes. A good example of this is a button changing color on hover. The user is already purposefully hovering over the button, so we don't need to attract their attention so desperately, we just want to show that the interface is reacting to their input.

### Five Common Animations Patterns
You can also classify animations by their function: what cognitive task do they help the user perform.

1. **Transitions** take users from place to place or from one task to another. Transitions help users switch context.
2. **Supplements** bring information on or off the page, without changing the user's context.
3. **Feedback** signifies causation between events. Feedback shows the interface's reaction to the user's interaction.
4. **Demonstrations** show how something works.
5. **Decorations** are purely aesthetic, no new information is conveyed.

Theses different functions all follow the premise that the main purpose of almost any animation should be to "supply context in a context-poor environment". In the most general sense, animation is for adding context.

This premise and functional framework are a big help in prioritizing animation work.

## Prioritizing Animations
Given that the purpose of any animation is for adding context, we can prioritize the animations that we spend time on as a team by evaluating the how much and what kind of information an animation provides.

Rachel gives examples of questions to ask about an animation:

>  - Does it show the user where information came from or went to?
- Does it indicate progress?
- Does it move the user through an information space?
- Does it reinforce physics or branding?
- Does it explain something faster than words or a video could?

The more yeses we have to these questions, the more valuable the animation is to our project.

In addition to weighing animation by cognitive value, Rachel suggests considering ease of implementation as well. If an animation provides a lot of cognitive value and is easy to implement, that's a no brainer: work on that ASAP. If an animation provides a lot of cognitive value and will be difficult to implement, test your idea to make sure it is valuable and then schedule it out. If an animation provides little cognitive value and will be difficult to implement, cross it off your list because you will never get it done. On the other hand, if it is easy to implement but provides little value, add to your list of rainy-day projects.

By mapping animations according to cognitive value and ease of implementation, I think I'll be better able to lead conversations about animation with my team and clients in the future. This was a very valuable chapter.

## Evaluating Animation
Additionally, the assumption that animation is for providing context helps us evaluate animations.

If a user is noticing an animation, they are spending cognitive power on it and that is the opposite of what an animation should do. They should be seamless, unless you are trying to attract their attention. The overall goal is to reduce cognitive load, and we know we've done that if they don't notice the animation.

Conversely, we can spot places that may be in need of animation by looking for experiences that the user notices in a bad way. Rachel calls these 'cognitive bottleneck smells' which I think is a wonderful phrase. Examples are flashes of white on a new page load, content insertion or removal, wordy descriptions, and videos.

## A couple best practices
There were a few best practices that I found helpful to consider as well.

### If you animate the entrance, animate the exit.
This seems obvious, but I don't always do it.

### Avoid flashes of unloaded states.
Rachel suggests that if you are going to use loading states, adopt an **always be loading mentality**. I really like that way of thinking about it. Make the default state of your system a loading state. It should always fall back to the loading state. I think this is a really helpful concept to internalize for progressive enhancement.

### Consider Accessibility
One way to design and build animation with accessibility in mind is by making use of the reduce motion media query.

By using this media query:

```css
@media screen and (prefers-reduced-motion: reduce) { }
```

We can turn off or lessen animations for users who may be negatively affected by them, or might just prefer less animation. Eric Bailey has an [excellent intro to the reduced motion media query](https://css-tricks.com/introduction-reduced-motion-media-query/) at CSS-Tricks.

Another accessibility practice is to allow users to control animation settings in the settings menu of an app. Allowing users to opt in or out of animations gives them a sense of control and is especially great for users who suffer from [vestibular disorders](http://a11yproject.com/posts/understanding-vestibular-disorders/).

## Wrap Up
I've just touched on the concepts that were the most helpful to me and our team at Up&Up, but there's lots more valuable material in the book, including some guidelines on designing animations, suggestions for storyboarding, and encouragement to pioneer your own animation designs. I highly recommend [this book ](https://abookapart.com/products/animation-at-work) and know our team will benefit a lot from it. Yours might too!

[Animation at Work by Rachel Nabors](https://abookapart.com/products/animation-at-work)

