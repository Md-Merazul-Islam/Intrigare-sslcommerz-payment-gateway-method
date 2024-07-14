import React from "react";
import { useEffect, useState } from "react";
import './Hook.css'
const Hook = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert("Alerting...");
  }, []);

  useEffect(() => {
    alert("Count updated");
  }, [count]);

  const updateCounter=()=>{
    setCount(count+1);
  }
  return <div>
    <div className="click-box">
        <h1>Count : {count}</h1>
      <button onClick={updateCounter}>Click Me</button> &nbsp;{" "}

    </div>
  
  </div>;
};

export default Hook;
