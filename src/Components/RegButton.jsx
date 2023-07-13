import * as React from "react";

function RegButton({value, func}) {
  return (
    <div className="btn btn-dark" onClick={func}>
      <h1>{value}</h1>
    </div>
  );
}

export default RegButton;
