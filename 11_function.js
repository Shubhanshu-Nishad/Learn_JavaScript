let a = 1;
let b = 2;
let c = 3;

function onePlusAvg(x, y) {
    console.log("Done")
    return Math.round(1 + (x + y) / 2);
}

const sum = (p, q) => {
    return p + q;
}
console.log("Averge of a and b is :", onePlusAvg(a, b));
console.log("Averge of a and c is :", onePlusAvg(a, c));
console.log("Averge of c and b is :", onePlusAvg(c, b));
console.log(sum(23, 4));

const hello = () => {
    console.log("Hello world ji ...");
}

hello();
console.log(hello())