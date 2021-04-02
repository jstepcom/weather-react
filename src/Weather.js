import React, { useState } from 'react';
import logo from './img/logo.svg';
import Load from './Load';
import './style/Weather.css';
import axios from 'axios';
import DataLog from './DataLog';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export default function Weather({defaultCity}){
  const apiKey = "b04fe89ae8d23d63826a70cf52ffdc7c"; 
  const dailyUrl = `https://api.openweathermap.org/data/2.5/onecall?`;
  const onError = {current: {uvi: 0}, 
                  daily:[{temp:{max:0, min:0},
                          weather:[{icon:"04d"}]},{temp:{max:"04d", min:0},
                          weather:[{icon:"04d"}]},{temp:{max:0, min:0},
                          weather:[{icon:"04d"}]},{temp:{max:0, min:0},
                          weather:[{icon:"04d"}]},{temp:{max:0, min:0},
                          weather:[{icon:"04d"}]},{temp:{max:0, min:0},
                          weather:[{icon:"04d"}]},{temp:{max:0, min:0},
                          weather:[{icon:"04d"}]}]}
  const [data, setData] = useState();
  const [run, setRun] = useState(false);
  const [city, setCity] = useState(defaultCity);
  const [predictionData, setPredictionData] = useState(onError);

  function getPrediction(response){
    setPredictionData(response.data);
  }

  function getData(response){
    const predUrl = `${dailyUrl}lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&units=metric&appid=${apiKey}`
    axios.get(predUrl).then(getPrediction);
    setData(response.data);
    setRun (true);
  }


  function search(){
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(getData)

  } 

  function handleSubmit(event){
    event.preventDefault();
    if (city){
    search();}else{alert("Please type a city")}
  }
  
  function handleCity(event){
    setCity(event.target.value);
  }

  if (run){
    return(
      <div className="Weather">
        <nav className="navbar  Weather-header">
          <img src={logo} alt="react-logo"  className="Weather-logo d-inline-block align-text-top"/>
          <h1> Weather app </h1>
          <small>by JSCO</small>
          <form onSubmit={handleSubmit} className="d-flex Weather-form">
            <input type="search" placeholder="Search City" autoFocus= "on" className="form-control me-2" onChange={handleCity}/>
            <button className="btn" type="submit">Search</button>
          </form> 
        </nav>
        <div className="card border-info">
          <DataLog info={data} predInfo={predictionData}/>
        </div>
      </div>
    );} else{
      search();
      return(
        <div> <div className="card App-card" style={{ width: '75rem' }}>
        <Load />
      </div></div>
      );}    
}
