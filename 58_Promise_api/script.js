let p1 = new Promise((resolve, reject) => {
    setInterval(() => {
        resolve("value 1 ");
    }, 1000);
})

let p2 = new Promise((resolve, reject) => {
    setInterval(() => {
        resolve("value 2 ");
        //reject(new Error("Error hain ji"));
    }, 2000);
})

let p3 = new Promise((resolve, reject) => {
    setInterval(() => {
        resolve("value 3 ");
    }, 3000);
})

// p1.then((value) => {
//     console.log(value);
// })
// p2.then((value) => {
//     console.log(value);
// })
// p3.then((value) => {
//     console.log(value);
// })
//let promise_all = Promise.all([p1, p2, p3]);
//let promise_all = Promise.allSettled([p1, p2, p3]);
//let promise_all = Promise.race([p1, p2, p3]);
//let promise_all = Promise.any([p1, p2, p3]);
//let promise_all = Promise.rejected([p1, p2, p3]);
let promise_all = Promise.resolve(6);
promise_all.then((value) => {
    console.log(value);
}).catch((value) => {
    console.log(value);
});