const f = () => {
    try {
        let a = 0;
        // console.log(object)
        console.log("Program run successfully");
        setTimeout(() => {
            console.log("Hello");
        }, 2000);
        return;
    } catch (error) {
        console.log("this is  error")
        console.log(p);
    } finally {
        console.log("I am good boy ji");
        //close the file
        // Exit the loop
        // Write to the log  file
    }
}
f();
console.log("ENd ji");