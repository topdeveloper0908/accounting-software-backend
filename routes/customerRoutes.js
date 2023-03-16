const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");


router.post("/create", customerController.customer_create);
router.get('/', customerController.getCustomers);


module.exports = router;
