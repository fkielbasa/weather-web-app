function saveCity(city) {
    const lastCities = getCities() ;
    if (!lastCities.includes(city)) {
        lastCities.unshift(city);
        const limitedCities = lastCities.slice(0, 5);
        localStorage.setItem('lastCities', JSON.stringify(limitedCities));
    }
}
  
function getCities() {
    const storedCities = localStorage.getItem('lastCities');
    return storedCities ? JSON.parse(storedCities) : [];
}

function getLastAddedCity() {
    const lastCities = getCities();
    if(lastCities != null){
        if (lastCities.length > 0) {
            return lastCities[0];
        } else {
            return null;
        }
    }
  }
  function areCitiesStored() {
    const storedCities = getCities();
    return storedCities.length > 0;
  }

  function clearCity(){
    localStorage.clear();
    location.reload();
  }