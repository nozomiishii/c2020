import React from "react";
import classes from "../styles/components/loading.module.scss";

let timer1, timer2;

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
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
    if (this._isMounted && prevState.count >= 97) {
      return (timer2 = setTimeout(
        () =>
          this.setState((prevState) => ({
            count: (prevState.count * 10 + 1) / 10,
          })),
        2000
      ));
    }
    if (this._isMounted && prevState.count < 97) {
      return (timer1 = setTimeout(
        () =>
          this.setState((prevState) => ({
            count: prevState.count + 1,
          })),
        10
      ));
    }
  }
  componentWillUnmount() {
    this._isMounted = false;
    clearTimeout(timer1);
    clearTimeout(timer2);
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
