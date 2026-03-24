const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
const questionRoutes = require("./routes/questionRoutes");
const progressRoutes = require("./routes/progressRoutes");
const commentRoutes = require("./routes/commentRoutes");
const userQuestionRoutes = require("./routes/userQuestionRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/my-questions", userQuestionRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({ message: "DSA Tracker API is running 🚀" });
});

// DB Connection + Server Start
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected ✅");
    app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
  })
  .catch((err) => console.error("DB connection error:", err));