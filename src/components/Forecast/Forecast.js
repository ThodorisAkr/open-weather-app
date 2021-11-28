import { useState } from "react";

import classes from "./Forecast.module.css";
import ForecastItem from "./ForecastItem";

const Forecast = (props) => {
  const [forecast, setForecast] = useState();
  const [showButton, setShowButton] = useState(true);

  const openForecastHandler = () => {
    setShowButton(false);

    //filter the days so the current day doesn't appear in the forecast
    const today = new Date().getDate();

    const filteredDays = props.forecastData.filter((day) => {
      return new Date(day.dt * 1000).getDate() !== today;
    });
    setForecast(filteredDays);
  };

  const closeForecastHandler = () => {
    setShowButton(true);
  };

  return (
    <div className={classes.forecast}>
      {showButton && (
        <button className={classes.open_forecast} onClick={openForecastHandler}>
          7-day Forecast
        </button>
      )}
      {forecast && !showButton && (
        <div>
          <div className={classes.container}>
            <h2>Next 7 days Forecast</h2>
            <div className={classes.grid}>
              {forecast.map((item) => {
                return <ForecastItem key={item.dt} data={item} />;
              })}
            </div>
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
