import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import layoutStyles from "../styles/components/layout.module.scss";

const Layout = (props) => (
  <div className={layoutStyles.container}>
    <Header />
    <div className={layoutStyles.content}>{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
