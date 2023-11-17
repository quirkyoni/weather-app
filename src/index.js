import "./style.css";

const search = document.querySelector(".search");
const submit = document.querySelector(".submit");

const city = document.querySelector(".city");
const temperature = document.querySelector(".temperature");
const feelsLike = document.querySelector(".feels-like");
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
        city.textContent += ` ${data.location.name}`;
        temperature.textContent += ` ${data.current.temp_c}`;
        feelsLike.textContent += ` ${data.current.feelslike_c}`;
        humidity.textContent += ` ${data.current.humidity}`;
        wind.textContent += ` ${data.current.wind_kph}`;
      });
  });
}

searchFunc();
