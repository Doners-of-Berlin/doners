const Shops = require('../models/shop')
mapboxgl.accessToken = "pk.eyJ1IjoiYW5pYW5pYW5pYSIsImEiOiJja2w2ZjluM2YyN3BxMnZsYjkxenkwa2l3In0.ykZjMZE_daToUo2DDC0h8g";

const map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: [13.41053, 52.52437], // starting position [lng, lat]
  zoom: 11 // starting zoom
});
console.log('shops', Shops)


// Shops.find()
//     .then((shops) => {
//       console.log('coord:', shop)
//       shops.forEach(shop => {
//         let marker = new mapboxgl.Marker()
//     })
//     marker.setLngLat(shop.coordinates)
//     marker.addTo(map);
//   })

// setting a popup
const popup = new mapboxgl.Popup({
  closeButton: true
})

popup
  .setLngLat([13.41053, 52.52437])
  .setHTML('<h3>Hello mapbox</h3>')
  .setMaxWidth('400px')
  .addTo(map)

  //static markers
// let marker = new mapboxgl.Marker()
//   .setLngLat([13.41053, 52.52437])
//   .addTo(map);

// let marker2 = new mapboxgl.Marker()
//   .setLngLat([13.3942, 52.52437])
//   .addTo(map);

// let marker3 = new mapboxgl.Marker()
//   .setLngLat([13.4, 52.51])
//   .addTo(map);

  

