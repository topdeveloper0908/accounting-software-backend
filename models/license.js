const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LicenseSchema = new mongoose.Schema({
    CAI: {
        type: String
    },
    firstInvoice: {
        type: String
    },
    lastInvoice: {
        type: String,
    },
    expireDate: {
        type: Date
    }
});
let License = mongoose.model('License', LicenseSchema);

module.exports = License;