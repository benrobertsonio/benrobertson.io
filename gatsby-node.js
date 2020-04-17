const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

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
      context: { id: node.id },
    });
  });
};
