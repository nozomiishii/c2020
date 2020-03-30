import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/base/theme.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "../styles/components/layout.module.scss";

const Layout = (props) => {
  // console.log(props.gameMode);
  const headerBgColor = () => props.gameMode && classes.indexHeaderLayout;
  return (
    <React.Fragment>
      <div className={`${classes.headerLayout} ${headerBgColor()}`}>
        <Header />
      </div>
      <div className={classes.container}>
        {/* <Header hidden /> */}
        <div className={classes.content}>{props.children}</div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
