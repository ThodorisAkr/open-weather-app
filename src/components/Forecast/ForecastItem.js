import { useState, Fragment } from "react";
import classes from "./ForecastItem.module.css";
import Modal from "../UI/Modal/Modal";
import WeatherDetails from "../WeatherDetails/WeatherDetails";

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const ForecastItem = (props) => {
  //use State to show/hide modal conditionally
  const [modalOpened, setModalOpened] = useState(false);
  const forecast = props.data;
  const icon = forecast.weather[0].icon;
  const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  const date = new Date(forecast.dt * 1000);
  const day = weekday[date.getDay()];

  //mean temperature of day's max and min temperature
  const meanTemp = ((forecast.temp.max + forecast.temp.min) / 2).toFixed(2);

  const openDetailsHandler = () => {
    setModalOpened(true);
  };

  const closeDetailsHandler = () => {
    setModalOpened(false);
  };

  return (
    <Fragment>
      {modalOpened && (
        <Modal onClose={closeDetailsHandler}>
          <h2>Weather next {day}</h2>
          <WeatherDetails details={forecast} />
        </Modal>
      )}
      <div className={classes.item_display} onClick={openDetailsHandler}>
        <div className={classes.day}>{day.substring(0, 3)}</div>
        <img src={iconURL} alt="weather icon" />
        <div className={classes.mean_temp}>{meanTemp}°</div>
      </div>
    </Fragment>
  );
};
export default ForecastItem;
