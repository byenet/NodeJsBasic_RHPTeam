// Function Express

var dem = function(arrMang){
    return 'there are ' + arrMang.length + ' element in array';
}

var tinh = function(a,b) {
    return `Sum is ${a+b}`
}

var chao = function() {
    console.log("hello = chao");
}


// cach 1
module.exports.demtest2 = function (arrMang) {
    return "there are " + arrMang.length + " element in array";
};

// cach 2
// module.exports.tenMuonExport = name function express
module.exports.demtest = dem;
module.exports.tinhtest = tinh;
module.exports.chaotest = chao;

// cach 3 khi dùng cach nay thi khong the dung chung nhu 2 cach con lai
// module.exports = {
//     demtest3: dem,
//     tinhtest2: tinh,
//     chaotest2: chao
// }