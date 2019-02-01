---
layout: post
author: Ben Robertson
title:  "Allow Audio in Wordpress Excerpt"
date:   2017-03-17 00:00:00 -0500
categories: wordpress
snippet: "This week for a client project I had a need to be able to display more than just text in a post excerpt."
path: /wordpress/allow-audio-in-wordpress-excerpt
---

This week for a client project I had a need to be able to display more than just text in a post excerpt. We created a custom post type for them called 'Podcasts', and in each post, they have a text introduction to the podcast, an audio embed added through the Wordpress WYSIWYG, and then the transcript of the podcast.

On the podcast index page, we wanted to display the intro section as well as the audio embed, and then stop after that. I didn't want to modify the existing `the_excerpt()` tag, so I created this custom tag to use in my template:

```php
 /**
  * Create an excerpt that includes the audio for podcasts.
  * @return string The excerpt HTML
  */
 function wp_podcast_excerpt() {

     // Gets the post content
     $content = get_the_content();

     // Find the position of the audio shortcode in the content
     $audiopos = strpos($content,'[audio');

     if($audiopos) {

         // The excerpt is all the text up to and including the audio tag.
         $excerpt = substr($content, 0, strpos($content,'[/audio]'));

         // Apply wordpress filters.
         $excerpt = apply_filters('the_content', $excerpt);

         // Strip out images.
         $excerpt = preg_replace("/<img[^>]+\>/i", "", $excerpt);

         echo $excerpt;

     } else {
         the_excerpt();
     }
 }
```
