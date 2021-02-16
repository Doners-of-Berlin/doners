const express = require('express');
const router  = express.Router();
const Shops = require('../models/shop')

/* GET home page */
router.get('/', (req, res, next) => {
  Shops.find()
    .then((shops) => {
      // shops.forEach(shop => {
      //   console.log('coord:', shop.coordinates)
        // new mapboxgl.Marker()
        //   .setLngLat(coordinate)
        //   .addTo(map);
      res.render('index')
    })
  .catch(err => next(err))
})

router.get('/restaurant/:id', (req, res, next) => {
  Shops.findById(req.params.id).then(shopsList => {
    console.log('-------',shopsList);

    res.render('restaurant', {shopsList});
  });
})
  
  router.post("/restaurant/:id/restaurant-review", (req,res)=> {
    const {reviewername,review} = req.body
    const shopId = req.params.id
 

    Shops.findById(shopId).then(shop => {

      shop.reviews.push({reviewername,review})
      Shops.findByIdAndUpdate(shopId, shop)
 
      console.log(shop );
  
  

      
      res.redirect("/restaurant/" + shopId)
    }).catch(error => res.redirect("/celebrities/new" , {err}))
    
  })


module.exports = router;
