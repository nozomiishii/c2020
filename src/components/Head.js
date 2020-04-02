import React from "react";
import { Helmet } from "react-helmet-async";
// import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import imgUrl from "../../static/c2020.png";

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
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@nozomiishii_jp" />
      <meta property="og:title" content="nozomiishii.jp" />
      <meta
        property="og:description"
        content={data.site.siteMetadata.description}
      />
      <meta
        property="og:image"
        content={`https://www.nozomiishii.jp${imgUrl}`}
      />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:type" content="website" />
      <meta name="description" content={data.site.siteMetadata.description} />
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
