import React from 'react';
import Nedry from './img/DNedry.gif'
import Velociraptor from './img/Velociraptor.gif';
import './style/Picture.css'

export default function Picture(pic){
  
        return(
            <div className="picture">
                <img src={Velociraptor} className="pic-velociraptor" alt="velociraptor" />
                <img className="left" src={Nedry} alt="no image"/>
            </div>
          
        
        );
     
    
    
}