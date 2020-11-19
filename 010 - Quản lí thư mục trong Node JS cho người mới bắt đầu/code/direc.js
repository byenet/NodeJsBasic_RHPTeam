var file = require('fs');


// remove file testwrite.txt

// file.unlink("testwrite.txt", (err) => {
//     if (err) throw err;
//     console.log("testwrite.txt was deleted");
// });


// Create Folder
// file.mkdirSync('./foldertest');

// remove Folder
// file.rmdirSync('./foldertest');


// tao ra folder public sau do chep noi dung file test.txt vao file results.txt tao moi trong file public

file.mkdir('public', () => {
    file.readFile('./test.txt','utf8',(err,data) => {
        file.writeFileSync('./public/results.txt', data);
    })
})

