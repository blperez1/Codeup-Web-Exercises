"use strict"

mapboxgl.accessToken = key;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-98.4936, 29.4241], // starting position [lng, lat]
    zoom: 12// starting zoom
});

const pin = new mapboxgl.Marker()
    .setLngLat([-98.4843, 29.4359])
    .addTo(map)

const riverCenter = new mapboxgl.Popup()
    .setHTML("<p>River Center Mall</p>")
    .addTo(map)

pin.setPopup(riverCenter)