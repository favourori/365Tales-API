const jwt = require("jsonwebtoken");
const User = require("../model/user");
const bcrypt = require("bcrypt");
require("dotenv").config();

exports.getAllUsers = async (req, res) => {
  try {
    let allUsers = await User.find();

    if (allUsers) {
      res.status(200).send({
        success: true,
        readers: allUsers,
        numberOfUsers: allUsers.length
      });
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};

//Create Reader
exports.createUser = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    let userUsername = User.findOne({ username: req.body.username });

    //make second req to check for username

    if (user) {
      res
        .status(400)
        .send({
          success: false,
          message: "A user with this credential exits",
        });
    } else {
      //Hash password
      let salt = await bcrypt.genSalt(10);
      let hashedPassword = await bcrypt.hash(req.body.password, salt);
      //console.log("not found");
      let newUser = await new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      });

      newUser
        .save()
        .then((data) => {
          const token = jwt.sign({ user: newUser }, process.env.JWT_SECRET);
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
exports.userLogin = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user)
      return res
        .status(400)
        .send({ success: false, message: "Invalid credentials" });

    //Else if the email is valid, let's check for the password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    //console.log(validPassword)
    if (!validPassword)
      return res
        .status(400)
        .send({ success: false, message: "Invalid credentials" });

    //Username & password are valid..
    //Create & Assign Token

    const token = jwt.sign({ user: user}, process.env.JWT_SECRET);
    res
      .header("auth-token", token)
      .status(200)
      .send({ success: true, token: token, data: user });
  } catch (err) {
    res.status(400).send(err.message);
  }
};
