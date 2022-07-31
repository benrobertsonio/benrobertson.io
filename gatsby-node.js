const path = require('path');
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})



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

    createRedirect({
      fromPath: `https://benrobertson.io${node.frontmatter.path}/`,
      toPath: `https://ben.robertson.is${node.frontmatter.path}`
    })
  });

  createRedirect({
    fromPath: ``,
    toPath: `https://ben.robertson.is`
  })
};
