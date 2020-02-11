import { Link, StaticQuery, graphql } from 'gatsby';
/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';
import Container from '../container';
import Nav from '../nav';

const menu = [
  {
    to: '/about',
    title: 'About'
  },
  {
    to: '/blog',
    title: 'Blog'
  },
  {
    to: '/feed.xml',
    title: 'RSS'
  },
  {
    to: '/courses/common-accessibility-mistakes/',
    title: 'Email Course'
  },
];

const Header = () => (
  <Container Element="header" large>
    <div sx={{
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
      <div role="banner" sx={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <Link to="/" rel="home" sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          textDecoration: 'none',
          padding: '0.5em',
          background: 'none'
        }}>
          <StaticQuery
            query={graphql`
                query {
                  placeholderImage: file(relativePath: { eq: "ben.jpg" }) {
                    childImageSharp {
                      fixed(width: 110, height: 110) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                }
              `}
            render={data =>
              <Img
                fixed={data.placeholderImage.childImageSharp.fixed}
                alt="Ben Robertson"
                sx={{
                  height: '5rem',
                  width: '5rem',
                  marginRight: '1em',
                  borderRadius: '50%'
                }}
              />}
          />
          <div sx={{
            color: 'secondary',
            fontFamily: 'body',
            fontWeight: 'bold',
            fontSize: 5
          }}>
            <span sx={{
              display: 'block',
              transform: 'rotate(-3deg) translateY(-2px)',
              lineHeight: '1'

            }}>Ben</span>
            <span sx={{
              display: 'block',
              transform: 'rotate(-3deg) translateY(-2px)',
              lineHeight: '1'

            }}>Robertson</span>
          </div>
        </Link>
      </div>

      <Nav links={menu} />
    </div>
  </Container >
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
