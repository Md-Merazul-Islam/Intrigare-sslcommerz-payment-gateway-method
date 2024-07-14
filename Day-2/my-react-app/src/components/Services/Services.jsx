import React from "react";
import "./Servives.css";
const Services = (props) => {
  return (
    <div>
        <h2>Services</h2>
      <div className="services-container">
        {props.services.map((service) => (
          <div className="box" key={service.id}>
            <h3>Id: {service.id}</h3>
            <p>Title: {service.title}</p>
            <p>Description: {service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
