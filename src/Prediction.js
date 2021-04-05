import React, { useState } from "react";
import './style/Prediction.css'

export default function Prediction({weekData, week, icon}){
    const day = new Date(weekData.dt*1000);
    const nweek = week[day.getDay()].slice(0,3);
    const wdata = {wmax:Math.round(weekData.temp.max), 
                   wmin:Math.round(weekData.temp.min),
                   wicon:weekData.weather[0].icon}
    
    return( 
        <div className="prediction">
            <h5>{nweek}</h5>
            <img src={`${icon}${wdata.wicon}.png`}/>
            <p>{wdata.wmax}º <small>| {wdata.wmin}º</small> </p>
        </div>
    );
}