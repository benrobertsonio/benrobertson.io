require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  trailingSlash: `never`,
  siteMetadata: {
    title: 'Ben Robertson',
    titleTemplate: '%s | Ben Robertson',
    description:
      "I'm Ben Robertson, Director of Customer Success at Gatsby who writes about front end development and web accessibility.",
    author: 'Ben Robertson',
    twitter: '@benrobertsonio',
    image: '/profile.jpg',
    siteUrl: 'https://ben.robertson.is',
    siteLanguage: 'en-US',
    banner: '/profile.jpg',
    headline: ''
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/posts`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: require.resolve('./src/templates/page.js'),
        },
        remarkPlugins: [require('remark-slug')]
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ben Robertson',
        short_name: 'Ben Robertson',
        start_url: '/',
        background_color: '#0FD1A5',
        theme_color: '#0FD1A5',
        display: 'minimal-ui',
        // This path is relative to the root of the site.
        icon: require.resolve('./src/images/android-chrome-192x192.png'),
      },
    },
  ],
};
