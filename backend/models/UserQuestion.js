const mongoose = require("mongoose");

const userQuestionSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        topic: {
            type: String,
            required: true,
            trim: true,
        },
        difficulty: {
            type: String,
            enum: ["Easy", "Medium", "Hard"],
            default: "Medium",
        },
        leetcodeLink: {
            type: String,
            default: "",
        },
        videoLinks: [{ type: String }],
        articleLinks: [{ type: String }],
        solved: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("UserQuestion", userQuestionSchema);
