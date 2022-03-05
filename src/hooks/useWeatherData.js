import { useState, useEffect } from 'react';
import axios from 'axios';

function useWeatherData() {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);
  const [icon, setIcon] = useState('');
  const [bg, setBg] = useState('');
  const API_KEY = process.env.REACT_APP_API_KEY || process.env.API_KEY;
  const success = (pos) => {
    const fetchData = async () => {
      try {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`;
        const resp = await axios.get(url);
        const data = await resp?.data;

        setApiData(data);
        setIsLoading(false);
        setBg(data.weather[0].icon);
        setIcon(
          `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        );
      } catch (error) {
        setServerError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  };

  useEffect(() => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(success);
  }, []);
  return { isLoading, apiData, serverError, bg, icon };
}

export default useWeatherData;
