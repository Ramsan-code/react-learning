import React from "react";

function FetchData() {
  return (
    <>
      <div className="content-container">
        <h1>FetchData</h1>
        <div className="content-body">Api call using axios</div>
      </div>

      <table border={1} cellPadding={5} cellSpacing={0} align="center">
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
          <tr>
            <td>lkn</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default FetchData;






