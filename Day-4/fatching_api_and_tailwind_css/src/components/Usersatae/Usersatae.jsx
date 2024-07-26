import React, { useState } from 'react'

const Usersatae = () => {

    const [count, setCount]=useState(0);
    const handleClikc=()=>setCount(count+1);


  return (
    <div>
        <button onClick={handleClikc} >Cl ick Me </button>
        <h1>Number of moves: {count} </h1>
   
    </div>
  )
}

export default Usersatae