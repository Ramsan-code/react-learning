import React, { useEffect, useState } from "react";

function UseEffect() {
 const [age, setAge] = useState(27);
 const [size, setSize] = useState(27);

  useEffect ( ()=>{
  console.info("useEffect is loging...");
  },[age,size])

  function increaseAge() {
    setAge(age + 1);
  }
  function increaseSize() {
    setSize(size + 2);
  }
  return (
    <>
    <div>
      <h2>Age: {age}</h2>
      <button  onClick={increaseAge}>
        Increase by 1
      </button>
      <br />
      <input type="text" name="" id="" value={age}/>

      <hr />
    </div>
    <div>
      <h2>Size: {size}</h2>
      <button  onClick={increaseSize}>
        Increase by 2
      </button>
      <br />
      <input type="text" name="" id="" value={age}/>

      <hr />
    </div>
    </>
  );
}

const style = {
  btn: {
    backgroundColor: "#ccc",
    padding: "10px",
    borderRadius: "10px",
    cursork: "pointer",
  },
};

export default UseEffect;






