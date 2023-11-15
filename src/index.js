import "./style.css";

const city = document.querySelector(".city");
const temperature = document.querySelector(".temperature");
const feelsLike = document.querySelector(".feels-like");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

let weatherData = [];

async function getWeather() {
  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=066ec9f33ab64d4db68224838231411&q=toronto"
  );
  let data = await response.json();
  return data;
}

async function displayWeather() {
  let weatherData = await getWeather();
  console.log(weatherData.location);
  console.log(weatherData.current);
  city.textContent += ` ${weatherData.location.name}`;
  temperature.textContent += ` ${weatherData.current.temp_c}`;
  feelsLike.textContent += ` ${weatherData.current.feelslike_c}`
  humidity.textContent += ` ${weatherData.current.humidity}`
  wind.textContent += ` ${weatherData.current.wind_kph}`

}

displayWeather();
