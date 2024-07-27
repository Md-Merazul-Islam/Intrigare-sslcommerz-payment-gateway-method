import React from "react";
import About from "../About/About";
import Services from "../Service/Service";
import Pricing from "../Pricing/Pricing";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8 bg-white">
        <div className="flex-1 md:w-2/3 p-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">
            Welcome To Our Website
          </h1>
          <p className="text-lg text-gray-700 max-w-screen-md mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            mollitia aut modi voluptatibus eligendi commodi fugiat sint eius,
            adipisci, aperiam voluptas magni nemo ducimus exercitationem nobis
            incidunt accusamus numquam quae.
          </p>
        </div>
        <div className="md:w-1/3 p-4 md:flex  md:justify-start">
          <img
            src="https://static.vecteezy.com/system/resources/previews/004/578/793/non_2x/man-working-with-computer-at-desk-free-vector.jpg"
            alt="images"
            className="rounded-lg shadow-lg  md:w-[650px]"
          />
        </div>
      </div>

      <Services></Services>
      <Pricing></Pricing>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
