

var map;  // Leaflet map instance is stored in this variable. If not, please adjust accordingly.

function setMapTiles(tileUrl, attributionText) {
    // Remove previous tile layers
    map.eachLayer(function(layer) {
        if (layer instanceof L.TileLayer) {
            map.removeLayer(layer);
        }
    });

    // Add the new tile layer
    L.tileLayer(tileUrl, {
        attribution: attributionText
    }).addTo(map);
}

// For each theme, we have an event listener:
// Theme1 
document.querySelector('.sub-btn[data-theme="theme1"]').addEventListener('click', function() {
    // Switch the CSS
    document.getElementById('themeStylesheet').href = "css/reinassancefinale.css";

    // Switch the map tiles (for theme5, which is assumed to be the Renaissance theme in this example)
    setMapTiles(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    );
});

// Theme2
document.querySelector('.sub-btn[data-theme="theme2"]').addEventListener('click', function() {
    // Switch the CSS
    document.getElementById('themeStylesheet').href = "css/be.css";

    // Switch the map tiles (for theme5, which is assumed to be the Renaissance theme in this example)
    setMapTiles(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    );
});

// Theme3
document.querySelector('.sub-btn[data-theme="theme3"]').addEventListener('click', function() {
    // Switch the CSS
    document.getElementById('themeStylesheet').href = "css/issuefuturism.css";

    // Switch the map tiles (for theme5, which is assumed to be the Renaissance theme in this example)
    setMapTiles(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    );
});

// Theme4
document.querySelector('.sub-btn[data-theme="theme4"]').addEventListener('click', function() {
    // Switch the CSS
    document.getElementById('themeStylesheet').href = "css/pm.css";

    // Switch the map tiles (for theme5, which is assumed to be the Renaissance theme in this example)
    setMapTiles(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    );
});
// Theme5
document.querySelector('.sub-btn[data-theme="theme5"]').addEventListener('click', function() {
    // Switch the CSS
    document.getElementById('themeStylesheet').href = "css/XX.css";

    // Switch the map tiles (for theme5, which is assumed to be the Renaissance theme in this example)
    setMapTiles(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    );
});

// Theme6
document.querySelector('.sub-btn[data-theme="theme6"]').addEventListener('click', function() {
    // Switch the CSS
    document.getElementById('themeStylesheet').href = "css/2030.css";

    // Switch the map tiles (for theme5, which is assumed to be the Renaissance theme in this example)
    setMapTiles(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    );
});


// Your existing stylesBtn event listener stays the same.
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


