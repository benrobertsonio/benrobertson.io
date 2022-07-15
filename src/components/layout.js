import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import '../fonts/SourceSansPro/source-sans-pro.css';

import Header from './header';
import { AnchorTag, heading } from '../theme/components';
import './layout.css';
import Footer from './footer';
import { MDXProvider } from '@mdx-js/react';

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
      <div style={{
        borderTop: '5px solid',
        borderBottom: '5px solid',
        borderColor: 'primary',
        paddingTop: '5em'
      }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>
          <MDXProvider
            components={{
              a: AnchorTag,
              h2: heading('h2'),
              h3: heading('h3'),
              h4: heading('h4'),
              h5: heading('h5'),
              h6: heading('h6'),
            }}>
            {children}
          </MDXProvider>
        </main>
        <Footer />
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
