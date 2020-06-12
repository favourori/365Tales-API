//Setup Model
const mongoose = require("mongoose");

//crreate reader schema
let storySchema = mongoose.Schema({
  username: { type: String, required: [true, "please enter your username"] },

  created: { type: Date, default: Date.now },
});

