const repeatString = function(string, num) {
 if(num < 0 ){return "ERROR"}
 
    let multiString = ""

    for(let i = 1; i <= num ; i++){ 
        multiString += string;
    }
 return multiString
};

// Do not edit below this line
module.exports = repeatString;
