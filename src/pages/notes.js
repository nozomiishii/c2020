import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { useStaticQuery, graphql, Link } from "gatsby";

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
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const notesSrc = data.allMarkdownRemark.edges;
  const notes = notesSrc.map((edge) => {
    // console.log(edge.node.id);
    return (
      <div key={edge.node.id}>
        <Link to={`notes/${edge.node.fields.slug}`}>
          {edge.node.frontmatter.title}
        </Link>
      </div>
    );
  });
  return (
    <Layout>
      <SEO title="NOTES" />
      <h2>notes</h2>
      <p>いいなっておもった記事の倉庫</p>
      <p>そのうち、ちゃんと見やすく整理します...</p>
      {notes}
    </Layout>
  );
};

export default Notes;
