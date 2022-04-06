const removeFromArray = function(arr,...num) {
    num=num.filter(i=>arr.includes(i));
    for(let i of num){
    arr.splice(arr.indexOf(i),1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
