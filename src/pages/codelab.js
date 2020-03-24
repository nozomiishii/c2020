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
  console.log(data.images.nodes.map((node) => node.name).sort());

  const displayImages = () => {
    const source = data.images.nodes;
    const sortedSource = source.sort((a, b) => {
      console.log("a.name", a.name);
      console.log("b.name", b.name);
      // a.name - b.name;
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
    });
    console.log(sortedSource);
    return sortedSource.map((image) => (
      <Col xs={6} lg={3} key={image.id} className="my-4">
        <Img fluid={image.childImageSharp.fluid} />
      </Col>
    ));
  };
  // // const displayCodeLab = () => {
  // //   const source = data.images.nodes;

  //   return images.map((image) => (
  //     <Col xs={6} lg={3} key={image.id} className="my-4">
  //       <Img fluid={image.childImageSharp.fluid} />
  //     </Col>
  //   ));
  // };
  return (
    <Layout>
      <Head title="CODE LAB" />
      <h1>Codelab</h1>

      <Row>{displayImages()}</Row>
    </Layout>
  );
};

export default CodelabPage;
