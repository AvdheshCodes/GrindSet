const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const {
    getMyQuestions,
    addMyQuestion,
    deleteMyQuestion,
    toggleSolved,
} = require("../controllers/userQuestionController");

router.get("/", protect, getMyQuestions);
router.post("/", protect, addMyQuestion);
router.delete("/:id", protect, deleteMyQuestion);
router.patch("/:id/toggle", protect, toggleSolved);

module.exports = router;
