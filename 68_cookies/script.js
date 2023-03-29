console.log(document.cookie);
document.cookie = "name=shubhanshu112";
document.cookie = "name2=shubhanshu1123422";
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)