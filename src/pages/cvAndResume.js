import React from "react";
import { Layout, SEO } from "../components";
import { useStaticQuery, graphql } from "gatsby";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Img from "gatsby-image";
import styled from "styled-components";

const CustomImg = styled(Img)`
  width: 100%;
  height: 100%;
`;

const CvAndResume = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { relativeDirectory: { eq: "images" } }) {
        nodes {
          id
          name
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  const images = data.images.nodes;
  const cvImg = images.find(({ name }) => name === "cv");
  const resumeImg = images.find(({ name }) => name === "resume");

  // console.log
  // const images = data.images.nodes;
  return (
    <Layout title="CV and Resume">
      <SEO title="CV and Resume" />
      <Row>
        <Col md={6}>
          <CustomImg fluid={resumeImg.childImageSharp.fluid} />
        </Col>
        <Col md={6}>
          <CustomImg fluid={cvImg.childImageSharp.fluid} />
        </Col>
      </Row>
    </Layout>
  );
};

export default CvAndResume;
