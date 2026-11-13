const express = require("express");
const app = express();
app.use(express.json());

let tasks = [{ id: 1, title: "اولین وظیفه", status: "todo" }];

app.get("/api/tasks", (req, res) => {
  res.status(200).json(tasks);
});

app.get("/api/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id === Number(req.params.id));
  if (!task) return res.status(404).json({ error: "not found" });
  res.status(200).json(task);
});

app.post("/api/tasks", (req, res) => {
  if (!req.body.title) return res.status(400).json({ error: "title is required" });
  const task = { id: tasks.length + 1, title: req.body.title, status: "todo" };
  tasks.push(task);
  res.status(201).json(task);
});

app.listen(3000, () => console.log("Server running on port 3000"));
