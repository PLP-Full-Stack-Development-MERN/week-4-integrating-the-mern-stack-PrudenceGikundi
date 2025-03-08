// const Task = require('../models/Task');
const Task = require('../models/task'); 


// Get all tasks
const getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
};

// Create a new task
const createTask = async (req, res) => {
    const { title, description, status, dueDate } = req.body;
    const task = new Task({ title, description, status, dueDate });
    await task.save();
    res.status(201).json(task);
};

// Update task by ID
const updateTask = async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
};

// Delete task by ID
const deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
