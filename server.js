const express = require('express');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

// ---------- View engine ----------
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ---------- Static files ----------
app.use(express.static(path.join(__dirname, 'public')));

// ---------- Body parsing ----------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ============================================================
// Routes
// ============================================================

// Trang chủ
app.get('/', (req, res) => {
  res.render('index');
});

// Trang game (placeholder – bạn tự phát triển tiếp)
app.get('/game', (req, res) => {
  res.render('game');
});

// ---------- 404 handler ----------
app.use((req, res) => {
  res.status(404).send('404 – Trang không tồn tại');
});

// ---------- Error handler ----------
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('500 – Lỗi server');
});

// ---------- Start ----------
app.listen(PORT, () => {
  console.log(`🃏  Mystic Card Night đang chạy tại http://localhost:${PORT}`);
});