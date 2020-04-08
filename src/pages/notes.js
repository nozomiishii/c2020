import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { useStaticQuery, graphql } from "gatsby";

const Notes = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            html
            timeToRead
            excerpt
            id
          }
        }
      }
    }
  `);

  const notesSrc = data.allMarkdownRemark.edges;
  const notes = notesSrc.map((edge) => {
    // console.log(edge.node.id);
    return <div key={edge.node.id}>{edge.node.frontmatter.title}</div>;
  });
  return (
    <Layout>
      <SEO title="NOTES" />
      <h2>notes</h2>
      {notes}
    </Layout>
  );
};

export default Notes;
