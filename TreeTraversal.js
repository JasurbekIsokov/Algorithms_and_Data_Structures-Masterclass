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

  // BFS() {
  //   let node = this.root;

  //   let data = [];

  //   let queue = [];

  //   queue.push(node);

  //   while (queue.length) {
  //     node = queue.shift();

  //     data.push(node.value);

  //     if (node.left) queue.push(node.left);

  //     if (node.right) queue.push(node.right);
  //   }

  //   return data;
  // }

  BFS() {
    let data = [];

    let queue = [];

    let current = this.root;

    queue.push(current);

    while (queue.length) {
      current = queue.shift();

      data.push(current.value);

      if (current.left) queue.push(current.left);

      if (current.right) queue.push(current.right);
    }

    return data;
  }

  DFSPreOrder() {
    let data = [];

    function recursuveHelper(node) {
      data.push(node.value);

      if (node.left) recursuveHelper(node.left);

      if (node.right) recursuveHelper(node.right);
    }

    recursuveHelper(this.root);

    return data;
  }

  DFSPostOrder() {
    let data = [];

    function recursuveHelper(node) {
      if (node.left) recursuveHelper(node.left);

      if (node.right) recursuveHelper(node.right);

      data.push(node.value);
    }

    recursuveHelper(this.root);

    return data;
  }

  DFSInOrder() {
    let data = [];

    function recursuveHelper(node) {
      if (node.left) recursuveHelper(node.left);

      data.push(node.value);

      if (node.right) recursuveHelper(node.right);
    }

    recursuveHelper(this.root);

    return data;
  }
}

const myTree = new BinarySearchTree();

myTree.insert(10);
myTree.insert(6);
myTree.insert(3);
myTree.insert(8);
myTree.insert(15);
myTree.insert(20);

console.log(myTree.BFS());

console.log(myTree.DFSPreOrder());

console.log(myTree.DFSInOrder());

console.log(myTree.DFSPostOrder());
