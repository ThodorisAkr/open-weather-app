import { useEffect, useState } from "react";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";

const currentWeatherEndpoint =
  "https://api.openweathermap.org/data/2.5/onecall?lat=40.58725980318928&lon=22.948223362612612&exclude=hourly,minutely&appid=11b0499bd13ab56063de7565a440eb97&units=metric";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(currentWeatherEndpoint);

      if (!res.ok) throw new Error("Something went wrong!");

      const data = await res.json();

      setLoading(false);

      setWeather(data);
    };

    fetchData().catch((error) => {
      setLoading(false);
      setError(error.message);
    });
  }, []);

  return (
    <div className="App">
      <h1>Open Weather</h1>
      <main>
        {error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
        {weather && <CurrentWeather data={weather} />}
        <p style={{ marginTop: "1rem", paddingTop: "1.5rem" }}>
          Seven Day Forecast
        </p>
      </main>
    </div>
  );
}

export default App;
