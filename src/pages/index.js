import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Link as ThemeLink, Heading, Divider, Box, Text } from 'theme-ui';
/** @jsx jsx */
import { jsx } from 'theme-ui';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Container } from 'theme-ui';
import theme from '../gatsby-plugin-theme-ui';
import SimpleSubscribe from '../components/subscribe/simple';

const IndexPage = ({ data: { allMdx } }) => (
  <Layout>
    <SEO
      title="Home"
      desc="I'm Ben Robertson, Director of Customer Success at Gatsby who
    writes about front end development and web accessibility."
    />
    <Container>
      <Heading
        as="h1"
        sx={{ mt: 5, mb: 4, fontSize: [6, 6, 7, 8] }}
      >
        Hi, I'm Ben Robertson.
    </Heading>
      <p>
        <span aria-label="Tools" role="img">🛠 </span>
      I'm Director of Customer Success at{' '}
        <ThemeLink href="https://www.gatsbyjs.com">Gatsby</ThemeLink>.
    </p>
      <p>
        <span role="img" aria-label="Writing hand">✍️ </span>
      I write about{' '}
        <Link sx={theme.styles.a} to="/blog">front end development</Link>
        {' '}and{' '}
        <Link sx={theme.styles.a} to="/accessibility">web accessibility</Link>.
    </p>
      <p>
        <span role="img" aria-label="airplane">✈️</span> I help{' '}
        <ThemeLink href="https://frontendremotejobs.com">
          front end developers find remote jobs
      </ThemeLink>
      .
    </p>
    </Container>

    <Container id="mc_embed_signup" sx={{ mt: 6, mb: 6 }}>
      <Heading>
        Free Email Course:<br />
      Common Accessibility Mistakes and How to Fix Them
    </Heading>
      <p sx={{ mb: 4 }}>
        A month long course to help you simplify web accessibility.
    </p>
      <SimpleSubscribe />
    </Container>
    <Container>
      <Box sx={{ maxWidth: '70ch' }}>
        <section>
          <header>
            <Heading>Recent Writing</Heading>
            <Divider />
          </header>
          <ul sx={{ m: 0, p: 0, mt: 4 }}>
            {allMdx.nodes.map(({ frontmatter }) => (
              <li sx={{ listStyle: 'none', mb: 3 }} key={frontmatter.title}>
                <article key={frontmatter.title}>
                  <Heading as="h3">
                    <Link
                      sx={theme.styles.a}
                      to={frontmatter.path}
                    >
                      {frontmatter.title}
                    </Link>
                  </Heading>
                  <p sx={{ mt: 2 }}>{frontmatter.snippet}</p>
                </article>
              </li>
            ))}
          </ul>
          <Link sx={theme.styles.a} to="/blog">More Blog Posts →</Link>
        </section>
      </Box>

    </Container>
  </Layout >
);

IndexPage.propTypes = {
  data: PropTypes.object
};

export default IndexPage;

export const indexQuery = graphql`
  {
    allMdx(
      filter: {frontmatter: {path: {ne: null}}},
      sort: { fields: frontmatter___date, order: DESC },
      limit: 5
      )
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
