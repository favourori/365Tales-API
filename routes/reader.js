let express = require("express");
const router = express.Router();

const { getAllReaders, createReader } = require("../controller/reader");

router.get("/allReader", getAllReaders);
router.post("/", createReader);

module.exports = router;
