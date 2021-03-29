import React from 'react';
import logo from './logo.svg';
import Navbar from 'react-bootstrap/Navbar'

export default function (){
    return(
<Navbar className="App-header">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
      <img src={logo} className="App-logo" alt="logos" /> 
      <h1 className="App-title"> Weather app </h1>
      <small>by JSCO</small>   
  </Navbar.Collapse>
</Navbar>
    );
}
