const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BillSchema = new mongoose.Schema({
    status: {
        type: String
    },
    date: {
        type: Date
    },
    currency: {
        type: String
    },

    total: {
        type: Number
    },
    vendorID: {
        type: Schema.Types.ObjectId,
        ref: "Vendor"
    }
});
let Bill = mongoose.model('Bill', BillSchema);

module.exports = Bill;