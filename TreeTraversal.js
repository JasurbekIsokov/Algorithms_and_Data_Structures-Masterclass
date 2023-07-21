class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (value) {
      var newNode = new Node(value);
    }

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) return undefined;

      if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;

          return this;
        }

        current = current.right;
      } else {
        if (current.left === null) {
          current.left = newNode;

          return this;
        }

        current = current.left;
      }
    }
  }

  // Breadth First Search Solution

  BFS() {
    let node = this.root;

    let data = [];

    let queue = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();

      data.push(node.value);

      if (node.left) queue.push(node.left);

      if (node.right) queue.push(node.right);
    }

    return data;
  }
}

const myTree = new BinarySearchTree();

myTree.insert(10);
myTree.insert(11);
myTree.insert(9);

console.log(myTree.BFS());
