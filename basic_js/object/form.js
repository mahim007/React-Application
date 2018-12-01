function validate(obj, lowval, hival) {
    console.log(obj);

    if (obj.value< lowval || obj.value>hival){
        alert("wrong!");
    }
    else
    {
        alert("right!");
    }
}