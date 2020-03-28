import React from "react";
import classes from "../styles/components/loading.module.scss";

const Loading = () => (
  <div className={classes.loading}>
    <h3>
      <span className={classes.emoji} role="img" aria-label="img">
        👨🏻‍🚀
      </span>
      LOADING...
    </h3>
  </div>
);

export default Loading;
