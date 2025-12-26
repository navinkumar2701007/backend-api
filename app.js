const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Backend auto deploy working 🚀",
    service: "backend-api",
    timestamp: new Date().toISOString()
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok"
  });
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
