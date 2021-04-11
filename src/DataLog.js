import React, { useState, useEffect } from 'react';
import Prediction from './Prediction';
import Picture from './Picture';
import NiceDate from './NiceDate';
import Load from './Load';
import axios from 'axios';
import './style/DataLog.css'

export default function DataLog({info}){
  const days = ["Sunday", "Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const iconUrl=`http://openweathermap.org/img/wn/`;
  let usis = info.unit;
  let [loaded, setLoaded] = useState(false);
  let [data, setData] = useState({time:new Date(),icon:'01d'});
  let [wData, setWData] = useState(null);
  let [units, setUnits] = useState({temperature: "ºC", windSpeed:'m/s'});

  function handleResponse(response){
    setWData(response.data.daily);
    setData({temp: Math.round(response.data.current.temp),
     description:response.data.current.weather[0].description, 
     max:Math.round(response.data.daily[0].temp.max), 
     min:Math.round(response.data.daily[0].temp.min), 
     pressure:response.data.current.pressure, 
     wind:response.data.current.wind_speed, 
     uvi: response.data.current.uvi,
     humidity:response.data.current.humidity, 
     icon:response.data.current.weather[0].icon, 
     time:new Date(response.data.current.dt * 1000)}); 
     setLoaded(true);
 }

  useEffect(()=>{
    setLoaded(false);
    if (usis==='metric'){
      setUnits({temperature: "ºC", windSpeed:'m/s'});
    }else{setUnits({temperature: "ºF", windSpeed:'mph'})}
  },[info.unit])
 
 if(loaded){
 return(
 <div className="data">
   <div className="row">
     <div className="col-8">
       <h2>This week</h2>
       <div className="row">
         {wData.map(function(dailydata,index){
             if (index<7&&index>=1){
                return(<div className='col' key={index}>
               <Prediction weekData = {dailydata} week={days} icon={iconUrl}/>
             </div>);}else{return(null)}
           })}
         </div>
          <Picture place={info.city}/>
      </div> 
      <div className="col-4">
        <div className="title"> 
         <img src={`${iconUrl}${data.icon}.png`} alt="Weather icon"/>
            <h2>{data.temp} {units.temperature}</h2>
            <h4>{info.city}, <small>{info.country}</small></h4>
         </div>
         <NiceDate time={data.time} days = {days}/>
         <h5 className="text-capitalize statistic">{data.description} | <small>Max:{data.max}°-Min:{data.min}°</small></h5>
         <div className="Forecast">
         <h4>Forecast</h4>
         <ul>
           <li>Pressure: {data.pressure} hPa</li>
           <li>Wind Speed: {data.wind} {units.windSpeed}</li>
           <li>UV Index: {data.uvi} </li>
           <li>Humidity: {data.humidity}% </li>
         </ul>
       </div>
     </div> 
   </div>
 </div>
 );
}
else{
  console.log(info.coord)
   const dailyUrl = `https://api.openweathermap.org/data/2.5/onecall?`;
   const predUrl = `${dailyUrl}lat=${info.coord.lat}&lon=${info.coord.lon}&units=${info.unit}&appid=${info.key}`;
   axios.get(predUrl).then(handleResponse);
   return <Load/>;}}