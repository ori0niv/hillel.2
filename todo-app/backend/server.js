require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Ініціалізація додатку
const app = express();
const PORT = 5000;

// Налаштування middleware
app.use(cors());
app.use(bodyParser.json());

// Підключення до MongoDB
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Маршрути для TODO
const todoRoutes = require('./routes/todoRoutes');
app.use('/api/todos', todoRoutes);

// Запуск сервера
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
