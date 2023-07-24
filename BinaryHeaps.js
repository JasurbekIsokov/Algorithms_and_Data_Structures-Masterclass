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

console.log(MyBinaryHeaps);
