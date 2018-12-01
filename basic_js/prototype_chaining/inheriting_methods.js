var o={
    a: 10,
    m: function () {
        console.log(this.getOwnPropertyNames);
        return this.a;
    }
};

console.log(o);

var p=Object.create(o);
console.log(p.m());