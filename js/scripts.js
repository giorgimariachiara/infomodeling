/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page

/*
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})
*/

/*!
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
*/


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


$(document).ready(function() {
    function appendToMetadataList(className, listId, titleId) {
        var elements = $(className);
        var names = [];
        elements.each(function() {
            names.push($(this).text());
        });
        var uniqueNames = Array.from(new Set(names));
        if (uniqueNames.length > 0) {
            $(titleId).show();
        } else {
            $(titleId).hide();
        }
        var listHtml = uniqueNames.map(function(name) {
            return "<li>" + name + "</li>";
        }).join("");
        $(listId).append(listHtml);
    }

    $("#placeNames").change(function() {
        $("#placeNameList").empty();
        if(this.checked) {
            $(".placeName").addClass("highlight-place");
            appendToMetadataList(".highlight-place", "#placeNameList", "#placeNameTitle");
        } else {
            $(".placeName").removeClass("highlight-place");
            $("#placeNameTitle").hide();
        }
    });

    $("#personNames").change(function() {
        $("#personNameList").empty();
        if(this.checked) {
            $(".personName").addClass("highlight-person");
            appendToMetadataList(".highlight-person", "#personNameList", "#personNameTitle");
        } else {
            $(".personName").removeClass("highlight-person");
            $("#personNameTitle").hide();
        }
    });
});

document.querySelector('.sub-btn[data-theme="theme1"]').addEventListener('click', function() {
    document.getElementById('themeStylesheet').href = "css/renaissancefinale.css";
});

document.querySelector('.sub-btn[data-theme="theme3"]').addEventListener('click', function() {
    document.getElementById('themeStylesheet').href = "css/issuefuturism.css";
});

document.querySelector('.sub-btn[data-theme="theme5"]').addEventListener('click', function() {
    document.getElementById('themeStylesheet').href = "css/XX.css";
});


document.getElementById('stylesBtn').addEventListener('click', function() {
    const themeButtons = document.querySelectorAll('.sub-btn[data-theme]');
    themeButtons.forEach(btn => {
        if (btn.style.display === 'none' || btn.style.display === '') {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    });
});

document.getElementById('toTopBtn').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const wordText = "click";

function createWord(className) {
    const word = document.createElement("div");
    word.textContent = wordText;
    word.classList.add('floating-word', className);
    document.body.appendChild(word);
}

function randomizeWordPosition(wordElement) {
    const randomTop = Math.random() * (window.innerHeight - 100);
    const randomLeft = Math.random() * (window.innerWidth - 100);

    wordElement.style.top = `${randomTop}px`;
    wordElement.style.left = `${randomLeft}px`;
}

function activateFuturismEffects() {
  for (let i = 1; i <= 7; i++) {
      const className = `word${i}`;
      createWord(className);
      const wordElement = document.querySelector(`.${className}`);
      randomizeWordPosition(wordElement);
  }
}

document.querySelector('.btns-item-4 .sub-btn').addEventListener('click', activateFuturismEffects);


//effetto titolo futurismo
const siteHeadingUpper = document.querySelector(".site-heading-upper");
            const text = siteHeadingUpper.textContent.trim();
            let newText = "";
            
            for (let letter of text) {
            if (letter === " ") {
            newText += letter; // non avvolgere gli spazi
            } else {
            newText += `<span class="overlap" data-overlap="${letter}">${letter}</span>`;
            }
            }
            
            siteHeadingUpper.innerHTML = newText;


            document.addEventListener('DOMContentLoaded', function() {
                const wrapLettersInSpans = (element) => {
                  const text = element.textContent.trim();
                  let wrappedText = "";
              
                  for (let letter of text) {
                    if (letter === " ") {
                      wrappedText += letter; // non avvolgere gli spazi
                    } else {
                      wrappedText += `<span>${letter}</span>`;
                    }
                  }
              
                  element.innerHTML = wrappedText;
                }
              
                const siteHeadingLower = document.querySelector(".site-heading-lower");
                
                if (siteHeadingLower) {
                  wrapLettersInSpans(siteHeadingLower);
                }
              });

              document.addEventListener('DOMContentLoaded', function() {
                const wrapAlternateLettersInSpans = (element) => {
                    const text = element.textContent.trim();
                    let wrappedText = "";
                    
                    for (let i = 0; i < text.length; i++) {
                        if (text[i] === " ") {
                            wrappedText += text[i]; // non avvolgere gli spazi
                        } else if (i % 2 === 0) { // avvolge solo le lettere in posizioni pari (0-based)
                            wrappedText += `<span>${text[i]}</span>`;
                        } else {
                            wrappedText += text[i];
                        }
                    }
                    
                    element.innerHTML = wrappedText;
                }
            
                const navLinks = document.querySelectorAll('#mainNav .nav-link');
            
                navLinks.forEach(navLink => {
                    wrapAlternateLettersInSpans(navLink);
                });
            });
            



// effetto parole futurismo
const decor = "❉";

function createWord(className) {
    const word = document.createElement("div");
    word.textContent = decor;
    word.classList.add('floating-word', className);
    document.body.appendChild(word);
}

function randomizeWordPosition(wordElement) {
    const randomTop = Math.random() * (window.innerHeight - 100);
    const randomLeft = Math.random() * (window.innerWidth - 100);

    wordElement.style.top = `${randomTop}px`;
    wordElement.style.left = `${randomLeft}px`;
}


for (let i = 1; i <= 7; i++) {
    const className = `word${i}`;
    createWord(className);
    const wordElement = document.querySelector(`.${className}`);
    randomizeWordPosition(wordElement);
}



            