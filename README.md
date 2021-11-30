# Open Weather App - React JS

This app is using the OpenWeatherMap API to fetch data for the current weather, as well as forecast for the 7 upcoming days.
On load, it fetches the data and renders the current weather, a 7-day Forecast button and a Max Temperature Line Chart. More information below:

Current Weather: The current weather includes information about temperature, feeling, pressure, humidity, wind speed & wind deg, cloudiness and a weather icon given by Weather API.

## 7-day Forecast button
When pressed, a grid of the next seven days is rendered which outputs the name of the day, an icon(similar to the current weather one) and the mean temperature for each of the seven next days. Each grid Item can be 
pressed, outputting a Modal with the corresponding day's details(like in current weather). The user can click out of the modal to close it. The user can click a "Hide Forecast" button which is placed after the grid to close the 7-day Forecast.

## Line Chart
The Line Chart is placed last. Made with react-chartjs-2 package, it outputs a (line) chart which shows the Max
temperature for each day of the upcoming seven.

## Limit API calls
### Inside the custom hook
To limit API calls to 60 per minute in the custom hook, I used bottleneck package responsible for http requests, to execute 1 request per second. 

### On Page Reload
To limit API calls to 60 per minute when the page is reloaded, I used Local Storage. The first time the page loads, the fetch happens as it is and two local Storage variables are set, one for the data and one for the time untill the next fetch. If we try to reload the page before one second passes, then the data in local Storage is being used to output the weather. When one second passes, if we reload the page it makes the API call again to fetch "new" data.

# Installation Process
**To be able to run it you will need NodeJS installed**

To install the app and run it, clone the repository locally and inside the folder run npm install. After that in App.js change the
API_KEY const with your API key. Finally, run npm start in the folder and open the browser at localhost:3000/


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


