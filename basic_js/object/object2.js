function Car(make, model, year) {
    this.make=make;
    this.model=model;
    this.year=year;
    this.display=display;
    this.nothing=model;
}

function display() {
    var result="brand: "+this.make+" model: "+this.model+" year: "+this.year;
    console.log(result);
}

var car1=new Car("toyota", "corolla", 1969);
var car2=new Car("mitshubisi", "lancer_x", 1990);

car1.display();
car2.display();

console.log(car1);