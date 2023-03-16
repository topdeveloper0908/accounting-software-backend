const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransactionSchema = new mongoose.Schema({
	type: {
		type: String
	},
	status: {
		type: String
	},

	account: {
		type: String,
	},
	category: {
		type: String
	},
	date: {
		type: Date,
	},
	description: {
		type: String
	},
	amount: {
		type: Number
	}
});
let Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;
