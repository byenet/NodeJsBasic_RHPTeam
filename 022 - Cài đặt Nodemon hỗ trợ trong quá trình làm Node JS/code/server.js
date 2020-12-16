var http = require('http');
var file = require('fs');

var server = http.createServer((req, res) => {
  console.log('nguoi dung yeu cau link: ' + req.url);
  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, { ContentType: "text/html" });
    file.createReadStream(__dirname + "/index.html", "utf8").pipe(res);
  } else if (req.url === "/login") {
    res.writeHead(200, { ContentType: "text/html" });
    file.createReadStream(__dirname + "/login.html", "utf8").pipe(res);
  } else if (req.url === "/register") {
    res.writeHead(200, { ContentType: "text/html" });
    file.createReadStream(__dirname + "/register.html", "utf8").pipe(res);
  } else {
    res.writeHead(200, { ContentType: "text/html" });
    file.createReadStream(__dirname + "/404.html", "utf8").pipe(res);
  }
});

server.listen(8808, '127.0.0.1');
console.log('server running on port 8808');