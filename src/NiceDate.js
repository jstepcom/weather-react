import React from 'react';

export default function NiceDate({time}){
    let days = ["Sunday", "Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[time.getDay()];
    let daynum = time.getDate();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    if (hours < 10){hours = `0${hours}`}
    if (minutes < 10){minutes = `0${minutes}`}
    return( 
        <div className="date">
            <h4>{day} {daynum},  {hours}:{minutes} </h4>
        </div>
    );
}