import React from 'react';
import Nedry from './img/DNedry.gif'
import Velociraptor from './img/Velociraptor.gif';
import './style/Picture.css'

export default function Picture(image){
  
    if (image.dennis){
        return(
            <div>
                <img src = {image.image} className = "picture" alt = "city image"/>
            </div>
        );} else{
            return (
            <div>
                <img src = {Velociraptor} className = "pic-velociraptor" alt = "velociraptor" />
                <p className = "no-city">There's no image for this city</p>
                <img className="left" src={Nedry} alt="no image"/>
            </div>);
        }
}