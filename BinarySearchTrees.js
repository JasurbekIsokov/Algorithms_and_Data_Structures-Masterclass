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
}

let myTree = new BinarySearchTree();

myTree.root = new Node(12);
myTree.root.right = new Node(20);
myTree.root.left = new Node(10);
myTree.root.left.right = new Node(11);

console.log(myTree);
