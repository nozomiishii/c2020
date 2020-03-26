import React from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import classes from "../styles/pages/codelab.module.scss";
import { codeLabData } from "../data/codelab";

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
  // console.log(data.images.nodes.map((node) => node.name).sort());
  // console.log(codeLabData.reverse());
  const codeLabTitle = codeLabData.reverse();
  const displayImages = () => {
    const source = data.images.nodes;
    const sortedSource = source.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
    // console.log(sortedSource);
    return sortedSource.map((image, index) => {
      return (
        <Col xs={6} lg={3} key={image.id} className="my-4">
          <a
            href={`https://nozomiishii.github.io/codeLab/${image.name}`}
            className={classes.card}
          >
            <Img fluid={image.childImageSharp.fluid} loading="lazy" />
          </a>
          <p>
            {image.name.toUpperCase()} / {codeLabTitle[index][1]}
          </p>
          <p>- {codeLabTitle[index][2]} -</p>
        </Col>
      );
    });
  };

  return (
    <Layout>
      <Container>
        <Head title="CODE LAB" />
        <h2>Codelab</h2>
        <Row>{displayImages()}</Row>
      </Container>
    </Layout>
  );
};

export default CodelabPage;
