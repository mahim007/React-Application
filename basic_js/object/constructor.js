function Human(name, age, gender, weight, height) {
    this.name=name;
    this.age=age;
    this.gender=gender;
}

var man1=new Human("mahim", 25, "male", 55, 5.9);
console.log(man1);

// function Car(brand, speed, cost, owner){
//     this.brand=brand;
//     this.speed=speed;
//     this.cost=cost;
//     this.owner=owner;
// }

// var myCar=new Car("toyota", 250, 2000000, man);
//
// console.log(myCar.owner.name);
// myCar.color="blue";
// console.log(myCar);

// var woman=Object.create(man);
// console.log(woman);

var man2=new Human("a", 30, "male");
console.log(man2);
var man3=new Human("b", 29, "female");
console.log(man3);

Human.prototype.color="black";

console.log(man2.color);
console.log(man3.color);