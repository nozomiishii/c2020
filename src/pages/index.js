import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Loading from "../components/Loading";
import sketch from "../canvas/sketch";
import Loadable from "react-loadable";

import styled from "styled-components";

const IndexWapper = styled.div`
  position: relative;
  background: #000000;
  color: #666666;
`;

const Sketch = styled.div`
  left: 0;
  top: 3;
  position: absolute;
  touch-action: manipulation;
  user-select: none;
  width: 100vw;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
`;

const IndexPage = () => {
  if (typeof window !== "undefined") {
    const P5Wrapper = Loadable({
      loader: () => import("react-p5-wrapper"),
      loading: Loading,
    });
    const gameMode = true;
    return (
      <IndexWapper>
        <Layout gameMode={gameMode}>
          <SEO title="HOME" />
          <Sketch>
            <P5Wrapper sketch={sketch} />
            {/* <Loading /> */}
          </Sketch>
        </Layout>
      </IndexWapper>
    );
  } else {
    // if window does not exist
    return null;
  }
};

export default IndexPage;
