const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const flag = document.querySelector("#country-img");
const searchInput = document.querySelector("#country-input").value;
const searchBtn = document.querySelector("#search");

// const getCountryData = (country) => {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const html = `
// <article class="country">
// <img class="country-img" src="${data.flags.svg}"/>
// <div class="country-data>
// <h3 class="country-name">${data.name.common}</h3>
// <h4 class="country-region">${data.region}</h4>
// <p class="country-row"><span>Population: </span>${(
//       +data.population / 1000000
//     ).toFixed(2)} <span>million</span></p>
// <p class="country-row"><span>Capital: </span>${data.capital}</p>
//   </div>
//   </article>`;
//     countriesContainer.insertAdjacentHTML("beforeend", html);
//   });
// };

/************* */

const renderCountry = (data) => {
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
};
// const getCountryAndNeighbor = (country) => {
//   // AJAX call 1
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     //renderCountry 1
//     renderCountry(data);

//     const [neighbor] = data.borders;

//     if (!neighbor) return;

//     //Ajax call 2
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbor}`);
//     request2.send();

//     request2.addEventListener("load", function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2);
//     });
//   });
// };

// getCountryAndNeighbor("norway");

// const request = fetch("https://restcountries.com/v3.1/name/nepal");
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
const countryVal = prompt("Please provide a country name.");

const getCountryData = function (countryVal) {
  fetch(`https://restcountries.com/v3.1/name/${countryVal}`)
    .then((response) => response.json())
    .then((data) => renderCountry(data[0]));
};

getCountryData(countryVal);
