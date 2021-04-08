import React, { useState } from 'react';
import Weather from './Weather';
import './style/Units.css';

export default function Units({city}){
// console.log(city)
    let [unit, setUnit] = useState('metric');
    // let [ulabel, setUlabel] = useState(<div>ºC|<a href='/' onClick = {convertToFahrenheit} >ºF</a></div>);

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
          <div>
            <h4 className = 'units'>
              ºC|<a href='/' onClick = {convertToFahrenheit} >ºF</a>
            </h4>
            <Weather searchedcity={city} units={unit}/>
          </div>);
    }else{ 
      return(
        <div>
          <h4 className = 'units'>
            <a href='/' onClick = {convertToCelsius}>ºC</a>|ºF
          </h4>
          <Weather searchedcity={city} units={unit}/>
        </div>
    );
    }  
}