const path = require('path');
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const { copyLibFiles } = require('@builder.io/partytown/utils');

exports.onPreBuild = async () => {
  await copyLibFiles(path.join(__dirname, 'static', '~partytown'));
};


exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage, createRedirect } = actions;

  const blogPostTemplate = path.resolve('src/templates/post/post.js');
  const result = await graphql(`
  query {
    allMdx(filter: {frontmatter: {path: {ne: "null"}}}) {
      edges {
        node {
          id
          frontmatter {
            path
          }
        }
      }
    }
  }
`);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  // Create blog post pages.
  const posts = result.data.allMdx.edges;
  // you'll call `createPage` for each result
  posts.forEach(({ node }) => {
    if (!node.frontmatter.path) return;

    createRedirect({
      fromPath: `${node.frontmatter.path}/`,
      toPath: `https://ben.robertson.is${node.frontmatter.path}/`

    })
  });




  // Reverse proxy for google tag manager & partytown.
  createRedirect({
    fromPath: `/gtm/*`,
    toPath: `https://www.googletagmanager.com/*`,
    statusCode: 200,
  })
  createRedirect({
    fromPath: `/googleanalytics/*`,
    toPath: `https://www.google-analytics.com/*`,
    statusCode: 200,
  })
};
