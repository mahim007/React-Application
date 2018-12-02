var obj={
    a: 1,
    b: 2,
    c: 3
};

console.log(obj);

obj.a=2;
obj.b=3;
obj.c=4;

console.log(obj);

with (obj) {
    a=3;
    b=4;
    c=5;
}

console.log(obj);