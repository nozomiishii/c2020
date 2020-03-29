import React from "react";
import classes from "../styles/components/loading.module.scss";

class Loading extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    this._isMounted = true;
    if (this._isMounted) {
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
  }
  componentWillUnmount() {
    this._isMounted = false;
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
