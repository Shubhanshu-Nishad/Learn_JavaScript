console.log("hello sworld!!!!!");
const changeBodyRed = () => {
    document.body.firstElementChild.style.background = "red";
}
changeBodyRed();
let b = document.body
console.log("First Child of b is :", b.firstChild);
console.log("First Element of b is :", b.firstElementChild);