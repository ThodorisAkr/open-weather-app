import classes from "./ForecastItem.module.css";

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
//temperature, feels like, pressure, humidity, wind speed & wind deg, clouds and a weather icon

const ForecastItem = (props) => {
  const forecast = props.data;
  const icon = forecast.weather[0].icon;
  const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  const date = new Date(forecast.dt * 1000);
  const day = weekday[date.getDay()];

  const meanTemp = ((forecast.temp.max + forecast.temp.min) / 2).toFixed(2);

  const openDetailsHandler = () => {
    console.log("Modal Opened");
  };

  console.log(forecast);
  return (
    <div className={classes.item_display} onClick={openDetailsHandler}>
      <div className={classes.day}>{day.substring(0, 3)}</div>
      <img src={iconURL} alt="weather icon" />
      <div className={classes.mean_temp}>{meanTemp}°</div>
    </div>
  );
};
export default ForecastItem;
