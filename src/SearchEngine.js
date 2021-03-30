import React, { useState } from 'react';
import Velociraptor from './img/Velociraptor.gif'
import axios from 'axios';


export default function (){
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
        
    <div>

     
        <div className="card App-card" style={{ width: '75rem' }}>
          <div className="row">
          <div className="col">
              <h1>
                Forecast
              </h1>
            </div> 
          <div className="col">
              <h1>{text}</h1>
              <img className="App-card-img" variant="top" src={Velociraptor} />
            </div> 
         </div>
        </div>
    
      


      </div>
    );
}