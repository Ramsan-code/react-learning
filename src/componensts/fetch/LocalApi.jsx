import React, { useEffect, useState } from "react";

function LocalApi() {
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
      <div className="content-container">
        <h1>LocalApi</h1>
      </div>
    </>
  );
}

export default LocalApi;
