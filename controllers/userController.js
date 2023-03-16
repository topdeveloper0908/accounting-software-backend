const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const hashPassword = require("../utils/common.utils");


// Display All CRUD Data
const user_index = (req, res) => {
	User.find(function (err, users) {
		res.json(users);
	});
};

// Create New CRUD
const user_create_post = async (req, res) => {
	await User.deleteOne({ email: req.body.email }).then(function () {
		console.log('deleted');
	});

	await hashPassword(req);

	let user = await new User(req.body);
	await user
		.save()
		.then((user) => {
			res.send(user);
		})
		.catch(function (err) {
			res.status(422).send("user add failed");
		});
};

// Show a particular CRUD Detail by Id
const user_verify = (req, res) => {
	User.findOne({ email: req.body.email }, function (err, user) {
		if (!user) {
			res.status(404).send("This email doesn't exist!");
		} else {
			console.log(user._id);
			const isMatch = bcrypt.compare(req.body.password, user.password);
			if (isMatch) {
				const payload = {
					user: {
						id: user._id
					}
				};

				jwt.sign(
					payload,
					'secret',
					(err, token) => {
						if (err) throw err;
						// res.setHeader('Authorization', 'Bearer '+ token); 
						// res.header('Authorization', 'Bearer '+ token);
						let options = {
							path: "/",
							sameSite: true,
							maxAge: 1000 * 60 * 60 * 24, // would expire after 24 hours
							httpOnly: false, // The cookie only accessible by the web server
						}

						// res.cookie('x-access-token', token, options)

						res.cookie('token', token, options);
						res.send({ type: "success", message: "successful", token, id: user._id });
					}
				);
			} else {
				res.status(401).send("The password is different");
			}
		}
	});
};

// Update CRUD Detail by Id
const user_update = (req, res) => {
	User.findByIdAndUpdate(req.params.id, req.body)
		.then(function () {
			res.json("User updated");
		})
		.catch(function (err) {
			res.status(422).send("User update failed.");
		});
};

// Delete CRUD Detail by Id
const user_delete = (req, res) => {
	User.findById(req.params.id, function (err, user) {
		if (!user) {
			res.status(404).send("User not found");
		} else {
			User.findByIdAndRemove(req.params.id)
				.then(function () {
					res.status(200).json("User deleted");
				})
				.catch(function (err) {
					res.status(400).send("User delete failed.");
				});
		}
	});
};

module.exports = {
	user_index,
	user_verify,
	user_create_post,
	user_update,
	user_delete,
};
