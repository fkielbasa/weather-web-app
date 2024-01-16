const tempDiv = document.getElementById("info_temp")
const locationText = document.getElementById("location_day")
const mainIcon = document.getElementById("weather_day_icon")
const locationIcon = document.getElementById("location_day_icon")
const container = document.getElementById("container_lasts")

let currentUnit = 'C'
let currentCityData = ''

function setCurrentUnit(newUnit) {
  if (newUnit !== currentUnit) {
      currentUnit = newUnit;
      handleUnitChange();
  }
}

function handleUnitChange() {
  WeatherForDay(currentCityData,currentUnit,getMode())
}
window.addEventListener('load', loadDefaultData());

document.getElementById("search").addEventListener("submit", function(event) {
  event.preventDefault(); 
  let query = document.getElementById("query").value;
  getWeatherData(query,getMode());
  infoContent.innerHTML=""
});
document.getElementById("week_button").addEventListener("click", function() {
  WeatherForDay(currentCityData,currentUnit,getMode())
});
document.getElementById("day_button").addEventListener("click", function() {
  WeatherForDay(currentCityData,currentUnit,getMode())
});
function loadDefaultData(){
  if(areCitiesStored()) {
    generateLastCities();
    getWeatherData(getLastAddedCity(),getMode());
  }
  else {
    getWeatherData("Tarnów",getMode());
  }
}
function getWeatherData(city,mode) {
  const apiKey = "EJ6UBL2JEQGYB3AA4ENASN62J";
  const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`;
  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      if(data){
      saveCity(city);
      currentCityData = data;
      mainIcon.src=getIcon(data.currentConditions.icon)
      mainIcon.style.display = "inline";
      locationIcon.style.display = "inline";
      locationText.innerHTML = `<img id="location_day_icon" src="images/location.png">${data.resolvedAddress}`;
      WeatherForDay(data,currentUnit, mode);
      const v1 = data.currentConditions.uvindex;
      const v2 = data.currentConditions.windspeed;
      const v3 = data.currentConditions.sunrise;
      const v4 = data.currentConditions.sunset;
      const v5 = data.currentConditions.humidity;
      const v6 = data.currentConditions.visibility;
      const v7 = data.currentConditions.winddir;

      const detailsWeathers = [
        { title: "Indeks UV", value: v1, status: measureUvIndex(v1) },
        { title: "Prędkość wiatru", value: v2,status: "km/h" },
        { title: "Wschód i Zachód", value: v3,status: v4 },
        { title: "Widoczność", value: v5,status: updateHumidityStatus(v5) },
        { title: "Widoczność", value: v6,status: updateVisibiltyStatus(v6) },
        { title: "Jakość Powietrza", value: v7,status: updateAirQualityStatus(v7) },
      ];
      createWeatherTiles(detailsWeathers);
      }
    })
    .catch((error) => {
      alert("Nie znaleziono podanego miasta!")
      console.error("There was a problem fetching the data:", error);
      return null;
    });
}

function getIcon(condition) {
  if (condition === "partly-cloudy-day") {
    return "https://i.ibb.co/C1fngN5/cloudy.gif";
  } else if (condition === "partly-cloudy-night") {
    return "https://i.ibb.co/WH9svMy/partly-cloudy-day.gif";
  } else if (condition === "rain") {
    return "https://i.ibb.co/16hZS7p/rain.gif";
  } else if (condition === "clear-day") {
    return "https://i.ibb.co/XsQQfzV/sunny.gif";
  } else if (condition === "clear-night") {
    return "https://i.ibb.co/Qfy2bnF/partly-cloudy-night.gif";
  } else if (condition === "cloudy"){
    return "https://i.ibb.co/Z8wtZpY/cloudy.gif";
  } else if (condition === "snow"){
    return "https://i.ibb.co/CtPbGjm/snow.gif";
  } else if (condition === "wind"){
    return "https://i.ibb.co/HNXKgMn/oie-4115647z-FRRj-OON.gif";
  } else {
    return "https://i.ibb.co/QctWrfc/clouds.gif";
  }
}

function createWeatherTiles(details) {
  const infoContent = document.getElementById('day_info_content');

  details.forEach(detail => {
    const block = document.createElement('div');
    block.classList.add('day_info_block');

    const textBlock = document.createElement('span');
    textBlock.classList.add('day_info_text_block');
    textBlock.textContent = detail.title;

    const valueBlock = document.createElement('span');
    valueBlock.classList.add('day_info_value_block');
    valueBlock.textContent = detail.value;

    const moreBlock = document.createElement('span');
    moreBlock.classList.add('day_info_more_block');
    moreBlock.textContent = detail.status;

    block.appendChild(textBlock);
    block.appendChild(valueBlock);
    block.appendChild(moreBlock);

    infoContent.appendChild(block);
  });
}

const contentDay = document.getElementById("day_content")
const contentWeek = document.getElementById("week_content")

function WeatherForDay(data, unit, type){
  tempDiv.innerText = currentUnit === 'F' ? celciusToFahrenheit(data.currentConditions.temp) + "°F" : data.currentConditions.temp + "°C";
  contentDay.innerHTML = "";
  contentWeek.innerHTML = "";
  let numCards = (type === "day") ? 24 : 7;
  for (let i = 0; i < numCards; i++) {
      let card = document.createElement("div");
      card.classList.add("card");
      let dayName, dayTemp, iconCondition, iconSrc;

      if (type === "day") {
          dayName = getHour(data.days[0].hours[i].datetime);
          dayTemp = data.days[0].hours[i].temp;
          iconCondition = data.days[0].hours[i].icon;
      } else {
          dayName = getDayName(data.days[i].datetime);
          dayTemp = data.days[i].temp;
          iconCondition = data.days[i].icon;
      }
      if(unit === 'F'){
        dayTemp = celciusToFahrenheit(dayTemp);
      }
      iconSrc = getIcon(iconCondition);

      if (type === 'day') {
          card.innerHTML = `
              <div class="day_block">
                  <span class="day_text_block">${dayName}</span>
                  <img class="day_icon_block" src="${iconSrc}">
                  <span class="day_temp_block">${dayTemp}°${unit.toUpperCase()}</span>
              </div>
          `;
          contentDay.appendChild(card);
      } else {
          card.innerHTML = `
              <div class="week_block">
                  <span class="week_text_block">${dayName}</span>
                  <img class="week_icon_block" src="${iconSrc}">
                  <span class="week_temp_block">${dayTemp}°${unit.toUpperCase()}</span>
              </div>
          `;
          contentWeek.appendChild(card);
      }
  }
}
function generateLastCities(){
  const lastCities = getCities();
  lastCities.forEach(city => {
    const button = document.createElement('button');
    button.textContent = city;
    button.addEventListener('click', function() {
      getWeatherData(city, getMode());
      infoContent.innerHTML="";
    });
    container.appendChild(button);
  });
}

function getHour(time) {
  let hour = time.split(":")[0];
  let min = time.split(":")[1];
  if (hour > 12) {
    hour = hour - 12;
    return `${hour}:${min} PM`;
  } else {
    return `${hour}:${min} AM`;
  }
}
function getDayName(date) {
  let day = new Date(date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[day.getDay()];
}
function celciusToFahrenheit(temp) {
  return ((temp * 9) / 5 + 32).toFixed(1);
}
