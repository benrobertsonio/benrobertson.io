import React from "react";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import Layout from "../../../components/layout";
import { Container, Heading, Text } from "theme-ui";
import SEO from "../../../components/seo";
import Anchor from "../../../components/anchor";

const BrainNote = ({ note }) => {
  let references = [];
  let referenceBlock;
  if (note.inboundReferences != null) {
    references = note.inboundReferences.map((ref) => (
      <li>
        <Anchor to={`/notes/${ref}`}>{ref}</Anchor>
      </li>
    ));

    if (references.length > 0) {
      referenceBlock = (
        <>
          <Heading sx={{ textTransform: 'capitalize' }}>{note.title}: References</Heading>
          <ul>{references}</ul>
        </>
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
          <Heading as="h1">{note.title}</Heading>
          <MDXRenderer>{note.childMdx.body}</MDXRenderer>
          {referenceBlock}
        </div>
      </Container>
    </Layout>
  );
};

export default BrainNote;