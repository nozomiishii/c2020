import React from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import classes from "../styles/pages/contact.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ContactPage = () => (
  <Layout>
    <Head title="CONTACT" />
    <h2>Contact</h2>
    <Container>
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
        </Col>
        <Col md={6}>
          <Form action="/contactSubmitted">
            <Form.Group controlId="formName">
              <Form.Label>Your name</Form.Label>
              <Form.Control type="text" placeholder="Enter Yourname" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                I'll never share your information with anyone else.
                <br />
                <span className={classes.japaneseText}>
                  いただいた情報は第三者と共有されません。
                </span>
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="fromTextArea">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default ContactPage;
