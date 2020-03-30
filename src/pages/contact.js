import React from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import Form from "react-bootstrap/Form";
import classes from "../styles/pages/contact.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useStaticQuery, graphql, navigate } from "gatsby";
import Img from "gatsby-image";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ContactPage = () => {
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
  const profile = images.find(({ name }) => name === "profile");

  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setState({ ...state, [key]: value });
    // console.log(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    form.textContent = "Sending...";
    const modal = document.getElementById("sendingEmail");
    modal.classList.remove(classes.hidden);
    modal.classList.add(classes.show);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then((data) => {
        // console.log(data);
        navigate(form.getAttribute("action"));
      })
      .catch((error) => alert(error));
  };

  return (
    <React.Fragment>
      <Layout>
        <Head title="CONTACT" />
        <h2>Contact</h2>

        <Row>
          <Col md={6}>
            <p className={classes.message}>
              I'm really happy to work with you.
              <br />
              Please get in touch with me!
            </p>
            <p className={classes.message}>
              <span className={classes.japaneseText}>
                一緒にお仕事できたら大変うれしいです。
                <br />
                ご連絡心よりお待ちしております。
              </span>
            </p>
            <Img
              fluid={profile.childImageSharp.fluid}
              className={classes.profileImage}
            />
          </Col>
          <Col md={6}>
            <Form
              action="/contactSubmitted"
              // action="/contact"
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              // onClick={handleSubmit}
              className={classes.form}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out:
                  <input name="bot-field" onChange={handleChange} />
                </label>
              </p>
              <Form.Group controlId="formName">
                <Form.Label>Your name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Yourname"
                  name="name"
                  required
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  required
                />
                <Form.Text>
                  I'll never share your information with anyone else.
                  <br />
                  <span className={classes.japaneseText}>
                    いただいた情報は第三者と共有されません。
                  </span>
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formTextArea">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="text"
                  rows="7"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <button className={classes.button} type="submit">
                Send
              </button>
            </Form>
          </Col>
        </Row>
      </Layout>
      <div
        id="sendingEmail"
        className={`${classes.hidden} ${classes.sendingEmail}`}
      >
        <div className={classes.emailEmoji}>
          <h4>
            <span role="img" aria-label="sending email">
              💌
            </span>
          </h4>
        </div>
        <h1>
          <span role="img" aria-label="plase wait">
            👨🏻‍🚀
          </span>
        </h1>
      </div>
    </React.Fragment>
  );
};

export default ContactPage;
