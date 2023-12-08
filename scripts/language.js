function changeLanguage(lang) {
    const langTogglePL = document.getElementById('langTogglePL');
    const langToggleEN = document.getElementById('langToggleEN');
    const queryInput = document.getElementById('query');
    const dayButton = document.getElementById('day_button');
    const weekButton = document.getElementById('week_button');
    const day1 = document.getElementById('day_1');
    const day2 = document.getElementById('day_2');
    const day3 = document.getElementById('day_3');
    const day4 = document.getElementById('day_4');
    const day5 = document.getElementById('day_5');
    const day6 = document.getElementById('day_6');
    const day7 = document.getElementById('day_7');

    const infoUV = document.getElementById('info_UV');
    const infoWind = document.getElementById('info_wind');
    const infoSunset = document.getElementById('info_sunset');
    const infoHumidity = document.getElementById('info_humidity');
    const infoVisibility = document.getElementById('info_visibility');
    const infoAir = document.getElementById('info_air');


    if (lang === 'pl') {
        langTogglePL.checked = true;
        langToggleEN.checked = false;
        languageText.textContent = 'Język:';
        settingsText.textContent = 'Ustawienia';
        darkModeText.textContent = 'Tryb ciemny';
        queryInput.placeholder = 'Szukaj...';
        dayButton.textContent = 'Dzień';
        weekButton.textContent = 'Tydzień';
        day1.textContent = 'Poniedziałek';
        day2.textContent = 'Wtorek';
        day3.textContent = 'Środa';
        day4.textContent = 'Czwartek';
        day5.textContent = 'Piątek';
        day6.textContent = 'Sobota';
        day7.textContent = 'Niedziela';
        infoUV.textContent = 'Indeks UV';
        infoWind.textContent = 'Prędkość Wiatru';
        infoSunset.textContent = 'Wschód i Zachód';
        infoHumidity.textContent = 'Wilgotność';
        infoVisibility.textContent = 'Widoczność';
        infoAir.textContent = 'Jakość Powietrza';
    } else if (lang === 'en') {
        langToggleEN.checked = true;
        langTogglePL.checked = false;
        languageText.textContent = 'Language:';
        settingsText.textContent = 'Settings';
        darkModeText.textContent = 'Dark mode';
        queryInput.placeholder = 'Search...';
        dayButton.textContent = 'Day';
        weekButton.textContent = 'Week';
        day1.textContent = 'Monday';
        day2.textContent = 'Tuesday';
        day3.textContent = 'Wednesday';
        day4.textContent = 'Thursday';
        day5.textContent = 'Friday';
        day6.textContent = 'Saturday';
        day7.textContent = 'Sunday';
        infoUV.textContent = 'UV Index';
        infoWind.textContent = 'Wind Status';
        infoSunset.textContent = 'Sunrise/Sunset';
        infoHumidity.textContent = 'Humidity';
        infoVisibility.textContent = 'Visibility';
        infoAir.textContent = 'Air Quality';
    }
}

function toggleLanguage(selectedCheckbox) {
    const checkboxes = document.getElementsByName('langToggle');
    for (let checkbox of checkboxes) {
        if (checkbox !== selectedCheckbox) {
            checkbox.checked = false;
        }
    }
    if (selectedCheckbox.checked) {
        const selectedLang = selectedCheckbox.value;
        changeLanguage(selectedLang);
    }
}

window.onload = function() {
    const langTogglePL = document.querySelector('input[value="pl"]');
    langTogglePL.checked = true;
    changeLanguage('pl');
};
