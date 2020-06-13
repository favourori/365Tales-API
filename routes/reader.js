let express = require("express");
const router = express.Router();

const {
  getAllReaders,
  createReader,
  readerLogin,
} = require("../controller/reader");

router.get("/allReaders", getAllReaders);
router.post("/register", createReader);
router.post("/login", readerLogin);

module.exports = router;
