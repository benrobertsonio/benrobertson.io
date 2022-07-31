const path = require('path');
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const redirectPages = [
  'writing',
  'notes',
  'blog',
  'about',
  'blogroll',
  'front-end-remote-jobs',
  'privacy-policy',
  'accessibility',
  'accessibility-for-web-developers',
  'courses/common-accessibility-mistakes',
]

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createRedirect } = actions;


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

    console.log(`Creating redirect from https://benrobertson.io${node.frontmatter.path}/ to https://ben.robertson.is${node.frontmatter.path}`);
    createRedirect({
      fromPath: `https://benrobertson.io${node.frontmatter.path}/`,
      toPath: `https://ben.robertson.is${node.frontmatter.path}`,
      isPermanent: true
    })
    createRedirect({
      fromPath: `https://benrobertson.io${node.frontmatter.path}`,
      toPath: `https://ben.robertson.is${node.frontmatter.path}`,
      isPermanent: true,
    })
  });

  redirectPages.forEach((page) => {
    createRedirect({
      fromPath: `/${page}`,
      toPath: `https://ben.robertson.is/${page}`,
      isPermanent: true
    })

    createRedirect({
      fromPath: `/${page}/`,
      toPath: `https://ben.robertson.is/${page}`,
      isPermanent: true
    })
  })

  createRedirect({
    fromPath: ``,
    toPath: `https://ben.robertson.is`,
    isPermanent: true
  })

  createRedirect({
    fromPath: `/accessibility/understanding-layout-for-screen-readers`,
    toPath: `https://ben.robertson.is/accessibility/designing-layouts-for-screen-readers`
  })
};


