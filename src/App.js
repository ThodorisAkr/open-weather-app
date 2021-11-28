import { useEffect, useState } from "react";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Forecast from "./components/Forecast/Forecast";
import useHttp from "./hooks/use-http";
import LoadingSpinner from "./UI/LoadingSpinner";

const currentWeatherEndpoint = "";
//"https://api.openweathermap.org/data/2.5/onecall?lat=40.58725980318928&lon=22.948223362612612&exclude=hourly,minutely&appid=91c7ee372156787b4c3f5d629332d834&units=metric";

function App() {
  const [weather, setWeather] = useState(null);

  //Using a custom hook to make the get request and handle error and loading state
  const { isLoading, error, sendRequest: fetchWeather } = useHttp();

  //Fetch data on component load and set weather state
  useEffect(() => {
    const fetchData = (weatherObj) => {
      setWeather(weatherObj);
    };

    fetchWeather(currentWeatherEndpoint, fetchData);
  }, [fetchWeather]);

  return (
    <div className="App">
      <h1>Open Weather</h1>
      <main>
        {error && <p className="error">{error}</p>}
        {isLoading && <LoadingSpinner />}
        {weather && <CurrentWeather data={weather} />}
        <Forecast />
      </main>
    </div>
  );
}

export default App;
