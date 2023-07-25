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

// console.log(MyBinaryHeaps);

// MyBinaryHeaps.insert(55);
// MyBinaryHeaps.insert(18);
// MyBinaryHeaps.insert(41);
// MyBinaryHeaps.insert(5);
// MyBinaryHeaps.insert(6);
// MyBinaryHeaps.insert(1);
// MyBinaryHeaps.insert(9);
// MyBinaryHeaps.insert(50);
// MyBinaryHeaps.insert(55);

// console.log(MyBinaryHeaps);

// MyBinaryHeaps.extraMax();

// console.log(MyBinaryHeaps.extraMax());

// console.log(MyBinaryHeaps);

// -----------------------------------------------------

class Node {
  constructor(priority, value) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.value = []; //
  }

  enqueue(priority, value) {
    let newNode = new Node(priority, value);

    this.value.push(newNode);

    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.value.length - 1;

    let element = this.value[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2); // 2

      let parent = this.value[parentIdx]; // 18

      if (element.priority > parent.priority) break;

      this.value[parentIdx] = element;

      this.value[idx] = parent;

      idx = parentIdx;
    }
  }

  dequeue() {
    let min = this.value[0];

    let end = this.value.pop();

    if (this.value.length > 0) {
      this.value[0] = end;

      this.sinkDown();
    }

    return min;
  }

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

        if (leftChild.priority < element.priority) {
          swap = leftChildIdx; // 5
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.value[rightChildIdx];

        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;

      this.value[idx] = this.value[swap];

      this.value[swap] = element;

      idx = swap;
    }
  }
}

let maxPriority = new PriorityQueue();

maxPriority.enqueue(16, "h4");
maxPriority.enqueue(32, "h1");
maxPriority.enqueue(18.72, "h3");
maxPriority.enqueue(24, "h2");
maxPriority.enqueue(8, "llll");

console.log(maxPriority);

console.log(maxPriority.dequeue());
// console.log(maxPriority.dequeue());
// console.log(maxPriority.dequeue());

// console.log(maxPriority);
