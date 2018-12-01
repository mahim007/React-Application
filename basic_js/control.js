function condition(num) {
	switch(num){
		case 1:
		console.log("one!");
		break;

		case 2:
		console.log("two!");
		break;

		default:
		console.log("out!");
	}
}

// condition(1);
// condition(2);
// condition(3);

var person={
	id: 1,
	name: "mahim",
	age: 25,
	company: "BrainStation",
	address: "dhaka"
};

for (var i in person) {
	console.log(i+" : "+person[i]);
}