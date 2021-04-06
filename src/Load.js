import React from 'react';
import './style/Load.css'
import Velociraptor from './img/Velociraptor.gif';
import Dilofosaurus from './img/Dilofosaurus.jpg'

export default function Load(){
    return(
        <div className="load" >
           <h1>Loading ... </h1>
           <img src={Dilofosaurus} className = 'load-dilofosauro' alt='diofosauro'/>
           <img src={Velociraptor} className="load-velociraptor" alt="velociraptor" /> 
        </div>
    );
}