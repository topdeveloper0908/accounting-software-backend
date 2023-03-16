const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
	username: {
		type: String
	},
	email: {
		type: String
	},
	password: {
		type: String,
	},
	businesses: [{
		type: Schema.Types.ObjectId,
		ref: "Business"
	}]
});
let User = mongoose.model('User', UserSchema);

module.exports = User;
