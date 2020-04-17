import React from "react";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import Layout from "../../../components/layout";
import { Container, Heading, Text } from "theme-ui";
import { Link } from "gatsby";

const BrainNote = ({ note }) => {
  let references = [];
  let referenceBlock;
  if (note.inboundReferences != null) {
    references = note.inboundReferences.map((ref) => (
      <li>
        <Link to={`/notes/${ref}`}>{ref}</Link>
      </li>
    ));

    if (references.length > 0) {
      referenceBlock = (
        <>
          <Heading>Linked References</Heading>
          <ul>{references}</ul>
        </>
      );
    }
  }
  return (
    <Layout>
      <Container variant="narrow">
        <Text sx={{ fontSize: 1, fontStyle: 'italic', my: 4 }}>
          These <Link to="/notes">notes</Link> are unpolished collections of thoughts, unfinished ideas, and things I want to remember later. In the spirit of learning in public, I'm sharing them here. Have fun exploring, if you want!
        </Text>

        <div id="brainNote">
          <MDXRenderer>{note.childMdx.body}</MDXRenderer>
          {referenceBlock}
        </div>
      </Container>
    </Layout>
  );
};

export default BrainNote;