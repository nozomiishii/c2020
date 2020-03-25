import React from "react";
import Layout from "../components/Layout";
import aboutStyles from "../styles/pages/about.module.scss";
import Head from "../components/Head";
import LinkToSNS from "../components/LinkToSNS";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { relativeDirectory: { eq: "images/about" } }) {
        nodes {
          id
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);
  console.log(data);
  console.log(data.images.nodes);
  return (
    <Layout>
      <Head title="ABOUT" />
      <div className={aboutStyles.about}>
        <h2>Who's Nozomi Ishii?</h2>
        {/* <Img /> */}
        <LinkToSNS />
      </div>
      <div>privious webpage</div>
      <div>works</div>
    </Layout>
  );
};

export default AboutPage;
