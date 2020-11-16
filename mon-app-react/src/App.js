import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import CustomButton from './Button';

function App() {

  let [ firstname, setFirstName ] = useState("Émir")
  let [ email, setEmail] = useState("")

  function ValidateEmail(email) 
  {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
  {
    return (true)
  }
    return (false)
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code onClick={() => {
            setFirstName("Noémie")
          }}> { firstname }</code> and save to reload.
        </p>
        <input value = {firstname} onChange={(event) => {
          setFirstName(event.target.value)
        }}/>
        { firstname === "Léon" ? <span>Non tu viens pas</span> : <h1>Bienvenue</h1> }

        <input type= "email" value = { email } onChange={(event) => {
          setEmail(event.target.value)
        }}/>



        { 
        (email !== "" && ValidateEmail(email) ? 
          <span style={{
            color: 'green'
          }}>oui</span> 
            : 
          <span style={{
            color:'red'
          }}>non</span>)
        }

        <CustomButton > Good </CustomButton>

        <CustomButton> Morning </CustomButton>

        <CustomButton onClick={() => alert("The birds are chirping")}> To you ! </CustomButton>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
