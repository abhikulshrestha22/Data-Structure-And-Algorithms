class Stack {
  constructor() {
    this.data = [];
    this.top = -1;
  }

  push = (item) => {
    // Increase top and add the item there
    this.top += 1;
    this.data[this.top] = item;
  }

  pop = () => {
    if(this.top !== -1) {
      const element = this.data[this.top];
      // Remove item and decrease top
      delete this.data[this.top]
      this.top -= 1;
      return element;
    }
    console.log('Cannot perform pop as Stack is empty');
   
  }

  peek = () => {
    // Just see the top element and not removing it unlike pop
    return this.data[this.top];
  }

  toString = () => {
    return this.data;
  }

  isEmpty = () => {
    return this.top === -1;
  }
}

module.exports = {Stack};


// Basic Usage Commands
// const StackNew = new Stack();
// StackNew.push(40);
// StackNew.push(20);
// StackNew.pop();
// StackNew.push(30);
// console.log(StackNew.toString())
// console.log(StackNew.peek())
// console.log(StackNew.toString())