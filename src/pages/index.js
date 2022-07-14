import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data: { accessibilityNotes, accessibilityPosts, remotePosts, frontendNotes, frontendPosts } }) => (
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
      <p>I’m a proactive, kind, and collaborative customer success leader who loves working at the intersection of open source, web publishing and developer tooling.</p>
      <p>I currently lead the customer success team at <a href="https://www.gatsbyjs.com">Gatsby</a>, where we provide technical support and consulting for teams looking to build fast frontends for their headless web projects.</p>
      <p>Read more <Link to="/about">about me here</Link>.</p>
    </div>

    <section>
      <h2>Writing</h2>
      <h3>Accessibility</h3>
      <ul>
        {accessibilityPosts?.nodes.map(({ frontmatter }) => {
          if (!frontmatter.path) return null
          return <li key={frontmatter.path}><Link to={frontmatter.path}>{frontmatter.title}</Link></li>
        })}
        {accessibilityNotes?.nodes[0].inboundReferenceNotes.map((content) => {
          return <li key={content.slug}><Link to={`/notes/${content.slug}`}>{content.title}</Link></li>
        })}

      </ul>

      <p>I also have a 10 day free email course about accessibility that you can join <Link to="/courses/common-accessibility-mistakes/">here</Link>.</p>

      <h3>Remote Work</h3>
      <ul>
        {remotePosts?.nodes.map(({ frontmatter }) => {
          if (!frontmatter.path) return null
          return <li key={frontmatter.path}><Link to={frontmatter.path}>{frontmatter.title}</Link></li>
        })}
        {/* {accessibilityNotes?.nodes[0].inboundReferenceNotes.map((content) => {
        return <li key={content.slug}><Link to={`/notes/${content.slug}`}>{content.title}</Link></li>
      })} */}
      </ul>
      <h3>Front End Development</h3>
      <ul>
        {frontendPosts?.nodes.map(({ frontmatter }) => {
          if (!frontmatter.path) return null
          return <li key={frontmatter.path}><Link to={frontmatter.path}>{frontmatter.title}</Link></li>
        })}
        {frontendNotes?.nodes[0].inboundReferenceNotes.map((content) => {
          return <li key={content.slug}><Link to={`/notes/${content.slug}`}>{content.title}</Link></li>
        })}
      </ul>




    </section>
  </Layout >
);

IndexPage.propTypes = {
  data: PropTypes.object
};

export default IndexPage;

export const indexQuery = graphql`
  {
    # allMdx(
    #   filter: {frontmatter: {path: {ne: null}}},
    #   sort: { fields: frontmatter___date, order: DESC },
    #   limit: 5
    #   )
    # {
    #   nodes {
    #     timeToRead
    #     frontmatter {
    #       title
    #       path
    #       date(formatString: "MMMM DD, YYYY")
    #       snippet
    #     }
    #   }
    # }
    accessibilityNotes:  allBrainNote(filter: {slug: {eq: "accessibility"}}) {
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
    accessibilityPosts: allMdx(filter: {frontmatter: {categories: {in: "accessibility"}}}) {
      nodes {
        frontmatter {
          title
          path
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
    # remoteNotes:  allBrainNote(filter: {slug: {eq: ""}}) {
    #   nodes {
    #     title
    #     slug
    #     noteTemplate
    #     inboundReferenceNotes {
    #       title
    #       slug
    #     }
    #   }
    # }
    remotePosts: allMdx(filter: {frontmatter: {categories: {in: "remote"}}}) {
      nodes {
        frontmatter {
          title
          path
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
    frontendNotes:  allBrainNote(filter: {slug: {eq: "front-end"}}) {
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
    frontendPosts: allMdx(filter: {frontmatter: {categories: {in: "frontend"}}}) {
      nodes {
        frontmatter {
          title
          path
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`;
