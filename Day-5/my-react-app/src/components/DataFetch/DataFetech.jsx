import React, { useEffect, useState } from "react";
import "./DataFetech.css";
const DataFetech = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <h1 className="text-4xl pb-9">User Data : </h1>
      <div className="grid gap-3 2xl:grid-cols-4 xl:grid-cols-3  md:grid-cols-2    ">
        {data.map((user) => (
          <div className="border-2 px-9 py-6 bg-sky-300 border-green-500">
            <h3>Name : {user.name}</h3>
            <h4>Email : {user.email}</h4>
            <h4>Address : {user.address.street}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataFetech;
