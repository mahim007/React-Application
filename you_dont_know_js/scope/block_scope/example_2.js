function do_something(a){
    b=a+do_something_else(a*2);
    console.log(b*3);
}

function do_something_else(a) {
    return a-1;
}

var b;

do_something(2);
console.log(b);