import React from "react";
import { Layout, SEO } from "../components";
import { useStaticQuery, graphql } from "gatsby";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Img from "gatsby-image";
// import styled from "styled-components";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const CustomImg = styled(Img)`
//   height: 100%;
//   width: 100%;
//   max-width: 960px;
//   margin-bottom: 5vh;
// `;

const CvAndResume = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { relativeDirectory: { eq: "images" } }) {
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

  const images = data.images.nodes;
  const cvImg = images.find(({ name }) => name === "cv");
  const resumeImg = images.find(({ name }) => name === "resume");

  // console.log
  // const images = data.images.nodes;
  return (
    <Layout title="CV and Resume">
      <SEO title="CV and Resume" />
      <Row>
        <Col sx={12}>
          <h1>Resume</h1>
          <Img fluid={resumeImg.childImageSharp.fluid} />
        </Col>
        <Col sx={12}>
          <h1>CV</h1>
          <Img fluid={cvImg.childImageSharp.fluid} />
        </Col>
      </Row>
    </Layout>
  );
};

export default CvAndResume;
