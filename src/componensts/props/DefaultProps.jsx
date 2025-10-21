import React from "react";

function DefaultProps({ name = "Unknown Student", course = "Not Assigned" }) {
  return (
    <div className="content-container">
      <div className="content-title">
        <h1>Default props</h1>
        <p>
          If you want to give a prop a default value to fall back on when no
          value is specified, you can do it with the destructuring by putting =
          and the default value right after the parameter:
        </p>
      </div>

      <div className="content-body">
        <div className="info-row">
          <span className="info-key">Name:</span>
          <span className="info-value">{name}</span>
        </div>
        <div className="info-row">
          <span className="info-key">Course:</span>
          <span className="info-value">{course}</span>
        </div>
      </div>
    </div>
  );
}

export default DefaultProps;
