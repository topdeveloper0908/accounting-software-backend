const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");


router.post("/create", productController.product_create);
router.get('/', productController.getProducts);


module.exports = router;
