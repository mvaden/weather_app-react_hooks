import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './forecast.css';


const API_key = '4f8768dbd19739e448bde51b6b7f9472';
const url = `http://api.openweathermap.org/data/2.5/onecall?lat=38.9072&lon=-77.0369&units=imperial&lang=en&appid=${API_key}`;


const Forecast = () => {
  const [conditions, setConditions] = useState([]);

  useEffect(() => {
    axios.get(url)
      .then(res => {
        let data = res.data.daily;
        data.splice(0, 3);
        setConditions(data);
      })
      .catch(e => {
        console.error(e);
      })
  }, []);

  return (
    <React.Fragment>
      <ul className="conditions-ul">
        {
          conditions.map(condition => (
            <li key={condition.id}>
              <div>
                <span className="label">
                  Temperature: 
                </span>
                {Math.round(condition.temp.day)}ºF
              </div>
              <div>
                <span className="label">
                  Humidity: 
                </span>
                {condition.humidity}%
              </div>
              <div>
                <span className="label">
                  Condition: 
                </span>
                {condition['weather'][0].main}
              </div>
              <div>
                <span className="label">
                  Description: 
                </span>
                {condition['weather'][0].description}
              </div>
            </li>
          ))
        }
      </ul>

      <ul>
      </ul>
    </React.Fragment>
  );
}

export default Forecast;