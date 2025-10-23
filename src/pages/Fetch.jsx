import React, { useEffect } from "react";

function Fetch() {
  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  useEffect(fetchUsers, []);
  return (
    <div>
      <h1>Fetch</h1>
    </div>
  );
}

export default Fetch;
