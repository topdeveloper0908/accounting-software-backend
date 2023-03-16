const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountSchema = new mongoose.Schema({
	type: {
		type: String
	},
	parent: {
		type: String
	},
	name: {
		type: String,
	},
	description: {
		type: String
	}
});
let Account = mongoose.model('Account', AccountSchema);

module.exports = Account;
