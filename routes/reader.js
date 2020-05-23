let express = require("express");
const router = express.Router();

const { getAllReaders, createReader } = require("../controller/reader");

router.get("/allReaders", getAllReaders);
router.post("/", createReader);

module.exports = router;
