const express = require('express');
const router  = express.Router();
const Shops = require('../models/shop');


/* GET home page */
router.get('/', (req, res, next) => {

Shops.find().then(shopsList => {
  console.log('-------',shopsList);
  res.render('index', {shopsList});
});

})



module.exports = router;
