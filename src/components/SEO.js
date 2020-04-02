import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ description, lang, meta, title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          auther
          title
          description
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
  const metaDescription = description || data.site.siteMetadata.description;
  // console.log(data.file.childImageSharp.fluid.s rc);
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={`${title} | ${data.site.siteMetadata.auther}`}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@nozomiishii_jp" },
        {
          property: "og:image",
          content: `https://www.nozomiishii.jp${data.file.childImageSharp.fluid.src}`,
        },
        { property: "og:title", content: "NOZOMI ISHII" },
        { property: "og:description", content: "webpage for 2020" },
        { property: "og:url", content: "https://www.nozomiishii.jp/" },
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  lang: "en",
  meta: [],
  description: "",
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
