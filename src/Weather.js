import React, { useState } from 'react';
import logo from './img/logo.svg';
import Load from './Load';
import DataLog from './DataLog';
import './style/Weather.css';
import axios from 'axios';
import SweetAlert2 from 'react-sweetalert2';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Weather({defaultCity}){
  const apiKey = "b04fe89ae8d23d63826a70cf52ffdc7c"; 
  const [data, setData] = useState({run:false});
  const [city, setCity] = useState(defaultCity);
  const [picture, setPicture] = useState({data:{}});
  let [picUrl, setPicUrl] = useState(false);

  function getCityImg(response){
    setPicture(response.data.photos[0].image.web);
    setPicUrl(true);
  }
  
  function getData(response){
    let newCity= (response.data.name.toLowerCase());
    newCity = newCity.replace(" ","-")
    const imgUrl = `https://api.teleport.org/api/urban_areas/slug:${newCity}/images/`;
    axios.get(imgUrl).then(getCityImg);
    setPicUrl(false);
    setData({city:response.data.name,
             country:response.data.sys.country,
             coord:response.data.coord,
             key:apiKey,
             run:true});
  }

  function search(){
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(getData)

  } 

  const [swalProps, setSwalProps] = useState({});
  function handleSubmit(event){
    event.preventDefault();
    if (city){search();}
    else{
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
          <DataLog info={data} pic={picture} nedry={picUrl}/>
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
