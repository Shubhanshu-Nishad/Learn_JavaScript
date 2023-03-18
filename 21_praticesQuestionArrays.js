// Questin 2
let arr = [1, 2, 4, 5, 56, 4, 3, 4]
    // let a;
    // do {
    //     a = prompt("Enter a number");
    //     a = Number.parseInt(a);
    //     arr.push(a);
    // } while (a != 0);

// console.log(arr);

// Question 3
// let a = arr.filter((value) => {
//     if (value % 2 == 0)
//         return value;
// });
// console.log(a);

// Question 4
// let a = arr.map((value) => {
//     return value * value;
// });
// console.log(a);
// Question 5
let a = arr.reduce((v1, v2) => {
    return v1 * v2;
});
console.log(a);