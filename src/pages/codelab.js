import React from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CodelabPage = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: { relativeDirectory: { eq: "images/kusayari" } }
      ) {
        nodes {
          id
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
  const displayCodeLab = () => {
    const images = data.images.nodes;
    return images.map((image) => (
      <Col xs={6} lg={3} key={image.id} className="my-4">
        <Img fluid={image.childImageSharp.fluid} />
      </Col>
    ));
  };
  return (
    <Layout>
      <Head title="CODE LAB" />
      <h1>Codelab</h1>

      <Row>{displayCodeLab()}</Row>
    </Layout>
  );
};

export default CodelabPage;
