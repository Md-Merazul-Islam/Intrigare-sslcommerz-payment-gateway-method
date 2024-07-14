import React, { useState } from "react";
import "./Hock.css";
const Hock = () => {
  const [price, setPrice] = useState(10);
  const increaseHandler = () => {
    setPrice(price + 1);
  };
  const decreaseHandler = () => {
    setPrice(price - 1);
  };

  return (
    <div>
      <div className="box-click">
        <h1>Price :{price}</h1>
        <button onClick={increaseHandler}>Increase</button> &nbsp;{" "}
        <button onClick={decreaseHandler}>Decrease</button>
      </div>
    </div>
  );
};

export default Hock;
