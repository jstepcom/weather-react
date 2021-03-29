import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
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
        <Form onSubmit={handleSubmit} inline className="Search-form">
        <FormControl type="text" placeholder="Search City" className="mr-sm-2" onChange={updateCity}/>
        <Button variant="outline-success">Search</Button>
      </Form> 
       <h1>{text}</h1>


      </div>
    );
}