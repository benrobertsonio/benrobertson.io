import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {data.allMarkdownRemark.edges.map(({node}) => (
      <article key={node.frontmatter.title}>
      <h2><Link to={node.frontmatter.path}>{node.frontmatter.title}</Link></h2>
      <p>{node.frontmatter.snippet}</p>
      </article>

    ))}
  </Layout>
)

export default IndexPage

export const indexQuery = graphql`
{
  allMarkdownRemark(sort:{ fields:frontmatter___date, order: DESC}){
    edges {
      node {
        timeToRead
        frontmatter {
          title
          path
      		date
          snippet
        }
      }
    }
  }
}
`
