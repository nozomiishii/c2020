import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { useStaticQuery, graphql, Link } from "gatsby";
import classes from "../styles/pages/notes.module.scss";

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
  // const sortedNoteSrc = notesSrc.sort(
  //   (a, b) => a.node.frontmatter.title - b.node.frontmatter.title
  // );
  // console.log(sortedNoteSrc);
  const notes = notesSrc.map((edge) => {
    // console.log(edge.node.id);
    console.log(edge.node.frontmatter.title);
    return (
      <div key={edge.node.id}>
        <Link to={`/notes/${edge.node.fields.slug}`}>
          {edge.node.frontmatter.title}
        </Link>
      </div>
    );
  });
  return (
    <Layout>
      <SEO title="NOTES" />
      <div className={classes.title}>
        <h2>Notes</h2>
      </div>
      <div>
        <p>いいなあっておもった記事の倉庫</p>
      </div>
      <div className={classes.container}>{notes}</div>
    </Layout>
  );
};

export default Notes;
