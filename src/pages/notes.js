import React from "react";
import { Layout, SEO } from "../components";
import { useStaticQuery, graphql, Link } from "gatsby";

import styled from "styled-components";
const Container = styled.div`
  padding: 1rem 0;
  div {
    padding: 1rem 0;
  }
  a {
    display: block;
    background: #f4f4f4;
    color: #19181a;
    padding: 1rem;
    text-decoration: none;
  }
  a:hover {
    background: #e4e4e4;
  }
`;

const Notes = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___title, order: ASC }) {
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
    return (
      <div key={edge.node.id}>
        <Link to={`/notes/${edge.node.fields.slug}`}>
          {edge.node.frontmatter.title}
        </Link>
      </div>
    );
  });
  return (
    <Layout title="Notes">
      <SEO title="NOTES" />
      <div>
        <p>いいなあっておもった記事の倉庫</p>
      </div>
      <Container>{notes}</Container>
    </Layout>
  );
};

export default Notes;
