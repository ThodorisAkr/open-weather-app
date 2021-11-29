import { Line } from "react-chartjs-2";

import classes from "./LineChart.module.css";
import { Chart as ChartJS } from "chart.js/auto";

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const LineChart = (props) => {
  const weatherForecast = props.data;

  const today = new Date().getDate();
  const filteredDays = props.data
    .filter((day) => {
      return new Date(day.dt * 1000).getDate() !== today;
    })
    .map((day) => {
      return weekday[new Date(day.dt * 1000).getDay()];
    });

  console.log(filteredDays);

  const maxTemp = weatherForecast.map((item) => item.temp.max);
  maxTemp.shift();
  const data = {
    labels: filteredDays,
    datasets: [
      {
        label: "Max Temperatures Next Week",
        data: maxTemp,
      },
    ],
  };

  return (
    <div className={classes.graph}>
      <Line data={data} />
    </div>
  );
};
export default LineChart;
