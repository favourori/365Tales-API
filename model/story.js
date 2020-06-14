let mongoose = require("mongoose");

//create course schema
let storySchema = mongoose.Schema({
  title: { type: String, required: [true, "course title is required"] },
  creator: { type: String, required: [true, "course title is required"] },
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

let Course = mongoose.model("course", CourseSchema);

module.exports = Course;
