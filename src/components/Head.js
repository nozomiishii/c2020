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
    }
  `);
  return (
    <Helmet
      title={`${title} | ${data.site.siteMetadata.auther}`}
      meta={[
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:image", content: "path/to/og_image" },
        { property: "og:title", content: "NOZOMI ISHII" },
        { property: "og:description", content: "webpage for 2020" },
        // { property: 'og:url', content: `hoge_domain${props.path}` }
      ]}
    />
  );
};

export default Head;
