let arr = [45, 23, 21]
console.log(arr);
let a = arr.map((value, index, array) => {
    console.log(value, index, array);
    return value + 1;
})
console.log(a)

// Array filter mathod
let a2 = arr.filter((a) => {
    return a < 25;
});
console.log(a2);

// Arrays Reduce method

let arr3 = [1, 2, 3, 4, 5, 5, 2, 4, 3];
let a3 = arr3.reduce((h1, h2) => {
    return h1 + h2;
});
console.log(a3);