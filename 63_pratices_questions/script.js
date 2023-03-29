const loadScript = async(src) => {
        return new Promise((resolve, reject) => {
            let script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(src);
            }
            document.head.append(script);
        })
    }
    // Question 1
    // let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js");
    // a.then((value) => {
    //     console.log(value);
    // })
    // Question 2
    // const main2 = async() => {
    //     console.log(new Date());
    //     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js");
    //     console.log(a);
    //     console.log(new Date());

// }
// main2();


// Question 3
let p = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Please this is not acceptable.")
        }, 3000)
    })
}
let a = async() => {
    try {
        let c = await p();
        console.log(c);
    } catch (error) {
        console.log("This error is has been handle");
    }
}
a();