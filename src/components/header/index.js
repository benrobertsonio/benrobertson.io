import { Link, StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';
import styles from './header.module.css';

const Header = ({ siteTitle }) => (
  <header className={styles.siteHeader}>
    <div className={styles.wrap}>
      <div className={styles.siteId} role="banner">
        <Link className={styles.siteId__link} to="/" rel="home">
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
            render={data => <Img className={styles.siteId__logo} fixed={data.placeholderImage.childImageSharp.fixed} alt="Ben Robertson" />}
          />
          <div className={styles.siteId__name}>
            <span className={styles.siteId__namePart}>Ben</span>
            <span className={styles.siteId__namePart}>Robertson</span>
          </div>
        </Link>
      </div>

      <nav id="nav-main" className={styles.navMain} role="navigation">
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/feed.xml">RSS</Link></li>
          <li><Link to="/blogroll">Blogroll</Link></li>
          <li><Link to="/courses/common-accessibility-mistakes/">Email Course</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
