import { Component } from 'react';

class EventPractice extends Component {
  state = {
    name: '',
    message: '',
  };
  render() {
    const handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };

    const handleClick = () => {
      alert(this.state.name + ' :  ' + this.state.message);
    };

    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        handleClick();
      }
    };
    return (
      <div>
        <input
          type="text"
          placeholder="type your name"
          name="name"
          value={this.state.name}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="type message"
          name="message"
          value={this.state.message}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        ></input>
        <button onClick={handleClick}>Click</button>
      </div>
    );
  }
}
export default EventPractice;
