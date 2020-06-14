let mongoose = require("mongoose");

//create course schema
let categorySchema = mongoose.Schema({
  title: { type: String, required: [true, "course title is required"] },

  description: {
    type: String,
    required: [true, "course description is required"],
  },

  dateCreated: { type: Date, default: Date.now },
});

let Category = mongoose.model("category", categorySchema);

module.exports = Story;
