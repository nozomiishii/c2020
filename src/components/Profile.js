import React from "react";
import SEO from "../components/SEO";
import PageLinks from "../components/PageLinks";
import sns from "../data/sns";
import Img from "gatsby-image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 4rem;
  h4,
  img {
    margin: 1rem 0;
  }
`;

const SNSLinks = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  width: 100%;
  a {
    color: green;
    margin-right: 1.4rem;
  }
`;

const Profile = ({ c2019Img, profileImg }) => {
  return (
    <>
      <SEO title="ABOUT" />
      <Wrapper>
        <Row>
          <Col xs={5}>
            <Img fluid={profileImg.childImageSharp.fluid} />
          </Col>
          <Col xs={7}>
            <h4>Nozomi Ishii</h4>
            <h4>いしいのぞみ</h4>
            <h6>Front-End web developer</h6>
          </Col>
        </Row>
        <SNSLinks>
          <PageLinks data={sns} />
        </SNSLinks>
        <h5 className="mt-5">Skill-set</h5>
        <p>
          Babel, CSS, Contentful, ESLint, Enzyme, Express, Firebase, Gatsby.js,
          GitHub, GraphQL, HTML, Heroku, Homebrew, JWT, JavaScript, Jest,
          MangoDB, Material-UI, Node.js, OAuth2.0, Passport.js, React, SCSS,
          TypeScript, VSCode, ml5.js, npm, p5.js, webpack4, yarn
        </p>
      </Wrapper>
      <div>
        <h4>Previous webpage</h4>
        <Row>
          <Col xs={6}>
            <a
              href="https://nozomiishii.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img fluid={c2019Img.childImageSharp.fluid} />
            </a>
            <h5>2019</h5>
            <p>First time for creating my page using Ruby on Rails.</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Profile;
