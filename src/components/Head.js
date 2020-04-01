import React from "react";
import { Helmet } from "react-helmet-async";
import { useStaticQuery, graphql } from "gatsby";

const Head = ({ title = "welcome!" }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          auther
        }
      }
      file(relativePath: { eq: "images/metaData/c2020.png" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `);
  // console.log(data.file.childImageSharp.fluid.s rc);
  return (
    <Helmet
      title={`${title} | ${data.site.siteMetadata.auther}`}
      meta={[
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@nozomiishii_jp" },
        { property: "og:image", content: data.file.childImageSharp.fluid.src },
        { property: "og:title", content: "NOZOMI ISHII" },
        { property: "og:description", content: "webpage for 2020" },
        { property: "og:url", content: "https://www.nozomiishii.jp/" },
      ]}
    />
  );
};

export default Head;
