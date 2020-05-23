import React from "react";
import { Layout, SEO } from "../components";
import Container from "react-bootstrap/Container";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 70%;
`;

const Message = styled.div`
  align-self: start;
  margin: 2vh 0;
`;

const Signature = styled.div`
  align-self: flex-end;
`;

const ContactSubmitted = () => (
  <Layout>
    <SEO title="THANK YOU!!!" />
    <Container>
      <Wrapper>
        <Message>
          <h1>Thank you!!</h1>
          <p>
            I'm very happy to hear from your message.
            <br />
            Please wait the reply for a while.
            <br />
            Have a wonderful the rest of the day!
          </p>
        </Message>
        <Message>
          <h3>ありがとうございます！！</h3>
          <p>
            メッセージをいただけてとても嬉しいです。
            <br />
            お返事までしばしお待ちください。
            <br />
            良い残りの一日を！
          </p>
        </Message>
        <Signature>
          <h6>- NOZOMI</h6>
        </Signature>
      </Wrapper>
    </Container>
  </Layout>
);

export default ContactSubmitted;
