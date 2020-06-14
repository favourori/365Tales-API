let express = require("express");
const router = express.Router();

const { getAllStories, createStory } = require("../controller/story");

router.get("/allStories", getAllStories);
router.post("/", createStory);

module.exports = router;
