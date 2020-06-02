import React from "react";
import { graphql } from "gatsby";
import BrainNote from "../components/BrainNote";

export default (props) => {
  return <BrainNote note={props.data.brainNote} linkedNotes={props.data.allBrainNote.nodes} />;
};

export const query = graphql`
  query BenBrainNoteBySlug($slug: String!, $references: [String]) {
    brainNote(slug: { eq: $slug }) {
      slug
      title
      inboundReferenceNotes {
        title
        slug
        childMdx {
          excerpt
        }
      }
      inboundReferencePreviews {
        source
        previewHtml
      }
      inboundReferences
      childMdx {
        body
      }
    }
    allBrainNote(filter: {slug: {in: $references}}) {
      nodes {
        slug
        title
        childMdx {
          excerpt
        }
      }
    }
  }
`;