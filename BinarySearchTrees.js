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

  // insert
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

  // find
  find(value) {
    if (!value) {
      return undefined;
    }

    if (!this.root) {
      return undefined;
    }

    let current = this.root;

    let find = false;

    while (current && !find) {
      if (current.value > value) {
        current = current.left;
      } else if (current.value < value) {
        current = current.right;
      } else {
        find = true;
      }
    }

    if (!find) return undefined;

    return current;
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
console.log(myTree.find(10));
