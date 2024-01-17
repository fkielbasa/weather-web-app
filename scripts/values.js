function measureUvIndex(uvIndex) {
    if (uvIndex <= 2) {
      return "Low";
    } else if (uvIndex <= 5) {
      return "Moderate";
    } else if (uvIndex <= 7) {
      return "High";
    } else if (uvIndex <= 10) {
      return "Very High";
    } else {
      return "Extreme";
    }
  }

  function updateHumidityStatus(humidity) {
    if (humidity <= 30) {
      return "Low";
    } else if (humidity <= 60) {
      return "Moderate";
    } else {
      return "High";
    }
  }
  
  function updateVisibiltyStatus(visibility) {
    if (visibility <= 0.03) {
      return "Dense Fog";
    } else if (visibility <= 0.16) {
      return "Moderate Fog";
    } else if (visibility <= 0.35) {
      return "Light Fog";
    } else if (visibility <= 1.13) {
      return "Very Light Fog";
    } else if (visibility <= 2.16) {
      return "Light Mist";
    } else if (visibility <= 5.4) {
      return "Very Light Mist";
    } else if (visibility <= 10.8) {
      return "Clear Air";
    } else {
      return "Very Clear Air";
    }
  }
 
  function updateAirQualityStatus(airquality) {
    if (airquality <= 50) {
      return "Good";
    } else if (airquality <= 100) {
      return "Moderate";
    } else if (airquality <= 150) {
      return "Unhealthy for Sensitive Groups";
    } else if (airquality <= 200) {
      return "Unhealthy";
    } else if (airquality <= 250) {
      return "Very Unhealthy";
    } else {
      return "Hazardous";
    }
  }