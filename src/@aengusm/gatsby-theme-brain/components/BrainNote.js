import React from "react";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Portal from '@reach/portal';
import { Link } from 'gatsby'

const BrainNote = ({ note, linkedNotes }) => {
  let references = [];
  let referenceBlock;

  if (note.inboundReferenceNotes != null) {
    references = references.concat(note.inboundReferenceNotes.map((ref) => (
      <p mb="4" key={ref.title}>
        <Link to={`/notes/${ref.slug}`}>{ref.title}</Link>
        <p>{ref.childMdx.excerpt}</p>
      </p>
    )));
  }

  if (note.inboundReferencePreviews != null) {
    references = references.concat(note.inboundReferencePreviews.map((ref) => (
      <article mb={4} as="article">
        <div dangerouslySetInnerHTML={{ __html: ref.previewHtml }} />
        <em>source:</em> <Link to={`/notes/${ref.source}`}> {ref.source}</Link>
      </article>
    )))
  }



  if (references.length > 0) {
    referenceBlock = (
      <div mt={6}>
        <h2 mb={3}>Linked references</h2>
        <div>{references}</div>
      </div>
    );
  }

  return (
    <Layout>
      <SEO title={`Notes on ${note.title}`} />
      <div variant="narrow">
        <p sx={{ fontSize: 1, fontStyle: 'italic', my: 4 }}>
          These <Link to="/notes">notes</Link> are unpolished collections of thoughts, unfinished ideas, and things I want to remember later. In the spirit of learning in public, I'm sharing them here. Have fun exploring, if you want!
        </p>

        <div id="brainNote">
          <MDXRenderer>{note.childMdx.body}</MDXRenderer>
          {referenceBlock}
        </div>
        {linkedNotes &&
          linkedNotes
            .filter(
              (ln) => !(note.inboundReferences || []).includes(ln.slug) && !!ln.childMdx.excerpt
            )
            .map((ln) => (
              <Portal key={ln.slug}>
                <div
                  sx={{
                    position: 'fixed',
                    width: 250,
                    backgroundColor: 'white',
                    p: 3,
                    divShadow: '0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05)'
                  }}
                  id={`notes/${ln.slug}`}
                >
                  <h4 as="h4">{ln.title}</h4>
                  <p sx={{ fontSize: '0' }}>{ln.childMdx.excerpt}</p>
                </div>
              </Portal>
            ))}
      </div>
    </Layout>
  );
};

export default BrainNote;