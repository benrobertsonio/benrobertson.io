import { Link, StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import Nav from '../nav';

const menu = [
  {
    to: '/about',
    title: 'About'
  },
  {
    to: '/writing',
    title: 'Writing'
  },
];

const Header = () => (
  <header class="site-header">
    <div role="banner" class="site-logo">
      <Link to="/" rel="home" class="site-logo__link">
        <StaticQuery
          query={graphql`{
                placeholderImage: file(relativePath: {eq: "profile.jpg"}) {
                  childImageSharp {
                    gatsbyImageData(width: 110, height: 110, layout: FIXED)
                  }
                }
              }
            `}
          render={data =>
            <GatsbyImage
              image={data.placeholderImage.childImageSharp.gatsbyImageData}
              alt="Ben Robertson"
              style={{
                height: '5rem',
                width: '5rem',
                marginRight: '1em',
                borderRadius: '50%',
                '-webkitMaskImage': '-webkit-radial-gradient(white, black)'
              }} />}
        />
        <div>
          Ben Robertson
        </div>
      </Link>
    </div>

    <Nav links={menu} />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
