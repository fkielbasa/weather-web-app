function changeTemperature(temp) {
    const tempToggleC = document.getElementById('tempToggleC');
    const tempToggleF = document.getElementById('tempToggleF');

    if (temp === 'C') {
        tempToggleC.checked = true;
        tempToggleF.checked = false;
    } else if (temp === 'F') {
        tempToggleF.checked = true;
        tempToggleC.checked = false;
    }
}

function toggleTemperature(selectedCheckbox) {
    const checkboxes = document.getElementsByName('tempToggle');
    for (let checkbox of checkboxes) {
        if (checkbox !== selectedCheckbox) {
            checkbox.checked = false;
        }
    }

    if (!selectedCheckbox.checked) selectedCheckbox.checked = true;
    
    const selectedTemp = selectedCheckbox.value;
    changeTemperature(selectedTemp);
    setCurrentUnit(selectedTemp);
    console.log(currentUnit)
}
