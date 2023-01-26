import { useState } from "react";

const Counter = () => {
  const [num, addNum] = useState(0);

  const onClick = () => {
    addNum(num + 1);
  };
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={onClick}>+1</button>
    </div>
  );
};

export default Counter;
