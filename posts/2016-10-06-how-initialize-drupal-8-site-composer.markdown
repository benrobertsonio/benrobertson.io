---
layout: post
author: Ben Robertson
title:  "How to Initialize a Drupal 8 Site with Composer"
date:   2016-10-06 00:00:00 -0500
categories: drupal
snippet: "Hold on to your butts"
path: /drupal/how-initialize-drupal-8-site-composer
---

After spinning up a few Drupal 8 sites in the past couple weeks, I think I've finally got the Composer workflow going. Here are the steps I follow for setting up a new Drupal 8 site with Composer.

## 1. Create a new project folder.

For me all this is `mkdir /var/www/websites/site-name`

## 2. Get the Drupal Composer project

Just run this command: `composer create-project drupal-composer/drupal-project:8.x-dev app --stability dev --no-interaction`

In this case, app is the name of the directory you would like your project in. So my Drupal project is now in `/var/www/websites/site-name/app`.

I also got confused about the 8.x-dev because I thought it meant it was going to download a dev version of Drupal 8. I now understand that this version refers to the version of the `drupal-composer/drupal-project` version and not the actual version of Drupal you want.

## 3. Wait for Composer.

I usually get a snack.

## 4. Initialize the site using drush.

Inside of your virtual machine (I use vagrant) cd into the app/web directory. This is where your site lives.

Now run this command:

```
..vendor/drush/drush/drush site-install standard \
     --db-url=mysql://username:password@vagrant/db-name \
     --account-mail="email@address.com" \ --account-name=username \
     --account-pass=password \ --site-mail="email@address.com" \
     --site-name="Site Name"
```

## 5. Your site is now available on your virtual machine at url.com/web.

If you want to redirect all url.com/web to just server from url.com, create an .htaccess file in your /app directory with this (Apache only):


{% highlight apache %}
<ifmodule Rewrite>
RewriteEngine on
RewriteRule ^$ web/ [L]
RewriteRule (.*) web/$1 [L]
</ifmodule>
{% endhighlight %}

## Bonus: Install modules

Install modules like this: `composer require drupal/modulename`
