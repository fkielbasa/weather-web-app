function display_mode(mode) {
    const dayButton = document.getElementById('day_button');
    const weekButton = document.getElementById('week_button');
    const dayContent = document.getElementById('day_content');
    const weekContent = document.getElementById('week_content');
    const gridContent = document.getElementById('weather_main_content');

    if (mode === 'day') {
        dayButton.style.color = '#aaccec';
        weekButton.style.color = '#898989';
        dayContent.style.display = 'grid';
        weekContent.style.display = 'none';
        gridContent.style.gridTemplateColumns = 'repeat(6, 1fr)';
    } else {
        weekButton.style.color = '#aaccec';
        dayButton.style.color = '#898989';
        weekContent.style.display = 'grid';
        dayContent.style.display = 'none';
        gridContent.style.gridTemplateColumns = 'repeat(4, 1fr)';
    }
}

display_mode('day');