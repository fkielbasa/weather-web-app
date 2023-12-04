function changeLanguage(lang) {
    const langTogglePL = document.getElementById('langTogglePL');
    const langToggleEN = document.getElementById('langToggleEN');
    const queryInput = document.getElementById('query');

    if (lang === 'pl') {
        langTogglePL.checked = true;
        langToggleEN.checked = false;
        languageText.textContent = 'Język:';
        settingsText.textContent = 'Ustawienia';
        darkModeText.textContent = 'Tryb ciemny';
        queryInput.placeholder = 'Szukaj...'
    } else if (lang === 'en') {
        langToggleEN.checked = true;
        langTogglePL.checked = false;
        languageText.textContent = 'Language:';
        settingsText.textContent = 'Settings';
        darkModeText.textContent = 'Dark mode';
        queryInput.placeholder = 'Search...'
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
