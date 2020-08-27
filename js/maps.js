"use strict"

mapboxgl.accessToken = key;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-98.4936, 29.4241], // starting position [lng, lat]
    zoom: 13// starting zoom
});

let locations = [
    {
        lngLat: [-98.4843, 29.4359],
        name: "Rivercenter Mall",
        address: "849 E Commerce St, San Antonio, TX 78205"
    },
    {
        lngLat: [-98.485204, 29.429790],
        name: "The Alamo",
        address: "300 Alamo Plaza, San Antonio, TX 78205"

    },
    {
        lngLat: [-98.4861, 29.4260],
        name: "San Antonio Missions National Historical Park",
        address: "6701 San Jose Dr, San Antonio, TX 78214"
    }
]

locations.forEach(function (location) {
    let popup = new mapboxgl.Popup()
        .setHTML(`<p>${location.name}<br>${location.address}</p>`)
    new mapboxgl.Marker()
        .setLngLat(location.lngLat)
        .addTo(map)
        .setPopup(popup)
})





