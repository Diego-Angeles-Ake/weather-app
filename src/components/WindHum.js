import React from 'react';
import { GiImbricatedArrows } from 'react-icons/gi';
import { FaWind } from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi';

export default function WindHum({ apiData }) {
  const humidity = apiData.main.humidity;
  const windSpeed = apiData.wind.speed;
  const windDeg = apiData.wind.deg;

  return (
    <div className='wind-humidity-container'>
      <div className='stats-wind-humidity'>
        <h4>
          <WiHumidity />
          Humidity
        </h4>
        <p>{humidity}%</p>
      </div>
      <div className='stats-wind-humidity'>
        <h4>
          <FaWind />
          Wind
        </h4>
        <p>
          <GiImbricatedArrows
            style={{
              transform: `rotate(${windDeg - 135}deg)`,
            }}
          />
          {windSpeed} Km/h
        </p>
      </div>
    </div>
  );
}
