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

/*!
document.addEventListener("DOMContentLoaded", function() {
    // Get references to the button and the accordion
    const toggleAccordionButton = document.getElementById("toggleAccordionButton");
    const accordionExample = document.getElementById("accordionExample");

    // Initially hide the accordion
    accordionExample.style.display = "none";

    // Add click event listener to the button
    toggleAccordionButton.addEventListener("click", function() {
        if (accordionExample.style.display === "none") {
            accordionExample.style.display = "block";
        } else {
            accordionExample.style.display = "none";
        }
    });
});
*/

/*!
document.addEventListener("DOMContentLoaded", function() {
    const toggleAccordionButton = document.getElementById("toggleAccordionButton");
    const accordionExample = document.getElementById("accordionExample");

    accordionExample.style.display = "none";

    toggleAccordionButton.addEventListener("click", function() {
        if (accordionExample.style.display === "none") {
            accordionExample.style.display = "block";
        } else {
            accordionExample.style.display = "none";
        }

        // Scroll to the accordion
        accordionExample.scrollIntoView({behavior: "smooth"});
    });
});
*/


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

/*!

function toggleHighlight(className, isChecked) {
  const elements = document.getElementsByClassName(className);
  for (let i = 0; i < elements.length; i++) {
    if (isChecked) {
      elements[i].style.backgroundColor = '#0f5132';
    } else {
      elements[i].style.backgroundColor = '';
    }
  }
}
*/


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


/*!
// Styler Button
document.addEventListener("DOMContentLoaded", function () {
  const applyStyleButton = document.querySelector(".apply-style");
  applyStyleButton.addEventListener("click", function () {
    const darkModeCheckbox = document.getElementById("darkMode");
    
    toggleDarkMode(darkModeCheckbox.checked);

    // Close the modal
    const modalElement = document.getElementById('styleModal');
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    modalInstance.hide();
  });
});

function toggleDarkMode(isChecked) {
  const bodyElement = document.body;
  if (isChecked) {
    bodyElement.classList.add('dark-mode');
  } else {
    bodyElement.classList.remove('dark-mode');
  }
}
*/



// FAB Button
/*!
var modal = document.getElementById("metadataModal");
var fabButton = document.getElementById("fabButton");

fabButton.onclick = function() {
  modal.style.display = "block";
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
*/
