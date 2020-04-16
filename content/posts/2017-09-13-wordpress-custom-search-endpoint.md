---
layout: post
author: Ben Robertson
title:  "Creating a Custom Search Endpoint with the WordPress API"
date:   2017-09-13 08:00:00 -0500
categories: wordpress
snippet: "Search multiple post types with a custom endpoint via the WordPress API."
path: /wordpress/wordpress-custom-search-endpoint
---

I've been playing around with the WordPress API for a few projects at work. One of the things I am frequently trying to do is serve up some suggested search results while someone is typing in a search input.

You can search posts by making a request to `/wp-json/wp/v2/posts?s=search term`, or pages by hitting `/wp-json/wp/v2/pages?s=search term`, and often this is enough for me. I add an event listener to the search input and insert the titles and permalinks in a list below the search input.

Recently though, I needed to implement this feature across several post types. I ended up creating a custom `search` endpoint so that I could queue up the data on the backend and make just one request from the front end.

I implemented this in my themes `functions.php` file, but you could also do this in a custom plugin.




## Register a Custom Route
Our first step is to register a custom route. I used the [register_rest_route()](https://developer.wordpress.org/reference/functions/register_rest_route/) function to do this.

Here's what the register function looks like, I'll break down what we're doing here below.

```php
function namespace_register_search_route() {
    register_rest_route('namespace/v1', '/search', [
        'methods' => WP_REST_Server::READABLE,
        'callback' => 'namespace_ajax_search',
        'args' => namespace_get_search_args()
    ]);
}

add_action( 'rest_api_init', 'namespace_register_search_route');

```

### Namespace
The first parameter is a namespace (`namespace/v1`). Providing a namespace helps avoid conflicts with other routes, such as might be defined by core WordPress or by other plugins and themes. A good best practice is to provide a name and a version. I used `namespace/v1`. If I was setting this up in my theme, I would use my theme slug as the namespace. If I was doing it in a plugin, I would use the plugin. In reality, you could name it anything that you think would prevent conflicts with other namespaces (like the default `wp` namespace).

### Endpoint
The second parameter is an endpoint. Since I'm building a search component, I called it `/search`. Combine the namespace and endpoint with the wp-json prefix and that's where you'd make a request to your endpoint. In this example, we would hit `/wp-json/namespace/v1/search` to get a response from this endpoint.

### Options
The next argument is an array of options.

#### Methods
First up is `method`. I'm using a WordPress constant here (`WP_REST_Server::READABLE`), and this is basically equivalent to setting the method to `GET`. I only want to make `GET` requests to my endpoint, so that's what I'm making available.

#### Callback
The callback argument allows us to specify the callback function that will process the request. I named this function `namespace_ajax_search`, since it's going to process the Ajax search from our front-end.

Here is that function in it's entirety.

```php
function namespace_ajax_search( $request ) {
    $posts = [];
    $results = [];
    // check for a search term
    if( isset($request['s'])) :
		// get posts
        $posts = get_posts([
            'posts_per_page' => 5,
            'post_type' => ['page', 'post', 'custom-post-type'],
            's' => $request['s'],
        ]);
		// set up the data I want to return
        foreach($posts as $post):
            $results[] = [
                'title' => $post->post_title,
                'link' => get_permalink( $post->ID )
            ];
        endforeach;
    endif;

    if( empty($results) ) :
        return new WP_Error( 'front_end_ajax_search', 'No results');
    endif;

    return rest_ensure_response( $results );
}
```

Let me break this down now. It takes one parameter: the request data from our API request. Here's an example `GET` request my Javascript is making: `/wp-json/namespace/v1/search?s=search+term`. The search term is what I need in order to find results and return them.

In my callback function above, I check if there is a search term specified and then run a query for the term using `get_posts`. With the `post_type` argument, I'm specifically telling WordPress to search in pages, posts, and a custom post type. You  can add as many post types here as you want. And of course, I pass in my search term with the `s` argument.

After I get my data, I then loop through it to make it a little friendly to deal with on the front end. I really only need the title of the result and the permalink, so I create a new array with the title and permalink set.

If there are no results, I return an error. Otherwise I return my formatted results array wrapped in the WordPress [rest_ensure_response()](https://developer.wordpress.org/reference/functions/rest_ensure_response/) function to properly handle the response wrappers.

#### Arguments
The third option I passed in is the arguments that the endpoint will respond to. In our example, the only argument is our search term `s`, but if you wanted, you could get fancy and add other filters like post category or date modified.

I pass in a function that returns the arguments array.

```php
function namespace_get_search_args() {
    $args = [];
    $args['s'] = [
       'description' => esc_html__( 'The search term.', 'namespace' ),
       'type'        => 'string',
   ];

   return $args;
}
```

I give my argument a little description so that if other people end up working with the API they get some info when requesting this endpoint.

![A preview of the endpoint information returned by WordPress. (Preview generated via the Postman app)](/img/search-endpoint-desc.png)

If you wanted to define more arguments, you would do it in this function in the `$args` array.


## Wrap Up
With these three functions, we've created our endpoint. You could now use `curl` (`curl curl https://sitename.com/wp-json/namespace/v1/`) or [Postman](https://www.getpostman.com) to send a sample request and see what data your endpoint returns.

Here's all the code we wrote to get this done. (I'll be posting how to create front-end ajax suggested results soon.)

```php
/**
 * Register our custom route.
 */
function namespace_register_search_route() {
    register_rest_route('namespace/v1', '/search', [
        'methods' => WP_REST_Server::READABLE,
        'callback' => 'namespace_ajax_search',
        'args' => namespace_get_search_args()
    ]);
}
add_action( 'rest_api_init', 'namespace_register_search_route');

/**
 * Define the arguments our endpoint receives.
 */
function namespace_get_search_args() {
    $args = [];
    $args['s'] = [
       'description' => esc_html__( 'The search term.', 'namespace' ),
       'type'        => 'string',
   ];

   return $args;
}

/**
 * Use the request data to find the posts we
 * are looking for and prepare them for use
 * on the front end.
 */
function namespace_ajax_search( $request ) {
    $posts = [];
    $results = [];
    // check for a search term
    if( isset($request['s'])) :
		// get posts
        $posts = get_posts([
            'posts_per_page' => 5,
            'post_type' => ['page', 'post', 'custom-post-type'],
            's' => $request['s'],
        ]);
		// set up the data I want to return
        foreach($posts as $post):
            $results[] = [
                'title' => $post->post_title,
                'link' => get_permalink( $post->ID )
            ];
        endforeach;
    endif;

    if( empty($results) ) :
        return new WP_Error( 'front_end_ajax_search', 'No results');
    endif;

    return rest_ensure_response( $results );
}

```
