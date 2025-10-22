import React, { useState } from "react";
import "../../styles/Form.css";

function StudentForm() {
const [formData,setFormData] = useState({
    name:"",
    age:"",
    isActive : true ,
});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
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
        />
        <br />
        <label for="lname">Last name:</label>
        <br />
        <input
          type="text"
          id="lname"
          name="lname"
        />
        <br />
        <br />
        <input type="submit" value="send" />
      </form>
    </>
  );
}

export default StudentForm;
