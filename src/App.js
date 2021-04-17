import React, { useState } from 'react';
import CitySearch from './CitySearch';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <CitySearch defaultCity = 'New York'/>
        <footer>This code is <a href="https://github.com/jstepcom/weather-react" target="_blank">Open Sourced</a> on github</footer>
      </div>
    </div>
  );
}
export default App;
