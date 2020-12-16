var file = require('fs');

// __dirname : tu thu muc goc
// doc encoding utf8
var docluong = file.createReadStream(__dirname + '/readMe.txt', {encoding: 'utf8'});

docluong.on('data',(chunk)=>{
    console.log('Doc luong encoding utf8: ');
    console.log(chunk);
})

// doc dang buffer

var docluong2 = file.createReadStream(__dirname + "/readMe.txt");

docluong2.on("data", (chunk) => {
  console.log("\nDoc luong buffer: ");
  console.log(chunk);
});