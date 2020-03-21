import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      date(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => (
  <Layout>
    <h1>{props.data.contentfulBlogPost.title}</h1>
    <p>{props.data.contentfulBlogPost.date}</p>
  </Layout>
)

export default Blog
