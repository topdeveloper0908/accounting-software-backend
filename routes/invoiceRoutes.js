const express = require("express");
const router = express.Router();
const invoiceController = require("../controllers/invoiceController");

router.get("/", invoiceController.getInvoice);
router.post("/create", invoiceController.invoice_create);

module.exports = router;
