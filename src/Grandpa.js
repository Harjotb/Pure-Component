import React from "react";
import "./Grandpa.css";
import Parent from "./Components/Parent/Parent";

class Grandpa extends React.Component {
  constructor() {
    super();
    this.incrementTitleNum = this.incrementTitleNum.bind(this);
    this.incrementParentValue = this.incrementParentValue.bind(this);

    this.state = { parentValue: 10, titleNum: 1 };
  }

  incrementTitleNum() {
    this.setState({ titleNum: this.state.titleNum + 1 });
  }

  incrementParentValue() {
    this.setState({ parentValue: this.state.parentValue });
  }

  render() {
    console.log("GRANDPA RENDERING .... ");
    return (
      <div className="Grandpa">
        Grandpa Component {this.state.titleNum}
        <div className="button" onClick={this.incrementParentValue}>
          Increment
        </div>
        <Parent value={this.state.parentValue} />
      </div>
    );
  }
}

export default Grandpa;
