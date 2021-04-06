import React, { useState } from 'react';
import './style/WeatherUnits.css';

export default function WeatherUnits({celsius}){

    const [unit, setUnit] = useState('metric');
    console.log(celsius)
    let tempValue = celsius;
    function convertToFahrenheit(event){
        event.preventDefault();
        setUnit('imperial');

    }
    function convertToCelsius(event){
        event.preventDefault();
        setUnit('metric');
    }
    if (unit==='metric'){
        return(
        <div className = 'units'>
            <h2>{Math.round(celsius)}</h2> 
            ºC|<a href='/' onClick = {convertToFahrenheit} >ºF</a>
        </div>);
    }else{ 
        tempValue = Math.round((celsius * 9/5)+32);
        return(
        <div className = 'units'>
        <h2>{tempValue}</h2>
        <a href='/' onClick = {convertToCelsius}>ºC</a>|ºF
        </div>
    );
    }    
}