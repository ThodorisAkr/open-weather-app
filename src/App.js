import { useEffect, useState } from "react";
import React from "react";

import "./App.css";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Forecast from "./components/Forecast/Forecast";
import useHttp from "./hooks/use-http";
import LoadingSpinner from "./components/UI/LoadingSpinner/LoadingSpinner";
import Footer from "./components/UI/Footer/Footer";
import LineChart from "./components/LineChart/LineChart";

const TIME_TO_NEXT_FETCH = 1000;
const API_KEY = "";
const currentWeatherEndpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=40.58725980318928&lon=22.948223362612612&exclude=hourly,minutely&appid=${API_KEY}&units=metric`;

function App() {
  const [weather, setWeather] = useState(null);

  //Using a custom hook to make the get request and handle error and loading state
  const { isLoading, error, sendRequest: fetchWeather } = useHttp();

  //Fetch data on component Load and set the Weather state.
  //On the first load the fetch happens normally. Then the data is stored in
  //local storage as a string. If we try to reload before 1000ms(TIME_TO_NEXT_FETCH var)
  //pass then the data that is used in the state is that of the local storage.
  useEffect(() => {
    const fetchData = (weatherObj) => {
      setWeather(weatherObj);
      const weatherLocalData = JSON.stringify(weatherObj);
      localStorage.setItem("weatherData", weatherLocalData);
      localStorage.setItem("time", new Date().getTime() + TIME_TO_NEXT_FETCH);
    };

    if (
      !localStorage.getItem("weatherData") ||
      localStorage.getItem("time") < new Date().getTime()
    ) {
      localStorage.removeItem("time");
      localStorage.removeItem("weatherData");
      fetchWeather(currentWeatherEndpoint, fetchData);
    } else {
      const weatherLocalData = localStorage.getItem("weatherData");
      const parsedData = JSON.parse(weatherLocalData);
      setWeather(parsedData);
    }
  }, [fetchWeather]);

  return (
    <div className="App">
      <h1>Open Weather</h1>
      <main>
        {error && <p className="error">{error}</p>}
        {isLoading && <LoadingSpinner />}
        {weather && <CurrentWeather currentData={weather.current} />}
        {weather && <Forecast forecastData={weather.daily} />}
        {weather && <LineChart data={weather.daily} />}
      </main>
      {(weather || error) && <Footer />}
    </div>
  );
}

export default App;
