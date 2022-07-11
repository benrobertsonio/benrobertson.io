import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';


export default function blog({ data: { allMdx: { nodes } } }) {

  return (
    <Layout>
      <SEO title="Blog" />
      <div>
        <h1>Blog</h1>
        <section>
          <ul sx={{ p: 0, m: 0, listStyle: 'none' }}>
            {nodes.map(({ timeToRead: ttr, frontmatter: { title, path, snippet, date, } }) => (
              <li key={path} sx={{ p: 0, ml: 0, mb: 5, listStyle: 'none' }}>
                <article>
                  <h2 sx={{ mb: 3 }}><Link to={path}>{title}</Link></h2>
                  <div>
                    <p>{date}&nbsp;&middot;</p>
                    <p>&nbsp;{ttr} min read</p>
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
