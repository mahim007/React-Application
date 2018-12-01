var a="Ashraful ";
var outer=function(){
	var b="Islam ";
	var middle=function(){
		var c="Mahim";
		var inner=function(){
			console.log(a+b+c);
		}
		inner();
	}
	middle();
}

outer();