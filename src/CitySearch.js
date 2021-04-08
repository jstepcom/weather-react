import React, { useState } from 'react';
import logo from './img/logo.svg';
import Units from './Units';
import './style/Weather.css';
import SweetAlert2 from 'react-sweetalert2';


export default function CitySearch({defaultCity}){
 
  let [element, setElement] = useState();
  let [city, setCity] = useState();
  let [scity, setScity] = useState(defaultCity);
  const swalProps = {
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
    text: 'Please type a city'};

  function handleCity(event){
    setCity(event.target.value); 
  }

  function handleSubmit(event){
    event.preventDefault();
    if (city){
      setElement(); 
      setScity(city);
    }else{
      setScity(scity);          
      setElement(<div><SweetAlert2 {...swalProps} /></div>);
    }
  }
    return(
      <div className="search-city">
        <nav className="navbar  Weather-header">
          <img src={logo} alt="react-logo"  className="Weather-logo d-inline-block align-text-top"/>
          <h1> Weather app </h1>
          <small>by JSCO</small>
          <form onSubmit = {handleSubmit} requiredvalue={city} className="d-flex Weather-form">
            <input type="search" placeholder="Search City" autoFocus= "on" className="form-control me-2" onChange={handleCity}/>
            <button className="btn" type="submit">Search</button>
          </form> 
        </nav>
        <div className="card border-info">
         {element}
         <Units city={scity}/>
        </div>
      </div>
    );   
}
