var file = require('fs');

console.log('Bat dau: ');

// Sync
// var readFile = file.readFileSync('test.txt','utf8');
// console.log('thuc hien '+readFile);

// var writeFile = file.writeFileSync('testwrite.txt', readFile);

// Not Sync Func: (nameFile, type, Callback)
var readFileNot = file.readFile('test.txt', 'utf8', function(err,data){
    if (true) console.log('dung');
    else console.log("sai");
} )


console.log('Ket thuc');