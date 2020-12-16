var http = require('http');
var file = require('fs');

var server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  var doituong = {
    ten: 'Toan',
    nghenghiep: "Designer",
    age: '21',
    que: 'Thái Bình'
  };
  res.end(JSON.stringify(doituong));
});

server.listen(8808, '127.0.0.1');
console.log('server running on port 8808');