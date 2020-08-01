import React from "react";
import "./Parent.css";
import Child from "../Child/Child";

export default class Parent extends React.PureComponent {
  constructor() {
    super();
    this.incrementCount = this.incrementCount.bind(this);
    this.state = {
      count: 0,
    };
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    console.log("PARENT RENDERING....  ");

    return (
      <div className="Parent">
        <div className="Title">Parent Component</div>
        <div className="Data"> Props: {this.props.value}</div>
        <div className="Data"> State: {this.state.count}</div>
        <div className="button" onClick={this.incrementCount}>
          Add State
        </div>
        <Child />
      </div>
    );
  }
}
