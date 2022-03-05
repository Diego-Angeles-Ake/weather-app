import './App.css';
import Loading from './components/Loading';
import Weather from './components/Weather';
import ServerError from './components/ServerError';
import useWeatherData from './hooks/useWeatherData';

function App() {
  const { isLoading, serverError, apiData, bg, icon } = useWeatherData();
  // console.count(apiData);
  if (isLoading && !serverError) {
    return (
      <div className='App'>
        <Loading></Loading>
      </div>
    );
  } else if (apiData && !isLoading) {
    return (
      <div className={`App i${bg}`}>
        <Weather apiData={apiData} icon={icon}></Weather>
      </div>
    );
  } else {
    return (
      <div className='App'>
        {serverError && <ServerError serverError={serverError} />}
      </div>
    );
  }
}

export default App;
