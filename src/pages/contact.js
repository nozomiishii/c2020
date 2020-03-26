import React from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import classes from "../styles/pages/contact.module.scss";

const ContactPage = () => (
  <Layout>
    <Head title="CONTACT" />
    <Container>
      <Form className={classes.form}>
        <Form.Group controlId="formName">
          <Form.Label>Your name</Form.Label>
          <Form.Control type="text" placeholder="Enter Yourname" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your information with anyone else.
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
    </Container>
  </Layout>
);

export default ContactPage;
