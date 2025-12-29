const express = require("express");
const cors = require("cors");

const app = express();

// ✅ Allow frontend domains
app.use(cors({
  origin: [
    "https://navin.cloud",
    "https://www.navin.cloud"
  ]
}));

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
