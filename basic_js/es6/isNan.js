if (!Number.isNaN){
    Number.iaNaN=function isNaN(x){
        return x===x;
    }
}


console.log(Number.isNaN(100));