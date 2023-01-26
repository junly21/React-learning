import { useState } from 'react';

const IterationSample = () => {
  const [text, setText] = useState('');
  const [names, setNames] = useState([
    { id: 1, text: 'sns' },
    { id: 2, text: 'go' },
    { id: 3, text: 'ql' },
    { id: 4, text: 'qkek' },
  ]);

  const [nextId, setNextId] = useState(5);

  const nameList = names.map((name) => {
    return <li key={name.id}>{name.text}</li>;
  });

  const onChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  const onClick = () => {
    const val = names.concat({ id: nextId, text: text });
    setNextId(nextId + 1);
    setNames(val);
    setText('');
  };
  return (
    <div>
      <input placeholder="input" value={text} onChange={onChange}></input>
      <button onClick={onClick}>submit</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;
