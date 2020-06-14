let mongoose = require("mongoose");

//create course schema
let storySchema = mongoose.Schema({
  title: { type: String, required: [true, "course title is required"] },
  creator: { type: String, required: [true, "course title is required"] },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "category" },
  description: {
    type: String,
    required: [true, "course description is required"],
  },
  photo: String,
  //chapters: [{ type: mongoose.Schema.Types.ObjectId, ref: "episode" }],
  dateCreated: { type: Date, default: Date.now },
  isInProgress: { type: Boolean, default: false },
  rating: { type: Number },
});

let Story = mongoose.model("story", CourseSchema);

module.exports = Story;
