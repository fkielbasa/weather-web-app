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

        if (body.classList.contains('dark-mode')) {
            image.src = './images/settings_dark.png'; 
        } else {
            image.src = './images/settings_light.png'; 
        }
    });
}