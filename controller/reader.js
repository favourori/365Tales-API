const jwt = require("jsonwebtoken");
const Reader = require("../model/reader");
const bcrypt = require("bcrypt");
require("dotenv").config();

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

//Create Reader
exports.createReader = async (req, res) => {
  try {
    let reader = await Reader.findOne({ email: req.body.email });

    if (reader) {
      res
        .status(400)
        .send({ success: false, message: "A user with this email exists" });
    } else {
      //Hash password
      let salt = await bcrypt.genSalt(10);
      let hashedPassword = await bcrypt.hash(req.body.password, salt);
      //console.log("not found");
      let newReader = await new Reader({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      });

      newReader
        .save()
        .then((data) => {
          const token = jwt.sign(
            { reader: newReader },
            process.env.JWT_SECRET
          );
          res.header("auth-token", token).status(200).send({
            success: true,
            data: data,
            token: token,
          });
        })
        .catch((err) => {
          res.status(400).send(err.message);
        });
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};

//Login
exports.readerLogin = async (req, res) => {

  try {
    let reader = await Reader.findOne({ email: req.body.email });
    if (!reader)
      return res
        .status(400)
        .send({ success: false, message: "Invalid credentials" });

    //Else if the email is valid, let's check for the password
    const validPassword = await bcrypt.compare(
      req.body.password,
      reader.password
    );
    //console.log(validPassword)
    if (!validPassword)
      return res
        .status(400)
        .send({ success: false, message: "Invalid credentials" });

    //Username & password are valid..
    //Create & Assign Token

    const token = jwt.sign({ reader: reader }, process.env.JWT_SECRET);
    res
      .header("auth-token", token)
      .status(200)
      .send({ success: true, token: token, data: reader });
  } catch (err) {
    res.status(400).send(err.message);
  }

};
