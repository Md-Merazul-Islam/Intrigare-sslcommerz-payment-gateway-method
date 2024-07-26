import { useEffect, useState } from "react";

import "./App.css";
import Api from "./components/Api/Api";
import Usersatae from "./components/Usersatae/Usersatae";
import Repate from "./components/Repate/Repate";
import Hero from "./components/Hero/Hero";

function App() {
  // const AllHero =['Alamin','Rajon','Saim','Sabbir','Niloy','Moynul','Jahid','Rakib']
  const AllHero = [
    { id: 1, name: "Alamin", age: 20 },
    { id: 2, name: "Rajon", age: 21 },
    { id: 3, name: "Sabbir", age: 23 },
    { id: 4, name: "Ratin", age: 50 },
    { id: 5, name: "Meraz", age: 20 },
  ];

  // const[Allhero, setHero]= Usersatae([])
  // useEffect(()=>{
  //   fetch('http://127.0.0.1:8000/shop/products/')
  //   .then(res=> res.json())
  //   .then(data => console.log(data))
  // },[])

  return (
    <>
      <Api></Api>
      <Usersatae></Usersatae>
      <Repate></Repate>
      {AllHero.map((hero) => (
        <Hero name={hero.name} key={hero.id} age={hero.age}></Hero>
      ))}
    </>
  );
}

export default App;
