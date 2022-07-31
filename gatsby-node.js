const path = require('path');
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const redirectPages = [
  'notes',
  'about',
  'blogroll',
  'front-end-remote-jobs',
  'privacy-policy',
  'accessibility',
  'accessibility-for-web-developers',
  'courses/common-accessibility-mistakes',
  'sitemap/sitemap-index.xml',
  'sitemap/sitemap-0.xml'
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
    allFile(filter: {sourceInstanceName: {eq: "notes"}}) {
      nodes {
        childrenMdx {
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
  const notes = result.data.allFile.nodes;
  posts.forEach(({ node }) => {
    if (!node.frontmatter.path) return;

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
    const slug = note.childrenMdx[0]?.slug.toLowerCase()
    if (!slug) return

    createRedirect({
      fromPath: `/notes/${slug}`,
      toPath: `https://ben.robertson.is/notes/${slug}`,
      isPermanent: true
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
  createRedirect({
    fromPath: `/blog`,
    toPath: `https://ben.robertson.is/writing`
  })
};


