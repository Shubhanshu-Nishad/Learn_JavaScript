let a = Math.random() * 10;
let number = Number.parseInt(a);
console.log(a);
alert("You have total 5 Chance...");
let i = 0;
let guess = prompt("Enter your number")
while (guess != number && i < 5) {

    if (guess > number)
        guess = prompt("Enter smaller value");
    else
        guess = prompt("Enter Greater value");
}

if (i == 5)
    alert("You loss....the number is " + number);
else
    alert("Congratulation!!!")