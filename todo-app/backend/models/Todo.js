const mongoose = require('mongoose');

// Схема для задач
const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Todo', todoSchema);
