import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { codeLabData } from "../data/codelab";
import styled, { keyframes } from "styled-components";

const floating = keyframes`
  0% {
    transform: translate(-10px, -10px);
  }
  100% {
    transform: translate(10px, 10px);
  }
`;

const Cards = styled(Row)`
  animation: ${floating} 6s infinite alternate linear;
`;

const Card = styled(Col)`
  display: inline-block;
  transition-duration: 1s;
  width: 100%;
  &:hover {
    transform: translateY(-20px);
  }
  a {
    text-decoration: none;
  }
  div {
    padding-top: 1rem;
  }
`;

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
            fluid(maxWidth: 800) {
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
        <Card xs={6} lg={3} key={image.id} className="my-4">
          <a href={`https://nozomiishii.github.io/codeLab/${image.name}`}>
            {/* default width is maxWidth: 800 for now */}
            <Img fluid={image.childImageSharp.fluid} />
            <div>
              <p>
                {image.name.toUpperCase()} / {codeLabTitle[index][1]}
              </p>
              <p>- {codeLabTitle[index][2]} -</p>
            </div>
          </a>
        </Card>
      );
    });
  };

  return (
    <Layout title="Codelab">
      <SEO title="CODE LAB" />
      <p>100 days of creating code since 20th Oct 2019.</p>
      <p>2019年10月20日から毎日100日間つくった作品</p>
      <Cards>{displayImages()}</Cards>
    </Layout>
  );
};

export default CodelabPage;
