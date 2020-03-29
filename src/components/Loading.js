import React from "react";
import classes from "../styles/components/loading.module.scss";

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    console.log("did");
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count < 98) {
      return setTimeout(
        () =>
          this.setState((prevState) => ({
            count: prevState.count + 1,
          })),
        10
      );
    }
    if (prevState.count >= 98) {
      return setTimeout(
        () =>
          this.setState((prevState) => ({
            count: (prevState.count * 10 + 1) / 10,
          })),
        1000
      );
    }
  }

  render() {
    return (
      <div className={classes.loading}>
        <h3>
          <span className={classes.emoji} role="img" aria-label="img">
            👨🏻‍🚀
          </span>
          LOADING...
        </h3>
        <p>{this.state.count}%</p>
      </div>
    );
  }
}

export default Loading;
