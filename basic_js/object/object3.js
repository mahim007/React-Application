function Bear(name) {
    this.name=name;
}

Bear.grow=function () {
    console.log("grrr....");
};

var b1=new Bear("b1");
var b2=new Bear("b2");

console.log(b1, b2);

var b3=new Bear("b3");
// b3.grow();

console.log(typeof ("mahim"));