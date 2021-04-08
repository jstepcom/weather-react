import React, { useState } from 'react';
import DataLog from './DataLog'
import './style/WeatherUnits.css';

export default function WeatherUnits({info}){

    let [unit, setUnit] = useState(info);
    const celsius =10
    console.log(unit)
    let tempValue = celsius;
    function convertToFahrenheit(event){
        event.preventDefault();
        setUnit({city:info.city,
            country:info.country,
            coord:info.coord,
            unit:'imperial',
            key:info.key,
            run:true});
        

    }
    function convertToCelsius(event){
        event.preventDefault();
        setUnit({city:info.city,
            country:info.country,
            coord:info.coord,
            unit:'metric',
            key:info.key,
            run:true});
    }
    if (unit.unit==='metric'){
        return(
        <div className = 'units'>
            {/* <h2>{Math.round(celsius)}</h2>  */}
            ºC|<a href='/' onClick = {convertToFahrenheit} >ºF</a>
            <DataLog info={unit}/>
        </div>);
    }else{ 
        // tempValue = Math.round((celsius * 9/5)+32);
        return(
        <div className = 'units'>
        {/* <h2>{tempValue}</h2> */}
        <a href='/' onClick = {convertToCelsius}>ºC</a>|ºF
        <DataLog info={unit}/>
        </div>
    );
    }    
}