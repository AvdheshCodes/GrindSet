const UserQuestion = require("../models/UserQuestion");

// GET /api/my-questions — get logged-in user's personal questions
const getMyQuestions = async (req, res) => {
    try {
        const questions = await UserQuestion.find({ userId: req.user.id }).sort({
            createdAt: -1,
        });
        res.json(questions);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

// POST /api/my-questions — add a personal question
const addMyQuestion = async (req, res) => {
    try {
        const { title, topic, difficulty, leetcodeLink, videoLinks, articleLinks } =
            req.body;

        if (!title || !topic) {
            return res.status(400).json({ message: "Title and topic are required" });
        }

        const question = await UserQuestion.create({
            userId: req.user.id,
            title,
            topic,
            difficulty: difficulty || "Medium",
            leetcodeLink: leetcodeLink || "",
            videoLinks: videoLinks || [],
            articleLinks: articleLinks || [],
        });

        res.status(201).json(question);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

// DELETE /api/my-questions/:id — delete a personal question (owner only)
const deleteMyQuestion = async (req, res) => {
    try {
        const question = await UserQuestion.findById(req.params.id);

        if (!question) {
            return res.status(404).json({ message: "Question not found" });
        }

        if (question.userId.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not authorized" });
        }

        await question.deleteOne();
        res.json({ message: "Question deleted" });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

// PATCH /api/my-questions/:id/toggle — toggle solved status
const toggleSolved = async (req, res) => {
    try {
        const question = await UserQuestion.findById(req.params.id);

        if (!question) {
            return res.status(404).json({ message: "Question not found" });
        }

        if (question.userId.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not authorized" });
        }

        question.solved = !question.solved;
        await question.save();
        res.json(question);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { getMyQuestions, addMyQuestion, deleteMyQuestion, toggleSolved };
