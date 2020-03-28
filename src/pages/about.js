import React from "react";
import Layout from "../components/Layout";
import aboutStyles from "../styles/pages/about.module.scss";
import Head from "../components/Head";
import LinkToSNS from "../components/LinkToSNS";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
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

  // console.log(data);
  // console.log(data.images.nodes.find(({ name }) => name === "c2019"));
  const images = data.images.nodes;
  const c2019 = images.find(({ name }) => name === "c2019");
  const profile = images.find(({ name }) => name === "profile");

  return (
    <Layout>
      <h2>Nozomi Ishii who?</h2>
      <Row>
        <Col md={7}>
          <Head title="ABOUT" />
          <div className={aboutStyles.about}>
            <Row>
              <Col xs={5}>
                <Img fluid={profile.childImageSharp.fluid} />
                <LinkToSNS />
              </Col>
              <Col xs={7}>
                <h4>Nozomi Ishii</h4>
                <h4>いしいのぞみ</h4>
                <h6>Front-End web developer</h6>
                <h5 className="mt-5">Skill-set</h5>
                <p>
                  React, GraphQL, Gatsby.js, Contentful, JavaScript, HTML, CSS,
                  SCSS, Bootstrap4, p5.js, ml5.js, npm, yarn, Node.js, webpack4,
                  Babel, Express, MangoDB, Firebase, Jest, Enzyme, ESLint,
                  Visual Studio Code, iTerm2, Homebrew, GitHub, Heroku
                </p>
              </Col>
            </Row>
          </div>
          <div>
            <h4>Previous webpage</h4>
            <Row>
              <Col xs={6}>
                <a
                  href="http://www.nozomiishii.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img fluid={c2019.childImageSharp.fluid} />
                </a>
                <h5>2020</h5>
                <p>First time for creating my page using Ruby on Rails.</p>
              </Col>
            </Row>
          </div>
          {/* <div>
            <h4>Works</h4>
          </div> */}
        </Col>
        <Col md={5}>
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
