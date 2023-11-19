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

async function getWeather() {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=066ec9f33ab64d4db68224838231411&q=toronto`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  return weatherData;
}

const handleWeatherData = (weatherData) => {
  console.log(weatherData.location)
};

async function main() {
  try {
    const weatherData = await getWeather();
    handleWeatherData(weatherData);
  } catch (error) {
    console.log(error.error);
  }
}

main()
// async function searchFunc() {
//   submit.addEventListener("click", (e) => {
//     e.preventDefault();
//     let searchValue = search.value;
//     const response = fetch(
//       `https://api.weatherapi.com/v1/current.json?key=066ec9f33ab64d4db68224838231411&q=${searchValue}`,
//       { mode: "cors" }
//     )
//       .then(function (response) {
//         console.log(response);
//         let data = response.json();
//         return data;
//       })
//       .then(function (data) {
//         console.log(data)
//         countryCity.textContent = "";
//         countryCity.textContent = `${data.location.country}, ${data.location.name}`;
//         temperature.textContent = "";
//         temperature.textContent = `${data.current.temp_c} ℃`;
//         humidity.textContent = "";
//         humidity.textContent = `${data.current.humidity}`;
//         wind.textContent = "";
//         wind.textContent = `${data.current.wind_kph} km/h`;
//       });
//   });
// }

// searchFunc();
