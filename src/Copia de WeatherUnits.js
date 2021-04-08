import React, { useState } from 'react';
import DataLog from './DataLog'
import './style/WeatherUnits.css';

export default function WeatherUnits({info}){

    
    const [unit, setUnit] = useState('metric');
    // console.log(info.unit)

    function convertToFahrenheit(event){
        event.preventDefault();
        setUnit('imperial');
        console.log(unit)
    }
    function convertToCelsius(event){
        event.preventDefault();
        setUnit('metric');
    }
    if (unit==='metric'){
        return(
        <div className = 'units'>
            <h2>Celsius</h2> 
            ºC|<a href='/' onClick = {convertToFahrenheit} >ºF</a>
        </div>);
    }else{ 
        // tempValue = Math.round((celsius * 9/5)+32);
        return(
        <div className = 'units'>
        <h2>Fahren</h2>
        <a href='/' onClick = {convertToCelsius}>ºC</a>|ºF
        </div>
    );
    }    
}

    
    // if (units==='metric'){ 
        // console.log(datum)
        // return(
        // <div className = 'units'>
        //     ºC|<a href='/' onClick = {convertToFahrenheit} >ºF</a>
            {/* <DataLog info = {info}/> */}
    //     </div>
    //     );
        
    // }else{ 
    //     return(
    //     <div className = 'units'>
    //     <a href='/' onClick = {convertToCelsius}>ºC</a>|ºF
        {/* <DataLog info = {info}/> */}
//         </div>
//     );
//     }    
// }