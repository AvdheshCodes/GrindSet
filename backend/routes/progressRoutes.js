const express = require("express");
const router = express.Router();
const { markSolved, getProgress } = require("../controllers/progressController");
const { protect } = require("../middleware/auth");

router.get("/", protect, getProgress);
router.post("/solve/:questionId", protect, markSolved);

module.exports = router;