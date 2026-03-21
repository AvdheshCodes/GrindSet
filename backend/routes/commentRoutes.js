const express = require("express");
const router = express.Router();
const {
  getComments,
  addComment,
  deleteComment,
} = require("../controllers/commentController");
const { protect } = require("../middleware/auth");

// Public
router.get("/:questionId", getComments);

// Protected
router.post("/:questionId", protect, addComment);
router.delete("/:id", protect, deleteComment);

module.exports = router;