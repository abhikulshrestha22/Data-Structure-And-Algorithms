class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert = (data) => {
    const newNode = new Node(data, null, null);
    let current = this.root;
    let parent = null;
    // If no root present, make new as root
    if (!this.root) {
      this.root = newNode;
    } else {
      while (true) {
        // Move to left, if data is lower
        parent = current;
        if (data < current.data) {
          current = current.left;
          if (!current) {
            parent.left = newNode;
            break;
          }
        } else {
          // Move to right, if data is higher
          current = current.right;
          if (!current) {
            parent.right = newNode;
            break;
          }
        }
      }
    }
  };

  showInOrder = (node) => {
    if (node) {
      this.showInOrder(node.left);
      console.log(node.data);
      this.showInOrder(node.right);
    }
  };

  showInPreorder = (node) => {
    if (node) {
      console.log(node.data);
      this.showInPreorder(node.left);
      this.showInPreorder(node.right);
    }
  };

  showInPostOrder = (node) => {
    if (node) {
      this.showInPostOrder(node.left);
      this.showInPostOrder(node.right);
      console.log(node.data);
    }
  };

  getMin = () => {
    let current = this.root;
    let parent = current;
    while (current) {
      parent = current;
      current = current.left;
    }
    console.log(parent.data);
    return parent;
  };

  getMax = () => {
    let current = this.root;
    let parent = current;
    while (current) {
      parent = current;
      current = current.right;
    }
    console.log(parent.data);
  };

  find = (data) => {
    let current = this.root;
    while (current) {
      if (current.data === data) {
        console.log("Data found in the tree");
        return;
      } else if (current.data > data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    console.log("Data is not found in the tree");
  };

  getSmallestForDelete = (item) => {
    let current = item;
    let parent = current;
    while (current) {
      parent = current;
      current = current.left;
    }
    return parent;
  };

  delete = (data) => {
    let root = this.deleteNode(this.root, data);
    return root;
  };

  deleteNode = (root, data) => {
    if (!root) {
      return null;
    }
    if (data === root.data) {
      if (!root.left && !root.right) {
        return null;
      } else if (root.left && !root.right) {
        return root.left;
      } else if (!root.left && root.right) {
        return root.right;
      }
      // node have two children
      // find the min. node
      let minNode = this.getSmallestForDelete(root.right);
      root.data = minNode.data;
      root.right = this.deleteNode(root.right, root.data);
      return root;
    } else if (data > root.data) {
      root.right = this.deleteNode(root.right, data);
      return root;
    } else if (data < root.data) {
      root.left = this.deleteNode(root.left, data);
      return root;
    }
  };
}

var bst = new BinarySearchTree();
bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(37);
bst.insert(3);
bst.insert(99);
bst.insert(22);
// bst.showInOrder(bst.root);
// bst.showInPreorder(bst.root);
// bst.showInPostOrder(bst.root);
// bst.getMin();
// bst.getMax();
bst.find(45);
bst.delete(45);
bst.showInOrder(bst.root);
