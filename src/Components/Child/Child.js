import React from "react";
import "./Child.css";

export default class Child extends React.Component {
  render() {
    console.log("CHILD RENDERING... ");
    return (
      <div className="Child">
        <div className="Title">Child Component</div>
      </div>
    );
  }
}
