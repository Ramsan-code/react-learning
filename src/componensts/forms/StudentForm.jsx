import React, { useState } from "react";
import "../../styles/Form.css";

function StudentForm() {
    const defaultValues={
    name: "",
    age: "",
    isActive: true,
    }

  const [formData, setFormData] = useState(defaultValues);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("user create sucessfully");
    setFormData(defaultValues);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="name"> name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label for="age">Age</label>
        <br />
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="send" />
      </form>
    </>
  );
}

export default StudentForm;
