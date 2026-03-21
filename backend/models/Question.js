const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    questionNumber: {
      type: Number,
      unique: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    topic: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
    },
    leetcodeLink: {
      type: String,
      required: true,
    },
    videoLinks: [
      {
        type: String,
      },
    ],
    articleLinks: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", questionSchema);