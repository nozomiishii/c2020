import React from "react";
import Layout from "../components/Layout";
import classes from "../styles/pages/about.module.scss";
import SEO from "../components/SEO";
import PageLinks from "../components/PageLinks";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import sns from "../data/sns";

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

  // console.log(sns);
  // console.log(data);
  // console.log(data.images.nodes.find(({ name }) => name === "c2019"));
  const images = data.images.nodes;
  const c2019 = images.find(({ name }) => name === "c2019");
  const profile = images.find(({ name }) => name === "profile");

  return (
    <Layout title="Nozomi Ishii who?">
      <Row>
        <Col md={8}>
          <SEO title="ABOUT" />
          <div className={classes.about}>
            <Row>
              <Col xs={5}>
                <Img fluid={profile.childImageSharp.fluid} />
              </Col>
              <Col xs={7}>
                <h4>Nozomi Ishii</h4>
                <h4>いしいのぞみ</h4>
                <h6>Front-End web developer</h6>
              </Col>
            </Row>
            <div className={classes.links}>
              <PageLinks data={sns} />
            </div>
            <h5 className="mt-5">Skill-set</h5>
            <p>
              React, GraphQL, Gatsby.js, Contentful, JavaScript, HTML, CSS,
              SCSS, Bootstrap4, p5.js, ml5.js, npm, yarn, Node.js, webpack4,
              Babel, Express, MangoDB, Firebase, Jest, Enzyme, ESLint, Visual
              Studio Code, iTerm2, Homebrew, GitHub, Heroku
            </p>
          </div>
          <div>
            <h4>Previous webpage</h4>
            <Row>
              <Col xs={6}>
                <a
                  href="https://nozomiishii.herokuapp.com/"
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
