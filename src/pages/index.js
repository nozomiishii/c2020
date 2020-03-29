import React from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
// import sketch from "../canvas/sketch";
import classes from "../styles/pages/index.module.scss";
// import Loadable from "react-loadable";
import Loading from "../components/Loading";

class IndexPage extends React.Component {
  render() {
    if (typeof window !== "undefined") {
      // const P5Wrapper = Loadable({
      //   loader: () => import("react-p5-wrapper"),
      //   loading: Loading,
      // });

      return (
        <div className={classes.index}>
          <Layout>
            <Head title="HOME" />
            <div className={classes.sketch}>
              {/* <P5Wrapper sketch={sketch} /> */}
              <Loading />
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
