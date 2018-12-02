setTimeout(function handler_function() {
    console.log("i waited one second!");
}, 10);

console.log("i am in global scope!");

for (var i=0;i<1e6;i++){

}

console.log("after finishing for loop");