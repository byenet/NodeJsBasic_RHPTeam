var file = require('fs');

var docluong = file.createReadStream(__dirname + "/readMe.txt", {
  encoding: "utf8",
});

var ghiluong = file.createWriteStream(__dirname + '/writeMe.txt', {encoding: 'utf8'});


docluong.on("data", (chunk) => {
  console.log("Ghi luong nao: ");
  ghiluong.write(chunk);
});
