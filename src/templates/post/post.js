import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../../components/layout';
import TableOfContents from '../../components/table-of-contents';
import PostMeta from './post-meta';
import SEO from '../../components/seo';
import SimpleSubscribe from '../../components/subscribe/simple';
import Likes from '../../components/webmentions/likes';



const Post = ({ data: { mdx } }) => {
  const { frontmatter, body, tableOfContents, timeToRead } = mdx;

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        desc={frontmatter.snippet}
        pathname={frontmatter.path}
        article={true}
        node={{
          first_publication_date: frontmatter.date,
          last_publication_date: frontmatter.updated ? frontmatter.updated : frontmatter.date
        }}
      />
      <div>
        <article
          className="post h-entry"
          itemScope
          itemType="http://schema.org/BlogPosting"
        >

          <header className="post-header">
            <h1 sx={{ color: 'headings', fontSize: [6, 6, 7, 8], lineHeight: 'heading', maxWidth: '748px' }} className="post-title p-name" itemProp="name headline">{frontmatter.title}</h1>
          </header>

          <div>
            <PostMeta
              date={frontmatter.date}
              author={frontmatter.author}
              permalink={frontmatter.path}
              ttr={timeToRead}
            />



            <div>

              {tableOfContents?.items &&
                <TableOfContents items={tableOfContents.items} />
              }



              <div className="post-content e-content" itemProp="articleBody">
                <MDXRenderer>{body}</MDXRenderer>
              </div>
              {frontmatter.canonical && (
                <>
                  <p className="post-canonical">The post <b>{frontmatter.title}</b> originally appeared on <a href={frontmatter.canonical}>{frontmatter.canonical.replace(/https:\/\/|http:\/\/|[/]/g, ' ').split(' ')[1]}</a >.</p>
                  <br />
                </>)
              }

              <br />

              {/* <Likes mentions={webmentions.nodes} /> */}

              <br />
              <p style={{ marginBottom: '5rem' }}><em>Have any comments or questions about this post? Send them to me via email <a href="mailto:ben@robertson.is">ben@robertson.is</a> or on Twitter <a href="https://twitter.com/benrobertsonio">@benrobertsonio</a>.</em></p>
            </div>
          </div>
        </article>
        <div>
          <h2 style={{ marginBottom: '3rem' }}>
            {frontmatter.formTitle
              ? frontmatter.formTitle
              : (<span>Free Email Course:<br /> Common Accessibility Mistakes and How to Fix Them</span>)}</h2>
          <p>
            {frontmatter.formContent ? frontmatter.formContent : <span>A month long course to help you simplify web accessibility!</span>}
          </p>
          <SimpleSubscribe group={frontmatter.interestGroup} />
        </div>
      </div>
    </Layout >
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
        date(formatString: "MMMM DD, YYYY")
        categories
        snippet
        path
        canonical
        updated(formatString: "MMMM DD, YYYY")
        listId
        interestGroup
        formTitle
        formContent
        formCTA
      }
    }
    # webmentions: allWebMentionEntry(filter: {wmTarget: {eq: $url}}) {
    #   nodes {
    #     likeOf
    #     url
    #     id
    #     bookmarkOf
    #     wmTarget
    #     wmSource
    #     type
    #     author {
    #       name
    #       url
    #     }
    #     inReplyTo
    #     content {
    #       text
    #     }
    #     mentionOf
    #   }
    # }
  }
`
  ;
