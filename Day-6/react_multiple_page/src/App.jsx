import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About";
import Services from "./components/Service/Service";
import Contact from "./components/Contact/Contact";
import Pricing from "./components/Pricing/Pricing";

const App = () => {
  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/service" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
};

export default App;
