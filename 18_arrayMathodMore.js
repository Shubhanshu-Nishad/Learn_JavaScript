let num = [1, 2, 3, 4, 5, 6];
delete num[1];
console.log(num);
// sort method
const compare = (a, b) => {
    return a - b;
}
const compare1 = (a, b) => {
    return b - a;
}
let number = [23, 1, 3, 56, 23, 565, 7, 23, 3, 4];
number.sort();
console.log(number.sort())
number.sort(compare1);
console.log(number)

// splice and slice
number.splice(2, 3, 1021, 1022, 1023);
console.log(number);