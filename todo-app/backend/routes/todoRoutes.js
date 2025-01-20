const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Створити нову задачу
router.post('/', async (req, res) => {
    try {
        const todo = new Todo({
            title: req.body.title,
        });
        await todo.save();
        res.status(201).json(todo);
    } catch (err) {
        res.status(500).json({ message: 'Error creating TODO', error: err.message });
    }
});

// Отримати всі задачі
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching TODOs', error: err.message });
    }
});

// Оновити задачу
router.put('/:id', async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            { title: req.body.title, completed: req.body.completed },
            { new: true }
        );
        res.status(200).json(updatedTodo);
    } catch (err) {
        res.status(500).json({ message: 'Error updating TODO', error: err.message });
    }
});

// Видалити задачу
router.delete('/:id', async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'TODO deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting TODO', error: err.message });
    }
});

module.exports = router;
