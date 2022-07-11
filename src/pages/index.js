import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data: { allMdx, accessibility } }) => (
  <Layout>
    <SEO
      title="Home"
      desc="I'm Ben Robertson, Director of Customer Success at Gatsby who
    writes about front end development and web accessibility."
    />
    <div>
      <h1>
        Hi, I'm Ben Robertson.
      </h1>
      <p>
        <span aria-label="Tools" role="img">🛠 </span>
        I'm Director of Customer Success at{' '}
        <a href="https://www.gatsbyjs.com">Gatsby</a>.
      </p>
      <p>
        <span role="img" aria-label="Writing hand">✍️ </span>
        I write about{' '}
        <Link to="/blog">front end development</Link>
        {' '}and{' '}
        <Link to="/accessibility">web accessibility</Link>.
      </p>
    </div>

    <div>
      <h2>Front End Development</h2>
      <h2>Remote Work</h2>
      <h2>Accessibility</h2>
      <ul>
        {accessibility?.nodes[0].inboundReferenceNotes.map((content) => {
          return <li><Link to={`/notes/${content.slug}`}>{content.title}</Link></li>
        })}
      </ul>
      {console.log(accessibility.nodes[0].inboundReferenceNotes)}

    </div>

    <div>
      <div style={{ maxWidth: '70ch' }}>
        <section>
          <header>
            <h2>Recent Writing</h2>
            <hr />
          </header>
          <ul sx={{ m: 0, p: 0, mt: 4 }}>
            {allMdx.nodes.map(({ frontmatter }) => (
              <li sx={{ listStyle: 'none', mb: 3 }} key={frontmatter.title}>
                <article key={frontmatter.title}>
                  <h3 as="h3">
                    <Link
                      to={frontmatter.path}
                    >
                      {frontmatter.title}
                    </Link>
                  </h3>
                  <p sx={{ mt: 2 }}>{frontmatter.snippet}</p>
                </article>
              </li>
            ))}
          </ul>
          <Link to="/blog">More Blog Posts →</Link>
        </section>
      </div>

    </div>
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
    accessibility:  allBrainNote(filter: {slug: {eq: "accessibility"}}) {
    nodes {
      title
      slug
      noteTemplate
      inboundReferenceNotes {
        title
        slug
      }
    }
  }
  }
`;
