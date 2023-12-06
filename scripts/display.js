function display_mode(mode) {
    const day = document.getElementById('day_button');
    const week = document.getElementById('week_button');

    if (mode === 'day') {
        day.style.color = '#aaccec';
        week.style.color = '#898989';
    } else {
        week.style.color = '#aaccec';
        day.style.color = '#898989';
    }
}