// var o={
//     a: 7
// };
//
// Object.defineProperties(o, {
//     "b": {get: function () {
//             return this.a;
//         }},
//     "c": {set: function (x) {
//             this.a=x;
//         }}
// });
//
// console.log(o.b);
// o.c=100;
// console.log(o.b);

var obj={
    a: 100,
    get gt(){
        return this.a;
    },
    set st(x){
        this.a=x;
    }
};

console.log(obj.gt);
obj.st=200;
console.log(obj.gt);