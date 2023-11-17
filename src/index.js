import "./style.css";

const search = document.querySelector(".search");
const submit = document.querySelector(".submit");

const weatherCard = document.querySelector(".weather-card");
const countryCity = document.querySelector(".country-city");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

async function searchFunc() {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    let searchValue = search.value;
    const response = fetch(
      `https://api.weatherapi.com/v1/current.json?key=066ec9f33ab64d4db68224838231411&q=${searchValue}`,
      { mode: "cors" }
    )
      .then(function (response) {
        let data = response.json();
        return data;
      })
      .then(function (data) {
        console.log(data);
        countryCity.textContent = ""
        countryCity.textContent = `${data.location.country}, ${data.location.name}`;
        temperature.textContent = ""
        temperature.textContent = `${data.current.temp_c} ℃`;
        humidity.textContent = ""
        humidity.textContent = `${data.current.humidity}`;
        wind.textContent = ""
        wind.textContent = `${data.current.wind_kph}`;
      });
  });
}

searchFunc();
