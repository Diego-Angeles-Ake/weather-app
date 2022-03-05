import React from 'react';
import { GiSunrise } from 'react-icons/gi';
import { GiSunset } from 'react-icons/gi';

export default function Sun({ apiData }) {
  const sunRise_timestamp = apiData.sys.sunrise;
  const sunSet_timestamp = apiData.sys.sunset;
  const dateR = new Date(sunRise_timestamp * 1000);
  const hoursR = dateR.getHours();
  const minutesR = '0' + dateR.getMinutes();
  const secondsR = '0' + dateR.getSeconds();
  const dateS = new Date(sunSet_timestamp * 1000);
  const hoursS = dateS.getHours();
  const minutesS = '0' + dateS.getMinutes();
  const secondsS = '0' + dateS.getSeconds();
  const formattedSunrise =
    hoursR + ':' + minutesR.substr(-2) + ':' + secondsR.substr(-2);
  const formattedSunset =
    hoursS + ':' + minutesS.substr(-2) + ':' + secondsS.substr(-2);
  return (
    <div className='sun-container'>
      <div className='stats-sun'>
        <h4>
          <GiSunrise />
          Sunrise
        </h4>
        <p>{formattedSunrise}</p>
      </div>
      <div className='stats-sun'>
        <h4>
          <GiSunset />
          Sunset
        </h4>
        <p>{formattedSunset}</p>
      </div>
    </div>
  );
}
