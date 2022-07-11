import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Page = ({ children, pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.frontmatter.title} />
      <div>
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
      </div>
    </Layout>
  );
};

export default Page;
