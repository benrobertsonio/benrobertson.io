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
  'sitemap/sitemap-index.xml'
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
    allNotes: allFile(filter: {sourceInstanceName: {eq: "notes"}}) {
      nodes {
        mdx: childrenMdx {
          slug
        }
      }
    }
  }
`);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }


  const posts = result.data.allMdx.edges;
  const notes = result.data.allNotes.nodes;
  posts.forEach(({ node }) => {
    if (!node.frontmatter.path) return;

    console.log(`Creating redirect from ${node.frontmatter.path}/ to https://ben.robertson.is${node.frontmatter.path}`);
    createRedirect({
      fromPath: `${node.frontmatter.path}/`,
      toPath: `https://ben.robertson.is${node.frontmatter.path}`,
      isPermanent: true
    })
    createRedirect({
      fromPath: `${node.frontmatter.path}`,
      toPath: `https://ben.robertson.is${node.frontmatter.path}`,
      isPermanent: true,
    })
  });

  notes.forEach((note) => {
    createRedirect({
      fromPath: `/notes/${note.mdx.slug}`,
      toPath: `https://ben.robertson.is/notes/${note.mdx.slug}`
    })
  })

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


