class TreeNode {
  left: TreeNode | null;
  right: TreeNode | null;
  value: number;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(value: number) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;

      while (true) {
        if (newNode.value > currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        } else if (newNode.value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        }
      }
    }
  }

  search(value: number) {
    let currentNode: any = this.root;
    while (true) {
      if (currentNode.value === value) return currentNode;
      else {
        if (value > currentNode.value) {
          currentNode = currentNode.right;
        }
        if (value < currentNode.value) {
          currentNode = currentNode.left;
        }
      }
    }
  }
}

const myTree = new BinaryTree();
myTree.insert(20);
myTree.insert(10);
myTree.insert(30);
myTree.insert(5);
myTree.insert(15);
myTree.insert(25);
myTree.insert(35);
