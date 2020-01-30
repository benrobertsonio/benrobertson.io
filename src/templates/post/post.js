import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';

/**
 *
 * @param {*} param0
 */
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <div className="l-contain--center l-contain">
        <article className="post h-entry l-contain--small" itemScope itemType="http://schema.org/BlogPosting">

          <header className="post-header">
            <h1 className="post-title p-name" itemProp="name headline">{frontmatter.title}</h1>
          </header>

          <div className="post-content e-content" itemProp="articleBody">
            <p className="post-meta">
              <time className="dt-published" dateTime={frontmatter.date} itemProp="datePublished">{frontmatter.date}</time>
              <span itemProp="author" itemScope itemType="http://schema.org/Person"><span itemProp="name">{frontmatter.author}</span></span>
              • <a href={frontmatter.path} className="u-url">Permalink</a>
            </p>
            <div dangerouslySetInnerHTML={{ __html: html }} />
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
}

export const pageQuery = graphql`
  query($path: String!) {
        markdownRemark(frontmatter: {path: {eq: $path } }) {
        html
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
