const express = require("express");
const router = express.Router();
const licenseController = require("../controllers/licenseController");

router.get("/", licenseController.getLicense);
router.post("/", licenseController.license_create);

module.exports = router;
