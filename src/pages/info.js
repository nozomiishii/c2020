import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Layout, SEO } from "../components";

import styled from "styled-components";

const Li = styled.li`
  height: 20vh;
  margin: 1rem 0;
  a {
    background: #f4f4f4;
    color: #19181a;
    display: flex;
    padding: 1rem;
    text-decoration: none;
  }
  a:hover {
    background: #e4e4e4;
  }
  img {
    height: 10vh;
  }
  h3 {
    color: #231f22;
    margin-bottom: 0;
  }
  p {
    color: #231f22;
    font-size: 0.8rem;
    font-style: italic;
  }
`;

const Ul = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Constent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

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
  // console.log(data.allContentfulBlogPost.edges[0].node.media.fluid.src);
  return (
    <Layout title="Information">
      <SEO title="INFO" />
      <p>お知らせ</p>
      <Ul>
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <Li key={edge.node.id}>
              <Link to={`/blog/${edge.node.slug}`}>
                <img
                  src={edge.node.media.fluid.src}
                  alt={edge.node.title}
                  className="pr-3"
                />
                <Constent>
                  <h3>{edge.node.title}</h3>
                  <p>{edge.node.publishedDate}</p>
                </Constent>
              </Link>
            </Li>
          );
        })}
      </Ul>
    </Layout>
  );
};

export default BlogPage;
