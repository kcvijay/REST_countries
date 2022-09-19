const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const flag = document.querySelector("#country-img");
const searchInput = document.querySelector("#country-input").value;
const searchBtn = document.querySelector("#search");

const getCountryData = (country) => {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `
<article class="country">
<img class="country-img" src="${data.flags.svg}"/>
<div class="country-data>
<h3 class="country-name">${data.name.common}</h3>
<h4 class="country-region">${data.region}</h4>
<p class="country-row"><span>Population: </span>${(
      +data.population / 1000000
    ).toFixed(2)} <span>million</span></p>
<p class="country-row"><span>Capital: </span>${data.capital}</p>
  </div>
  </article>`;
    countriesContainer.insertAdjacentHTML("beforeend", html);
  });
};

getCountryData("japan");
getCountryData("usa");
getCountryData("ukraine");
