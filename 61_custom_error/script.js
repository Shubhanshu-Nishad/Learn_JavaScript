try {
    let age = +prompt("Enter your age");
    if (age > 150) {
        throw new ReferenceError("This is invalid age")
    }
} catch (error) {
    console.log(error.message);
    console.log(error.name);
    console.log(error.stack);
}
console.log("Your script is stil Running ji");