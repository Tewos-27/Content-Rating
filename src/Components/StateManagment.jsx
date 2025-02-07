import React,{ useState } from 'react'

const StateManagment = () => {
  const [name, setName] = useState('tewo');
  const [clicked, setClicked] = useState(false);

  const handleButton = () => {
     setName('tewodros Shimels');
    setClicked(true)
  };
  return (
    <div>
      <h2>Name of employes</h2>
      <p>the system admine name is :{name}</p>
        To see full name:<button onClick={handleButton} disabled={clicked}>Clicked Me</button>
    </div>
  )
}

export default StateManagment
/*
intialize state
after a tag
{cartCount > 0 && (
  <span style={{
      position: 'absolute',
      top: '10px',
      right: '10px',
      backgroundColor: 'red',
      color: 'white',
      borderRadius: '50%',
      padding: '5px 10px',
      fontSize: '14px',
      fontWeight: 'bold',
  }}>
      {cartCount}
  </span>
)}  and 

/*import React from 'react'
import { useState } from 'react'
const StateManagment = () => {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount( preNo => preNo + 5)
  }
  return (
    <div>
        <h1>Count number: {count}</h1>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default StateManagment */
/* 
import React from 'react'
import { useState } from 'react';

const stateManagmenet = () => {
    const [name, setName] = useState('tewo');
    const [buttonClicked, setButtonClicked] = useState(false);

    const updateName = () =>{
        setName('tewo Shimels');
        setButtonClicked(true);

    }
  return (
    <div>
        <h1>State managment</h1>
        <p> the name is {name} </p>
        <button onClick={updateName} disabled={buttonClicked}> click here to update the name</button>
    </div>
  )
}

export default stateManagmenet*/