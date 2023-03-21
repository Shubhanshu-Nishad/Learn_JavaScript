console.log("log");
console.info("info");
console.warn("warn");
console.error("err");
console.assert("err" != false);
console.assert("warn" == false);

console.time("for loop");
let array = [1, 2, 4, 4, 5, 5, 5, 6, 1];
array.forEach(element => {
    console.log(element);
});
console.timeEnd("for loop");