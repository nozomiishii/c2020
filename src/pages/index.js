import React from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import P5Wrapper from "react-p5-wrapper";
import sketch from "../components/sketch";
import classes from "../styles/pages/index.module.scss";

const IndexPage = () => (
  <div className={classes.index}>
    <Layout>
      <Head title="HOME" />
      <div className={classes.sketch}>
        <P5Wrapper sketch={sketch} />
      </div>
    </Layout>
  </div>
);

export default IndexPage;
