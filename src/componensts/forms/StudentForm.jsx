import React, { useState } from "react";
import "../../styles/Form.css";

function StudentForm() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`First Name:${fname}`);
    console.log(`Last Name:${lname}`);
  };
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="fname">First name:</label>
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          onChange={(e) => setFname(e.target.value)}
        />
        <br />
        <label for="lname">Last name:</label>
        <br />
        <input
          type="text"
          id="lname"
          name="lname"
          onChange={(e) => setLname(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" value="send" />
      </form>
    </>
  );
}

export default StudentForm;
