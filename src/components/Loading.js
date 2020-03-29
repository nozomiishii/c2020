import React from "react";
import classes from "../styles/components/loading.module.scss";

const Loading = () => {
  const [counter, setCounter] = React.useState(0);
  React.useEffect(() => {
    counter < 99 && setTimeout(() => setCounter(counter + 1), 100);
  }, [counter]);

  return (
    <div className={classes.loading}>
      <h3>
        <span className={classes.emoji} role="img" aria-label="img">
          👨🏻‍🚀
        </span>
        LOADING...
      </h3>
      <p>{counter}%</p>
    </div>
  );
};

export default Loading;
