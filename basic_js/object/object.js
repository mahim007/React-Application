var myObj=new Object(),
    str="myString",
    rand=Math.ceil(Math.random()*100),
    obj=new Object(),
    space=" ";

myObj.type="dot syntax";
myObj["dateCreated"]="12/12/12";
myObj[str]="string value";
myObj[rand]="random number";
myObj[obj]="object";
myObj[space]="empty string";

var arr=[];
for (var i in myObj){
    arr.push(i);
}
console.log(arr);
console.log(Object.keys(myObj));
console.log(Object.getOwnPropertyNames(myObj));
