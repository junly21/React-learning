import { useState } from 'react';

const SayPrac = () => {
  const [message, setMessage] = useState('hihi');
  const enter = () => setMessage('안녕하세요');
  const out = () => setMessage('잘가요');

  const [color, setColor] = useState('');
  return (
    <div>
      <hi style={{ color }}>{message}</hi>
      <button onClick={enter}>입장</button>
      <button onClick={out}>퇴장</button>
      <button onClick={() => setColor('red')}>빨강</button>
      <button onClick={() => setColor('blue')}>파랑</button>
      <button onClick={() => setColor('green')}>초록</button>
    </div>
  );
};

export default SayPrac;
