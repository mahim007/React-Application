var empty={};
//console.log(empty.toString());

var tim=new Object();
tim.name="player";
tim.age=25;
tim.address="dhaka";
tim.toString=function(){
	return "name: "+this.name+" ,age: "+this.age+" ,address: "+this.address;
}


//console.log(tim.toString());
