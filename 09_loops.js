// Loops

// let sum = 0;
// for (let i = 0; i < 10; i++) {
//     sum += (i + 1);
// }
// console.log(sum)

let obj = {
    harry: 34,
    shu: 21,
    ram: 56,
    Rohna: 67,
}
for (let a in obj) {
    console.log("Marks of " + a + " are " + obj[a]);
}

for (let b of "Harry") {
    console.log(b)
}