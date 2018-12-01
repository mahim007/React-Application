$(document).ready(function(){
	

});

$("#addRow").click(function(){

var a=prompt("enter name");
var b=prompt("enter id");
var c=prompt("enter salary");
var d=prompt("enter language");
var e=prompt("enter address");
console.log(a,b,c,d,e);


	var str="<tr>"+
	"<td> <input type=\"text\" value=\""+a+"\">  </input> </td>"+
	"<td> <input type=\"text\" value=\""+b+"\">  </input> </td>"+
	"<td> <input type=\"text\" value=\""+c+"\">  </input> </td>"+
	"<td> <input type=\"text\" value=\""+d+"\">  </input> </td>"+
	"<td> <input type=\"text\" value=\""+e+"\">  </input> </td>"+
	"<td> <button onclick='deleteMe(this)'>Delete</button>"+
	"</tr>";
	$("#myTbody").append(str);

});

function deleteMe(node){
	var row=node.parentNode.parentNode.hide();
}