/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../../components/layout';
import TableOfContents from '../../components/table-of-contents';
import PostMeta from './post-meta';


const Post = ({ data: { mdx } }) => {
  const { frontmatter, body, tableOfContents, timeToRead } = mdx;
  return (
    <Layout>
      <div className="l-contain--center l-contain">
        <article className="post h-entry l-contain--small" itemScope itemType="http://schema.org/BlogPosting">

          <header className="post-header">
            <h1 sx={{ color: 'headings', fontSize: [6, 6, 7, 8], lineHeight: 'heading' }} className="post-title p-name" itemProp="name headline">{frontmatter.title}</h1>
          </header>

          <div className="post-content e-content" itemProp="articleBody">
            <PostMeta
              date={frontmatter.date}
              author={frontmatter.author}
              permalink={frontmatter.path}
              ttr={timeToRead}
            />

            {tableOfContents?.items &&
              <TableOfContents items={tableOfContents.items} />

            }
            <MDXRenderer>{body}</MDXRenderer>
            {frontmatter.canonical && (
              <>
                <p className="post-canonical">The post <b>{frontmatter.title}</b> originally appeared on <a className="post-canonical__url" href={frontmatter.canonical}>{frontmatter.canonical}</a>.</p>
                <br />
              </>)
            }

            <br />
            <p><em>Have any comments or questions about this post? Send them to me via email <a href="mailto:hi@benrobertson.io">hi@benrobertson.io</a> or on Twitter <a href="https://twitter.com/Banquos_Ghost">@banquos_ghost</a>.</em></p>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default Post;

export const pageQuery = graphql`
  query($path: String!) {
        mdx(frontmatter: {path: {eq: $path } }) {
        body
        tableOfContents(maxDepth: 2)
        timeToRead
      frontmatter {
        title
        layout
        author
        date
        categories
        snippet
        path
        canonical
        updated
        listId
        interestGroup
        formTitle
        formContent
        formCTA
}
}
}
`
  ;
