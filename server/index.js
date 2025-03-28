const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Статические файлы
app.use(express.static(path.join(__dirname, '../public')));

// Настройка подключения библиотек: при обращении к /libs сервер будет отдавать файлы из node_modules
app.use('/libs', express.static(path.join(__dirname, '../node_modules')));

// API пример
app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong' });
});

// Отправка главной страницы
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
