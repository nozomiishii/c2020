import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import SEO from "../components/SEO";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

const Note = (props) => {
  return (
    <Layout>
      <SEO title={props.data.markdownRemark.frontmatter.title} />
      <div style={{ marginBottom: "2rem" }}>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
    </Layout>
  );
};

export default Note;
