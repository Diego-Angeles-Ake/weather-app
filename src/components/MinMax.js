import React from 'react';
import { GiThermometerCold } from 'react-icons/gi';
import { GiThermometerHot } from 'react-icons/gi';
import f from '../utils/farenheit';

export default function MinMax({ apiData, isFarenheit }) {
  const min = apiData.main.temp_min;
  const minF = f(min);
  const max = apiData.main.temp_max;
  const maxF = f(max);

  return (
    <div className='min-max-container'>
      <div className='stats-temp'>
        <h4>
          <GiThermometerCold />
          Min
        </h4>
        <p>{`${isFarenheit ? minF + ' °F' : min + ' °C'}`}</p>
      </div>
      <div className='stats-temp'>
        <h4>
          <GiThermometerHot />
          Max
        </h4>
        <p>{`${isFarenheit ? maxF + ' °F' : max + ' °C'}`}</p>
      </div>
    </div>
  );
}
