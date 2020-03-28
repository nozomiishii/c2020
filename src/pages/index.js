import React from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
// import P5Wrapper from "react-p5-wrapper";
import sketch from "../components/sketch";
import classes from "../styles/pages/index.module.scss";
import loadable from "@loadable/component";

class IndexPage extends React.Component {
  render() {
    if (typeof window !== "undefined") {
      const P5Wrapper = loadable(() => import("react-p5-wrapper"));

      return (
        <div className={classes.index}>
          <Layout>
            <Head title="HOME" />
            <div className={classes.sketch}>
              <P5Wrapper sketch={sketch} />
            </div>
          </Layout>
        </div>
      );
    } else {
      // if window does not exist

      return null;
    }
  }
}

export default IndexPage;
