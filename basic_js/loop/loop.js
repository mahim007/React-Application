var btn=document.getElementById("btn");
btn.addEventListener("click", function () {
    alert("number of options selected: " +howMany(document.selectForm.musicTypes));
});

function howMany(selectObject){
    var count=selectObject.options.length;
    var ans=0;
    for(var i=0;i<count;i++){
        if(selectObject.options[i].selected){
            ans++;
        }
    }

   return ans;
}


document.writeln("hello JavaScript");
document.writeln("hello JavaScript");
document.writeln("hello JavaScript");
