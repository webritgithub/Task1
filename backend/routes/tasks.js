import express from "express";
import Task from "../models/Task.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Task
router.post("/", protect, async (req, res) => {
  const { title, description } = req.body;
  const task = await Task.create({ user: req.user._id, title, description });
  res.status(201).json(task);
});

// Get Tasks
router.get("/", protect, async (req, res) => {
  const tasks = await Task.find({ user: req.user._id });
  res.json(tasks);
});

// Update Task
router.put("/:id", protect, async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, user: req.user._id },
    req.body,
    { new: true }
  );
  res.json(task);
});


export default router;
