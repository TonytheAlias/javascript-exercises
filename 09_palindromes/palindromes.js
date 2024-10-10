const palindromes = function (str) {
   const cleanedStr = str
   .replace(/[^a-zA-Z0-9]/g, '')
   .toLowerCase(); 
 
let  reverseStr = cleanedStr.split("").reverse().join("");

 if (cleanedStr === reverseStr){
    return true;
 }
 else{
    return false;
 }
};

// Do not edit below this line
module.exports = palindromes;
