const express = require("express");
const router = express.Router();
const Shops = require("../models/shop");
const fileUploader = require("../configs/cloudinary.config");

/* GET home page */
router.get("/", (req, res, next) => {
  Shops.find().then((shopsList) => {
    // console.log('-------',shopsList);
    res.render("index", { shopsList });
  });
});

router.get("/restaurant/:id", (req, res, next) => {
  if (!req.user) {
    res.redirect("/login"); // can't access the page, so go and log in
    return;
  }

  // ok, req.user is defined
  //res.render('restaurant', { user: req.user });
  Shops.findById(req.params.id).then((shopsList) => {
    // console.log('-------',shopsList);
    const url = shopsList.imgurl;
    const images = url.map(image => {
      return `<img src="${image}">`
    })
    res.render("restaurant", { shopsList, images });
  });
});

router.get("/restauran/add", (req, res, next) => {
  res.render("../views/restaurant-add.hbs");
});

router.post("/restauran/add", (req, res, next) => {
  const {
    name,
    address1,
    address2,
    postcode,
    city,
    telephone,
    coordinates,
  } = req.body;

  Shops.create({
    name,
    address1,
    address2,
    postcode,
    city,
    telephone,
    coordinates,
  })
    .then(() => res.redirect("/"))
    .catch((err) => console.log(err));
});

router.post("/restaurant/:id/restaurant-review", (req, res) => {
  const { reviewername, review } = req.body;
  const shopId = req.params.id;

  // Shops.findById(shopId).then(shop => {
  // shop.reviews.push({reviewername,review})
  console.log("req.body", reviewername, review);
  console.log("req.parans", shopId);

  Shops.findByIdAndUpdate(shopId, {
    $push: { reviews: { reviewername, review } },
  })
    .then(() => res.redirect("/restaurant/" + shopId))
    .catch((err) => console.log(err));
});

router.post(
  "/restaurant/:id/image-upload",
  fileUploader.single("image"),
  (req, res) => {
    // const { title, description } = req.body;
    const shopId = req.params.id;
    urlId = req.file.path;

    console.log("doesthisurlthingywork????", urlId);

    Shops.findByIdAndUpdate(shopId, {
      $push: { imgurl: urlId },
    })
      .then(() => res.redirect("/restaurant/" + shopId))
      .catch((error) => console.log(error));
  }
);

router.post("/restauran/:id/delete", (req, res) => {
  // const {name,occupation,catchPhrase} = req.body
  Shops.findByIdAndRemove(req.params.id)
    .then((shops) => {
      res.redirect("/");
    })
    .catch((error) => console.log(error));
});

router.get("/restauran/:id/edit", (req, res, next) => {
  Shops.findById(req.params.id).then((shopsList) => {
    // console.log('-------',shopsList);
    res.render("restaurant-edit", { shopsList });
  });
});

router.get("/restauran/add", (req, res, next) => {
  res.render("../views/restaurant-add.hbs");
});

router.post("/restauran/:id/edit", (req, res, next) => {
  const {
    name,
    address1,
    address2,
    postcode,
    city,
    telephone,
    coordinates,
  } = req.body;
  const shopId = req.params.id;

  Shops.findByIdAndUpdate(shopId, {
    name,
    address1,
    address2,
    postcode,
    city,
    telephone,
    coordinates,
  })
    .then(() => res.redirect("/"))
    .catch((err) => console.log(err));
});

module.exports = router;
