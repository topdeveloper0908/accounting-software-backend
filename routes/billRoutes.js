const express = require("express");
const router = express.Router();
const billController = require("../controllers/billController");


router.post("/create", billController.bill_create);
router.get('/', billController.getBills);


module.exports = router;
