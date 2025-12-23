const http = require("http");

const PORT = 3000;

http.createServer((req, res) => {
  res.end("Backend running via PM2 🚀");
}).listen(PORT, () => {
  console.log("Backend running on port 3000");
});
