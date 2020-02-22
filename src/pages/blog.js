import React from 'react';
import { graphql, Link } from 'gatsby';
/** @jsx jsx */
import { jsx, Container, Text, Heading, Flex } from 'theme-ui';
import Layout from '../components/layout';
import theme from '../gatsby-plugin-theme-ui';


export default function blog({ data: { allMarkdownRemark: { nodes } } }) {

  return (
    <Layout>
      <Container variant="narrow">
        <Heading as="h1" sx={{ mt: 5, mb: 5, fontSize: 7 }}>Blog</Heading>
        <section>
          <ul sx={{ p: 0, m: 0, listStyle: 'none' }}>
            {nodes.map(({ timeToRead: ttr, frontmatter: { title, path, snippet, date, } }) => (
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
          </ul>
        </section>
      </Container>
    </Layout>
  );
}

export const blogQuery = graphql`
  {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
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