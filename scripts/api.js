const tempDiv = document.getElementById("info_temp")
const locationText = document.getElementById("location_day")
const mainIcon = document.getElementById("weather_day_icon")
let unit = "°C"
let currentCityData = ""


document.getElementById("search").addEventListener("submit", function(event) {
  event.preventDefault(); 

  let query = document.getElementById("query").value;
  getWeatherData(query,getMode());
});

document.getElementById("week_button").addEventListener("click", function() {
  WeatherForDay(currentCityData,'f',getMode())
});
document.getElementById("day_button").addEventListener("click", function() {
  WeatherForDay(currentCityData,'f',getMode())
});

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
      currentCityData = data;
      tempDiv.innerText = data.currentConditions.temp + unit;
      mainIcon.src=getIcon(data.currentConditions.icon)
      locationText.innerHTML = `<img id="location_day_icon" src="images/location.png">${data.resolvedAddress}`;
      WeatherForDay(data,'f', mode);
      console.log(city)
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
    return "https://i.ibb.co/PZQXH8V/27.png";
  } else if (condition === "partly-cloudy-night") {
    return "https://i.ibb.co/Kzkk59k/15.png";
  } else if (condition === "rain") {
    return "https://i.ibb.co/kBd2NTS/39.png";
  } else if (condition === "clear-day") {
    return "https://i.ibb.co/rb4rrJL/26.png";
  } else if (condition === "clear-night") {
    return "https://i.ibb.co/1nxNGHL/10.png";
  } else if (condition === "cloudy"){
    return "https://i.ibb.co/kBd2NTS/39.png";
  } else {
    return "https://i.ibb.co/rb4rrJL/26.png";
  }
}

const contentDay = document.getElementById("day_content")
const contentWeek = document.getElementById("week_content")

function WeatherForDay(data, unit, type){
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

      iconSrc = getIcon(iconCondition);

      if (type === 'day') {
          card.innerHTML = `
              <div class="day_block">
                  <span class="day_text_block">${dayName}</span>
                  <img class="day_icon_block" src="${iconSrc}">
                  <span class="day_temp_block">${dayTemp + "°C"}</span>
              </div>
          `;
          contentDay.appendChild(card);
      } else {
          card.innerHTML = `
              <div class="week_block">
                  <span class="week_text_block">${dayName}</span>
                  <img class="week_icon_block" src="${iconSrc}">
                  <span class="week_temp_block">${dayTemp + "°C"}</span>
              </div>
          `;
          contentWeek.appendChild(card);
      }
  }
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
