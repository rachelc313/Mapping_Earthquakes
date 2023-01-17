// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center, and zoom level
let map = L.map('mapid').setView([40.7, -94.5], 4);

// Coordinates for each point to be used in the polyline.
let line = [
    [37.6214, -122.3790], // SFO
    [30.1975, -97.6664], // AUS
    [43.6777, -79.6248], //YYZ
    [40.63972, -73.7789] // JFK
  ];

var lineSymbol = {
    path: 'M 0,-1 0,1',
    strokeOpacity: 1,
    scale: 4
};
  // Create a polyline using the line coordinates and make the line dashed and blue - look at skill drill 14.4.3.
L.polyline(line, {
    color: "blue",
    strokeOpacity: 0,
    icons: [{
      icon: lineSymbol,
      offset: '0',
      repeat: '20px'
    
  }]}).addTo(map);


// // Get data from cities.js
// let cityData = cities;

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/100000,
//         color: "orange",
//         fillColor: 'orange'
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);