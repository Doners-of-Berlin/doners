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
  },
  {
    "name": "Wunderfalafel",
    "address1": "Falafelstr 10",
    "address2": "",
    "postcode": 10163,
    "city": "Berlin",
    "telephone": 48141921,
    "coordinates": [13.5229424, 52.3904942],
    "menuItems": []
  },
  {
    "name": "Omnom",
    "address1": "Pappelallee 17",
    "address2": "",
    "postcode": 10435,
    "city": "Berlin",
    "telephone": 48423411,
    "coordinates": [13.1229424, 52.4304942],
    "menuItems": []
  },
  {
    "name": "Yarok",
    "address1": "Torstrasse 195",
    "address2": "",
    "postcode": 10115,
    "city": "Berlin",
    "telephone": 44252411,
    "coordinates": [13.392120379830677, 52.52895366048054],
    "menuItems": []
  },
  {
    "name": "Ilayda Kebaphaus",
    "address1": "Schönhauser Allee 109",
    "address2": "",
    "postcode": 10439,
    "city": "Berlin",
    "telephone": 454325911,
    "coordinates": [13.415208830909522, 52.551880965263756],
    "menuItems": []
  },
  {
    "name": "City Grill",
    "address1": "Florastrasse 67A",
    "address2": "",
    "postcode": 13187,
    "city": "Berlin",
    "telephone": 443912511,
    "coordinates": [13.405981655039586, 52.56737279449781],
    "menuItems": []
  },
  {
    "name": "CEM Grill",
    "address1": "Schliemannstrasse 1",
    "address2": "",
    "postcode": 10437,
    "city": "Berlin",
    "telephone": 449387656,
    "coordinates": [13.416967982538557, 52.543159091405464],
    "menuItems": []
  },
  {
    "name": "Zaddy's",
    "address1": "Tauentzienstrasse 13",
    "address2": "",
    "postcode": 10789,
    "city": "Berlin",
    "telephone": 4498767421,
    "coordinates": [13.336494744352214, 52.504118270971745],
    "menuItems": []
  },
  {
    "name": "Humbaba Falafel",
    "address1": "Turmstrasse 85",
    "address2": "",
    "postcode": 10551,
    "city": "Berlin",
    "telephone": 442987654,
    "coordinates": [13.341344217730429, 52.52672427758102],
    "menuItems": []
  },
  {
    "name": "Gemüse Kebap und Friends",
    "address1": "Warschauerstr. 81A",
    "address2": "",
    "postcode": 10243,
    "city": "Berlin",
    "telephone": 41928373,
    "coordinates": [13.453134297501466, 52.51466369558093],
    "menuItems": []
  },
 ]


doners.insertMany(donerImport)
  .then(donerImport => {
    console.log(`Success! Added `);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
