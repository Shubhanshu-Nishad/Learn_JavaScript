console.log("hello sworld!!!!!");

// change the card tilte to red

// let ctitle = document.getElementsByClassName("card-title")[0];
// ctitle.style.color = "red"

let ctitle = document.getElementById("firstcardtitle");
ctitle.style.color = "orange";

let ctitles = document.querySelectorAll(".card-title");
ctitles[0].style.color = "blue"
ctitles[1].style.color = "red"
ctitles[2].style.color = "green"
console.log(ctitles);
document.querySelector(".this").style.color = "blue"
document.querySelector(".this").style.background = "black"
console.log(document.body.getElementsByTagName("a"));
console.log(document.querySelector(".card").getElementsByTagName("a"));