/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { jsx, Container, Heading, Flex, Text } from 'theme-ui';
import { graphql, Link } from 'gatsby';
import theme from '../gatsby-plugin-theme-ui';

const Accessibility = ({ data: { content: { nodes } } }) => (
  <Layout>
    <SEO
      title="Accessibility"
      pathname="/accessibility/"
      desc="Some tips, tricks, and guidelines for building accessible web experiences."
    />
    <Container variant="narrow">
      <Heading
        as="h1"
        sx={{ mt: 5, mb: 4, fontSize: [6, 6, 7, 8] }}
      >Accessibility</Heading>
      <p>Some tips, tricks, and guidelines for building accessible web experiences.</p>
      {nodes.map(({ frontmatter: { title, snippet, path, date }, timeToRead: ttr }) => (
        <li key={path} sx={{ p: 0, ml: 0, mb: 5, listStyle: 'none' }}>
          <article>
            <Heading sx={{ mb: 3 }}><Link sx={theme.styles.a} to={path}>{title}</Link></Heading>
            <Flex sx={{ fontSize: 1 }} mb="3">
              <Text>{date}&nbsp;&middot;</Text>
              <Text>&nbsp;{ttr} min read</Text>
            </Flex>
            <Text>{snippet}</Text>
          </article>
        </li>
      ))}
    </Container>
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
