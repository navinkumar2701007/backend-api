// webhook auto deploy test
const http = require("http");
const { exec } = require("child_process");

http.createServer((req, res) => {
  if (req.url === "/status") {
    exec("pm2 jlist", (err, stdout) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(stdout);
    });
  } else {
    res.end("Backend successfully running via PM2 🚀");
  }
}).listen(3000);
// auto deploy test
// webhook final fix
