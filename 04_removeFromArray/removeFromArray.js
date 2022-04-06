const removeFromArray = function(arr,...num) {
    num.sort();
     arr.splice(arr.indexOf(num[0]),num.length);
     return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
