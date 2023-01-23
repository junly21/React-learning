import { useState } from 'react';

const EventPractice = () => {
  const [username, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="type your name"
        value={username}
        onChange={handleChangeName}
      ></input>
      <input
        type="text"
        placeholder="type message"
        value={message}
        onChange={handleChangeMessage}
      ></input>
      <button onClick={() => alert('clicked')}></button>
    </div>
  );
};

export default EventPractice;
