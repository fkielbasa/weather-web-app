// function toggleDarkMode() {
//     const body = document.body;
//     const image = document.getElementById('darkModeToggle');
//     if (body.classList.contains('dark-mode')) {
//         body.classList.remove('dark-mode');
        
//     } else {
//         body.classList.add('dark-mode');
        
//     }
// }


function toggleDarkMode() {
    const body = document.body;
    const darkModeCheckbox = document.getElementById('darkModeToggle');
    const image = document.getElementById('settings_icon');

    darkModeCheckbox.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }

        updateSettingsIcon();
    });
}

function setDarkMode(isDarkMode) {
    const body = document.body;
    const darkModeCheckbox = document.getElementById('darkModeToggle');

    if (isDarkMode) {
        body.classList.add('dark-mode');
        darkModeCheckbox.checked = true;
    } else {
        body.classList.remove('dark-mode');
        darkModeCheckbox.checked = false;
    }

    updateSettingsIcon();
}

function updateSettingsIcon() {
    const body = document.body;
    const image = document.getElementById('settings_icon');

    if (body.classList.contains('dark-mode')) {
        image.src = './images/settings_dark.png';
    } else {
        image.src = './images/settings_light.png';
    }
}