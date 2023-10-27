import React, { Component } from "react";
import Model from "./Model";
import Header from "./Header";

export default class Ex_Glass extends Component {
  render() {
    return (
      <div className="bg">
        <Header />
        <Model />
      </div>
    );
  }
}
