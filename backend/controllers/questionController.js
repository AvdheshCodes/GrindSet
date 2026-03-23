const Question = require("../models/question");

// @GET /api/questions - Get all questions (public)
const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find().sort({ createdAt: -1 });
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @POST /api/questions - Add question (admin only)
const addQuestion = async (req, res) => {
  try {
    const { title, topic, difficulty, leetcodeLink, videoLinks, articleLinks } =
      req.body;

    const question = await Question.create({
      title,
      topic,
      difficulty,
      leetcodeLink,
      videoLinks,
      articleLinks,
    });

    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @PUT /api/questions/:id - Edit question (admin only)
const updateQuestion = async (req, res) => {
  try {
    const question = await Question.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @DELETE /api/questions/:id - Delete question (admin only)
const deleteQuestion = async (req, res) => {
  try {
    const question = await Question.findByIdAndDelete(req.params.id);

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    res.status(200).json({ message: "Question deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { getAllQuestions, addQuestion, updateQuestion, deleteQuestion };