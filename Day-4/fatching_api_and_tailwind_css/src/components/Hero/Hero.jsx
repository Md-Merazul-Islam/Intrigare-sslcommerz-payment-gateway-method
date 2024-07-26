import React from 'react'

const Hero = (props) => {
    const styles ={
        border: '1px solid green',
        padding: '10px',
        margin: '10px',
    }
  return (
    <div style={styles}>
        <h1>Name : {props.name}</h1>
        <h2>Age : {props.age}</h2>

    </div>
  )
}

export default Hero