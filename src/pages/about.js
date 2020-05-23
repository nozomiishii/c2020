import React from "react";
import { Layout, Profile } from "../components";
import { useStaticQuery, graphql } from "gatsby";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TwitterTimelineEmbed } from "react-twitter-embed";

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

  const images = data.images.nodes;
  const c2019Img = images.find(({ name }) => name === "c2019");
  const profileImg = images.find(({ name }) => name === "profile");

  return (
    <Layout title="Nozomi Ishii who?">
      <Row>
        <Col md={8}>
          <Profile c2019Img={c2019Img} profileImg={profileImg} />
        </Col>
        <Col md={4}>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="nozomiishii_jp"
            options={{ height: "80vh" }}
          />
        </Col>
      </Row>
    </Layout>
  );
};

export default AboutPage;
