import React from 'react';
/** @jsx jsx */
import { jsx, Container, Link, Box, Heading, Text } from 'theme-ui';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../../components/layout';
import TableOfContents from '../../components/table-of-contents';
import PostMeta from './post-meta';
import SEO from '../../components/seo';
import SimpleSubscribe from '../../components/simple-subscribe';



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
                <p className="post-canonical">The post <b>{frontmatter.title}</b> originally appeared on <Link href={frontmatter.canonical}>{frontmatter.canonical.replace(/https:\/\/|http:\/\/|[/]/g, ' ').split(' ')[1]}</Link >.</p>
                <br />
              </>)
            }

            <br />
            <p><em>Have any comments or questions about this post? Send them to me via email <Link href="mailto:hi@benrobertson.io">hi@benrobertson.io</Link> or on Twitter <Link href="https://twitter.com/benrobertsonio">@benrobertsonio</Link>.</em></p>
          </div>
        </article>
        <Box p="5" my="5" sx={{ bg: '#efefef', border: '5px solid', borderColor: 'primary', maxWidth: "748px" }}>
          <Heading mb="3">
            {frontmatter.formTitle
              ? frontmatter.formTitle
              : (<span>Free Email Course:<br /> Common Accessibility Mistakes and How to Fix Them</span>)}</Heading>
          <Text mb="3">
            {frontmatter.formContent ? frontmatter.formContent : <span>A month long course to help you simplify web accessibility!</span>}
          </Text>
          <SimpleSubscribe listId={frontmatter.listId} group={frontmatter.interestGroup} />
        </Box>
      </Container>
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
}
`
  ;
