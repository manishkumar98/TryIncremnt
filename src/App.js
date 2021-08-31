import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="App mt-5">
        <button onClick={increment} className="btn btn-success mr-5">
          Increment
        </button>
        <button onClick={decrement} className="btn btn-danger">
          Decrement
        </button>
        <h2 className="mt-5 display-1">{this.props.count}</h2>
      </div>
    );
  }
}
