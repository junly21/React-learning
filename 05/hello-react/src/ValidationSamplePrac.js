import React, { Component } from "react";
import "./ValidationSample.css";
class ValidationSample extends Component {
  input = React.createRef();
  state = {
    password: "",
    validated: false,
    clicked: false,
  };
  // state = {
  //   password: "",
  //   clicked: false,
  //   validated: false,
  // };

  render() {
    // const handleChange = (e) => {
    //   this.setState({
    //     password: e.target.value,
    //   });
    // };
    const handleChange = (e) => {
      this.setState({ password: e.target.value });
    };

    // const handleButtonClick = () => {
    //   this.setState({
    //     clicked: true,
    //     validated: this.state.password === "0000",
    //   });
    //   this.input.current.focus();
    // };

    const handleButtonClick = () => {
      this.setState({
        clicked: true,
        validated: this.state.password === "0000",
      });
      this.input.current.focus();
    };

    return (
      <div>
        <input
          ref={this.input}
          type="password"
          value={this.state.password}
          onChange={handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        ></input>
        <button onClick={handleButtonClick}>검증하기222</button>
        {/* <input
          ref={this.input}
          type="password"
          value={this.state.password}
          onChange={handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={handleButtonClick}>검증하기</button> */}
      </div>
    );
  }
}
export default ValidationSample;
