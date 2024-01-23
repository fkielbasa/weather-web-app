const darkModeCheckbox = document.getElementById('darkModeToggle');

window.onload = function() {
    currentLang = 'pl'
    changeLanguage('pl');
    changeTemperature('C');
    currentUnit = "C"
    setDarkMode(false);
    display_mode('day');
    //darkModeCheckbox.checked = true;
};