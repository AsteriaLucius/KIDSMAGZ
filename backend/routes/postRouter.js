const router = require("express").Router();
const postModelTemplate = require("../models/PostModel");

router.get("/", (req, res) => {
	postModelTemplate.find({}).then((posts) => {
		console.log(posts);
		res.status(200).json(posts);
	});
});

router.post("/add", (req, res) => {
	const userId = req.body.userId;
	const postHeading = req.body.headding;
	const postDescription = req.body.description;
	const postImage = req.body.image;

	const newPost = new postModelTemplate({
		userId,
		postHeading,
		postDescription,
		postImage,
	});

	console.log(newPost);

	newPost
		.save()
		.then(() => {
			console.log("Saved");
			res.status(200).json({
				success: true,
			});
		})
		.catch((err) => res.json(err));
});

module.exports = router;
