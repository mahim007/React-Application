function square(argument) {
	return argument*argument;
}

var num=function(x){
	return x*x;
}

function add(n1,n2,n3){
	return n1+n2+n3;
}

// function add(n1,n2){
// 	return n1+n2;
// }

// function add(n1){
// 	return n1;
// }

// var x=undefined;
// var y=undefined;
// console.log("val="+(x+1));

function ar(){
	console.log("length: "+arguments.length);
	console.log("arg[0]: "+arguments[0]);
	console.log("arg[1]: "+arguments[1]);
}

ar("a", 1+1);

function add(){
	var total=0;
	for (var i = arguments.length - 1; i >= 0; i--) {
		total+=arguments[i]
	}

	console.log(total);
}


add();
add(1);
add(1,2);
add(1,2,3);







