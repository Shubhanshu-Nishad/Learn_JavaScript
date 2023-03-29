// async function harry() {
//     return 5;
// }

// harry().then((x) => {
//     alert(x);
// })

async function harry() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 Deg");
        }, 1000)
    })
    let bangloreWeather = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("21 Deg");
            }, 6000)
        })
        // delhiWeather.then(alert);
        // bangloreWeather.then(alert);
    console.log("Fetching...")
    let delhiw = await delhiWeather;
    let banglorew = await bangloreWeather;
    return [delhiw, banglorew]
}
const cherry = () => {
    console.log("Hey I am cherry and I am not waiting..")
}
console.log("Welocome to Control Room");
let a = harry();
let b = cherry();
a.then((value) => {
    console.log(value);
})