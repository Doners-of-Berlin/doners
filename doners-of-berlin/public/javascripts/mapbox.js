mapboxgl.accessToken = "pk.eyJ1IjoiYW5pYW5pYW5pYSIsImEiOiJja2w2ZjluM2YyN3BxMnZsYjkxenkwa2l3In0.ykZjMZE_daToUo2DDC0h8g";

const map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: [13.41053, 52.52437], // starting position [lng, lat]
  zoom: 11 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());
  
//markers (pins) for doner shops
function addDonnerMarker(lng, lat){
  new mapboxgl
    .Marker()
    .setLngLat([lng,lat])
    .addTo(map)
}

function addDonnerPopup(lng, lat, name, address){
  new mapboxgl
    .Popup({
      anchor: 'bottom',
      offset: 38})
    .setHTML("<strong>" + name + "</strong><p>" + address + "</p>")
    .setLngLat([lng,lat])
    
    .addTo(map)
}

// map.on('click', addDonnerPlace(), (lng, lat) => {
//   new mapboxgl.Popup()
//   .setLngLat(lng, lat)
//   .addTo(map);
//   });