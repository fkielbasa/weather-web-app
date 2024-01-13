window.onload = function() {
    const langTogglePL = document.querySelector('input[value="pl"]');
    langTogglePL.checked = true;
    changeLanguage('pl');
    changeTemperature('C');
    display_mode('day');
    infoContent.style.display = 'none';
};