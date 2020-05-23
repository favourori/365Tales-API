const jwt = require("jsonwebtoken");
const Reader = require("../model/reader");

exports.getAllReaders = async (req, res) => {
  try {
    let allReaders = await Reader.find();

    if (allReaders) {
      res.status(200).send({
        success: true,
        readers: allReaders,
      });
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};
