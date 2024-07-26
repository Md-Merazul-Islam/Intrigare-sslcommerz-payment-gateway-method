import React, { useEffect, useState } from 'react';
import './Api.css'
const Api = () => {

  const stl = {
    border: '1px solid red',
    padding: '10px',
    margin: '10px',
  };
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch('https://blueskybooking.onrender.com/hotel/hotels/')
      .then((res) => res.json())
      .then((data) => setAllData(data))
      .catch((err) => console.error(err));
  }, []);

  

  return (
    <div>
      <h1>Data: {allData.length}</h1>
      {allData.length > 0 ? (
        allData.map((hotel) => (
          <div key={hotel.id} style={stl}>
            <h1>{hotel.name}</h1>
            <h2>{hotel.address}</h2>
          </div>
        ))
      ) : (
        <span className="loader"></span>
      )}

      
    </div>
  );
};

export default Api;
