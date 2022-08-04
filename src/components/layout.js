import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import '../fonts/ia-duospace/fonts.css';

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
      <>
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
      </>
    )}
  />
);




Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
