function multiply(multiplier, ...theArgs) {
    return theArgs.map(x=> multiplier*x);
}

var arr=multiply(2,1,2,3,4);
console.log(arr);