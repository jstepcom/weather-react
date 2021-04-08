import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nedry from './img/DNedry.gif'
import Velociraptor from './img/Velociraptor.gif';
import './style/Picture.css'

export default function Picture(image){
    let [picUrl, setPicUrl] = useState(false);
    let [picture, setPicture] = useState();
 
    function getCityImg(response){
        setPicture(response.data.photos[0].image.web);
        setPicUrl(true);
      }

      useEffect(()=>{
        setPicUrl(false)
      },[image.place])

    if (picUrl){
      return(
        <div>
          <img src = {picture} className = "picture" alt = "city image"/>
        </div>);
        }else{
          let newCity= (image.place.toLowerCase());
          newCity = newCity.replace(" ","-");
          const imgUrl = `https://api.teleport.org/api/urban_areas/slug:${newCity}/images/`;
          try {
            axios.get(imgUrl).then(getCityImg);
          }catch (error) {
              
            }
            return(
              <div className = "no-city">
                <img src = {Velociraptor} className = "pic-velociraptor" alt = "velociraptor" />
                <p>Ah ah ah!!! there's no image for this city</p>
                <img className="left" src = {Nedry} alt="no image"/>
              </div>);}
}