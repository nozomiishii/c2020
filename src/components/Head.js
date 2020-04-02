import React from "react";
import { Helmet } from "react-helmet-async";
// import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

const Head = ({ title }) => {
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
  // console.log(data.file.childImageSharp.fluid.s rc);
  return (
    <Helmet
      title={`${title} | ${data.site.siteMetadata.auther}`}
      // meta={[
      //   {
      //     name: "description",
      //     content: data.site.siteMetadata.description,
      //   },
      //   {
      //     property: "og:type",
      //     content: "website",
      //   },
      //   { name: "twitter:card", content: "summary_large_image" },
      //   { name: "twitter:site", content: "@nozomiishii_jp" },
      //   {
      //     property: "og:image",
      //     content: `https://www.nozomiishii.jp/${data.file.childImageSharp.fluid.src}`,
      //   },
      //   { property: "og:title", content: "NOZOMI ISHII" },
      //   { property: "og:description", content: "webpage for 2020" },
      //   { property: "og:url", content: "https://www.nozomiishii.jp/" },
      // ]}
    >
      <meta name="twitter:site" content="@nozomiishii_jp" />
      <meta name="twitter:title" content="nozomiishii.jp" />
      <meta
        name="twitter:description"
        content={data.site.siteMetadata.description}
      />
      <meta
        name="twitter:image"
        content={`https://www.nozomiishii.jp/${data.file.childImageSharp.fluid.src}`}
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

// Head.defaultProps = {
//   lang: "en",
//   meta: [],
//   description: "",
// };

// Head.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.arrayOf(PropTypes.object),
//   title: PropTypes.string.isRequired,
// };

export default Head;
