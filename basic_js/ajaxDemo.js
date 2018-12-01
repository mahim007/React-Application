$(function(){
	$("button").click(function(){ alert("!");
		$("#hh").load('demo.txt', function(responseTxt, statusTxt, xhr){
				if (statusTxt=="success") {
					alert("successful!");
				}
				else{
					alert("failure!");
				}
		});
	});
});