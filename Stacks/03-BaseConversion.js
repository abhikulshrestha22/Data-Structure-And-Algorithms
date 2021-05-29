// How to convert base of a number using stack
// This works for base 2 to 9

let Stack = require('./01-BasicStack').Stack;

let baseConversion = function(number,base){
  const stackPal = new Stack();
  // Push n%b in stack
  // replace n by n/b
  while(number > 0) {
    stackPal.push(number%base);
    number = Math.floor(number/base);
  }
  let result = '';
  while(!stackPal.isEmpty()) {
    result += stackPal.pop();
  }
  return result
  
}

console.log(baseConversion(22,2))
console.log(baseConversion(125,8))