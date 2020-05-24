import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/base/theme.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    color: rgb(245, 240, 240);
    text-decoration: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Helvetica, Arial, sans-serif;
    background: #2e2a2e;
  }
  img {
    max-width: 100%;
  }
`;

const HeaderLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 10;
  background: ${(p) => (p.game ? "none" : "rgba(46, 42, 46, 0.8)")};
`;

const Container = styled.div`
  flex-direction: column;
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
  h2 {
    margin-bottom: 4rem;
  }
  > div {
    padding-top: 15vh;
    min-height: 90vh;
    flex-grow: 1;
  }
`;

const Layout = ({ title, children }) => {
  return (
    <>
      <GlobalStyle />
      {title ? (
        <HeaderLayout>
          <Header />
        </HeaderLayout>
      ) : (
        <HeaderLayout game>
          <Header />
        </HeaderLayout>
      )}

      <Container>
        {/* <Header hidden /> */}
        <div>
          {title ? <h2>{title}</h2> : ""}
          {children}
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
