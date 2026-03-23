const User = require("../models/user");
const Question = require("../models/Question");

// @POST /api/progress/solve/:questionId - Mark question as solved
const markSolved = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const { questionId } = req.params;

    const alreadySolved = user.solvedQuestions.includes(questionId);

    if (alreadySolved) {
      // Unmark as solved
      user.solvedQuestions = user.solvedQuestions.filter(
        (id) => id.toString() !== questionId
      );
    } else {
      // Mark as solved
      user.solvedQuestions.push(questionId);
    }

    await user.save();

    res.status(200).json({
      message: alreadySolved ? "Marked as unsolved" : "Marked as solved",
      solvedQuestions: user.solvedQuestions,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @GET /api/progress - Get user progress
const getProgress = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("solvedQuestions");
    const totalQuestions = await Question.countDocuments();

    const solvedCount = user.solvedQuestions.length;
    const percentage =
      totalQuestions === 0
        ? 0
        : Math.round((solvedCount / totalQuestions) * 100);

    const allQuestions = await Question.find();
    const topicMap = {};

    allQuestions.forEach((q) => {
      if (!topicMap[q.topic]) {
        topicMap[q.topic] = { total: 0, solved: 0 };
      }
      topicMap[q.topic].total += 1;
    });

    user.solvedQuestions.forEach((q) => {
      if (topicMap[q.topic]) {
        topicMap[q.topic].solved += 1;
      }
    });

    res.status(200).json({
      totalQuestions,
      solvedCount,
      percentage,
      topicWise: topicMap,
      // Return IDs only, not full objects
      solvedQuestions: user.solvedQuestions.map((q) => q._id.toString()),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { markSolved, getProgress };