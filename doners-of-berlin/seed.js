const mongoose = require('mongoose');
const doners = require('./models/shop');

mongoose.connect('mongodb://localhost/doner', {
  userNewUrlParser: true
});

const donerImport = [


  {
    "name": "Dönerbox",
    "address1": "Köpenickerstr. 76\n\n",
    "address2": "",
    "postcode": 10179,
    "city": "Berlin",
    "telephone": 1519561,
    "coordinates": [13.51025, 52.423260],
    "menuItems": []
  },
  {
    "name": "Doyum",
    "address1": "Admiralsstr. 36-37\n",
    "address2": "",
    "postcode": 10999,
    "city": "Berlin",
    "telephone": 10601810,
    "coordinates": [13.417230, 52.497780],
    "menuItems": []
  },
  {
    "name": "Pamfilya",
    "address1": "Luxemburger Str. 1,\n",
    "address2": "",
    "postcode": 13353,
    "city": "Berlin",
    "telephone": 90490161,
    "coordinates": [13.358590, 52.546280],
    "menuItems": []
  },
  {
    "name": "Mustafas",
    "address1": "Mehringdamm 32\n",
    "address2": "",
    "postcode": 10961,
    "city": "Berlin",
    "telephone": 51651894,
    "coordinates": [13.387920, 52.493840],
    "menuItems": []
  },
  {
    "name": "Ruya",
    "address1": "Hauptstraße 133\n",
    "address2": "",
    "postcode": 10827,
    "city": "Berlin",
    "telephone": 940940890,
    "coordinates": [13.3539881, 52.4846884],
    "menuItems": []
  },
  {
    "name": "Tadim",
    "address1": "Adalbertstr. 98\n",
    "address2": "",
    "postcode": 10999,
    "city": "Berlin",
    "telephone": 4980890,
    "coordinates": [13.4178805, 52.4997529],
    "menuItems": []
  },
  {
    "name": "Imren",
    "address1": "Boppstr 10",
    "address2": "",
    "postcode": 10967,
    "city": "Berlin",
    "telephone": 4818641,
    "coordinates": [13.4229424, 52.4904942],
    "menuItems": []
  }
 ]


doners.insertMany(donerImport)
  .then(donerImport => {
    console.log(`Success! Added `);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
