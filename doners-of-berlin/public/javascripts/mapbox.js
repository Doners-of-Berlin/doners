mapboxgl.accessToken = "pk.eyJ1IjoiYW5pYW5pYW5pYSIsImEiOiJja2w2ZjluM2YyN3BxMnZsYjkxenkwa2l3In0.ykZjMZE_daToUo2DDC0h8g";

const map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: [13.41053, 52.52437], // starting position [lng, lat]
  zoom: 11 // starting zoom
});

// setting a popup
const popup = new mapboxgl.Popup({
  closeButton: true
})
popup.setLngLat([13.41053, 52.52437])
  .setHTML('<h1>Hello mapbox</h1>')
  .setMaxWidth('400px')
  .addTo(map)

  const Shops = require('../models/shop')
  let shopsArray = Shops.find()
  console.log(shopsArray)

  shopsArray.forEach(shop => {
   new mapboxgl.Marker().setLngLat([shop.coordinates]).addTo(map);
});


let marker = new mapboxgl.Marker().setLngLat([13.41053, 52.52437]).addTo(map);
let marker2 = new mapboxgl.Marker().setLngLat([13.3942, 52.52437]).addTo(map);
let marker3 = new mapboxgl.Marker().setLngLat([13.4, 52.51]).addTo(map);


popup.setLngLat(marker)
  .setHTML('<h1>Doner</h1>')
  .setMaxWidth('400px')
  .addTo(map)
