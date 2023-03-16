// Avoid var keywords

console.log("JS tutorial : var , let and const ")

var a = 45;
//var b = "Ram"
let b = "Ram"
var c = null
var d = undefined

{
    //var b = "this"
    console.log(b)
}
console.log(b)


// After em

// case 2 if line 6 is let b = "Ram"
// let b = "hello" // can't be re-declared
{
    let b = "this"
    console.log(b)
}
console.log(b)

const author = "shubhanshu"

console.log(author)