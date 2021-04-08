import React, { useState, useEffect, useLayoutEffect } from 'react';
import Prediction from './Prediction';
import Picture from './Picture';
import NiceDate from './NiceDate';
import Load from './Load';
import WeatherUnits from './WeatherUnits';
import axios from 'axios';
import './style/DataLog.css'

export default function DataLog({info, pic, nedry}){
  
  const iconUrl=`http://openweathermap.org/img/wn/`;
  const days = ["Sunday", "Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let [loaded, setLoaded] = useState(false);
  let [data, setData] = useState({time:new Date(),icon:'01d'});
  let [wData, setWData] = useState(null);
  let [units, setUnits] = useState('metric');

useEffect(()=>{
  setLoaded(false);
},[info.coord])

useEffect(()=>{
  setLoaded(false);
},[units])

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

  function unitChange(){
    if (units==='metric'){
      console.log('imperial')
      setUnits('imperial')
    }else{setUnits('metric')}
  }

 
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
          <Picture image = {pic} dennis = {nedry} place={info.city}/>
      </div> 
      <div className="col-4">
        <div className="title"> 
         <img src={`${iconUrl}${data.icon}.png`} alt="Weather icon"/>
         <h2>{data.temp}</h2><div className='celsius'>
         ºC|<a href='/' onClick = {unitChange} >ºF</a>
           </div>
         
         <h4>{info.city}, <small>{info.country}</small></h4>
       </div>
         <NiceDate time={data.time} days = {days}/>
         <h5 className="text-capitalize statistic">{data.description} | <small>Max:{data.max}°-Min:{data.min}°</small></h5>
         <div className="Forecast">
         <h4>Forecast</h4>
         <ul>
           <li>Pressure: {data.pressure} hPa</li>
           <li>Wind Speed: {data.wind} m/s </li>
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
   const dailyUrl = `https://api.openweathermap.org/data/2.5/onecall?`;
   const predUrl = `${dailyUrl}lat=${info.coord.lat}&lon=${info.coord.lon}&units=${units}&appid=${info.key}`;
   axios.get(predUrl).then(handleResponse);
   return <Load/>;}}