// Stack and Queues

class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    // if (this.isEmpty()) {
    //   return "Stack bo'sh";
    // }
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  peek() {
    // if (this.isEmpty()) {
    //   return "Stack Bo'sh";
    // }

    return this.stack[this.stack.length - 1];
  }

  size() {
    return this.stack.length;
  }
}

// const myStack = new Stack();

// myStack.push(12);

// myStack.push(13);

// myStack.push(14);

// myStack.pop();

// console.log(myStack.isEmpty());

// console.log(myStack);

// console.log(myStack.peek());

class Queues {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  enqueue(val) {
    this.first.push(val);
  }

  dequeue() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }

  get() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }
}

const myQueues = new Queues();

myQueues.enqueue("A");
myQueues.enqueue("B");
myQueues.enqueue("C");
myQueues.enqueue("D");
myQueues.enqueue("E");
myQueues.enqueue("F");
myQueues.enqueue("J");

console.log(myQueues);

myQueues.dequeue();

console.log(myQueues);

console.log(myQueues.get());
