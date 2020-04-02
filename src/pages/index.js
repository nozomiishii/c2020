import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import classes from "../styles/pages/index.module.scss";
import Loading from "../components/Loading";
import sketch from "../canvas/sketch";
import Loadable from "react-loadable";

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameMode: true,
    };
  }
  render() {
    if (typeof window !== "undefined") {
      const P5Wrapper = Loadable({
        loader: () => import("react-p5-wrapper"),
        loading: Loading,
      });

      return (
        <div className={classes.index}>
          <Layout gameMode={this.state.gameMode}>
            <SEO title="HOME" />
            <div className={classes.sketch}>
              <P5Wrapper sketch={sketch} />
              {/* <Loading /> */}
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
