let num = [3, 2, 45, 6, 3, 2, 5, 3, false, "Harry", NaN]

for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

num.forEach((element) => {
    console.log(element * element);
})

let name = "Shubhanshu";
let arr = Array.from(name);
console.log(arr);

// for...of
for (let i of num) {
    console.log(i);
}

// for ... in gives keys of object or arrays
for (let i in num) {
    console.log(num[i]);
}