let a = {
    name2: "harry",
    language: "JavaScript",
    run: () => {
        alert("self run");
    }
}
console.log(a);
let p = {
    run: () => {
        alert("run");
    }
}
p.__proto__ = {
    name: "Shubhanshu"
}
a.__proto__ = p;
a.run();
console.log(a.name)