const express = require("express");
const app = express();

/* ✅ CORS FIX */
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://navin.cloud");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Backend auto deploy working 🚀",
    service: "backend-api",
    timestamp: new Date().toISOString()
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
