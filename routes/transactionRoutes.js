const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transactionController");


router.post("/create", transactionController.transaction_create);
router.get('/', transactionController.getTransactions);


module.exports = router;
