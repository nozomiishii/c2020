import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import blogStyles from "../styles/pages/blog.module.scss";
import Head from "../components/Head";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            id
            media {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `);
  // console.log(data.allContentfulBlogPost.edges.node.media.src);
  return (
    <Layout>
      <Head title="INFO" />
      <h2>Information</h2>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <li key={edge.node.id} className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h3>{edge.node.title}</h3>
                <p>{edge.node.date}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogPage;
