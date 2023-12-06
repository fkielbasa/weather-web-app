const dayContent = document.getElementById('day_content');
const weekContent = document.getElementById('week_content');
const infoContent = document.getElementById('day_info_content');
const gridContent = document.getElementById('weather_main_content');
const dayButton = document.getElementById('day_button');
const weekButton = document.getElementById('week_button');
let show_info = false;
let mode;


  function display_mode(selected_mode) {
    

    if (selected_mode === 'day') {
      mode = "day"
      dayButton.style.color = '#aaccec';
      weekButton.style.color = '#898989';
      infoContent.style.display = 'none';
      dayContent.style.display = 'grid';
      weekContent.style.display = 'none';
      gridContent.style.gridTemplateColumns = 'repeat(6, 1fr)';
    } else if (selected_mode === 'week') {
      mode = "week"
      weekButton.style.color = '#aaccec';
      dayButton.style.color = '#898989';
      infoContent.style.display = 'none';
      weekContent.style.display = 'grid';
      dayContent.style.display = 'none';
      gridContent.style.gridTemplateColumns = 'repeat(4, 1fr)';
    }
  }

  function show_today_info() {


    if (!show_info) {
      show_info = true;
      infoContent.style.display = 'grid';
      dayContent.style.display = 'none';
      weekContent.style.display = 'none';
      gridContent.style.gridTemplateColumns = 'repeat(3, 1fr)';
    } else {
      show_info = false;
      infoContent.style.display = 'none';
      if (mode == "day") {
        display_mode('day');
      } else {
        display_mode('week');
      }
    }
  }

  display_mode('day');
  infoContent.style.display = 'none';