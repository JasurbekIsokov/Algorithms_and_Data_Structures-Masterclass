class BinaryHeaps {
  constructor() {
    this.value = []; //
    //[41, 39, 18, 27, 12, 33, 55];
    // 0   1   2   3   4   5    6

    //[41, 39, 55, 27, 12, 33, 55];

    //[41, 39, 55, 27, 12, 33, 18];
  }

  insert(value) {
    this.value.push(value);

    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.value.length - 1; // 6

    let element = this.value[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2); // 2

      let parent = this.value[parentIdx]; // 18

      if (element < parent) break;

      this.value[parentIdx] = element;

      this.value[idx] = parent;

      idx = parentIdx;
    }
  }

  // [41, 39, 55, 27, 12, 33, 18];

  extraMax() {
    let max = this.value[0];

    let end = this.value.pop();

    if (this.value.length > 0) {
      this.value[0] = end;

      this.sinkDown();
    }

    return max;
  }

  // [41, 39, 55, 27, 12, 33, 18];
  // [18, 39, 55, 27, 12, 33];
  // [55, 39, 18, 27, 12, 33]; // 6
  // [55, 39, 33, 27, 12, 18]; // 6

  sinkDown() {
    let idx = 0;

    let element = this.value[0];

    let length = this.value.length;

    while (true) {
      let leftChildIdx = 2 * idx + 1; // 5
      let rightChildIdx = 2 * idx + 2; // 6

      let leftChild, rightChild;

      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.value[leftChildIdx]; // 33

        if (leftChild > element) {
          swap = leftChildIdx; // 5
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.value[rightChildIdx];

        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;

      this.value[idx] = this.value[swap];

      this.value[swap] = element;

      idx = swap; // 5
    }
  }
}

const MyBinaryHeaps = new BinaryHeaps();

console.log(MyBinaryHeaps);

MyBinaryHeaps.insert(55);
MyBinaryHeaps.insert(18);
MyBinaryHeaps.insert(41);
MyBinaryHeaps.insert(5);
MyBinaryHeaps.insert(6);
MyBinaryHeaps.insert(1);
MyBinaryHeaps.insert(9);
MyBinaryHeaps.insert(50);
MyBinaryHeaps.insert(55);

console.log(MyBinaryHeaps);

// MyBinaryHeaps.extraMax();

// console.log(MyBinaryHeaps.extraMax());

// console.log(MyBinaryHeaps);

// ------------------

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);

    this.values.push(newNode);

    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);

      let parent = this.values[parentIdx];

      if (element.priority > parent.priority) break;

      this.values[parentIdx] = element;

      this.values[idx] = parent;

      idx = parentIdx;
    }
  }

  dequeue() {
    let max = this.values[0];

    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    let idx = 0;

    const element = this.values[idx];

    const length = this.values.length;

    while (true) {
      let leftChildIdx = 2 * idx + 1;

      let rightChildIdx = 2 * idx + 2;

      let leftChild, rightChild;

      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];

        if (leftChild.priority > element.priority) {
          swap = leftChildIdx;
        }
      }

      if (ReportingObserver < length) {
        leftChild = this.values[leftChildIdx];

        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;

      this.values[idx] = this.values[swap];

      this.values[swap] = element;

      idx = swap;
    }
  }
}

const priorityQueue = new PriorityQueue();

priorityQueue.enqueue("h1", 1);
priorityQueue.enqueue("h2", 2);
priorityQueue.enqueue("h4", 4);
priorityQueue.enqueue("h3", 3);
priorityQueue.enqueue("h5", 5);

console.log(priorityQueue);
