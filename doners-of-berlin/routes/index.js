const express = require('express');
const router  = express.Router();
const Shops = require('../models/shop')
const fileUploader = require('../configs/cloudinary.config');


/* GET home page */
router.get('/', (req, res, next) => {
  Shops.find().then(shopsList => {
    // console.log('-------',shopsList);
    res.render('index', {shopsList});
  });
  })

router.get('/restaurant/:id', (req, res, next) => {
  Shops.findById(req.params.id)
    .then(shopsList => {
      // console.log('-------',shopsList);
      res.render('restaurant', {shopsList});
  });
})
  
  router.post("/restaurant/:id/restaurant-review", (req,res)=> {
    const {reviewername,review} = req.body
    const shopId = req.params.id

    // Shops.findById(shopId).then(shop => {
      // shop.reviews.push({reviewername,review})
  console.log("req.body",reviewername,review)
  console.log("req.parans",shopId);

      Shops.findByIdAndUpdate(shopId, {
        $push: {reviews: {reviewername, review}}
        
      })
        .then(() => res.redirect("/restaurant/" + shopId))
        .catch((err) => console.log(err))
  })

  router.post('/restaurant/:id/image-upload', fileUploader.single('image'), (req, res) => {
    // const { title, description } = req.body;
    const shopId = req.params.id
    urlId = req.file.path

    console.log('doesthisurlthingywork????', urlId)
   
    Shops.findByIdAndUpdate(shopId, { 
      $push: {imgurl: urlId}
     })
      .then(() => res.redirect("/restaurant/" + shopId))
      .catch(error => console.log(error));
  });

module.exports = router;
