import WeatherDetails from "../WeatherDetails/WeatherDetails";
import classes from "./CurrentWeather.module.css";

const CurrentWeather = (props) => {
  const currWeather = props.currentData;

  return (
    <div className={classes.display}>
      <h2>Weather at your location</h2>
      {currWeather && <WeatherDetails details={currWeather} />}
    </div>
  );
};

export default CurrentWeather;
