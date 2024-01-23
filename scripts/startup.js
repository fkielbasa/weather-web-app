const darkModeCheckbox = document.getElementById('darkModeToggle');

window.onload = function() {
    currentLang = 'pl'
    changeLanguage('pl');
    changeTemperature('C');
    currentUnit = "C"
    display_mode('day');
    //darkModeCheckbox.checked = true;
};