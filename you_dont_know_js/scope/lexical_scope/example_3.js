function foo(str){
    "use strict";
    eval(str);
    console.log(a);
}

foo("var a=10;");