const path = require('path');
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

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
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.frontmatter.path,
      // This component will wrap our MDX content
      component: path.resolve(blogPostTemplate),
      // You can use the values in this context in
      // our page layout component
      context: {
        id: node.id,
        url: `https://ben.robertson.is${node.frontmatter.path}/`
      },
    });

  });

  createRedirect({
    fromPath: `/front-end-remote-jobs`,
    toPath: `https://frontendremotejobs.com`,
    isPermanent: true,
  })


  // Reverse proxy for google tag manager & partytown.
  createRedirect({
    fromPath: `/data/js/script.js`,
    toPath: `https://plausible.io/js/script.js`,
    statusCode: 200,
  })
  createRedirect({
    fromPath: `/data/api/event`,
    toPath: `https://plausible.io/api/event`,
    statusCode: 200,
  })
};
