import React from 'react';
import Velociraptor from './img/Velociraptor.gif';

export default function Load(){
    return(
        <div>
           <h1>Loading ...</h1>
           <img src={Velociraptor} className="App-velociraptor" alt="velociraptor" /> 
        </div>
    );
}