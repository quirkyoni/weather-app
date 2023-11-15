import "./style.css";

async function getWeather() {
  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=066ec9f33ab64d4db68224838231411&q=toronto",
    { mode: "cors" }
  );
  const weatherData = await response.json();
  console.log(weatherData);
}

getWeather();
