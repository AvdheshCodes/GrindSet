const express = require("express");
const router = express.Router();
const {
  getAllQuestions,
  addQuestion,
  updateQuestion,
  deleteQuestion,
} = require("../controllers/questionController");
const { protect, adminOnly } = require("../middleware/auth");

// Public
router.get("/", getAllQuestions);

// Admin only
router.post("/", protect, adminOnly, addQuestion);
router.put("/:id", protect, adminOnly, updateQuestion);
router.delete("/:id", protect, adminOnly, deleteQuestion);

module.exports = router;