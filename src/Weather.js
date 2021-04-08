import React, { useState, useEffect } from 'react';
import Load from './Load';
import DataLog from './DataLog';
import './style/Weather.css';
import axios from 'axios';

export default function Weather({searchedcity, units}){
  const apiKey = "b04fe89ae8d23d63826a70cf52ffdc7c"; 
  let [data, setData] = useState({run:false});

  function getData(response){
    setData({city:response.data.name,
             country:response.data.sys.country,
             coord:response.data.coord,
             unit:units,
             key:"b04fe89ae8d23d63826a70cf52ffdc7c",
             run:true});
  }

  useEffect(()=>{
    setData({run:false})
  },[searchedcity])
  useEffect(()=>{
    setData({run:false})
  },[units])

  function search(){
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchedcity}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(getData);

  } 

  if (data.run){
    return(
      <div className="Weather">
        <div >
          <DataLog info={data}/>
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
