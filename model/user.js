  //Setup Model
  const mongoose = require("mongoose");

//crreate investor schema
let userSchema = mongoose.Schema({
  username: { type: String, required: [true, "please enter your username"] },
  email: { type: String, required: [true, "please enter your email"] },
  password: { type: String, required: [true, "please enter your  password"] },
  dateJoined: { type: Date, default: Date.now },
  type: {} // Admin, Reader & Author (3 Roles)
});

let User = mongoose.model("user", userSchema);


//Export Users
module.exports = User;