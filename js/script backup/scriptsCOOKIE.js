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
/*
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
});*/


$(document).ready(function() {

  function appendToMetadataList(className, listId, titleId) {
      var elements = $(className);
      var items = [];
      elements.each(function() {
          var name = $(this).text();
          var wikipediaUrl = $(this).data('wikipedia-url');
          items.push({ name: name, url: wikipediaUrl });
      });
      var uniqueItems = Array.from(new Set(items.map(i => i.name))).map(name => {
          return items.find(i => i.name === name);
      });
      if (uniqueItems.length > 0) {
          $(titleId).show();
      } else {
          $(titleId).hide();
      }
      var listHtml = uniqueItems.map(function(item) {
          if (item.url) {
              return `<li><a href="${item.url}" target="_blank">${item.name}</a></li>`;
          } else {
              return `<li>${item.name}</li>`;
          }
      }).join("");
      $(listId).append(listHtml);
  }

  $("#placeNames").change(function() {
      $("#placeNameList").empty();
      if (this.checked) {
          $(".placeName").addClass("highlight-place");
          appendToMetadataList(".highlight-place", "#placeNameList", "#placeNameTitle");
      } else {
          $(".placeName").removeClass("highlight-place");
          $("#placeNameTitle").hide();
      }
  });

  $("#personNames").change(function() {
      $("#personNameList").empty();
      if (this.checked) {
          $(".personName").addClass("highlight-person");
          appendToMetadataList(".highlight-person", "#personNameList", "#personNameTitle");
      } else {
          $(".personName").removeClass("highlight-person");
          $("#personNameTitle").hide();
      }
  });
});

function removeFuturismEffects() {
    const floatingWords = document.querySelectorAll('.floating-word');
    floatingWords.forEach(word => word.remove());
}
function isFuturismActive() {
    const stylesheet = document.getElementById('themeStylesheet').getAttribute('href');
    return stylesheet.includes('futurism.css');
}

function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cookieArr = document.cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split('=');
        if (name === cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

function changeStylesheetAndCheckEffects(newStylesheet) {
    document.getElementById('themeStylesheet').href = newStylesheet;
    setCookie('themeStylesheet', newStylesheet, 30);
    if (isFuturismActive()) activateFuturismEffects();
    else removeFuturismEffects();
}

window.onload = function() {
    const savedStylesheet = getCookie('themeStylesheet');
    if (savedStylesheet) {
        changeStylesheetAndCheckEffects(savedStylesheet);
    }
};

document.querySelector('.sub-btn[data-theme="theme1"]').addEventListener('click', function() {
    changeStylesheetAndCheckEffects("css/renaissancefinale.css");
});

document.querySelector('.sub-btn[data-theme="theme2"]').addEventListener('click', function() {
    changeStylesheetAndCheckEffects("css/be.css");
});

document.querySelector('.sub-btn[data-theme="theme3"]').addEventListener('click', function() {
    changeStylesheetAndCheckEffects("css/futurism.css");
});

document.querySelector('.sub-btn[data-theme="theme4"]').addEventListener('click', function() {
    changeStylesheetAndCheckEffects("css/pm.css");
});

document.querySelector('.sub-btn[data-theme="theme5"]').addEventListener('click', function() {
    changeStylesheetAndCheckEffects("css/XX.css");
});

document.querySelector('.sub-btn[data-theme="theme6"]').addEventListener('click', function() {
    changeStylesheetAndCheckEffects("css/2030.css");
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

//popup script
function popupfunction() {
    var popup = document.getElementById("myPopup");
    if (popup.style.display === "none" || popup.style.display === "") {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
}
//ends popup script


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
            
                // Applica l'effetto ai link della navbar nella visualizzazione normale
                const navLinks = document.querySelectorAll('#mainNav .nav-link');
                navLinks.forEach(navLink => {
                    wrapAlternateLettersInSpans(navLink);
                });
            
                // Applica l'effetto ai link della navbar nella visualizzazione contratta
                const collapsedNavLinks = document.querySelectorAll('#mainNav .navbar-collapse .nav-link');
                collapsedNavLinks.forEach(navLink => {
                    wrapAlternateLettersInSpans(navLink);
                });
            });

//fiori animazione
document.addEventListener('DOMContentLoaded', function() {
  const siteHeading = document.querySelector('.site-heading');

  function animateBackgroundImage() {
      setTimeout(function() {
          siteHeading.style.backgroundSize = '100%'; // Imposta la dimensione finale desiderata
      }, 100); // Ritarda l'animazione di 100 millisecondi
  }

  // Avvia l'animazione quando il documento è pronto
  animateBackgroundImage();
});
