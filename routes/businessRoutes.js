const express = require("express");
const router = express.Router();
const businessController = require('../controllers/businessController');

router.post('/create', businessController.business_create);

module.exports = router;