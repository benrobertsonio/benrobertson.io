/** @jsx jsx */
import { jsx, Container, Link } from 'theme-ui';
import React from 'react';
import Layout from '../components/layout';



const Page = ({ children, pageContext }) => {
  return (
    <Layout>
      <Container>
        <article
          sx={{
            maxWidth: '748px'
          }}
          className="post h-entry"
          itemScope
          itemType="http://schema.org/BlogPosting"
        >

          <header className="post-header">
            <h1 sx={{ color: 'headings', fontSize: [6, 6, 7, 8], lineHeight: 'heading' }} className="post-title p-name" itemProp="name headline">{pageContext.frontmatter.title}</h1>
          </header>

          <div className="post-content e-content" itemProp="articleBody">
            {children}
          </div>
        </article>
      </Container>
    </Layout>
  );
};

export default Page;
