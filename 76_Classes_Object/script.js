class RailwaysForm {
    submit() {
        alert(this.name + " " + this.trainno + ": this form is submitted");
    }
    cancel() {
        alert(this.name + " " + this.trainno + " This form is cancelled");
    }
    fill(name, trainno) {
        this.name = name;
        this.trainno = trainno;
    }
}
let harry = new RailwaysForm();
harry.fill("Shubhanshu", 12345);
let rohan = new RailwaysForm();
rohan.fill("rohan", 54321);
harry.submit();
rohan.submit();
rohan.cancel();