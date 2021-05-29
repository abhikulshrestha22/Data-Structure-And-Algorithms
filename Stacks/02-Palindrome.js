// How to detect palindrome using stack

let Stack = require('./01-BasicStack').Stack;

let checkIfPalindrome = function(str){
  const stackPal = new Stack();
  // Enter input into a stack
  for(let i=0;i<str.length;i++) {
    stackPal.push(str[i]);
  }
  // Draw out stack and make it empty
  let newString = '';
  while(!stackPal.isEmpty()) {
    newString += stackPal.pop();
  }
  if(str === newString) {
    console.log('It is a palindrome');
    return;
  }
  console.log("It is not a palindrome");
}

checkIfPalindrome('redivider');
checkIfPalindrome('something')
