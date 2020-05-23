const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const reader = require("../model/reader");

exports.getAllReaders = (req, res) => {
  res.status(200).send("All readers here..");
};
