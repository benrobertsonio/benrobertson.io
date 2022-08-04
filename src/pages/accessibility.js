import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql, Link } from 'gatsby';

const Accessibility = ({ data: { content: { nodes } } }) => (
  <Layout>
    <SEO
      title="Accessibility"
      pathname="/accessibility/"
      desc="Some tips, tricks, and guidelines for building accessible web experiences."
    />
    <div variant="narrow">
      <h1>Accessibility</h1>
      <p>Some tips, tricks, and guidelines for building accessible web experiences.</p>
      {nodes.map(({ frontmatter: { title, snippet, path, date }, timeToRead: ttr }) => (
        <li key={path}>
          <article>
            <h2><Link to={path}>{title}</Link></h2>
            <div>
              <p>{date}&nbsp;&middot;</p>
              <p>&nbsp;{ttr} min read</p>
            </div>
            <p>{snippet}</p>
          </article>
        </li>
      ))}
    </div>
  </Layout>
);

Accessibility.propTypes = {
  data: PropTypes.object
};

export default Accessibility;

export const accessibilityQuery = graphql`
  {
    content: allMarkdownRemark(
      filter: {
        frontmatter: {
          categories: {
            eq: "accessibility"
          }
        }
      },
      sort: {
        order: DESC,
        fields: frontmatter___date
        }
      ) {
      nodes {
        timeToRead
        frontmatter {
          title
          snippet
          path
          date(formatString: "MMMM D, YYYY")
        }
      }
    }
  }`;
