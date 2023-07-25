class HashTable {
  constructor(size = 100) {
    this.values = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.values.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);

    if (this.keys().includes(key)) {
      return undefined;
    }

    if (!this.values[index]) {
      this.values[index] = [];
    }

    this.values[index].push([key, value]);

    return this.values;
  }

  get(key) {
    let index = this._hash(key);
    if (this.values[index]) {
      for (let i = 0; i < this.values[index].length; i++) {
        if (this.values[index][i][0] === key) {
          return this.values[index][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    let keysArr = [];

    for (let i = 0; i < this.values.length; i++) {
      if (this.values[i]) {
        for (let j = 0; j < this.values[i]?.length; i++) {
          keysArr.push(this.values[i][j][0]);
        }
      }
    }

    return keysArr;
  }

  valuess() {
    let keysArr = [];

    for (let i = 0; i < this.values.length; i++) {
      if (this.values[i]) {
        for (let j = 0; j < this.values[i]?.length; i++) {
          keysArr.push(this.values[i][j][1]);
        }
      }
    }

    return keysArr;
  }
}

const hashTable = new HashTable(20);

hashTable.set("h1", "32px");
hashTable.set("h2", "24px");
hashTable.set("h3", "18.72px");
hashTable.set("h4", "16px");
hashTable.set("h4", "16px");

// console.log(hashTable.get("h4"));

// console.log(hashTable.keys());

// console.log(hashTable.valuess());

console.log(hashTable.keys());

class PriorityQueue {
  //   constructor() {
  //     this.values = [];
  //   }
  
  //   enqueue(value, priority) {
  //     let newNode = new Node(value, priority);
  
  //     this.values.push(newNode);
  
  //     this.bubbleUp();
  //   }
  
  //   bubbleUp() {
  //     let idx = this.values.length - 1;
  //     const element = this.values[idx];
  
  //     while (idx > 0) {
  //       let parentIdx = Math.floor((idx - 1) / 2);
  
  //       let parent = this.values[parentIdx];
  
  //       if (element.priority > parent.priority) break;
  
  //       this.values[parentIdx] = element;
  
  //       this.values[idx] = parent;
  
  //       idx = parentIdx;
  //     }
  //   }
  
  //   dequeue() {
  //     let max = this.values[0];
  
  //     const end = this.values.pop();
  
  //     if (this.values.length > 0) {
  //       this.values[0] = end;
  //       this.sinkDown();
  //     }
  
  //     return max;
  //   }
  
  //   sinkDown() {
  //     let idx = 0;
  
  //     const element = this.values[idx];
  
  //     const length = this.values.length;
  
  //     while (true) {
  //       let leftChildIdx = 2 * idx + 1;
  
  //       let rightChildIdx = 2 * idx + 2;
  
  //       let leftChild, rightChild;
  
  //       let swap = null;
  
  //       if (leftChildIdx < length) {
  //         leftChild = this.values[leftChildIdx];
  
  //         if (leftChild.priority > element.priority) {
  //           swap = leftChildIdx;
  //         }
  //       }
  
  //       if (ReportingObserver < length) {
  //         leftChild = this.values[leftChildIdx];
  
  //         if (
  //           (swap === null && rightChild.priority > element.priority) ||
  //           (swap !== null && rightChild.priority > leftChild.priority)
  //         ) {
  //           swap = rightChildIdx;
  //         }
  //       }
  
  //       if (swap === null) break;
  
  //       this.values[idx] = this.values[swap];
  
  //       this.values[swap] = element;
  
  //       idx = swap;
  //     }
  //   }
  // }
  
  // const priorityQueue = new PriorityQueue();
  
  // priorityQueue.enqueue("h1", 1);
  // priorityQueue.enqueue("h2", 2);
  // priorityQueue.enqueue("h4", 4);
  // priorityQueue.enqueue("h3", 3);
  // priorityQueue.enqueue("h5", 5);
  
  // console.log(priorityQueue);