import * as React from "react";

function NumberButton({value, updateCur}) {
  const updateCurr = () => {
    updateCur(value);
  }
  return (
    <div className="btn btn-dark" onClick={updateCurr}>
      <h1>{value}</h1>
    </div>
  );
}

export default NumberButton;
