import React from 'react';
/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import '../fonts/SourceSansPro/source-sans-pro.css';

import Header from './header';
import './layout.css';
import Footer from './footer';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div sx={{
        borderTop: '5px solid',
        borderBottom: '5px solid',
        borderColor: 'primary',
      }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
