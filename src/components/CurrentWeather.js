const CurrentWeather = (props) => {
  const currWeather = props.data.current;
  const icon = props.data.current.weather[0].icon;
  return (
    <div>
      <h2>Weather right now</h2>
      <div className="weather_display">
        <p>Temperature: {currWeather.temp}</p>
        <p>Feels Like: {currWeather.feels_like}</p>
        <p>Pressure: {currWeather.pressure}</p>
        <p>Humidity: {currWeather.humidity}</p>
        <p>Wind Speed: {currWeather.wind_speed}</p>
        <p>Wind Degrees: {currWeather.wind_deg}</p>
        <p>Clouds: {currWeather.clouds}</p>
        <p>Icon: {icon}</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
