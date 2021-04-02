import React from 'react';
import Prediction from './Prediction';
import Picture from './Picture';
import NiceDate from './NiceDate';
import Nedry from './img/DNedry.gif'
import './style/DataLog.css'

export default function DataLog({info, predInfo}){
  const days = ["Sunday", "Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const numbers=[0,1,2,3,4,5,6]
  const wday = [];
  let increm = 0;
  const data = {temp: Math.round(info.main.temp),
                city: info.name, 
                country: info.sys.country, 
                description:info.weather[0].description, 
                max:Math.round(info.main.temp_max), 
                min:Math.round(info.main.temp_min), 
                pressure:info.main.pressure, 
                wind:info.wind.speed, 
                uvi: predInfo.current.uvi,
                humidity:info.main.humidity, 
                icon:info.weather[0].icon, 
                time:new Date(info.dt * 1000), 
                coord:info.coord}
    // console.log(data)             
  const iconUrl=`http://openweathermap.org/img/wn/`
  const wDate = data.time.getDay();
  
  for (let i=0;i<6;i++){
    if ((wDate+i+1)>=7){  
    wday[i] = numbers[increm];
    increm = increm + 1;
  }else{
    wday [i] = `${numbers[wDate+i+1]}`; 
  }}
 
    return(
    <div className="data">
      <div className="row">
        <div className="col-8">
          <h2>This week</h2>
          <div>
            <Prediction weekData = {predInfo} wday={wday[0]} week={days} icon={iconUrl}/>
            <Prediction weekData = {predInfo} wday={wday[1]} week={days} icon={iconUrl}/>
            <Prediction weekData = {predInfo} wday={wday[2]} week={days} icon={iconUrl}/>
            <Prediction weekData = {predInfo} wday={wday[3]} week={days} icon={iconUrl}/>
            <Prediction weekData = {predInfo} wday={wday[4]} week={days} icon={iconUrl}/>
            <Prediction weekData = {predInfo} wday={wday[5]} week={days} icon={iconUrl}/>
          </div>
           <Picture />
          {/* <img className="left" src={Nedry} alt="no image"/> */}
        </div> 
        <div className="col-4">
          <div className="title"> 
            <img src={`${iconUrl}${data.icon}.png`} alt="Weather icon"/>
            <h2>{data.temp}</h2> 
            <p>ºC</p>
            <p>|</p>
            <p>ºF</p>
            <h4>{data.city}, <small>{data.country}</small></h4>
          </div>
            <NiceDate time={data.time} days = {days}/>
            <h5 className="text-capitalize statistic">{data.description} | <small>Max:{data.max}°-Min:{data.min}°</small></h5>
            <div className="Forecast">
            <h4>Forecast</h4>
            <ul>
              <li>Pressure: {data.pressure} hPa</li>
              <li>Wind Speed: {data.wind} km/h </li>
              <li>UV Index: {data.uvi} </li>
              <li>Humidity: {data.humidity}% </li>
            </ul>
          </div>
        </div> 
      </div>
    </div>
    );
}