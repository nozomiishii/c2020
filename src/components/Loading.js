import React from "react";
import classes from "../styles/components/loading.module.scss";

const Loading = () => (
  <div className={classes.loading}>
    <h3>
      <span className={classes.emoji}>👨🏻‍🚀</span>LOADING...
    </h3>
  </div>
);

export default Loading;
