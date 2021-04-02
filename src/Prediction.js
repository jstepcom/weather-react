import React from "react";
import './style/Prediction.css'

export default function Prediction({weekData, wday, week, icon}){
     
    const wdata = {wmax:Math.round(weekData.daily[wday].temp.max), 
                   wmin:Math.round(weekData.daily[wday].temp.min),
                   wicon:weekData.daily[wday].weather[0].icon}

    return(
        <div className="prediction">
            <h5>{week[wday]}</h5>
            <img src={`${icon}${wdata.wicon}.png`}/>
            <p>{wdata.wmax}º - <small>{wdata.wmin}º</small> </p>
        </div>
    );
}