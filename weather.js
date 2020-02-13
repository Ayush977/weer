
const form = document.querySelector("form");

const fetchWeather = (city) =>{
  city = city;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}
    &appid=9f680a3b71fb8920237428a2892ff1dc`,
  {mode: 'cors'})
    .then(function(response) {
      return response.json()
    })
    .then(function(response){
      console.log (response);
      weather = response.name;
      displayWeather(response.weather[0].description, response.main.temp);
    })
    .catch(function(error){
      console.log("uh oh error");
      document.getElementById("display").textContent =
      `That doesn't seem to be a city.`
    })
}


const displayWeather = (cityWeather, cityTemp) =>{
  document.getElementById("display").textContent =
  `${Math.round(cityTemp - 273.15)}° C with ${cityWeather}.`

}



form.addEventListener("submit", function(e){
  e.preventDefault();
  fetchWeather(form.elements["city"].value);
})
