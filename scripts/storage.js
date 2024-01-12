function saveCity(city) {
    const lastCities = getCities();
    lastCities.unshift(city); 
    const limitedCities = lastCities.slice(0, 5);
    localStorage.setItem('lastCities', JSON.stringify(limitedCities));
  }
  
  function getCities() {
    const storedCities = localStorage.getItem('lastCities');
    return storedCities ? JSON.parse(storedCities) : [];
}
  