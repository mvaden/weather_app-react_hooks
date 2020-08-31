import React from 'react';
import './App.css';
// import customData from './attire.json';

import Forecast from './components/Forecasts/forecast.js';

function App() {
  return (
    <React.Fragment>
      <h1>Five-day forecast</h1>
      <div className="forecast-wrapper">
        <Forecast />
      </div>
    </React.Fragment>
  );
}

export default App;
