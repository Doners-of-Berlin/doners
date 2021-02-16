// const express = require('express').Router();
// const router  = express.Router();


const express = require('express');
const router  = express.Router();
const Shops = require('../models/shop')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index')
})


// router.get('/', (req, res, next) => {
//   Shops.find().then(shopsList => {
//     console.log('-------',shopsList);
//     res.render('index', {shopsList});
//     });
//   })


router.get('/restaurant', (req, res, next) => {
  Shops.find().then(shopsList => {
    console.log('-------',shopsList);
    res.render('restaurant', {shopsList});
  });
  
  })
  



module.exports = router;
