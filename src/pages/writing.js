import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';


export default function blog({ data: { allMdx: { nodes } } }) {

  return (
    <Layout>
      <SEO title="Writing" />
      <div>
        <h1>Writing</h1>
        <section>
          <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
            {nodes.map(({ timeToRead: ttr, frontmatter: { title, path, snippet, date, } }) => (
              <li key={path} style={{ padding: 0, marginLeft: 0, marginBottom: `3rem`, listStyle: 'none' }}>
                <article>
                  <h2><Link to={path}>{title}</Link></h2>
                  <div>
                    <span>{date}&nbsp;&middot;</span>
                    <span>&nbsp;{ttr} min read</span>
                  </div>
                  <p>{snippet}</p>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
}

export const blogQuery = graphql`
  {
    allMdx(filter: {frontmatter: {path: {ne: null}}},  sort: { fields: frontmatter___date, order: DESC })
    {
      nodes {
        timeToRead
        frontmatter {
          title
          path
          date(formatString: "MMMM DD, YYYY")
          snippet
        }
      }
    }
  }
`;
