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

exports.createReader = async (req, res) => {
  try {
    const newReader = await Reader.create({ ...req.body });

    return res.status(200).send({
      success: true,
      data: newReader,
      message: "Registeration successful",
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
};
