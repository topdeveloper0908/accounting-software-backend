const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BusinessSchema = new mongoose.Schema({
    companyName: {
        type: String
    },
    currency: {
        type: String
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});
let Business = mongoose.model('Business', BusinessSchema);

module.exports = Business;
