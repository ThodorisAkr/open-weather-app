# Open Weather App - React JS

This app is using the Open Weather API to fetch data for the current weather, as well as forecast for the 7 upcoming days.
On load, it renders the current weather, a 7-day Forecast button and a Line Chart.

Current Weather: The current weather includes information about temperature, feeling, pressure, humidity, wind speed & wind deg, cloudiness and a weather icon given by Weather API.

7-day Forecast button: When pressed, a grid of the next seven days is rendered which outputs the name of the day, an icon(similar to the current weather one) and the mean temperature for each of the seven next days. Each grid Item can be 
pressed, outputting a Modal with the corresponding day's details(like in current weather). The user can click out of the modal to close it. The user can click a "Hide Forecast" button which is placed after the grid to close the 7-day Forecast.

Line Chart: The Line Chart is placed last. Made with react-chartjs-2 package, it outputs a (line) chart witch shows the Max
temperature for each day of the upcoming seven.

To limit API calls to 60 per minute, I used bottleneck package to execute 1 request per second.

# Installation Process
**To be able to run it you will need NodeJS installed**

To install the app and run it, clone the repository locally and inside the folder run npm install. After that in App.js in
currentWeatherEndpoint, change the {API_KEY} with your key. Finally, run npm start in the folder and open the browser at localhost:3000/




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


