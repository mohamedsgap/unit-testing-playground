import React, { Component } from "react";
import "./App.css";

class ClickCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      error: "",
    };
  }
  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
    if (this.state.counter === 0) {
      this.setState({ error: "" });
    }
  };
  decrementCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
    if (this.state.counter <= 0) {
      this.setState({ error: "can't go below ZERO" });
      this.setState({ counter: (this.state.counter = 0) });
    }
  };

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently {this.state.counter}
        </h1>
        <h3 data-test="error-message">{this.state.error}</h3>
        <button data-test="increment-button" onClick={this.incrementCounter}>
          Increment counter
        </button>
        <button data-test="decrement-button" onClick={this.decrementCounter}>
          Decrement counter
        </button>
      </div>
    );
  }
}

export default ClickCounter;
