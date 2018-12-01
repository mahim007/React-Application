function clock() {
    var time=new Date();
    var hour=time.getHours();
    var minute=time.getMinutes();
    var second=time.getSeconds();
    var temp="";
    temp=(hour>12)? hour-12 : hour;
    if (hour==0){
        temp="12";
    }

    temp+=(minute>9) ? ":" : ":0";
    temp+=minute;

    temp+=(second>9) ? ":" : ":0";
    temp+=second;

    if (hour>11){
        temp+=" PM";
    }
    else{
        temp+=" AM";
    }

    document.getElementById("test").innerHTML=temp;
    setTimeout(clock, 500);
}

clock();

// for (var i=1;i<=1e6;i++){
//     var getTime=clock();
//
// }