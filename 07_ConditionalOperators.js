//let age = 40;
let age = prompt("Hey whats your age buddy :");
console.log(typeof age)
age = Number.parseInt(age);
console.log(typeof age)
if (age > 18) {
    alert("you car drive");
} else {
    alert("Sorry,Your are underAge");
}

console.log("You can", (age < 18 ? "not drive...." : "drive......"))