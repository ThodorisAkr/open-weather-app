import classes from "./CurrentWeather.module.css";

const CurrentWeather = (props) => {
  const currWeather = props.data.current;
  const icon = props.data.current.weather[0].icon;
  const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <div className={classes.display}>
      <h2>Weather at your location</h2>
      <div className={classes.grid}>
        <div className={classes.gridItem}>
          <img src={iconURL} alt="weather icon" />
          <div>
            <p>{currWeather.temp} °</p>
            <p>Feels Like: {currWeather.feels_like}</p>
          </div>
        </div>
        <div className={classes.gridItem}>
          <p>Cloudiness: </p>
          {currWeather.clouds}%
        </div>
        <div className={classes.gridItem}>
          <p>Pressure:</p>
          {currWeather.pressure} hPa
        </div>
        <div className={classes.gridItem}>
          <p>Humidity:</p>
          {currWeather.humidity}%
        </div>
        <div className={classes.gridItem}>
          <p>Wind Speed:</p>
          {currWeather.wind_speed} m/s
        </div>
        <div className={classes.gridItem}>
          <p>Wind Degrees:</p>
          {currWeather.wind_deg}°
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
