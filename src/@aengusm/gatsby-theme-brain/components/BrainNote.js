import React from "react";
/** @jsx jsx */
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import Layout from "../../../components/layout";
import { Container, Heading, Text, jsx, Box } from "theme-ui";
import SEO from "../../../components/seo";
import Portal from '@reach/portal';
import Anchor from "../../../components/anchor";

const BrainNote = ({ note, linkedNotes }) => {
  let references = [];
  let referenceBlock;

  console.log(note)

  if (note.inboundReferenceNotes != null) {
    references = note.inboundReferences.map((ref, i) => {
      const reference = linkedNotes.find((note) => note.slug === ref);
      return (
        <li key={i}>
          <Box mb="3">
            <Heading as="h3">
              <Anchor
                to={`/notes/${reference.slug}`}
                key={`${ref}-${reference.slug}`}
              >
                {reference.title}
              </Anchor>
            </Heading>
            <Text>{reference.childMdx.excerpt}</Text>
          </Box>
        </li>
      );
    });

    references = note.inboundReferenceNotes.map((ref) => (
      <li>
        <Text mb="1">
          <Anchor to={`/notes/${ref.slug}`}>{ref.title}</Anchor>
        </Text>
        <Text mb="3">{ref.childMdx.excerpt}</Text>
      </li>
    ));

    if (references.length > 0) {
      referenceBlock = (
        <Box mt={6}>
          <Heading mb={3}>References to this note</Heading>
          <ul>{references}</ul>
        </Box>
      );
    }
  }

  return (
    <Layout>
      <SEO title={`Notes on ${note.title}`} />
      <Container variant="narrow">
        <Text sx={{ fontSize: 1, fontStyle: 'italic', my: 4 }}>
          These <Anchor to="/notes">notes</Anchor> are unpolished collections of thoughts, unfinished ideas, and things I want to remember later. In the spirit of learning in public, I'm sharing them here. Have fun exploring, if you want!
        </Text>

        <div id="brainNote">
          <Heading as="h1" mb={3} sx={{ textTransform: 'capitalize' }}>{note.title}</Heading>
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
                    boxShadow: '0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05)'
                  }}
                  id={`notes/${ln.slug}`}
                >
                  <Heading as="h4">{ln.title}</Heading>
                  <Text sx={{ fontSize: '0' }}>{ln.childMdx.excerpt}</Text>
                </div>
              </Portal>
            ))}
      </Container>
    </Layout>
  );
};

export default BrainNote;