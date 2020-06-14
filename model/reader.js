//Setup Model
const mongoose = require("mongoose");

//crreate reader schema
let readerSchema = mongoose.Schema({
  username: { type: String, required: [true, "please enter your username"] }, //has to be unique
  email: { type: String, required: [true, "please enter your email"] },
  password: { type: String, required: [true, "please enter your  password"] },
  dateJoined: { type: Date, default: Date.now },
});

let Reader = mongoose.model("reader", readerSchema);

//Export Users
module.exports = Reader;
