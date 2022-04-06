const removeFromArray = function(arr,...num) {
    num.sort();
    num=num.filter(i=>arr.includes(i));
     arr.splice(arr.indexOf(num[0]),num.length);
     return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
