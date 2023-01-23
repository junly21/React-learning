import { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: 'testing',
  };

  render() {
    const handleChange = (e) => {
      this.setState({ message: e.target.value });
    };
    const handleClick = (e) => {
      alert(this.state.message);
    };

    return (
      <div>
        <input
          placeholder="dfdfd"
          value={this.state.message}
          onChange={handleChange}
        ></input>
        <button onClick={handleClick}>btn</button>
      </div>
    );
  }
}
export default EventPractice;
