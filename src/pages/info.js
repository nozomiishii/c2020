import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import classes from "../styles/pages/info.module.scss";
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
  console.log(data.allContentfulBlogPost.edges[0].node.media.fluid.src);
  return (
    <Layout>
      <Head title="INFO" />
      <h2>Information</h2>
      <p>お知らせ</p>
      <ol className={classes.posts}>
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <li key={edge.node.id} className={classes.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <img
                  src={edge.node.media.fluid.src}
                  alt={edge.node.title}
                  className="pr-3"
                />
                <div className={classes.content}>
                  <h3>{edge.node.title}</h3>
                  <p>{edge.node.publishedDate}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogPage;
