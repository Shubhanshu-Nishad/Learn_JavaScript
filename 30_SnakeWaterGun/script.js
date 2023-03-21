alert("Let's Start Game Buddy ...");
console.log("Hello world");
let chance = 1;
let cw = 0;
let uw = 0;
while (chance < 6) {

    let cc = Math.floor(Math.random() * 3)
    let cu = prompt("Enter you Choice buddy :");
    cu = Number.parseInt(cu);
    // 0 : Snake 1 : Water 2 : Gun
    if (cu == 1 && cc == 0) {
        uw++;
        document.write("Round ", chance, " :", "Computer Wins");
    } else if (cu == 0 && cu == 1) {
        cw++;
        document.write("Round ", chance, " :", "User Wins");
    } else if (cc == 1 && cu == 2) {
        cw++;
        document.write("Round ", chance, " :", "Computer Wins");
    } else if (cc == 2 && cu == 1) {
        uw++;
        document.write("Round ", chance, " :", "User Wins");
    } else if (cc == 2 && cu == 0) {
        cw++;
        document.write("Round ", chance, " :", "Computer Wins");
    } else if (cc == 0 && cu == 2) {
        uw++;
        document.write("Round ", chance, " :", "User Wins");
    } else {
        document.write("Round ", chance, " :", "Match Tie");
    }
    chance++;
}
if (cw == uw)
    document.write("Match tie");
else if (cw > uw)
    document.write("Computer Wins");
else
    document.write("You Win!!!");