let express = require("express");
const router = express.Router();

const { getAllReaders } = require("../controller/reader");

router.get("/", getAllReaders);
