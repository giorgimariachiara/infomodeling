/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})


document.addEventListener("DOMContentLoaded", function () {
  const applyButton = document.querySelector(".modal-footer .btn-primary");
  applyButton.addEventListener("click", function () {
    const placeNamesCheckbox = document.getElementById("placeNames");
    const personNamesCheckbox = document.getElementById("personNames");
    
    toggleHighlight("placeName", placeNamesCheckbox.checked);
    toggleHighlight("personName", personNamesCheckbox.checked);

    // Close the modal
    const modalElement = document.getElementById('metadataModal'); // Replace 'yourModalId' with the actual ID of your modal
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    modalInstance.hide();
  });
});


function toggleHighlight(className, isChecked) {
  const elements = document.getElementsByClassName(className);
  const colorMap = {
    'placeName': '#6caedf',
    'personName': '#a1d490'
  };
  for (let i = 0; i < elements.length; i++) {
    if (isChecked) {
      elements[i].style.backgroundColor = colorMap[className];
    } else {
      elements[i].style.backgroundColor = '';
    }
  }
}


document.addEventListener("DOMContentLoaded", function () {
  const applyThemeButton = document.getElementById("applyTheme");
  const themeStylesheet = document.getElementById("themeStylesheet");

  applyThemeButton.addEventListener("click", function () {
    const theme1Radio = document.getElementById("theme1");
    const theme2Radio = document.getElementById("theme2");

    if (theme1Radio.checked) {
      themeStylesheet.setAttribute('href', 'css/styles.css');
    } else if (theme2Radio.checked) {
      themeStylesheet.setAttribute('href', 'css/XXI.css');
    }

    // Close the modal
    const modalElement = document.getElementById('themeModal');
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    modalInstance.hide();
  });
});


