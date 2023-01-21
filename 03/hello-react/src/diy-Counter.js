import { Component } from 'react';

class Counter extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       number: 0,
  //       fixedNumber: 0,
  //     };
  //   }

  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button
          //   onClick={() => {
          //     this.setState((prevState) => ({
          //       number: prevState.number + 1,
          //     }));

          //     this.setState({ number: number + 1 }, () => {
          //       console.log("State호출완.");
          //       console.log(this.state);
          //     });
          //   }}
          onClick={() => {
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
          }}
        >
          +버튼
        </button>
        <button onClick={() => this.setState({ number: fixedNumber })}>
          초기초기화
        </button>
      </div>
    );
  }
}

export default Counter;
