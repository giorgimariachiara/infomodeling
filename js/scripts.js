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

let searchTerm = '';
let matchingElements = [];
let currentIndex = -1;

function performSearch() {
    searchTerm = $('#search-input').val().toLowerCase();
    matchingElements = [];

    if (searchTerm) {
        $('.personName, .placeName').each(function() {
            const text = $(this).text().toLowerCase();
            if (text.includes(searchTerm)) {
                matchingElements.push(this);
            }
        });

        if (matchingElements.length > 0) {
            currentIndex = 0;
            clearHighlights();
            scrollCurrentOccurrenceIntoView();
            updateOccurrenceCount();
        } else {
            currentIndex = -1;
            clearHighlights();
            updateOccurrenceCount();
        }
    } else {
        currentIndex = -1;
        clearHighlights();
        updateOccurrenceCount();
    }
}

function clearHighlights() {
    $(matchingElements).removeClass('highlight');
}

function scrollCurrentOccurrenceIntoView() {
    if (currentIndex >= 0 && currentIndex < matchingElements.length) {
        const element = matchingElements[currentIndex];
        $(element).addClass('highlight');
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function updateOccurrenceCount() {
    $('#occurrences-count').text(`${currentIndex + 1} di ${matchingElements.length}`);
}

$('#search-input').on('input', performSearch);

$('#prev-button').on('click', function() {
    if (matchingElements.length > 0) {
        currentIndex = (currentIndex - 1 + matchingElements.length) % matchingElements.length;
        clearHighlights();
        scrollCurrentOccurrenceIntoView();
        updateOccurrenceCount();
    }
});

$('#next-button').on('click', function() {
    if (matchingElements.length > 0) {
        currentIndex = (currentIndex + 1) % matchingElements.length;
        clearHighlights();
        scrollCurrentOccurrenceIntoView();
        updateOccurrenceCount();
    }
});
/*
let searchTerm = '';
let matchingElements = [];
let currentIndex = -1;

function performSearch() {
  searchTerm = document.getElementById('search-input').value.toLowerCase();
  matchingElements = [];
  
  if (searchTerm) {
    const elements = document.querySelectorAll('.personName, .placeName');

    elements.forEach((element) => {
      const text = element.textContent.toLowerCase();

      if (text.includes(searchTerm)) {
        matchingElements.push(element);
      }
    });

    if (matchingElements.length > 0) {
      currentIndex = 0;
      clearHighlights();
      scrollCurrentOccurrenceIntoView();
      updateOccurrenceCount();
    } else {
      currentIndex = -1;
      clearHighlights();
      updateOccurrenceCount();
    }
  } else {
    currentIndex = -1;
    clearHighlights();
    updateOccurrenceCount();
  }
}

function clearHighlights() {
  matchingElements.forEach((element) => {
    element.classList.remove('highlight');
  });
}

function scrollCurrentOccurrenceIntoView() {
  if (currentIndex >= 0 && currentIndex < matchingElements.length) {
    const element = matchingElements[currentIndex];
    element.classList.add('highlight'); // Evidenzia l'occorrenza corrente
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function updateOccurrenceCount() {
  document.getElementById('occurrences-count').textContent = `${currentIndex + 1} di ${matchingElements.length}`;
}

document.getElementById('search-input').addEventListener('input', performSearch);

document.getElementById('prev-button').addEventListener('click', () => {
  if (matchingElements.length > 0) {
    currentIndex = (currentIndex - 1 + matchingElements.length) % matchingElements.length;
    clearHighlights();
    scrollCurrentOccurrenceIntoView();
    updateOccurrenceCount();
  }
});

document.getElementById('next-button').addEventListener('click', () => {
  if (matchingElements.length > 0) {
    currentIndex = (currentIndex + 1) % matchingElements.length;
    clearHighlights();
    scrollCurrentOccurrenceIntoView();
    updateOccurrenceCount();
  }
});*/


function initializeThemeButtons() {
    const themeMapping = {
        'theme1': 'css/renaissancefinale.css',
        'theme2': 'css/be.css',
        'theme3': 'css/futurism.css',
        'theme4': 'css/pm.css',
        'theme5': 'css/XX.css',
        'theme6': 'css/2030.css'
    };

    Object.keys(themeMapping).forEach(theme => {
        document.querySelector(`.sub-btn[data-theme="${theme}"]`).addEventListener('click', function() {
            const newStylesheet = themeMapping[theme];
            changeStylesheet(newStylesheet);
            toggleEffectsBasedOnStylesheet(newStylesheet);
        });
    });
}

document.getElementById('stylesBtn').addEventListener('click', function() {
    const themeButtons = document.querySelectorAll('.sub-btn[data-theme]');
    themeButtons.forEach(btn => {
        btn.style.display = (btn.style.display === 'none' || btn.style.display === '') ? 'block' : 'none';
    });
});

document.getElementById('toTopBtn').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initialize theme buttons
initializeThemeButtons();

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
function removeFuturismEffects() {
    const floatingWords = document.querySelectorAll('.floating-word');
    floatingWords.forEach(word => word.remove());
}

function isFuturismActive(stylesheet) {
    return stylesheet.includes('futurism.css');
}

function changeStylesheet(newStylesheet) {
    document.getElementById('themeStylesheet').href = newStylesheet;
    localStorage.setItem('currentStylesheet', newStylesheet);
}

function createWord(className) {
    const word = document.createElement("div");
    word.textContent = "click";
    word.classList.add('floating-word', className);
    document.body.appendChild(word);
    return word;
}

function randomizeWordPosition(wordElement) {
    const randomTop = Math.random() * (window.innerHeight - wordElement.offsetHeight);
    const randomLeft = Math.random() * (window.innerWidth - wordElement.offsetWidth);
    wordElement.style.top = `${randomTop}px`;
    wordElement.style.left = `${randomLeft}px`;
}

function activateFuturismEffects() {
    for (let i = 1; i <= 7; i++) {
        const className = `word${i}`;
        const wordElement = createWord(className); 
        randomizeWordPosition(wordElement);
    }
}

function toggleEffectsBasedOnStylesheet(newStylesheet) {
    if (isFuturismActive(newStylesheet)) {
        activateFuturismEffects();
    } else {
        removeFuturismEffects();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedStylesheet = localStorage.getItem('currentStylesheet');
    if (savedStylesheet) {
        changeStylesheet(savedStylesheet);
        toggleEffectsBasedOnStylesheet(savedStylesheet);
    }
});

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


// Function to load saved stylesheet from localStorage
function loadSavedStylesheet() {
    const savedStylesheet = localStorage.getItem('currentStylesheet');
    if (savedStylesheet) {
        changeStylesheet(savedStylesheet);
        toggleEffectsBasedOnStylesheet(savedStylesheet);
    }
}

// Load saved stylesheet
loadSavedStylesheet();