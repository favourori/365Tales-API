let mongoose = require("mongoose");

let chapterSchema = mongoose.Schema({
  title: { type: String, required: [true, "course episode title is required"] },
  story: { type: mongoose.Schema.Types.ObjectId, ref: "story" },
  audioLink: String,
  hasBeenPlayed: { type: Boolean, default: false },
  views: { type: Number },
});

let Chapter = mongoose.model("chapter", chapterSchema);

module.exports = Chapter;
