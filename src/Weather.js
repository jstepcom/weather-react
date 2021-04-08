import React, { useState, useEffect } from 'react';
import logo from './img/logo.svg';
import Load from './Load';
import WeatherUnits from './WeatherUnits';
import './style/Weather.css';
import axios from 'axios';
import SweetAlert2 from 'react-sweetalert2';


export default function Weather({defaultCity}){
  const apiKey = "b04fe89ae8d23d63826a70cf52ffdc7c"; 
  let [data, setData] = useState({run:false});
  let [empty, setEmpty] = useState(false);
  let [city, setCity] = useState(defaultCity);
  let [swalProps, setSwalProps] = useState({});

  function getData(response){
    setData({city:response.data.name,
             country:response.data.sys.country,
             coord:response.data.coord,
             unit:'imperial',
             key:"b04fe89ae8d23d63826a70cf52ffdc7c",
             run:true});
    setEmpty(true);
  }

  function search(){
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(getData);

  } 

  function handleSubmit(event){
    event.preventDefault();
    // console.log(this.state.value)
    if (empty){search();}
    else{
      console.log('no')
      setSwalProps({
        show: true,
        showConfirmButton: true,
        timer: 3000,
        timerProgressBar: true,
        iconColor:'purple',
        toast:'true',
        position:'top-end',
        icon:'warning',
        width: '25%',
        confirmButtonColor: 'lime',
        text: 'Please type a city',
    });}
  }
  
  function handleCity(event){
    setCity(event.target.value);
    if(event.target.value){
      console.log(event.target.value)
      setEmpty(true)
    }else{
      console.log('Nocity');
      setEmpty(false)
    }

  }

  if (data.run){
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
          <WeatherUnits info={data}/>
        </div>
        <SweetAlert2 {...swalProps} />
      </div>
    );} else{
      search();
      return(
        <div> <div className="card App-card" style={{ width: '75rem' }}>
        <Load />
      </div></div>
      );}    
}
