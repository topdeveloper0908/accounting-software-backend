const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number,
    },
    option: {
        type: String
    },
    tax: {
        type: Number
    }
});
let Product = mongoose.model('Product', ProductSchema);

module.exports = Product;