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

    function convertTemperature(){
      if (unit==='metric'){
        return(
            <h4 className = 'units'>
              metric|<a href='/' onClick = {convertToFahrenheit} >imperial</a>
            </h4>);
    }else{ 
      return(
          <h4 className = 'units'>
            <a href='/' onClick = {convertToCelsius}>metric</a>|imperial
          </h4> );}  
    }

    return(
      <div>
        <Weather searchedcity={city} units={unit}/>
        <h2 className='units'>Unit Sistem:</h2> {convertTemperature()}
      </div>
    )
}