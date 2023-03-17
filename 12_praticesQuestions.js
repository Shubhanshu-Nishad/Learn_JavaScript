const mean = (n) => {
    let sum = 0
    let number = n;
    while (n > 0) {
        sum += n;
        n--;
    }
    let mean = sum / number;
    return mean;
}
console.log(mean(5))