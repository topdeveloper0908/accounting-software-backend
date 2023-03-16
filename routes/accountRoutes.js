const express = require("express");
const router = express.Router();
const accountController = require("../controllers/accountController");


router.post("/create", accountController.account_create);
router.get('/', accountController.getAccounts);


module.exports = router;
