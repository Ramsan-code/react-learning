import React, { useEffect, useState } from "react";

function JsonPlaceholder() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const userdata = await response.json();
    console.log(userdata);
    setUsers(userdata);
  };
  return (
    <>
      <div>
        <table border={1} cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PHONE</th>
              <th>EMAIL</th>
              <th>WEBSITE</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default JsonPlaceholder;
