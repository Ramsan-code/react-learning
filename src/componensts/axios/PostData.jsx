import React, { useEffect, useState } from "react";
import "../../styles/Form.css";
import axios from "axios";

function PostData() {
  const defaultValues = {
    name: "",
    email: "",
    isActive: true,
  };

  useEffect(() => {
    postUsers();
  }, []);

  const [formData, setFormData] = useState(defaultValues);

  const postUsers = async () => {};
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://express-mongo-connection-sigma.vercel.app/api/users",
        formData
      );
      console.log(response.data);
      alert("User created successfully");
      setFormData(defaultValues);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div className="content-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="send" id="button" />
      </form>
      </div>
    </>
  );
}

export default PostData;
