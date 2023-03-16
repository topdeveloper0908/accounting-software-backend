const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InvoiceSchema = new mongoose.Schema({
    invoiceNumber: {
        type: String
    },
    invoiceDate: {
        type: Date
    },
    amountDue: {
        type: Number
    },
    status: {
        type: String
    },
    customerID: {
        type: Schema.Types.ObjectId,
        ref: "Customer"
    }
});
let Invoice = mongoose.model('Invoice', InvoiceSchema);

module.exports = Invoice;