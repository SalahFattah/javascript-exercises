const repeatString = function(str,num) {
    if(num<0){
        return "ERROR"
    }
    let stri=''
    for(let i=0;i<num;i++){
        stri+=str;
    }
    return stri;
};

// Do not edit below this line
module.exports = repeatString;
