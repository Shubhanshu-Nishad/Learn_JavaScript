let p1 = new Promise((reslove, reject) => {
    console.log("Promise is pending");
    setTimeout(() => {
        console.log("I am a promise and I am fulfilled");
        reslove(true);
        //reject(new Error("I am error"))
    }, 2000);
});
let p2 = new Promise((reslove, reject) => {
    console.log("Promise is pending");
    setTimeout(() => {
        console.log("I am a promise and I am rejected");
        //reslove(true);
        reject(new Error("I am error"))
    }, 2000);
});
p1.then((value) => {
    console.log(value);
});
p2.catch((error) => {
    console.log(error);
}, (error) => {
    console.log(error);
});
console.log(p, p2);