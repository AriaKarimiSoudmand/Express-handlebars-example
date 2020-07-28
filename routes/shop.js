const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const adminData = require("./admin");

router.get("/", (req, res, next) => {
  const products = adminData.products;
  // product is an object it's self
  // 1st argument tell node to render the PUG
  // 2nd argument pass the dynamic thing that you want into this:
  res.render("shop", {
    prods: products,
    pageTitle: "Shop ;D",
    path: "/",
    hasProduct: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = router;
