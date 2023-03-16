const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String
    },
    RTN: {
        type: String
    },
    contact: {
        type: String
    },
    invoices: [{
        type: Schema.Types.ObjectId,
        ref: "Invoice"
    }]
});
let Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;