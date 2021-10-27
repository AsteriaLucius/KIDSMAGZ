const express = require("express");
const { v4: uuid } = require("uuid");
const router = express.Router();
const SignUpTemplateCopy = require("../models/SignUpModels");

router.post("/signup", (request, response) => {
	const username = request.body.username;
	const email = request.body.email;
	const password = request.body.password;

	const id = uuid().toString();

	const signedUpUser = new SignUpTemplateCopy({
		uid: id,
		username: username,
		email: email,
		password: password,
	});

	signedUpUser
		.save()
		.then(() => {
			console.log("saved");
			response.status(200).json({
				success: true,
			});
		})
		.catch((error) => {
			response.status(400).json(error);
		});
});

router.post("/signin", (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	SignUpTemplateCopy.findOne({ email: email })
		.then((data) => {
			console.warn(data);

			if (data.password === password) {
				res.status(200).json({
					data: data,
					success: true,
				});
			} else {
				res.status(200).json({
					success: false,
					failureCode: 403,
					error: "Invalid username or password",
				});
			}
		})

		.catch((err) => {
			res.status(403).json({
				success: false,
				error: err,
				failureCode: 402,
			});
		});
});

module.exports = router;
