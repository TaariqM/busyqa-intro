const express = require("express");
const router = express.Router();

const tasks = []; // An array to store tasks

// Middleware to log incoming requests
router.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  console.log(`title: ${req.body.title} description: ${req.body.description}`);
  next();
});

// Define the GET endpoint to retrieve tasks
router.get("/", (req, res) => {
  res.json(tasks);
});

// Define the POST endpoint to create tasks
router.post("/", (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res
      .status(400)
      .json({ message: "Title and description are required" });
  }
  const task = { id: tasks.length + 1, title, description };
  tasks.push(task);
  res.status(201).json(task);
});

// Define the UPDATE enpoint to update a specific task
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  // Find the task by ID
  let task = {};
  for (let tsk of tasks) {
    if (tsk.id === parseInt(id)) {
      task = tsk;
      break;
    }
  }

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  // Update task
  if (title) {
    task.title = title;
  }
  if (description) {
    task.description = description;
  }

  //   tasks[parseInt(id)] = task;
  res.json(task); // return the updated task
});

// Define the DELETE endpoint to delete a specific task
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  // Find the task by ID
  let task = {};
  for (let tsk of tasks) {
    if (tsk.id === parseInt(id)) {
      task = tsk;
      break;
    }
  }

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  tasks.splice(parseInt(id) - 1, 1); // removes the specific task
  res.json(tasks); // return the tasks array
});

module.exports = router;
