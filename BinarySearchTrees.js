// ---------- Statik ----------

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }
// }

// let myTree = new BinarySearchTree();

// myTree.root = new Node(12);
// myTree.root.right = new Node(20);
// myTree.root.left = new Node(10);
// myTree.root.left.right = new Node(11);

// console.log(myTree);

// ---------- Dinamik -----------

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

    console.log(current);

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
}

let myTree = new BinarySearchTree();

myTree.insert(10);
myTree.insert(6);
myTree.insert(3);
myTree.insert(8);
myTree.insert(15);
myTree.insert(13);
myTree.insert(20);

console.log(myTree);
