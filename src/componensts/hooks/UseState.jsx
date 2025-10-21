import React from "react";
import { useState } from "react";

function UseState() {
  const [age, setAge] = useState(23);

  function increase() {
    setAge(age + 1);
  }

  return (
    <>
      <button>{age}</button>
      <br />
      <button onClick={increase}>increse age</button>
      <br />
      <input type="text" name="" id="" value={age} />
    </>
  );
}

export default UseState;
