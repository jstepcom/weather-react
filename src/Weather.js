import React, { useState } from 'react';
import logo from './img/logo.svg';
import Load from './Load';
import './style/Weather.css';
import axios from 'axios';
import SearchEngine from './SearchEngine';


export default function Weather(){
  const apiKey = "b04fe89ae8d23d63826a70cf52ffdc7c"; 
  let [city, setCity] = useState("Monterrey");
  const [data, setData] = useState();
  const [run, setRun] = useState(false);

    
    function getData(response){
      console.log(response.data)
      setData(response.data);
      setRun (true);

    }

    if (run){
      return(
        <div>
          <nav className="navbar  Weather-header">
            <img src={logo} alt=""  className="Weather-logo d-inline-block align-text-top"/>
            <h1> Weather app </h1>
            <small>by JSCO</small>
            <form className="d-flex Weather-form">
              <input type="search" placeholder="Search City" className="form-control me-2" />
              <button className="btn" type="submit">Search</button>
            </form> 
          </nav>
          <div className="card App-card" >
            <SearchEngine info={data}/>
          </div>
        </div>
    );} else{

      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      axios.get(apiUrl).then(getData)
      return(
        <div> <div className="card App-card" style={{ width: '75rem' }}>
        <Load />
      </div></div>
      );}    
}
