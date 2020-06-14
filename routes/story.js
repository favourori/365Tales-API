let express = require("express");
const router = express.Router();


const {
getAllStories
} = require("../controller/story");

router.get("/allStories", getAllStories);


module.exports = router;
