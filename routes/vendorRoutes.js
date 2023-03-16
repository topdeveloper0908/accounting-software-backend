const express = require("express");
const router = express.Router();
const vendorController = require("../controllers/vendorController");


router.post("/create", vendorController.vendor_create);
router.get('/', vendorController.getVendors);


module.exports = router;
