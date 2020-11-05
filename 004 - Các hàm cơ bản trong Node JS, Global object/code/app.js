console.log("hello word");

let time = 0;

// setTimeout(()=> {
//     console.log("After 3 seconds take! ");
// }, 3000);

let timer = setInterval(() => {
    time += 2;
    console.log(time + " Loop!");
    if(time > 7){
        clearInterval(timer);
        console.log("end!");
    }
}, 2000);