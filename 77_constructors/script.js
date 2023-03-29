class RailwaysForm {
    constructor(name, trainno) {
        this.name = name;
        this.trainno = trainno;
        console.log("Given name :" + this.name + " given Train no : " + this.trainno);
    }
    submit() {
        alert(this.name + " " + this.trainno + ": this form is submitted");
    }
    cancel() {
            alert(this.name + " " + this.trainno + " This form is cancelled");
        }
        // fill(name, trainno) {
        //     this.name = name;
        //     this.trainno = trainno;
        // }
}
let harry = new RailwaysForm("Shubhanshu", 12345);
// harry.fill("Shubhanshu", 12345);
let rohan = new RailwaysForm("rohan", 54321);
// rohan.fill("rohan", 54321);
harry.submit();
rohan.submit();
rohan.cancel();