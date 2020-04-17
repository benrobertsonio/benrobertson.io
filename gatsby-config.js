module.exports = {
  siteMetadata: {
    title: 'Ben Robertson',
    titleTemplate: '%s | Ben Robertson',
    description:
      "I'm Ben Robertson, a senior software engineer at Gatsby Inc who writes about front end development and web accessibility.",
    author: 'Ben Robertson',
    twitter: '@benrobertsonio',
    image: '/ben.jpg',
    siteUrl: 'https://benrobertson.io',
    siteLanguage: 'en-US',
    banner: '/ben.jpg',
    headline: ''
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-advanced-sitemap',
    'gatsby-plugin-robots-txt',
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

      resolve: 'gatsby-plugin-feed-mdx',
      options: {
        query: `
            {
              site {
                siteMetadata {
                  title
                  description
                  siteUrl
                  site_url: siteUrl
                }
              }
            }
          `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + '/blog' + edge.node.frontmatter.path,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  custom_elements: [{ 'content:encoded': edge.node.html }]
                });
              });
            },
            query: `
                {
                  allMdx(
                    sort: { order: DESC, fields: [frontmatter___date] },
                  ) {
                    edges {
                      node {
                        excerpt
                        html
                        frontmatter {
                          title
                          date
                          path
                        }
                      }
                    }
                  }
                }
              `,
            output: '/feed.xml',
            title: 'Ben Robertson\'s RSS Feed',
          }
        ]
      }

    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ben Robertson',
        short_name: 'Ben Robertson',
        start_url: '/',
        background_color: '#ed6a5a',
        theme_color: '#ed6a5a',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['UA-43172667-3'],
        gtagConfig: {
          anonymize_ip: true,
          transport_type: 'beacon',
        },
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true
        }
      }
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
