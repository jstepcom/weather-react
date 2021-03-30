import React, { useState } from 'react';
import logo from './img/logo.svg';
import './style/Weather.css';
import Velociraptor from './img/Velociraptor.gif'
import axios from 'axios';


export default function Weather(){
    let [city, setCity] = useState("");
    let [temperature, setTemperature] = useState(null);
    let apiKey = "b04fe89ae8d23d63826a70cf52ffdc7c";
    
    function handleSubmit(event){
        event.preventDefault();
    }

    function updateCity(event){
        setCity(event.target.value);  
    }
    
    function showTemp(response){
    setTemperature(response.data.main.temp);
    }
    
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(showTemp)
    
    let text = "Type a City";
    if(temperature){
        text = `The current temperature in ${city} is ${Math.round(temperature)} °C`
    }else{
        text = "Loading ..."
    }
    return(
    <nav className="navbar  Weather-header">
        <img src={logo} alt=""  class="Weather-logo d-inline-block align-text-top"/>
        <h1 className="Weather-title"> Weather app </h1>
        <small>by JSCO</small>
        <form onSubmit={handleSubmit} className="d-flex Weather-form">
        <input type="search" placeholder="Search City" className="form-control me-2" onChange={updateCity}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> 
    </nav>
    );
}
