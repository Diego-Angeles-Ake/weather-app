import React, { useState } from 'react';
import './Weather.css';
import MinMax from './MinMax';
import Sun from './Sun';
import WindHum from './WindHum';
import { GiThermometerScale } from 'react-icons/gi';
import { IoAccessibilitySharp } from 'react-icons/io5';

import f from '../utils/farenheit';

export default function Weather({ apiData, icon }) {
  const [isFarenheit, setIsFarenheit] = useState(false);
  const city = apiData.name;
  const country = apiData.sys.country;
  const des = apiData.weather[0].description;
  const temp = apiData.main.temp;
  const tempF = f(temp);
  const tempFeel = apiData.main.feels_like;
  const tempFeelF = f(tempFeel);

  return (
    <div className='weather-container'>
      <div className='weather-card'>
        <h1 id='title'>Weather</h1>
        <h2>
          {city}, {country}
        </h2>
        <br />
        <div className='stats-container'>
          <div>
            <h4 id='des'>{des}</h4>
            <div className='wicon-wrapper'>
              <img src={icon} alt='' />
            </div>
          </div>
          <div className='stats'>
            <h4>
              <GiThermometerScale />
              Temperature
            </h4>
            <p>{`${isFarenheit ? tempF + ' °F' : temp + ' °C'}`}</p>
            <h4>
              <IoAccessibilitySharp />
              Feels Like
            </h4>
            <p>{`${isFarenheit ? tempFeelF + ' °F' : tempFeel + ' °C'}`}</p>
            <MinMax apiData={apiData} isFarenheit={isFarenheit} />
            <Sun apiData={apiData} />
            <WindHum apiData={apiData} />
            <button
              onClick={() => {
                setIsFarenheit(!isFarenheit);
              }}
            >
              {isFarenheit ? 'Celsius' : 'Farenheit'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
