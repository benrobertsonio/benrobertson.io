import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Hi, I'm Ben Robertson.</h1>
      <p>
        🛠 I'm a front end developer at{' '}
        <a href="https://mediacurrent.com">Mediacurrent</a>.
      </p>
      <p>
        ✍️ I write about <a href="/blog">front end development</a> and{' '}
        <a href="/accessibility">web accessibility</a>.
      </p>
      <p>
        ✈️ I help{' '}
        <a href="https://frontendremotejobs.com">
          front end developers find remote jobs
        </a>
        .
      </p>
    </div>
    <div id="mc_embed_signup" className="home-email">
      <h2>
        Free Email Course: Common Accessibility Mistakes and How to Fix Them
      </h2>
      <p>A month long course to help you simplify web accessibility.</p>
    </div>
    <div className="home-grid">
      <section className="grid-item blog">
        <header className="section-header">
          <h2>Recent Writing</h2>
          <hr />
        </header>
        <ul>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <li key={node.frontmatter.title}>
              <article key={node.frontmatter.title}>
                <h3>
                  <Link to={node.frontmatter.path}>
                    {node.frontmatter.title}
                  </Link>
                </h3>
                <p>{node.frontmatter.snippet}</p>
              </article>
            </li>
          ))}
        </ul>
        <a href="/blog">More Blog Posts →</a>
      </section>
    </div>
  </Layout>
);

export default IndexPage;

export const indexQuery = graphql`
  {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 5
    ) {
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
`;
