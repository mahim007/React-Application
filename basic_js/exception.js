try{
	console.log(1);
	throw{
		name: "Error!",
		message: "Server Processing failure!"
	};
	console.log(2);
}
catch(e){
	console.log(e.name+" "+e.message);
}
finally{
	console.log("value of pi: "+Math.PI);
}