import React from "react";
import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);


function increase() {
  setCount(count + 1);
}

function decrease() {
  setCount(count - 1);
}
return (
  <div>
    <h1><b>UseState</b></h1>
    <button onClick={increase}><b>+</b></button>
    <br />
    <br />
    <button>{count}</button><br /><br />
    <button onClick={decrease}><b>-</b></button>
    <br />
  </div>
);
}

export default UseState;
