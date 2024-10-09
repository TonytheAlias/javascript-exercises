const add = function(num1, num2) {
	let sum;
  sum = num1 + num2; 
  return sum; 
};

const subtract = function(num1, num2) {
  let diff;
  diff = num1 - num2;
  return diff;
	
};

const sum = function(num) {
  
  let sum = num.reduce((total, currentItem) => {
   return total + currentItem;
  },0);
  return sum;
};

const multiply = function(num) {
  let multi = num.reduce((total, currentItem) => {
    return total * currentItem;
   },1);
   return multi;
};

const power = function(num1, num2) {
	let pow = num1 ** num2;
  return pow;
};

const factorial = function(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  
  let ans = 1; 
  for (let i = 2; i <= num; i++) {
    ans *= i; 
  }
  
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
