var a={
    name: "a"
};

var b=a;

console.log(a===b);
b.name="b";

console.log(a);
console.log(b);

console.log(a==b);

a.name="c";
console.log(a);
console.log(b);

console.log(a.prototype);