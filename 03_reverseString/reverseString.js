const reverseString = function(string) {

    const splitString = string.split("")

    reverseArray = splitString.reverse()

    joinArray = reverseArray.join("")

    return joinArray

};

// Do not edit below this line
module.exports = reverseString;
