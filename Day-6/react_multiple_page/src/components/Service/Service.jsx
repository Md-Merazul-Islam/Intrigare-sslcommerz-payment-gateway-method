import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8  bg-gray-100">
      <div className=" text-center p-4">
        <h1 className="text-4xl font-bold mb-8 text-blue-600">Our Services</h1>

        <p className="text-lg text-gray-700 mb-8">
          We offer a wide range of services to meet your needs. From [Service 1]
          to [Service 2], our team is dedicated to providing the best solutions
          for you.
        </p>

        <div className="grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
            <h2 className="text-2xl font-semibold mb-4">Service 1</h2>
            <p className="text-gray-700 text-lg mb-4">
              Description of Service 1. Explain what this service is about and
              how it can benefit the user.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Learn More
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
            <h2 className="text-2xl font-semibold mb-4">Service 2</h2>
            <p className="text-gray-700 text-lg mb-4">
              Description of Service 2. Explain what this service is about and
              how it can benefit the user.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Learn More
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
            <h2 className="text-2xl font-semibold mb-4">Service 3</h2>
            <p className="text-gray-700 text-lg mb-4">
              Description of Service 3. Explain what this service is about and
              how it can benefit the user.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Learn More
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
            <h2 className="text-2xl font-semibold mb-4">Service 4</h2>
            <p className="text-gray-700 text-lg mb-4">
              Description of Service 4. Explain what this service is about and
              how it can benefit the user.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Learn More
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
            <h2 className="text-2xl font-semibold mb-4">Service 6</h2>
            <p className="text-gray-700 text-lg mb-4">
              Description of Service 6. Explain what this service is about and
              how it can benefit the user.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Learn More
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
            <h2 className="text-2xl font-semibold mb-4">Service 6</h2>
            <p className="text-gray-700 text-lg mb-4">
              Description of Service 6. Explain what this service is about and
              how it can benefit the user.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Learn More
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Services;
