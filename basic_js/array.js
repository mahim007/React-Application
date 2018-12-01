var arr=[1, 2, 3, 4, 5];
var ans=arr.reduce(function (a, b) {
    return a+b;
}, 10);

console.log(ans);