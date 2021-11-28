import classes from "./WeatherDetails.module.css";

const WeatherDetails = (props) => {
  const weather = props.details;
  let temperature = 0;
  let feeling = 0;

  if (weather.temp.day) {
    temperature = ((weather.temp.day + weather.temp.night) / 2).toFixed(2);
  } else {
    temperature = weather.temp;
  }

  if (weather.feels_like.day) {
    feeling = ((weather.feels_like.day + weather.feels_like.night) / 2).toFixed(
      2
    );
  } else {
    feeling = weather.feels_like;
  }

  const icon = weather.weather[0].icon;
  const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className={classes.grid}>
      <div className={classes.gridItem}>
        <img src={iconURL} alt="weather icon" />
        <div>
          <p>{temperature} °</p>
          <p>RealFeel: {feeling}°</p>
        </div>
      </div>
      <div className={classes.gridItem}>
        <p>Cloudiness: </p>
        {weather.clouds}%
      </div>
      <div className={classes.gridItem}>
        <p>Pressure:</p>
        {weather.pressure} hPa
      </div>
      <div className={classes.gridItem}>
        <p>Humidity:</p>
        {weather.humidity}%
      </div>
      <div className={classes.gridItem}>
        <p>Wind Speed:</p>
        {weather.wind_speed} m/s
      </div>
      <div className={classes.gridItem}>
        <p>Wind Degrees:</p>
        {weather.wind_deg}°
      </div>
    </div>
  );
};
export default WeatherDetails;
