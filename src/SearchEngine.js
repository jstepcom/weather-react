import React, { useState } from 'react';
import Velociraptor from './img/Velociraptor.gif'



export default function Current({info}){
  const data = {temp: Math.round(info.main.temp),
                city: info.name, 
                country: info.sys.country, 
                description:info.weather[0].description, 
                max:info.main.temp_max, 
                min:info.main.temp_min}
   console.log(info)

    

   

    return(
        
    <div>
      <div className="row">
            <div className="col-md-8">
              <h1>
                Forecast
              </h1>
            </div> 
            <div className="col-md-4">
              <div className="current"> 
                <h1>{data.temp}°C </h1> 
                <h4>{data.city}, <small>{data.country}</small></h4>
              </div>
              <h4>Date, time:time</h4>
              <h4 className="text-capitalize">{data.description}| <small>Max. {data.max}° - Min. {data.min}°</small></h4>

            </div> 
          </div>
        </div>

    );
}