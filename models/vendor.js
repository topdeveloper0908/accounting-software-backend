const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    tax: {
        type: Number
    }
});
let Vendor = mongoose.model('Vendor', VendorSchema);

module.exports = Vendor;