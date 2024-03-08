const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
const {
  getProducts,
  getProduct,
  postProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");
//GET ALL THE Pcls
RODUCT;
router.get("/", getProducts);
//GET SINGLE PRODUCT
router.get("/:id", getProduct);
//ADD A PRODUCT
router.post("/", postProducts);
//UPDATE A PRODUCT
router.put("/:id", updateProduct);
//DELETE A PRODUCT
router.delete("/:id", deleteProduct);

module.exports = router;
