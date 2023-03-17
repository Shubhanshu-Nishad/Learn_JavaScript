const fruits = ["Mango", "Apple", "yummy"];
let marks = [1, 2, 3, 4, 5, 5, 6, false, NaN];
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);
console.log(marks[6]);
console.log(marks[7]);
console.log(marks[8]);
marks[7] = "Shubhanshu"
console.log(marks);
console.log(marks.length)
console.log(typeof marks)
for (let a in fruits) {
    console.log(fruits[a]);
}
console.log(marks);

for (let a in marks) {
    console.log(marks[a]);
}