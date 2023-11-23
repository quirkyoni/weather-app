import "./style.css";
// import temperatureImg from './temperature.png'
// import windImg from './wind.png'
// import humidityImg from './humidity.png'

const search = document.querySelector(".search");
const submit = document.querySelector(".submit");

const weatherCard = document.querySelector(".weather-card");
const countryCity = document.querySelector(".country-city");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const units = document.querySelector(".units");
const celsius = document.querySelector(".celsius");
const fahrenheit = document.querySelector(".fahrenheit");

async function getWeather(searchValue) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=066ec9f33ab64d4db68224838231411&q=${searchValue}`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  return weatherData;
}

const handleWeatherData = (weatherData) => {
  units.style.display = "block";
  units.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.className == "celsius") {
      temperature.textContent = "";
      temperature.textContent = `${weatherData.current.temp_c} ℃`;
    } else if (e.target.className == "fahrenheit") {
      temperature.textContent = "";
      temperature.textContent = `${weatherData.current.temp_f} ℉`;
    }
  });

  countryCity.textContent = "";
  countryCity.textContent = `${weatherData.location.country}, ${weatherData.location.name}`;
  temperature.textContent = "";
  temperature.textContent = `${weatherData.current.temp_c} ℃`;
  humidity.textContent = "";
  humidity.textContent = `${weatherData.current.humidity}`;
  wind.textContent = "";
  wind.textContent = `${weatherData.current.wind_kph} km/h`;
};

async function main(searchValue) {
  try {
    const weatherData = await getWeather(searchValue);
    handleWeatherData(weatherData);
  } catch (error) {
    console.log(error.error);
  }
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let searchValue = search.value;
  main(searchValue);
});
