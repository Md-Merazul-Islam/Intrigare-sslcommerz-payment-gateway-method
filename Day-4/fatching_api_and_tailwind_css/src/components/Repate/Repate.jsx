import React, { useState } from "react";

const names = {
  border: "1px solid white",
  padding: "5px",
  margin: "5px",
};

const Repate = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div style={names}>
        <h1>Count : {count}</h1>
        <button onClick={() => setCount(count + 1)}> Increase </button>

      </div>
    </div>
  );
};

export default Repate;
