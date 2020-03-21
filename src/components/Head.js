import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title = "welcome!" }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          auther
        }
      }
    }
  `)
  return <Helmet title={`${title} | ${data.site.siteMetadata.auther}`} />
}

export default Head
