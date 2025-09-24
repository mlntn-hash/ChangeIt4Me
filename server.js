const express = require("express");
const next = require("next");

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Пример backend API
  server.get("/api/ping", (req, res) => {
    res.json({ message: "Backend работает!" });
  });

  // Все остальные маршруты — передаём Next.js
  server.use((req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, '0.0.0.0', () => {
  console.log(`Сервер был запущен на http://0.0.0.0:${PORT}`);
});
});
