$(function() {
	$("#btn1").click(function(){
		console.log($("p").parents().css({"color": "red", "border": "2px solid red"}));
	});
});