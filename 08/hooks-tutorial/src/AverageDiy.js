import React from "react";
import { useState, useMemo } from "react";

const Average = () => {
  const [num, setNum] = useState("");
  const [list, setList] = useState([]);

  const onChange = (e) => {
    setNum(e.target.value);
  };

  const onClick = () => {
    setList(list.concat(parseInt(num)));
    setNum("");
  };

  const getAverage = (arr) => {
    console.log("getAverage가동중");
    if (arr.length === 0) return 0;
    const sum = arr.reduce((a, b) => a + b);
    return sum / arr.length;
  };

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input placeholder="숫자 입력" value={num} onChange={onChange}></input>
      <button onClick={onClick}>추가</button>
      <div>
        {list.map((num, index) => (
          <div key={index}>{num}</div>
        ))}
      </div>
      {/* <ul>
        {list.map((num) => (
          <li>{num}</li>
        ))}
      </ul> */}
      <div>평균값:{avg}</div>
    </div>
  );
};

export default Average;
