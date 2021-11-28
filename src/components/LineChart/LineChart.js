import { Line } from "react-chartjs-2";

import classes from "./LineChart.module.css";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

const LineChart = (props) => {
  const weatherForecast = props.data;
  const maxTemp = weatherForecast.map((item) => item.temp.max);
  maxTemp.shift();
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
