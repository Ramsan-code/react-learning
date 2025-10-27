import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchData() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const responce = await axios.get(
        "https://express-mongo-connection-sigma.vercel.app/api/users"
      );
      const userData = responce.data.users;
      console.log(userData);
      setUsers(userData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
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
              <td>{user.isActive ? "yes" : "No"}</td>
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
                {new Date(user.updatedAt).toLocaleString("en-Us", {
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
    </>
  );
}

export default FetchData;
