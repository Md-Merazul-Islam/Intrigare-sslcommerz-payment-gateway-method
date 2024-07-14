import React from "react";
import "./Services.css";
const ExploreStyle = {
  border: "1px solid ",
  padding: "50px 100px",
  backgroundColor: "red",
  margin: "20px",
};
const Services = (props) => {
  return (
    <div>
      {/* <h1 style={{background:'green',padding:'20px'}}>Services Page</h1> */}
      <div style={ExploreStyle}>
        <h2>This is the services.</h2>
        <h3>Name: {props.name}</h3>
      </div>
    </div>
  );
};

export default Services;
