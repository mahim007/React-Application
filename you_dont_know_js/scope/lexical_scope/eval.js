function foo(str, a){
    eval(str);
    console.log(a, b);
}

var b=5;
foo("var b=10;", 100);