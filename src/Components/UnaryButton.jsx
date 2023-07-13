import * as React from "react";

function UnaryButton({value, updateCur}) {
  return (
    <div className="btn btn-dark" onClick={updateCur}>
      <h1>{value}</h1>
    </div>
  );
}

export default UnaryButton;
