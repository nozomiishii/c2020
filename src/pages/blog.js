import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import blogStyles from "../styles/pages/blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            title
            slug
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>blog page</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li key={edge.id} className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h3>{edge.node.title}</h3>
                <p>{edge.node.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
