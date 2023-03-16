// Question 1
let age = 18;

if (age > 18 && age < 21) {
    console.log("Ages lies between 10 and 20");
}

// Question 2

let condition = 1;

switch (condition) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid input");
}

// Question 3

let number = 6;
if (number % 2 == 0 && number % 3 == 0) {
    console.log("Number is divisible by 2 & 3");
} else {
    console.log("Number is not divisible by 2 & 3");
}

// Question 5
//let number = 6;
if (number % 2 == 0 || number % 3 == 0) {
    console.log("Number is divisible by 2 or 3");
} else {
    console.log("Number is not divisible by 2 & 3");
}

// Question 6

let ageDrive = 165;
console.log("You can", ageDrive > 18 ? "drive..." : "not drive...");