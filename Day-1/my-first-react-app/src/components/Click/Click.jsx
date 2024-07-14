import React from "react";
import "./Click.css";
let val = 1;

const ClickMe = () => {
  function Click_button() {
    const tmp = document.getElementById("text");
    val += 1;
    tmp.innerText = val;
  }

  return (
    <div>
      <h1 id="text">Before...</h1>
      <button onClick={ Click_button} className="btn-button">
        Click Me
      </button>
    </div>
  );
};

export default ClickMe;
