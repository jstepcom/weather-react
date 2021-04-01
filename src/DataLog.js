import React, { useState } from 'react';
import NiceDate from './NiceDate';
import './style/DataLog.css'

export default function DataLog({info}){
  const data = {temp: Math.round(info.main.temp),
                city: info.name, 
                country: info.sys.country, 
                description:info.weather[0].description, 
                max:Math.round(info.main.temp_max), 
                min:Math.round(info.main.temp_min), 
                pressure:info.main.pressure, 
                wind:info.wind.speed, 
                humidity:info.main.humidity, 
                icon:info.weather[0].icon, 
                time:new Date(info.dt * 1000)}
                
  const iconUrl=`http://openweathermap.org/img/wn/${data.icon}.png`
   
    return(
    <div className="data">
      <div className="row">
        <div className="col-md-8">
          <h1>This week</h1>
        </div> 
        <div className="col-md-4">
            <img src={iconUrl} />
            <h2 className="current"> {data.temp}°C </h2> 
            <h4 className="current"> {data.city}, <small>{data.country}</small></h4>
            <NiceDate time={data.time}/>
            <h5 className="text-capitalize">{data.description} | <small>Max. {data.max}° - Min. {data.min}°</small></h5>
            <div className="Forecast">
            <h4>Forecast</h4>
            <ul>
              <li>Pressure: {data.pressure} hPa</li>
              <li>Wind Speed: {data.wind}km/h </li>
              <li>UV Index: </li>
              <li>Humidity: {data.humidity}% </li>
            </ul>
          </div>
        </div> 
      </div>
    </div>
    );
}