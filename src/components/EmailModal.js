import React from "react";
import styled, { keyframes } from "styled-components";

const SendingEmail = styled.div`
  display: flex;
  align-items: center;
  background: rgba(46, 42, 46, 0.5);
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100vw;
`;

const emailingEmoji = keyframes`
  0% {
    transform: translateY(5vh);
  }
  100% {
    transform: translateY(-60vh);
  }
`;

const EmailEmoji = styled.div`
  animation: ${emailingEmoji} 5s infinite linear;
`;

const EmailModal = () => {
  return (
    <SendingEmail>
      <EmailEmoji>
        <h4>
          <span role="img" aria-label="sending email">
            💌
          </span>
        </h4>
      </EmailEmoji>
      <h1>
        <span role="img" aria-label="plase wait">
          👨🏻‍🚀
        </span>
      </h1>
    </SendingEmail>
  );
};

export default EmailModal;
