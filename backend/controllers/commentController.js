const Comment = require("../models/Comment");

// @GET /api/comments/:questionId - Get all comments for a question
const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ questionId: req.params.questionId })
      .populate("userId", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @POST /api/comments/:questionId - Add a comment
const addComment = async (req, res) => {
  try {
    const comment = await Comment.create({
      userId: req.user.id,
      questionId: req.params.questionId,
      text: req.body.text,
    });

    const populated = await comment.populate("userId", "name email");

    res.status(201).json(populated);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @DELETE /api/comments/:id - Delete a comment (owner only)
const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    if (comment.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await comment.deleteOne();

    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { getComments, addComment, deleteComment };