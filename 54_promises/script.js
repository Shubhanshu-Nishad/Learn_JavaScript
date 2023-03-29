let promise = new Promise(function(resolve, reject) {
    //alert("I am alert in promise");
    // alert("Hello");
    resolve(56);
});
console.log("hello sworld!!!!!");
setTimeout(function() {
    console.log("Hello in 2 sec");
}, 2000)
console.log("My name is " + "Shubhanshu");
console.log(promise);