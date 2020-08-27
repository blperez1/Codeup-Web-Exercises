"use strict"

mapboxgl.accessToken = key;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-98.4936, 29.4241], // starting position [lng, lat]
    zoom: 13// starting zoom
});

const riverCenterPin = new mapboxgl.Marker()
    .setLngLat([-98.4843, 29.4359])
    .addTo(map)

const alamoPin = new mapboxgl.Marker()
    .setLngLat([-98.485204, 29.429790])
    .addTo(map)

const historicalParkPin = new mapboxgl.Marker()
    .setLngLat([-98.4861, 29.4260])
    .addTo(map)

const riverCenter = new mapboxgl.Popup()
    .setHTML("<p>River Center Mall</p>")



const historicalPark = new mapboxgl.Popup()
    .setHTML("<p> San Antonio Missions National Historical Park</p>")



const alamo = new mapboxgl.Popup()
    .setHTML("<p>Alamo</p>")

riverCenterPin.setPopup(riverCenter);
historicalParkPin.setPopup(historicalPark);
alamoPin.setPopup(alamo)





