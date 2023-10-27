import React, { Component } from "react";

export default class extends Component {
  state = {
    color: null,
  };
  handleChangeColor = (color) => {
    this.setState({ color });
  };
  render() {
    return (
      <div>
        <div className="model">
          <div className="face">
            <img src={`./glassesImage/model.jpg`} alt="" />
            <div className="glass_model">
              <img src={`./glassesImage/v7.png`} alt="" />
            </div>
            <div className="text_model">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                eveniet dignisslicabo perferendis
              </p>
            </div>
          </div>
          <div className="face face_2">
            <img src={`./glassesImage/model.jpg`} alt="" />
            {this.state.color !== null && (
              <div className="change_glass">
                <img src={`./glassesImage/${this.state.color}.png`} alt="" />
              </div>
            )}
          </div>
        </div>
        <div className="model_glass">
          <img
            onClick={() => {
              this.handleChangeColor("v1");
            }}
            src={`./glassesImage/v1.png`}
            alt=""
          />
          <img
            onClick={() => {
              this.handleChangeColor("v2");
            }}
            src={`./glassesImage/v2.png`}
            alt=""
          />
          <img
            onClick={() => {
              this.handleChangeColor("v3");
            }}
            src={`./glassesImage/v3.png`}
            alt=""
          />
          <img
            onClick={() => {
              this.handleChangeColor("v4");
            }}
            src={`./glassesImage/v4.png`}
            alt=""
          />
          <img
            onClick={() => {
              this.handleChangeColor("v5");
            }}
            src={`./glassesImage/v5.png`}
            alt=""
          />
          <img
            onClick={() => {
              this.handleChangeColor("v6");
            }}
            src={`./glassesImage/v6.png`}
            alt=""
          />
          <img
            onClick={() => {
              this.handleChangeColor("v7");
            }}
            src={`./glassesImage/v7.png`}
            alt=""
          />
          <img
            onClick={() => {
              this.handleChangeColor("v8");
            }}
            src={`./glassesImage/v8.png`}
            alt=""
          />
          <img
            onClick={() => {
              this.handleChangeColor("v9");
            }}
            src={`./glassesImage/v9.png`}
            alt=""
          />
        </div>
      </div>
    );
  }
}
