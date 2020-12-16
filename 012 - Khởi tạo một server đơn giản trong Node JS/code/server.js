var http = require('http');

var server = http.createServer((req,res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Chay xong roi!");
});

server.listen(3333,'127.0.0.1');
console.log('Server running on port 3333');