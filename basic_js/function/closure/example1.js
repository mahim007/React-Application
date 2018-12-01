function makeadder(x){
    function add(y){
        return x+y;
    }

    return add;
}

var plusTen= makeadder(10);
var plusOne= makeadder(1);

console.log(plusTen(5));
console.log(plusOne(7));