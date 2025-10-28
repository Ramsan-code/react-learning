import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchData() {
  const defaultValues = {
    name: "",
    email: "",
    isActive: true,
  };

  const [formData, setFormData] = useState(defaultValues);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://express-mongo-connection-sigma.vercel.app/api/users",formData
      );
      const userData = response.data.users;
      console.log(userData);
      setUsers(userData);
    } catch (error) {
      console.log(error);
    }
  };

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
    alert("user create successfully");
    setFormData(defaultValues);
  };

  return (
    <>
      <div className="content-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <br />
          <input type="submit" value="send" />
        </form>

        <div className="content-container">
          <h1>FetchData</h1>
          <div className="content-body">Api call using axios</div>
        </div>

        <table border={2} cellPadding={6} cellSpacing={0} align="center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>isActive</th>
              <th>CreatedAt</th>
              <th>UpdatedAt</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isActive ? "Yes" : "No"}</td>
                <td>
                  {new Date(user.createdAt).toLocaleString("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
                <td>
                  {new Date(user.updatedAt).toLocaleString("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FetchData;