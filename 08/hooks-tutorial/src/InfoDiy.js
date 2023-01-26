import { useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");
  const [val, setVal] = useState("");

  const onClick = () => {
    setVal(`${name}(닉네임:${nickName})님 안녕하세요`);
  };

  const onChangename = (e) => {
    setName(e.target.value);
  };

  const onChangenick = (e) => {
    setNickName(e.target.value);
  };

  return (
    <div>
      <input value={name} onChange={onChangename}></input>
      <input value={nickName} onChange={onChangenick}></input>
      <button onClick={onClick}>submit</button>
      <div>{val}</div>
    </div>
  );
};

export default Info;
