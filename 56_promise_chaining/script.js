// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Resolved after 2 secs");
//         resolve(56);
//     }, 2000);
// });

// p1.then((value) => {
//     console.log(value);
//     let p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Promise 2");
//         }, 2000);
//     });
//     return p2;
// }).then((value) => {
//     console.log("We are done:")
//     return 2;
// }).then((value) => {
//     console.log("Now we are pakka done");
// })
const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
        document.body.appendChild(script);
        script.onload = () => {
            resolve("Script Loaded ji...");
        }
        script.onerror = () => { reject(0) };
    })
}

let pp = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js");
pp.then((value) => {
    console.log(value);
    return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js");
}).then((value) => {
    console.log("Second Script loaded")
}).catch((value) => {
    console.log("Sorry Guys yr");
})