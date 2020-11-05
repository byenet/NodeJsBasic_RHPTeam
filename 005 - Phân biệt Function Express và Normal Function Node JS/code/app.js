// Normal Function (Co the goi o bat cu dau, goi truoc ham cung duoc)

// sayGoodbye();

function sayGoodbye(){
    console.log("Good bye");
}

sayGoodbye();

function callFunc(func) {
  func();
}

// Function Expression (phai goi sau scope khai bao neu khong se loi)



var sayHello = function(){
    console.log("Hello");
}

sayHello();

var sayHi = function(){
    console.log("Hi");
}

callFunc(sayHello);
callFunc(sayHi);