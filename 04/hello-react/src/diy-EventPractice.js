import { useState } from 'react';

const EventPractice = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });

  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="type your name"
        name="username"
        value={username}
        onChange={onChange}
      ></input>
      <input
        type="text"
        placeholder="type message"
        name="message"
        value={message}
        onChange={onChange}
      ></input>
      <button onClick={() => alert('clicked')}></button>
    </div>
  );
};

export default EventPractice;
