import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Container from "react-bootstrap/Container";
import classes from "../styles/pages/contactSubmitted.module.scss";

const ContactSubmitted = () => (
  <Layout>
    <SEO title="THANK YOU!!!" />
    <Container>
      <div className={classes.contactSubmitted}>
        <div className={classes.message}>
          <h1>Thank you!!</h1>
          <p>
            I'm very happy to hear from your message.
            <br />
            Please wait the reply for a while.
            <br />
            Have a wonderful the rest of the day!
          </p>
        </div>
        <div className={classes.message}>
          <h3>ありがとうございます！！</h3>
          <p>
            メッセージをいただけてとても嬉しいです。
            <br />
            お返事までしばしお待ちください。
            <br />
            良い残りの一日を！
          </p>
        </div>
        <div className={classes.signature}>
          <h6>- NOZOMI</h6>
        </div>
      </div>
    </Container>
  </Layout>
);

export default ContactSubmitted;
