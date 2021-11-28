import { useState } from "react";
import useHttp from "../../hooks/use-http";
import classes from "./Forecast.module.css";
import LoadingSpinner from "../../UI/LoadingSpinner";

const forecastEndpoint =
  "https://api.openweathermap.org/data/2.5/forecast?lat=40.58725980318928&lon=22.948223362612612&cnt=1&appid=91c7ee372156787b4c3f5d629332d834&units=metric";

const dummy_api = "https://jsonplaceholder.typicode.com/todos/1";
const Forecast = () => {
  const [forecast, setForecast] = useState();
  const [showButton, setShowButton] = useState(true);
  const { isLoading, error, sendRequest: fetchWeather } = useHttp();

  const forecastHandler = () => {
    setShowButton(false);
    const fetchForecast = (forecastObj) => {
      setForecast(forecastObj);
      console.log(forecastObj);
    };

    fetchWeather(dummy_api, fetchForecast);
  };

  const closeForecastHandler = () => {
    setShowButton(true);
  };

  return (
    <div className={classes.forecast}>
      {showButton && (
        <button className={classes.button} onClick={forecastHandler}>
          7-day Forecast
        </button>
      )}
      {isLoading && <LoadingSpinner />}
      {error && <p className="error">{error}</p>}
      {forecast && !showButton && (
        <div>
          <div className={classes.grid}>
            <h2>Next 7 days</h2>
            <p>{forecast.id}</p>
            <p>{forecast.title}</p>
            <p>{forecast.userId}</p>
          </div>
          <button className={classes.close} onClick={closeForecastHandler}>
            Hide forecast
          </button>
        </div>
      )}
    </div>
  );
};

export default Forecast;
