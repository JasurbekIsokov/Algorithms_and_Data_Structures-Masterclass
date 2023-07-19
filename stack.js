// Stack and Queues

class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack bo'sh";
    }
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack Bo'sh";
    }

    return this.stack[this.stack.length - 1];
  }

  size() {
    return this.stack.length;
  }
}

const myStack = new Stack();

myStack.push(12);

myStack.push(13);

myStack.push(14);

myStack.pop();

console.log(myStack.isEmpty());

console.log(myStack);

console.log(myStack.peek());
