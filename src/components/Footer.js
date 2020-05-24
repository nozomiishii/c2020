import React from "react";

import LinkToSNS from "./PageLinks";
import styled from "styled-components";

const Wrapper = styled.footer`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  padding: 0;
`;

const Links = styled.div`
  a {
    color: #777777;
    margin-left: 1.4rem;
    &:visited {
      color: #777777;
    }
  }
`;

const Footer = () => (
  <Wrapper>
    <div>
      <p>© 2020 NOZOMI ISHII</p>
    </div>
    <Links>
      <LinkToSNS />
    </Links>
  </Wrapper>
);

export default Footer;
